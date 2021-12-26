function addToCart(id, quantity) { //adds, not overrides
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

function changeQuantity(id, newQuantity) { //overrides, not adds
    let storageId=`cartItem:${id}`;
    localStorage.setItem(storageId, newQuantity);
}

function removeFromCart(id) {
    let storageId=`cartItem:${id}`;
    console.log(`Removing ${storageId} from cart`);
    localStorage.removeItem(storageId);
}

function readCart() {
    let result=[];
    for (let objectKey in localStorage) {
        if (objectKey.slice(0, 9)==='cartItem:') { //part of localStorage that is cartItem
            let item={
                id: objectKey.slice(9), //excludes cartItem: prefix
                quantity: localStorage.getItem(objectKey) //set valid key to valid value
            };
            result.push(item);
        }
    }
    return result;
}



module.exports={
    addToCart,
    changeQuantity,
    removeFromCart,
    readCart
}