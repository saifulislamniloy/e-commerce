export default class AppUrl {
    static baseUrl = "http://localhost:5000";

    static categoryList = this.baseUrl + "/categories";
    static productList = this.baseUrl + "/categories/product";
    static searchList = this.baseUrl + "/search";
    static productDetail = this.baseUrl + "/products";
    static cart = this.baseUrl + "/products/purchase";
}