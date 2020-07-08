class CommentItems {
    static getCommentName(mode) {
        if (mode === "0")
            return "Comment"
        else if (mode === "1")
            return "মন্তব্য করুন"
    }
    static getButtonName(mode){
        if (mode === "0")
            return "Post"
        else if (mode === "1")
            return "পোস্ট করুন"
    }
}
export default CommentItems;