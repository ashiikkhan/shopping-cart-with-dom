// update product number
function updateProductNumber(isIncrease, elementId) {
  const productNumberField = document.getElementById(elementId);
  const previousProductNumber = parseInt(productNumberField.value);
  let newProductNumber;
  if (isIncrease) {
    newProductNumber = previousProductNumber + 1;
  } else {
    if (previousProductNumber > 0) {
      newProductNumber = previousProductNumber - 1;
    } else {
      newProductNumber = previousProductNumber;
    }
  }
  productNumberField.value = newProductNumber;
  return newProductNumber;
}
// diplay particular product price
function displayProductPrice(totalProduct, perProductPrice, productPriceField) {
  const totalPrice = totalProduct * perProductPrice;
  const displayPrice = document.getElementById(productPriceField);
  displayPrice.innerText = totalPrice;
  return totalPrice;
}
// get current  particular total price of all products
function getCurrentPrice(elementId) {
  const priceEl = document.getElementById(elementId);
  const currentPrice = parseInt(priceEl.innerText);
  return currentPrice;
}

// calculate subtotal
function getSubTotal() {
  // get products current price
  const currentPhonePrice = getCurrentPrice(phonePriceField);
  const currentCasePrice = getCurrentPrice(casePriceField);
  // subtotal
  const subTotal = currentPhonePrice + currentCasePrice;
  const subTotalField = document.getElementById('sub-total');
  subTotalField.innerText = subTotal;
  return subTotal;
}
// calculate tax
function getTax() {
  const subTotalPrice = getSubTotal();
  const taxAmount = Math.round(subTotalPrice * 0.1);
  // set tax amount
  const taxField = document.getElementById('tax');
  taxField.innerText = taxAmount;
  return taxAmount;
}
// calculate total
function getTotal() {
  const subtotal = getSubTotal();
  const tax = getTax();
  const totalPrice = subtotal + tax;
  const totalField = document.getElementById('total');
  totalField.innerText = totalPrice;
}
