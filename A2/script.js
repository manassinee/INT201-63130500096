function myReverse(myString) { //สร้างตัวแปร 1 ตัวเพื่อเก็บผลลัพธ์
    let result = ''; //สร้างตัวแปรไว้เก็บผลลัพธ์
    for (i = 0; i <= myString.length; i++) { //ใช้ for loop เพื่อวนนับตามจำนวนตัวของ parameter ที่รับมา
        result += myString.charAt(myString.length - i); // + String ใน result ด้วย myString.lenght-i 
    }
    console.log(result); //แสดงผลลัพธ์
}

function myReplace(myString) {
    let result = ''; //สร้างตัวแปรไว้เก็บผลลัพธ์
    for (i = 0; i < myString.length; i++) { //ใช้ for loop เพื่อวนนับตามจำนวนตัวของ parameter ที่รับมา
        switch (myString[i]) { //ใช้ swictch case ที่รับ String index ตัวที่ i เพื่อเช็คว่าเข้า case ไหนต่อไป
            case 'A': //ถ้าเกิดว่า String index ตัวที่ i ตรงกับ case ไหน ให้ทำงาน case นั้น
                result += '*'; // + เพิ่ม String ด้วย *
                break;
            case 'a':
                result += '*';
                break;
            case 'E':
                result += '*';
                break;
            case 'e':
                result += '*';
                break;
            case 'I':
                result += '*';
                break;
            case 'i':
                result += '*';
                break;
            case 'O':
                result += '*';
                break;
            case 'o':
                result += '*';
                break;
            case 'U':
                result += '*';
                break;
            case 'u':
                result += '*';
                break;
            default: // ถ้าไม่เข้า case ไหนเลยให้ + string ด้วย String ตัวนั้น
                result += myString[i];
        }
    }
    console.log(result); //แสดงผลลัพธ์
}

function myCount(myString) {
    let count = 0; //สร้างตัวแปร count เพื่อเก็บจำนวนสระที่เจอ
    for (i = 0; i < myString.length; i++) { //ใช้ for loop เพื่อวนนับตามจำนวนตัวของ String parameter ที่รับมา
        switch (myString[i]) { //ใช้ swictch case ที่รับ String index ตัวที่ i เพื่อเช็คว่าเข้า case ไหนต่อไป
            case 'A': //ถ้าเกิดว่า String index ตัวที่ i ตรงกับ case ไหน ให้ทำงาน case นั้น
                count++; // เพิ่มค่า count 
                break;
            case 'a':
                count++;
                break;
            case 'E':
                count++;
                break;
            case 'e':
                count++;
                break;
            case 'I':
                count++;
                break;
            case 'i':
                count++;
                break;
            case 'O':
                count++;
                break;
            case 'o':
                count++;
                break;
            case 'U':
                count++;
                break;
            case 'u':
                count++;
                break;
            default:
                break;
        }
    }
    console.log(count); //แสดงผลลัพธ์ของฟังก์ชั่น
}

//function menu เอาไว้เรียก function ย่อย
function menu(num, myString) { //รับ parameter มา 2 ตัว num เอาไว้เลือก function ส่วน myString เอาไว้ประมวลผล
    switch (num) { //ใช้ switch case เช็ก num
        case 1: //ถ้า num เป็น 1 ให้ทำ function myReverse 
            myReverse(myString); //โดยใส่ argument เป็น myString ซึ่งเป็น parameter ของfunction menu
            break;
        case 2: //ถ้า num เป็น 2 ให้ทำ function myReplace
            myReplace(myString); //โดยใส่ argument เป็น myString ซึ่งเป็น parameter ของfunction menu
            break;
        case 3: //ถ้า num เป็น 3 ให้ทำ function myCount
            myCount(myString); //โดยใส่ argument เป็น myString ซึ่งเป็น parameter ของfunction menu
            break;
    }
}

function vowelReplace2(myString) {
    let result = ''; // สร้างตัวแปร 1 ตัวไว้เก็บผลลัพธ์
    const checker = 'aeiouAEIOU' //สร้างตัวแปรไว้เก็บ String ที่เป็นสระทั้งหมด
    for (i = 0; i < myString.length; i++) { //ใช้ for loop เพื่อวนนับตามจำนวนของ character ใน string ที่รับมา 
        if (checker.includes(myString[i])) { //เช็คว่าตำแหน่งใน String ที่รับมานั้นเป็นสระไหม โดยใช้ include ของ checker 
            //เพื่อนำ String ตำแหน่งนัั้นมาเทียบกับ String ทั้งหมดของ Checker
            result += '*'; //ถ้าตำแหน่งนั้นเป็นสระให้ + String ใน result ด้วย '*'
        } else result += myString[i]; //แต่ถ้าไม่ใช่ให้ + String ใน result ด้วย String ตัวนั้นเลย
    }
    console.log(result); //แสดงผลลัพธ์
}

function vowelCount2(myString) {
    let count = 0; //สร้างตัวแปร 1 ตัวไว้เก็บผลลัพธ์
    const checker = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; //สร้าง array เพื่อใช้ในการเก็บสระ
    for (i = 0; i < myString.length; i++) { //ใช้ for loop เพื่อวนนับตามจำนวนของ character ใน string ที่รับมา
        if (checker.includes(myString[i])) { //includes() เช็คว่ามีตัวอยู่ใน array หรือไม่
            count++;
        }
    }
    console.log(count); //แสดงผลลัพธ์ของฟังก์ชั่น
}

function vowelCount3(str) {
    return str.replace(/[^aeiou]/gi, "").length; //replace ทุกตัวที่ไม่ใช่สระใน parameter ที่รับเข้ามาด้วย "" แล้วมันจะทำให้ length เปลี่ยน
    //แล้วให้ return เป็น length พอเราแสดงผลลัพธ์ก็จะได้เหลือแต่ lenngth ของ String ที่มีแต่สระ
}

console.log("String1");
let myString1 = "Hello World"; //ตัวแปรไว้เก็บ String เพื่อเอาไปประมวลผล
let myString2 = "My name is Gus";
let myString3 = "I am the flash";
menu(1, myString1);
menu(2, myString1);
menu(3, myString1);
vowelReplace2(myString1);
vowelCount2(myString1);
console.log(vowelCount3(myString1));

console.log("\nString2");
menu(1, myString2);
menu(2, myString2);
menu(3, myString2);
vowelReplace2(myString2);
vowelCount2(myString2);
console.log(vowelCount3(myString2));

console.log("\nString3");
menu(1, myString3);
menu(2, myString3);
menu(3, myString3);
vowelReplace2(myString3);
vowelCount2(myString3);
console.log(vowelCount3(myString3));