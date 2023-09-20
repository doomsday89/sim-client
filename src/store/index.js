import { createStore } from 'vuex'
import lista from '@/assets/lista.json'
import respuestas from '@/assets/respuestas.json'

export default createStore({
  state: {
    quests:[],
    usuarios:[],
    respuestas:[]
  },
  getters: {
    
  },
  mutations: {
    setQuests(state,payload){
      state.quests=payload
    },
    setUsuarios(state,payload){
      state.usuarios=payload;
    },
    setRespuestas(state,payload){
      state.respuestas=payload;
    }
  },
  actions: {
    /*async getLista(context){
      try {
        const response=await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json();
        context.commit('setQuests',data.results);
      } catch (error) {
        console.log(error);
      }
    },
    async getItem(context,id){
      try {
        const response=await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.json();
        context.commit('setQuests',data);
      } catch (error) {
        console.log(error);
      }
    },*/
    async getLista(context,id){
      const d=lista.filter((item)=>{return item.id==id});
      context.commit('setUsuarios', d[0]);
    },
    async getRespuestas(context,id){
      const d=respuestas.filter((item)=>{return item.id==id});
      console.log(d)
      context.commit('setRespuestas', d[0]);
    }
  },
  modules: {
  }
})
