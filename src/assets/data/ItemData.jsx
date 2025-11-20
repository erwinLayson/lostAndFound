export function foundItemData() {
    return JSON.parse(localStorage.getItem("foundItemData")) ?? [];
}

export function lostItemData() {
    return JSON.parse(localStorage.getItem("lostItemData")) ?? [];
}