import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa'
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            dark: {
                primary: '#457b9d',
                secondary: '#1d3557',
                accent: '#e63946',
                background: '#1d3557'
            },
        },
        dark: true,
    }
});
