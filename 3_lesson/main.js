let money =  +prompt("Ваш месячный доход?");
console.log(typeof money);
let income= "работа";
console.log(typeof income);
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
console.log(typeof deposit);
let period = 8;
console.log(addExpenses.length);
console.log("Период равен" + period + "месяцев");
let mission = 100000;
console.log("Цель заработать" + mission + "рублей");
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдется?");
let budgetMonth = money - (amount1+amount2);
mission = Math.ceil(100000/budgetMonth);
console.log("Бюджет на месяц: " + budgetMonth);
console.log("Цель будет достигнута за:" + mission + "месяцев");
let budgetDay = Math.floor(budgetMonth/ 30);
console.log("Бюджет на день:" + budgetDay);

if(budgetDay >= 1200){
    console.log("У вас высокий уровень дохода")
}
if(budgetDay >= 600 && budgetDay < 1200){
    console.log("У вас средний уровень дохода")
}
if(budgetDay <= 600 && budgetDay >=0){
    console.log("К сожалению у вас уровень дохода ниже среднего")
}
if(budgetDay < 0){
    console.log("Что то пошло не так")
}





// console.log(addExpenses.length);
// console.log("Период равен" + period + "месяцев");
// console.log("Цель заработать" + mission + "рублей");

// console.log(addExpenses.toLowerCase());
// console.log(addExpenses.split(', '));
// let budgetDay = money/ 30;
// console.log(budgetDay);