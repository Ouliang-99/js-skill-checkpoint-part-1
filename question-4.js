// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];

const inventory2 = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 2000 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้

function minInventoryCalculator(inventory){
  let minInventoryName = inventory[0].name ;
  let minInventoryQuantity = inventory[0].quantity ;

  for (let i = 1 ; i < inventory.length; i++){
    if(inventory[i].quantity < minInventoryQuantity){
      minInventoryQuantity = inventory[i].quantity ;
      minInventoryName = inventory[i].name
    }
  };

  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${minInventoryName} ซึ่งมี ${minInventoryQuantity} ชิ้น `
};

console.log(minInventoryCalculator(inventory));
console.log(minInventoryCalculator(inventory2));
