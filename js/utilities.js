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
function displayProductPrice(totalProduct, productPriceField) {
  const totalPrice = totalProduct * 1219;
  const displayPrice = document.getElementById(productPriceField);
  displayPrice.innerText = totalPrice;
}
