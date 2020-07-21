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
            boidSize: 25,
            boids: [],
            visualRange: 70,
            food : {},
            obstacle: {}
        }
    },
    methods: {
        startDrawing: function() {
            window.requestAnimationFrame(this.redraw);

            // Randomize flock
            for(var i = 0; i < this.boidSize; i++) {
                this.boids.push({
                    pos: new Victor(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height)),
                    dir: new Victor(Math.floor(Math.random() * 10) -5, Math.floor(Math.random() * 10) - 5),
                    r: Math.floor(Math.random() * 10) + 3
                });
            }

            // Create food source
            this.food = this.createNewFood();

            // Create obstacle, which is a circle centered on the canvas, which is where the main text box is
            this.obstacle = {
                pos: new Victor(this.width/2, this.height/2),
                r: this.width/10
            }

            console.log(this.boids);
        },
        redraw: function() {
            let ctx = this.$refs.canvas.getContext('2d');
            ctx.clearRect(0,0,this.width,this.height);

            // Main boid frame here
            for(let boid of this.boids) {
                this.collisionCheck(boid);
                this.cohesion(boid);
                this.alignment(boid);
                this.separation(boid);
                this.limitSpeed(boid);
                this.seek(boid, this.food.pos);
                boid.pos = boid.pos.add(boid.dir);
                // this.avoid(boid, this.obstacle)
                // this.keepWithinBounds(boid);
                this.drawBoid(boid.pos.x,boid.pos.y,boid.r,'rgb(200,10,10)');
            }

            // Calculate and draw food source
            const shrinkFactor = 0.1;
            this.food.size -= shrinkFactor;
            if(this.food.size <= 0) {
                this.food = this.createNewFood();
            }
            this.drawBoid(this.food.pos.x, this.food.pos.y, this.food.size, '#b3adad');
            
            window.requestAnimationFrame(this.redraw);
        },
        createNewFood : function() {
            return {
                size: Math.floor(Math.random() * 15) + 5,
                pos: new Victor(Math.floor(Math.random() * this.width), Math.floor(Math.random() * this.height))
            }
        },
        drawBoid: function(x, y, r, c) {
            let ctx = this.$refs.canvas.getContext('2d');
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.fillStyle = c;
            ctx.fill();
            ctx.closePath();
        },
        collisionCheck : function(boid) {
            // let newPos = boid.pos;

            if(boid.pos.x > this.width) {
                // newPos.x = 0;
                boid.pos.x = 0;
            } else if(boid.pos.x < 0) {
                // newPos.x = this.width;
                boid.pos.x = this.width;
            }

            if(boid.pos.y > this.height) {
                // newPos.y = 0;
                boid.pos.y = 0;
            } else if(boid.pos.y < 0) {
                // newPos.y = this.height;
                boid.pos.y = this.height;
            }
            
            // return newPos;
        },
        separation: function(boid) {
            const minDistance = 25;
            const avoidFactor = 0.005;
            let move = new Victor(0,0);
            // let newDir = boid.dir;

            for(let otherBoid of this.boids) {
                if(otherBoid !== boid) {
                    let dist = boid.pos.distance(otherBoid.pos);
                    if(dist < minDistance) {
                        move.x += boid.pos.x - otherBoid.pos.x;
                        move.y += boid.pos.y - otherBoid.pos.y;
                    }
                }
            }

            boid.dir.x += move.x * avoidFactor;
            boid.dir.y += move.y * avoidFactor;
        },
        alignment: function(boid) {
            const matchingFactor = 0.0005;
            let avgDir = new Victor();
            // let newDir = boid.dir;
            let numNeighbors = 0;

            for(let otherBoid of this.boids) {
                let dist = boid.pos.distance(otherBoid.pos);
                if(dist < this.visualRange && dist > 0) {
                    avgDir = avgDir.add(otherBoid.dir);
                    numNeighbors += 1;
                }
                
                if(numNeighbors) {
                    avgDir.x = avgDir.x / numNeighbors;
                    avgDir.y = avgDir.y / numNeighbors;

                    boid.dir.x += (avgDir.x - boid.dir.x) * matchingFactor;
                    boid.dir.y += (avgDir.y - boid.dir.y) * matchingFactor;
                }
            }
        },
        cohesion: function(boid) {
            const centeringFactor = 0.00001;

            let center = new Victor(0,0);
            let numNeighbors = 0;

            for(let otherBoid of this.boids) {
                let dist = boid.pos.distance(otherBoid.pos);
                if(dist < this.visualRange) {
                    center = center.add(otherBoid.pos);
                    numNeighbors += 1;
                }

                if(numNeighbors) {
                    center.x = center.x / numNeighbors;
                    center.y = center.y / numNeighbors;

                    boid.dir.x += (center.x - boid.pos.x) * centeringFactor;
                    boid.dir.y += (center.y - boid.pos.y) * centeringFactor;
                }
            }
        },
        limitSpeed : function(boid) {
            const speedLimit = 4;

            const speed = Math.sqrt(boid.dir.x * boid.dir.x + boid.dir.y + boid.dir.y);

            if(speed > speedLimit) {
                boid.dir.x = (boid.dir.x / speed) * speedLimit;
                boid.dir.y = (boid.dir.y / speed) * speedLimit;
            }
        },
        seek: function(boid, pos) {
            const seekFactor = 0.0003;

            boid.dir.x += (pos.x - boid.pos.x) * seekFactor;
            boid.dir.y += (pos.y - boid.pos.y) * seekFactor;
        },
        avoid: function(boid, object) {
            const avoidFactor = 0.00005;
            let ahead = new Victor();
            let norm = boid.dir.normalize();
            ahead.x = boid.pos.x + norm.x * this.visualRange;
            ahead.y = boid.pos.y + norm.y * this.visualRange;

            let avoidanceForce = new Victor();
            avoidanceForce.x = ahead.x - object.pos.x;
            avoidanceForce.y = ahead.y - object.pos.y;
            norm  = avoidanceForce.normalize();

            boid.dir.x += norm.x * avoidFactor;
            boid.dir.y += norm.y * avoidFactor;
        },
        keepWithinBounds : function(boid) {
            const margin = 200;
            const turnFactor = 1;

            if(boid.pos.x < margin) {
                boid.dir.x += turnFactor;
            }
            
            if(boid.pos.x > this.width - margin) {
                boid.dir.x -= turnFactor;
            }

            if(boid.pos.y < margin) {
                boid.dir.x += turnFactor;
            }

            if(boid.pos.y > this.height - margin) {
                boid.pos.y -= turnFactor;
            }
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
    background-color: #f2ebeb;
}
</style>