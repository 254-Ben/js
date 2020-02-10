let myAccount = {
  name: "Mike Dodds",
  expenses: 0,
  income: 0
};

let addExpense = function(account, amount) {
  account.expenses = account.expenses + amount;
};

let addIncome = function(account, amount) {
  account.income = account.income + amount;
};

let resetAccount = function(account) {
  account.expenses = 0;
  account.income = 0;
};

addIncome(myAccount, 2000);
addExpense(myAccount, 100);
addExpense(myAccount, 200);
addExpense(myAccount, 250);

let getAccountSummary = function(account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}. $${account.income} in income . $${account.expenses} in expenses.`;
};

console.log(getAccountSummary(myAccount));
