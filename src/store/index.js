import Vue from 'vue'
import Vuex from 'vuex'

import userinfo from './modules/userinfo'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userinfo,
    },
    getters
})

export default store