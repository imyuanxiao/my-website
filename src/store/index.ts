import { createStore } from 'vuex';

const store = createStore({
    state: {
        isFold: false,
        usedPreLoader: false,
        isLoaded: false,
        padding: '300px',
        // scrollPosition: 0
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
        // setScrollPosition(state, flag) {
        //     state.scrollPosition = flag;
        // },
    },
});

// 监听窗口尺寸变化
window.addEventListener("resize", () => {
    if (window.innerWidth < 1040) {
        store.state.padding='0px'
    }else{
        if(store.state.isFold){
            store.state.padding='0px'
        }else{
            store.state.padding='300px'
        }
    }
});

export default store;
