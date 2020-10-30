import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}; // Tudo maiúsculo é sinal de que o valor não deve ser mudado

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, userId: action.payload }
        case SIGN_OUT:
            return { ...state, isSignedIn: true, userId: null }
        //  return { ...state, isSignedIn: false, userId: null }
        default:
            return state;
    }
};