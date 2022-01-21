import { API_STATE } from "./../actions/addItem";
function callingApi(state = { isLoading: false }, action) {
    let globalState = { ...state };
    switch (action.type) {
        case API_STATE:
            return { globalState, isLoading: action.isLoading };
            break;
        default:
            break;
    }
    return globalState;
}
export default callingApi;
