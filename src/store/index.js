import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex)

export default new Vuex.Store({

  plugins: [createPersistedState()],
  
  state: {
    opinion:[],
    isauth:false  
    
  
  },
  getters: {
    get(state){
       return  state.opinion
    },
    isauth(state){
      return state.isauth
    }
    
  },
  mutations: {
    ADD_OPINION (state,value) {
      state.opinion.push(value)
      console.log(state.opinion);
      console.log(value);
    },
    DELETE_ITEM(state,item){
      var index = state.opinion.findIndex(item => item.id == item.id);
      state.opinion.splice(index, 1);
    },
    TOGGLE_NAV(state,value){
      state.isauth=value
    }

  },
  actions: {
  },
  modules: {
  }
})
