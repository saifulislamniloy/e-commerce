import BanglaConverter from "./BanglaConverter";

class AmountBanglaConverter{
    static execute (data){
        let temp, amount, unit;
        temp = this.splitWord(data)
        amount = temp[0]
        unit = temp[1]
        // alert(amount)
        // alert(unit)
        return amount+" "+ unit;
    }

    static splitWord(data){
        let amount, unit;
        let arr = [];
        amount = data.replace(/[^0-9\.]+/g, "");
        unit = data.replace(""+amount, "")
        unit = unit.trim()
        amount = BanglaConverter.execute(amount)
        unit = this.convertUnit(unit)
        arr.push(amount)
        arr.push(unit)
        return arr
    }

    static convertUnit(data){
        let engUnit = ["KG", "Gram", "Piece"]
        let bnUnit = ["কেজি", "গ্রাম", "টি"]
        let index = engUnit.indexOf(data)
        // alert(data)
        return bnUnit[index]
    }
}export default AmountBanglaConverter;