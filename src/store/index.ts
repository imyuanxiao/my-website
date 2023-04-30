import { createStore } from 'vuex';

const store = createStore({
    state: {
        isFold: false,
        usedPreLoader: false,
        isLoaded: false,
        padding: '300px',
    },
    mutations: {
        toggleFold(state) {
            state.isFold = !state.isFold;
            state.padding = state.isFold ? '0' : '300px';
        },
        setLoaded(state, flag) {
            state.isLoaded = flag;
        },
        setUsedPreLoader(state, flag) {
            state.usedPreLoader = flag;
        },
    },
});


export default store;
