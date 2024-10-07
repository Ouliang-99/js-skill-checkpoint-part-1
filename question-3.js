// Question #3
let userPassword = "abcde";
// เริ่มเขียนโค้ดตรงนี้

if (Array(...userPassword).length > 10){
    console.log("Strong");
}
else if ((Array(...userPassword).length > 6)){
    console.log("Medium");
}
else{
    console.log("Weak");
};

