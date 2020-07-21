<template>
    <div>
        <canvas id="canvas" ref="canvas" :width="width" :height="height"></canvas>
    </div>
</template>

<script>

import Victor from 'victor';

export default {
    name: 'Canvas',
    data() {
        return {
            boid: {
                pos: null,
                dir: null
            }
        }
    },
    methods: {
        startDrawing: function() {
            window.requestAnimationFrame(this.redraw);
            this.boid.dir = new Victor(5,3);
            this.boid.pos = new Victor(10,10);
        },
        redraw: function() {
            let ctx = this.$refs.canvas.getContext('2d');
            ctx.clearRect(0,0,this.width,this.height);
            // Main boid frame here
            this.boid.pos = this.boid.pos.add(this.boid.dir);
            if ((this.boid.pos.x + 10) > this.width || (this.boid.pos.x - 10) < 0) {
                this.boid.dir.x = -this.boid.dir.x;
            }
            if ((this.boid.pos.y + 10) > this.height || (this.boid.pos.y - 10) < 0) {
                this.boid.dir.y = -this.boid.dir.y;
            }
            this.drawBoid(this.boid.pos.x,this.boid.pos.y,10,'rgb(200,0,0)');
            
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