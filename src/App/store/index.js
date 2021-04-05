import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colors: ['red', 'yellow', 'green'],
        step: 1, 
        nextStep: null
    },
    mutations: {
        setNextColor(state, lampColor) {
            const currentColorIndex = state.colors.findIndex(color => color === lampColor);
            if (currentColorIndex + state.step === state.colors.length || currentColorIndex + state.step < 0) {
              state.step *= -1;
            }
            state.nextStep = state.colors[currentColorIndex + state.step]
            
        }
    }
});
