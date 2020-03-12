import Vue from 'vue'
import Vuex from 'vuex';
import uri from "@/api/uri"
import axios from "@/util/axios"

const state = () => ({
    drawer: true,
    authUser: null
})

const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  SET_USER (state, user) {
    state.authUser = user
  }  
}

const actions = {
  async nuxtClientInit ({ commit }) {
    try{
      let {data} = await axios.get(uri.principal)
      if(data){
        commit('SET_USER', data.customer)
        console.log('user1', data)
      }
    }catch(e){
      console.error(e)
    }finally{
    
    }
  },
  
  async login ({ commit }, { username, password }) {
    try {
      const  res  = await axios.post(uri.login, null, {params: {username: username,password: password}}, {headers: {"Content-Type": "application/json"} })
      console.log(res.data)
      commit('SET_USER', res.data.customer)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    try{
      await axios.post(uri.logout)
      commit('SET_USER', null)
    }catch(e){
      console.error(e)
    }
  }  
}


Vue.use(Vuex)

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions
})

export default store;