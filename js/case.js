const casePlusBtn = document.getElementById('case-plus-btn');
casePlusBtn.addEventListener('click', function () {
  const caseNumField = document.getElementById('case-num-field');
  const previousCaseNumber = parseInt(caseNumField.value);
  const newCaseNumber = previousCaseNumber + 1;
  caseNumField.value = newCaseNumber;
});
const caseMinusBtn = document.getElementById('case-minus-btn');
caseMinusBtn.addEventListener('click', function () {
  const caseNumField = document.getElementById('case-num-field');
  const previousCaseNumber = parseInt(caseNumField.value);
  const newCaseNumber = previousCaseNumber - 1;
  caseNumField.value = newCaseNumber;
});
