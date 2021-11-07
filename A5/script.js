export { sum } // เป็นการเตรียมส่ง variable หรือ function ไปให้ไฟล์อื่นที่ต้องการเรียกใช้ในที่นี้จะเตียมส่ง code ไปให้ main.js 

//sum function เอาไว้หาผลรวมโดยจะรับ parameter ตัวเดียวเป็นค่าเริ่มต้นก่อนจะเอาค่าอื่นมารวม
function sum(num1 = 0) { //เมื่อ execute function sum() จะเก็บค่าเริ่มต้นโดยมี default parameter เป็น 0
    let result = num1;

    //inner รับ parameter เป็น rest parameter ชื่อ num2 โดย inner จะเอา num2 มาหาผลรวมแล้วเอามาเก็บไว้ใน result
    //จากนนั้นก็ return result ก็คือผลลรวมล่าสุดออกมา
    function inner(...num2) { //closure function (สามารถเข้าถึง local variable,function ของ sum ได้)
        result += num2.reduce((prev, cur) => prev + cur); //หาผลรวมแล้วเก็บไว้ใน result
        return result;
    }
    return inner;
}