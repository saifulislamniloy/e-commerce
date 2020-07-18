class EnglishConverter{
    static execute(data){
        var temp = "";
        var i = 0;
        for(i = 0; i<data.length; i++){
            temp = temp + this.helper(data[i])
        }
        return temp
    }

    static helper(data){
        if(data === "০")
            return "0"
        else if(data === "১")
            return "1"
        else if(data === "২")
            return "2"
        else if(data === "৩")
            return "3"
        else if(data === "৪")
            return "4"
        else if(data === "৫")
            return "5"
        else if(data === "৬")
            return "6"
        else if(data === "৭")
            return "7"
        else if(data === "৮")
            return "8"
        else if(data === "৯")
            return "9"
    }
}export default EnglishConverter;