class FooterItem{
    static contactUs(mode) {
        if (mode === "0")
            return "Contact Us"
        else if (mode === "1")
            return "যোগাযোগ করুন"
    }
    static faq(mode) {
        if (mode === "0")
            return "FAQ"
        else if (mode === "1")
            return " জিজ্ঞাসা"
    }
    static customerService(mode) {
        if (mode === "0")
            return "Customer Service"
        else if (mode === "1")
            return "গ্রাহক সেবা"
    }
    static aboutSite(mode) {
        if (mode === "0")
            return "About Site"
        else if (mode === "1")
            return "সাইট সম্পর্কে"
    }
    static privacyPolicy(mode) {
        if (mode === "0")
            return "Privacy Policy"
        else if (mode === "1")
            return "গোপনীয়তা নীতি"
    }
    static termsOfUse(mode) {
        if (mode === "0")
            return "Terms of Use"
        else if (mode === "1")
            return "ব্যবহারের শর্তাবলী"
    }
    static forBusiness(mode) {
        if (mode === "0")
            return "For Business"
        else if (mode === "1")
            return "ব্যাবসার জন্য"
    }
    static corporate(mode) {
        if (mode === "0")
            return "Corporate"
        else if (mode === "1")
            return "কর্পোরেট"
    }
}
export default FooterItem;