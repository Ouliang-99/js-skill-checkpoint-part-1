// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE20";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(products, promotionCode) {
  let goodsInCart = [];
  let sumCartValue = 0;
  let totalCartValueDiscount = 0;
  let discountValue = 0 ;

  for (let i = 0; i < products.length; i++) {
    goodsInCart.push(products[i].name);
    sumCartValue += products[i].price * products[i].quantity;
    if (promotionCode === "SALE50") {
      totalCartValueDiscount = sumCartValue * 0.5;
      discountValue = sumCartValue - totalCartValueDiscount ;
    } else if (promotionCode === "SALE20") {
      totalCartValueDiscount = sumCartValue * 0.8;
      discountValue = sumCartValue - totalCartValueDiscount
    }
    else{
      totalCartValueDiscount = sumCartValue ;
      discountValue = sumCartValue - totalCartValueDiscount
    }
  }

  return `
    สินค้าที่อยู่ในตะกร้า = ${goodsInCart} บาท
    โค้ดส่วนลด = ${promotionCode} บาท
    ราคาก่อนใช้โค้ดส่วนลด = ${sumCartValue} บาท
    ราคาหลังใช้โค้ดส่วนลด = ${totalCartValueDiscount} บาท
    ตะกร้านี้ประหยัดไปได้ = ${discountValue} บาท
    `;
}

console.log(calculateTotalPrice(products,promotionCode));
