// Shamelessly stolen from http://brm.io/

(function($) {

    $(function () {
        $('.d3-gears').on('mousedown', function(e) {
            e.originalEvent.preventDefault();
        });

        if ($('.d3-gears').is(':visible') && window.d3)
            main();
    });

    var gears = [],
        changeInterval,
        canvasWidth = 400,
        canvasHeight = 350,
        isIE = (/Trident\/7\./).test(navigator.userAgent);

    function main() {
        var svg = d3.select(".d3-gears")
            .append("svg")
            .attr("viewBox", "0 0 " + canvasWidth + " " + canvasHeight)
            .attr("preserveAspectRatio", "xMidYMid meet");

        var xOffset = canvasWidth * 0.5,
            yOffset = canvasHeight * 0.5,
            holeRadius,
            teeth,
            radius,
            factor,
            newGear,
            gearFactors = [128,64,32,16];

        var dragBehaviour = Gear.dragBehaviour(gears, svg);

        dragBehaviour
            .on("dragstart.i", function() {
                clearTimeout(changeInterval);
            })
            .on("dragend.i", function() {
                clearTimeout(changeInterval);
            });

        for (var i = 0; i < gearFactors.length; i++) {
            factor = gearFactors[i];
            radius = factor / 2;
            // radius = 64;
            teeth = radius / 4;
            holeRadius = factor > 96 ? radius * 0.5 : 20 * (radius / 96);
            // holeRadius = 0.27
            gears.push(newGear = Gear.create(svg, { radius: radius, teeth: teeth, x: 0, y: 0, addendum: 3.1, dedendum: 5, thickness:0.7, profileSlope: .5, holeRadius: holeRadius }));
            // gears.push(newGear = Gear.create(svg, { radius: , teeth: teeth, x: 0, y: 0, addendum: 8, holeRadius: holeRadius }));
            
            // dragging only works right in chrome when using responsive viewbox!
            //if ($.browser.chrome)
                newGear.call(dragBehaviour);
        }

        // gears = gears.shuffle();
        Gear.randomArrange(gears, xOffset, yOffset);

        // I'm gonna place my own gears, with blackjack and hookers.
        // Place middle gear - well, in the middle
        // gears[0].datum().x = 80;
        // for(i=0;i<gears.length;i++) {
        //     gears[i].datum().y = canvasHeight/2;
        //     if(i!=0){
        //         gears[i].datum().x = gears[i-1].datum().x + offsetDistance(gears[i-1], gears[i]);
        //     }
        // } // gears should be of equal heights

        Gear.setPower(gears[0], 0.008);
        Gear.updateGears(gears);

        svg.selectAll(".gear")
            .attr("transform", function(d, i){
                return "translate(" + [ d.x, d.y ] + ")"
            });

        svg.selectAll(".gear-path")
            .style("fill", function() {
                // var colors = ["#1C7064", "#B2642C", "#389525"];
                var colors = ["#559C92", "#F9B687", "#F0828D"];
                // var colors = [
                //     "#1C7064", "#559C92", "#328378", "#0B5A4F", "#003F37", 
                //     "#B2642C", "#F9B687", "#D1854F", "#904612", "#652A00",
                //     "#389525", "#81D070", "#55AE42", "#21780F", "#0F5400"];
                return colors[Math.floor(Math.random()*colors.length)];
            })

        d3.timer(function () {
            svg.selectAll(".gear-path")
                .attr("transform", function (d) {
                    d.angle += d.speed;
                    return "rotate(" + d.angle * (180 / Math.PI) + ")";
                });
        });
    }

})(jQuery);

var offsetDistance = function(gearA, gearB) {
    // Return distance between 2 gears
    return gearA.datum().radius + gearB.datum().radius - gearB.datum().addendum - gearA.datum().addendum + 1; 
}

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

Array.prototype.shuffle = function() {
    var array = this;
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};