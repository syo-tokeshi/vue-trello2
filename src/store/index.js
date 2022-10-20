import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')　// ★①追加


const store = new Vuex.Store({　// ★②編集
    state: {
        // ★ここから③編集
        lists: savedLists ? JSON.parse(savedLists): [
            {
                title: 'Backlog',
                cards: [
                    { body: 'English' },
                    { body: 'Mathematics' },
                ]
            },
            {
                title: 'Todo',
                cards: [
                    { body: 'Science' }
                ]
            },
            {
                title: 'Doing',
                cards: []
            }
        ],
        // ★ここまで③編集
    },
    mutations: {
        addlist(state, payload) {
            state.lists.push({ title: payload.title, cards:[] })
        },
        addCardToList(state, payload) {
            state.lists.push({ body: payload.body, cards:[] })
        },
        removelist(state, payload) {
            state.lists.splice(payload.listIndex,1)
        },
    },
    actions: {
        addlist(context, payload) {
            context.commit('addlist', payload)
        },
        addCardToList(context, payload) {
            context.commit('addCardToList', payload)
        },
        removelist(context, payload) {
            context.commit('removelist', payload)
        },
    },
    getters: {
    }
})

// ★ここから追記
store.subscribe((mutation, state) => {
    localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store
// ★ここまで追記
