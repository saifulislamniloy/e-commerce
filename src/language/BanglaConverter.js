class BanglaConverter{
    static execute(data){
        var temp = "";
        var i = 0;
        for(i = 0; i<data.length; i++){
            temp = temp + this.helper(data[i])
        }
        return temp
    }

    static helper(data){
        if(data === "0")
            return "০"
        else if(data === "1")
            return "১"
        else if(data === "2")
            return "২"
        else if(data === "3")
            return "৩"
        else if(data === "4")
            return "৪"
        else if(data === "5")
            return "৫"
        else if(data === "6")
            return "৬"
        else if(data === "7")
            return "৭"
        else if(data === "8")
            return "৮"
        else if(data === "9")
            return "৯"
    }
}export default BanglaConverter;