import {
    ADDITEM,
    FETCH_ALL,
    FETCH_ALL_PENDING_SETTLEMENT,
} from "./../constants/actionTypes";
function itemList(state = { itemList: [] }, action) {
    let globalState = { ...state };
    switch (action.type) {
        case ADDITEM:
            globalState = {
                itemList: [...globalState.itemList, action.itemDetail],
            };
            break;
        case FETCH_ALL:
            globalState = {
                itemList: [...action.itemList],
            };
            break;
        case FETCH_ALL_PENDING_SETTLEMENT:
            globalState = {
                pendingSettlement: action.pendingSettlement,
            };
            break;
        default:
            break;
    }
    return globalState;
}
export default itemList;
