import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                primary: '#457b9d',
                secondary: '#1d3557',
                background: '#1d3557'
            },
        },
        dark: true,
    }
});
