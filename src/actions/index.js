export const adding = (item) => {
    return {
        type: 'ADD',
        payload: item
    };
}

export const deleting = (item) => {
    return {
        type: 'DELETE',
        payload: item
    };
}
export const changingTier = (item) => {
    return {
        type: 'CHANGING_TIER',
        payload: item
    };
}