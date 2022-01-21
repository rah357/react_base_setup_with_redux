import * as api from "./../../api/index";
import {
    FETCH_ALL,
    CREATE,
    FETCH_ALL_PENDING_SETTLEMENT,
    DELETE,
    UPDATE,
    LIKE,
} from "./../../module/constants/actionTypes";
import { API_STATE } from "./../../module/constants/actionTypes";

function getAllItemList() {
    return async (dispatch) => {
        try {
            dispatch({
                type: API_STATE,
                isLoading: true,
            });
            const { data } = await api.fetchItemList();
            console.log(data.data);
            let responseBody = data.data.map((item) => {
                return {
                    itemName: item.name,
                    itemPrice: item.price,
                    whoWillUse: item.includeGuy,
                    whoPaid: item.paidBy,
                    createdAt: item.createdAt,
                    id: item._id,
                };
            });
            dispatch({
                type: FETCH_ALL,
                itemList: responseBody,
            });
            dispatch({
                type: API_STATE,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

function addNewItem(newItem) {
    const apiRequestBody = {
        name: newItem.itemName,
        price: newItem.itemPrice,
        includeGuy: newItem.whoWillUse,
        paidBy: newItem.whoPaid,
    };
    return async (dispatch) => {
        try {
            dispatch({
                type: API_STATE,
                isLoading: true,
            });
            const { data } = await api.addNewItem(apiRequestBody);
            dispatch({
                type: CREATE,
                payload: data,
            });
            dispatch({
                type: API_STATE,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

function getPendingSettleList() {
    return async (dispatch) => {
        try {
            dispatch({
                type: API_STATE,
                isLoading: true,
            });
            const {
                data: { data },
            } = await api.fetchPendingSettleList();
            console.log(data, "--+++++data");
            let responseBody = data.map((item) => {
                return {
                    ...item,
                };
            });
            dispatch({
                type: FETCH_ALL_PENDING_SETTLEMENT,
                pendingSettlement: responseBody,
            });
            dispatch({
                type: API_STATE,
                isLoading: false,
            });
        } catch (error) {
            console.log(error);
        }
    };
}

// function updateItem(id, updatedPost) {
//     return async (dispatch) => {
//         try {
//             const { data } = await api.updatePost(id, updatedPost);
//             dispatch({
//                 type: UPDATE,
//                 payload: data,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

// function settledItemList() {
//     return async (dispatch) => {
//         try {
//             const { data } = await api.fetchSettledItemList();
//             dispatch({
//                 type: FETCH_ALL_SETTLED,
//                 payload: data,
//             });
//         } catch (error) {}
//     };
// }

// function deletePost(id) {
//     return async (dispatch) => {
//         try {
//             await api.deletePost(id);
//             dispatch({
//                 type: DELETE,
//                 payload: id,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

// function likePost(id) {
//     return async (dispatch) => {
//         try {
//             const { data } = await api.likePost(id);
//             dispatch({
//                 type: LIKE,
//                 payload: data,
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };
// }

export { getAllItemList, addNewItem, getPendingSettleList };
