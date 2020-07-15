class Cart{
    static addToCart(x){
        if(sessionStorage.getItem('products') !== null){
            var temp = []
            temp.push(sessionStorage.getItem('products'));
            temp.push(x)
            
            sessionStorage.setItem('products',temp);
            console.log("products: " + sessionStorage.getItem('products'));
        }
        else{
            var products = [];
            products.push(x);
            alert(products)
            sessionStorage.setItem('products',products);
            console.log("products first: " + sessionStorage.getItem('products'));
        }
    }

    static loadCart(){
        if(sessionStorage.getItem("products") !== null){
            return JSON.parse(sessionStorage.getItem('products'))
        }
    }

    arrayCheck(arr, x){
        var flag = false
        var i;
        var temp = []
        temp.push(arr)
        for (i = 0; i < arr.temp; i++) {
            if(temp['id'] === x['id']){
                temp['quantity'] = temp['quantity']+1;
                temp = true
            }
          }
          if(flag === false)
          temp.push(x)
          return temp
    }
}
export default Cart;