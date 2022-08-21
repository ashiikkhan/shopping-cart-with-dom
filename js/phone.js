const phoneNumberField = 'phone-num-field';
const phonePriceField = 'phone-total-price';
const perPhonePrice = 1219;

// phone plus button
const phonePlusBtn = document.getElementById('phone-plus-btn');
phonePlusBtn.addEventListener('click', function () {
  const totalPhone = updateProductNumber(true, phoneNumberField);
  displayProductPrice(totalPhone, perPhonePrice, phonePriceField);
  // get sub total
  getSubTotal();
});
// phone minus button
const phoneMinusBtn = document.getElementById('phone-minus-btn');
phoneMinusBtn.addEventListener('click', function () {
  const totalPhone = updateProductNumber(false, phoneNumberField);
  displayProductPrice(totalPhone, perPhonePrice, phonePriceField);
  // get sub total
  getSubTotal();
});
