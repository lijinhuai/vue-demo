import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);


// 应用初始状态
const state = {
    count: 10,
    user: {},
    token: null,
    title: ''
}

// 定义所需的 mutations
const mutations = {
    // INCREMENT(state) {
    //     state.count++
    // },
    // DECREMENT(state) {
    //     state.count--
    // },
    [types.LOGIN]: (state, data) => {
        localStorage.token = data;
        state.token = data;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        state.token = null
    },
    [types.TITLE]: (state, data) => {
        state.title = data;
    }
}


// 创建 store 实例
export default new Vuex.Store({
    // actions,
    // getters,
    state,
    mutations
})