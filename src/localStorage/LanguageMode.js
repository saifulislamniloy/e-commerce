class LanguageMode{
    static loadMode(){
        if(sessionStorage.getItem("language_mode") === null){
            sessionStorage.setItem('language_mode', "1")
            return "1"
        }
        else{
            return sessionStorage.getItem("language_mode")
        }
    }

    static setMode(id){
        sessionStorage.setItem('language_mode', ""+id)
    }
}
export default LanguageMode;