const caseNumberField = 'case-num-field';
const casePriceField = 'case-total-price';
// plus button
const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click', function () {
  const totalCase = updateProductNumber(true, caseNumberField);
  displayProductPrice(totalCase, casePriceField);
});
// minus button
const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click', function () {
  const totalCase = updateProductNumber(false, caseNumberField);
  displayProductPrice(totalCase, casePriceField);
});
