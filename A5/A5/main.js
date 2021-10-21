import { sum } from "./script.js";
//เป็นการนำเข้า variable หรือ function จากไฟล์ที่ต้องการจะใช้ในที่นี้คือ การรับ function sum() จาก script.js

console.log("case 1");
let fun0 = sum(); //เรา execute function sum จะเป็นการ initial ค่าเริ่มต้นและ return funtion inner เพื่อเตรียมบวก
//ตอนนี้ fun0 คือ function inner พอเรา execute ก็จะเป็นการเอาค่าที่ส่งไปไปบวกเพิ่มในตัวแปรและ return ผลรวม
console.log(fun0(0)); // 0 : ใส่ 0 เพื่อดูว่าตอนนี้ข้อมูลด้านในมีเท่าไหร่โดยที่ไม่ต้องบวกอะไรเพิ่ม
//เรากรอกข้อมมูลตัวเลขหลายตัว inner จะเอาตัวเลขทั้งหมดมาบวกกับผลรวมปัจจุบันเอาไปเก็บไว้และ return ผลรวม
console.log(fun0(5, 6, 8)); // 19

console.log("case 2");
//ทำแบบค่าติดลบ
let fun1 = sum(-8);
console.log(fun1(0)); // -8
console.log(fun1(5, 6, -8)); // -5
console.log(fun1(20)); // 15

console.log("case 3");
//ทำแบบค่าเป็นทศนิยม
let fun2 = sum(-8.2);
console.log(fun2(0)); // -8
console.log(fun2(5, -8, 8.2)); // -3
console.log(fun2(8.6)); // 5.6