var products = {
    items: []
};

class Cart {
    constructor() {
        products = sessionStorage.getItem("Products")
        console.log(products)
    }

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
        for (i = 0; i < products.items.length; i++) {
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
        if (sessionStorage.products !== null) {
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

    static removeOne(x) {
        delete products.items[this.getIndex(x)]
        console.log(products)
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