import {
    SHOW_SIDEBAR,
    HIDE_SIDEBAR,
    CHANGE_MENU,
    SIDEBAR_STATUS,
} from "./../actions/sidebar";
function sidebar(state = { isVisible: false }, action) {
    let globalState = { ...state };
    console.log(action);
    switch (action.type) {
        case SHOW_SIDEBAR:
            globalState = {
                ...state,
                sidebarHidden: false,
            };
            break;

        case HIDE_SIDEBAR:
            globalState = {
                ...state,
                sidebarHidden: true,
            };
            break;

        case CHANGE_MENU:
            globalState = {
                ...state,
                activeMenuId: action.menuId,
            };
            break;

        case SIDEBAR_STATUS:
            globalState = {
                ...state,
                isVisible: !action.isVisible,
            };
            break;
        default:
            break;
    }
    return globalState;
}
export default sidebar;
