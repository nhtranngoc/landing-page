<template>
  <div id= "container">
    <div class="countdown" id="day"><span class="num"> {{day}} </span><span class="text">days,</span></div>
    <div class="countdown" id="hour"><span class="num"> {{hour}} </span><span class="text">hours,</span></div>
    <div class="countdown" id="min"><span class="num"> {{min}} </span><span class="text">minutes,</span></div>
    <div class="countdown" id="sec"><span class="num"> {{sec}} </span><span class="text">seconds</span></div>
  </div>
</template>

<script>
export default {
    props: {
        endDate : {
            type: Date,
            default() {
                return new Date(2020, 8, 1);
            }
        },
        isDisabled: {
            type: Boolean,
            default() {
                return false;
            }
        }
    },
    data() {
        return {
            now: new Date(),
            timer: null
        }
    },
    computed: {
        day() {
            let d = Math.trunc((this.endDate - this.now) / 1000 / 3600 / 24);
            return (d > 9) ? d : '0' + d;
        },
        hour() {
            let h = Math.trunc((this.endDate - this.now) / 1000 / 3600 / 24) % 24;
            return (h > 9) ? h : '0' + h;
        },
        min() {
            let m = Math.trunc((this.endDate - this.now) / 1000 / 60) % 60;
            return (m > 9) ? m : '0' + m;
        },
        sec() {
            let s = Math.trunc((this.endDate - this.now) / 1000) % 60;
            return (s > 9) ? s : '0' + s;
        }
    },
    watch : {
        endDate : {
            immediate : true,
            handler(newVal) {
                if(this.isDisabled) {
                    this.now = new Date(2020, 6, 27);
                    return;
                }

                if(this.timer) {
                    clearInterval(this.timer);
                }

                this.timer = setInterval(()=>{
                    this.now = new Date();

                    if(this.now > newVal) {
                        this.now = newVal;
                        this.$emit('endTime');
                        clearInterval(this.timer);
                    }
                }, 1000)
            }
        }
    },
    beforeDestroy(){
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
#container {
    display: block;
    margin-top: 1em;
    margin-left: 30%;
    margin-right: auto;
    width: 50%;
    padding: 0;
    color: #f1faee;
    font-family: 'Roboto';
}

.countdown {
    display: inline-block;
    margin-right: 0.5%;
    height: 50%;
}

.num {
    font-size: 400%;
    color: var(--v-accent-base);
}

.text {
    font-size: 110%;
}
</style>