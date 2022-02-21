// menambah item ke keranjang
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// menghapus item dari keranjang
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}