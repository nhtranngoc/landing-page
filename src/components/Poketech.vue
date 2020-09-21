<template>
    <div v-if="!loading">
         <v-chip 
         class="blue darken-1 ma-1 chips"
         v-for="(tech, index) in realTech" :key="index"
         > {{ tech }} </v-chip>
    </div>
</template>

<script>
const axios = require('axios');

const pkmnCount = 843; // Count as of Gen 8; Can make this dynamic with 1 API call but not really worth it rn.
const getAllPkmnUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=" + pkmnCount;


export default {
    data() {
        return {
            realTech: [
                'c', 
                'c++', 
                'python',
                'mqtt',
                'ros',
                'javascript',
                'canvas',
                'git',
                'racket',
                'nodejs',
                'graphql',
                'verilog',
                'arm',
                'msp430',
                'fpga',
                'avr',
                'uart',
                'spi',
                'i2c',
                'usb',
                '1-wire',
                'cmake',
                'stm32',
                'pid',
                'kicad',
                'yarn',
                'npm',
                'next.js',
                'storybook',
            ],
            pkmn: null,
            loading: true,
        }
    },
    methods: {
        shuffle: function(array) {
            for(let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * i)
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        },
        getAllPkmn: function() {
            axios
            .get(getAllPkmnUrl)
            .then(res => (this.pkmn = res.data.results))
            .catch(error => console.log(error))
            .finally(() => {
                // We want to insert only a third as much pokemon as the real tech stack
                let fakeCount = parseInt(this.realTech.length / 3);
                for (let i = 0; i < fakeCount; i++) {
                    this.realTech.push(this.pkmn[Math.floor(Math.random() * pkmnCount)].name)
                }
                this.shuffle(this.realTech);
                this.loading = false;
            })
        }

    },
    mounted() {
        this.getAllPkmn();
    }
}
</script>