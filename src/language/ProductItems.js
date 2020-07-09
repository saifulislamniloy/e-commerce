class ProductItems {
    static details(mode) {
        if (mode === "0")
            return "Details"
        else if (mode === "1")
            return "বিস্তারিত"
    }
    static addToCart(mode) {
        if (mode === "0")
            return "Add to Cart"
        else if (mode === "1")
            return " কার্টে যোগ করুন"
    }
    static rating(mode) {
        if (mode === "0")
            return "Rating"
        else if (mode === "1")
            return "রেটিং"
    }
}
export default ProductItems;