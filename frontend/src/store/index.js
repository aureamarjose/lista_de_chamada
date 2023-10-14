import { createStore } from 'vuex'

export default createStore({
  state: {
    information: [],
    group: [],
    groupInformation: [],
  },
  getters: {
    getOptions: (state) => state.group,
    getGroupInformation: (state) => state.groupInformation,
  },
  mutations: {

    set_information(state, data) {
      state.information = data;
    },

    addGroupServer(state, newGroup) {
      state.group.push(newGroup)
    },

    group_information(state, ted) {
      state.groupInformation = ted;
    },
  },
  actions: {
    classData({ commit }) {
      // Realize a chamada à API JSON Server para buscar as opções
      fetch('http://localhost:3000/registerGroup') // Substitua pela rota correta do JSON Server
        .then((response) => response.json())
        .then((data) => {
          commit('set_information', data)
        })
    },

    async addGroupServer({ commit }, newGroup) {

      const response = await fetch('http://localhost:3000/group', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGroup),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar cadastro.');
      }

      const data = await response.json();
      commit('addGroupServer', data);

    },

    groupData({ commit }) {
      // Realize a chamada à API JSON Server para buscar as opções
      fetch('http://localhost:3000/group') // Substitua pela rota correta do JSON Server
        .then((response) => response.json())
        .then((ted) => {
          commit('group_information', ted)
        })
    },

  },

  modules: {
  }
})
