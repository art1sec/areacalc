import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import de from 'vuetify/lib/locale/de';

Vue.use(Vuetify);

Vue.component('AreaCalc', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current = 'de'
        }
    }
})

export default new Vuetify({
    lang: {
        locales: { de },
        current: 'de'
    }
});
