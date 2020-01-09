export const ADD_ITEM = "ADD_ITEM"
export const REMOVE_ITEM = "REMOVE_ITEM"

export const addItem = add => {
    return { type: ADD_ITEM, payload: add }
}

export const removeItem = remove => {
    return { type: REMOVE_ITEM, payload: remove }
}