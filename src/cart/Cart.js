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
            products = JSON.parse(sessionStorage.getItem("products"))
        }
        // console.log("get: ",JSON.stringify(products.items))
    }

    static setLocalStorage() {
        if (sessionStorage.products !== null) {
            sessionStorage.setItem("products", JSON.stringify(products))
        }
        // console.log("set: ",products)
    }

    static decreaseQuantity(x) {
        var i = this.getIndex(x)
        if (products.items[i]['quantity'] > 0) {
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

    static getQuantity(x) {
        var i = this.getIndex(x)
        return products.items[i]['quantity']
    }

    static getIndex(x) {
        var i;
        for (i = 0; i < products.items.length; i++) {
            if (products.items[i]['id'] === x['id'])
                return i;
        }
    }

    static itemCount(x) {
        var i;
        this.getLocalStorage()
        for (i = 0; i < products.items.length; i++) {
            if (products.items[i]['id'] === x)
                return products.items[i]['quantity'];
        }
    }


    static getTotalPrice() {
        let size = products.items.length
        let temp = 0;
        let i = 0;
        for (i = 0; i < size; i++) {
            temp = temp + products.items[i]['price'] * products.items[i]['quantity']
        }
        return temp
    }

    static processCartForPost() {
        let size = products.items.length
        let tempArr = []
        let temp = {}
        let i = 0
        for (i = 0; i < size; i++) {
            temp = {
                customer_id: 1,
                p_id: parseInt(products.items[i]['id']),
                c_id: 1,
                p_title: products.items[i]['title'],
                p_count: products.items[i]['quantity'],
                price: products.items[i]['price']
            }
            tempArr.push(temp)
        }
        return JSON.stringify(tempArr)
    }
}
export default Cart;