let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function receiptPrint(order) {
  let total = 0;
  console.log("QTY\tITEM\t\t\tTOTAL");
  order.forEach(el => {
    let { quantity, itemName, unitPrice} = el;

    console.log(`${quantity}\t${itemName}\t\t${unitPrice.toFixed(2)}`)
    total += (unitPrice * quantity)
  })
  console.log("Total:", total);
}


receiptPrint(order);