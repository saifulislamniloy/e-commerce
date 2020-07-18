var products = {
    items: []
};

class Cart {
    static addToCart(x) {
        this.check(x)
        console.log(products)
    }

    static loadCart() {
        this.getLocalStorage()
        return products.items
    }

    static check(x) {
        var i;
        var flag = true
        this.getLocalStorage()
        var size = products.items.length;
        for (i = 0; i < size; i++) {
            if (products.items[i]['id'] === x['id']) {
                products.items[i]['quantity'] = products.items[i]['quantity'] + 1
                flag = false
            }
        }
        if (flag === true)
            products.items.push(x);
        
        this.setLocalStorage()
    }

    static getLocalStorage() {
        if (sessionStorage.getItem("products") !== null) {
            products= JSON.parse(sessionStorage.getItem("products"))
        }
        console.log("get: ",products)
    }

    static setLocalStorage() {
        if (sessionStorage.products !== null) {
            sessionStorage.setItem("products", JSON.stringify(products))
        }
        console.log("set: ",products)
    }

    static decreaseQuantity(x) {
        var i = this.getIndex(x)
        if(products.items[i]['quantity'] > 0){
            products.items[i]['quantity'] = products.items[i]['quantity'] - 1
            this.setLocalStorage()
        }
    }

    static increaseQuantity(x) {
        var i = this.getIndex(x)
        products.items[i]['quantity'] = products.items[i]['quantity'] + 1
        this.setLocalStorage()
    }

    static remove(x) {
        var i = this.getIndex(x)
        // products.items[i]['quantity'] = products.items[i]['quantity'] + 1
        products.items.splice(i, 1)
        this.setLocalStorage()
    }

    static getIndex(x) {
        var i;
        for (i = 0; i < products.items.length; i++) {
            if (products.items[i]['id'] === x['id'])
                return i;
        }
    }
}
export default Cart;