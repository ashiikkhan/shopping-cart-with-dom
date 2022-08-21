// update product number
function updateProductNumber(isIncrease, elementId) {
  const productNumberField = document.getElementById(elementId);
  const previousProductNumber = parseInt(productNumberField.value);
  let newProductNumber;
  if (isIncrease) {
    newProductNumber = previousProductNumber + 1;
  } else {
    newProductNumber = previousProductNumber - 1;
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
}
