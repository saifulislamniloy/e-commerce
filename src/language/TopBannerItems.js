class TopBannerItems{
    static getSearchBarPlaceHolder(mode){
        if(mode === "0")
            return "Search by Product Name"
        else if(mode === "1")
            return "প্রোডাক্ট এর নাম দিয়ে সার্চ করুন"
    }

    static getSearchButtonText(mode){
        if(mode === "0")
            return "Search"
        else if(mode === "1")
            return "সার্চ করুন"
    }
}
export default TopBannerItems;