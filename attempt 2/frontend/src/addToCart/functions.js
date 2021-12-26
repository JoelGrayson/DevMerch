function addToCart(id, quantity) {
    let storageId=`cartItem:${id}`;
    if (localStorage.getItem(storageId)==null) { //not previously defined
        console.log(`Adding ${id} qty ${quantity}`);
        localStorage.setItem(storageId, quantity);
    } else { //already exists (add to prevQuantity)
        let prevQuantity=parseInt(localStorage.getItem(storageId));
        let newQuantity=prevQuantity+quantity;
        console.log(`Adding ${quantity} to ${id}`, {id, prevQuantity, newQuantity})
        localStorage.setItem(storageId, newQuantity);
    }
}

function removeFromCart(id) {
    localStorage.removeItem(id);
}

function readCart() {
    let result={};
    for (let key in localStorage) {
        if (key.slice(0, 9)=='cartItem:') { //part of localStorage that is cartItem
            result[key]=localStorage.getItem(key) //set valid key to valid value
        }
    }
    return result;
}



module.exports={
    addToCart,
    removeFromCart,
    readCart
}