import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations: {
    /*
    setPage(data){
      localStorage.setItem("Page", data)
    },

     */
  },
  actions: {
    /*
    async verifyPage(){
      let page = localStorage.getItem("Page")
      console.log(this.$route.fullPath + " = " + page)
      if(!this.$route || this.$route.fullPath === page) {
        return true;
      } else {
        await this.$router.push(page);
      }
    },
    keepPage({commit}, page){
      commit('setPage', page)
    }

     */
  }
})
