<template>
    <div>
        <canvas id="canvas" ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Canvas',
    methods: {
        startDrawing: function() {
            window.requestAnimationFrame(this.redraw);
        },
        redraw: function() {
            let ctx = this.$refs.canvas.getContext('2d');
            ctx.clearRect(0,0,this.$refs.canvas.width,this.$refs.canvas.height);
            // Main boid frame here
            this.drawBoid(50,50,10,'rgb(200,0,0)');
            
            window.requestAnimationFrame(this.redraw);
        },
        drawBoid: function(x, y, r, c) {
            let ctx = this.$refs.canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fillStyle = c;
            ctx.fill();
            ctx.closePath();
        }
    },
    props: {
        width: Number,
        height: Number
    },
    computed: {
        canvas() {
            return {
                width: this.width,
                height: this.height
            }
        }
    },
    mounted() {
        this.startDrawing();
    }
}
</script>

<style scoped>
#canvas {
    position: absolute;
    z-index: 1;
    /* width: 99%;
    height: 99%; */
}
</style>