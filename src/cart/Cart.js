var products = {
    items: []
};

class Cart {

    static addToCart(x) {
        this.check(x)
        console.log(products)
    }

    static loadCart() {
        return products.items
    }

    static check(x) {
        var i;
        var flag = true
        for (i = 0; i < products.items.length; i++) {
            if (products.items[i]['id'] === x['id']) {
                products.items[i]['quantity'] = products.items[i]['quantity'] + 1
                flag = false
            }
        }
        if (flag === true)
            products.items.push(x);
    }

    static removeOne(x){
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