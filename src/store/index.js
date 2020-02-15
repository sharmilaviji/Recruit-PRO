import Vue from 'vue'
import Vuex from 'vuex'
import auth from './store-auth'

Vue.use(Vuex)

export default function(){
  const Store = new Vuex.Store({
    modules: {
    
      //then we reference it
  auth,
  
    },
    strict: process.env.DEV
  })
  
  return Store
 
  
}