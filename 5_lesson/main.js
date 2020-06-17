'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    income= "работа",
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
    deposit = confirm("Есть ли у вас депозит в банке?"),
    mission = 100000,
    period = 8;



let start = function(){

    money = prompt("Ваш месячный доход?");
    while (!isNumber(money)){

        money = prompt("Ваш месячный доход?");
    }
    console.log(money);
    return money;
    
};

let resultStart = start();

function getStatusIncome(){

    if(budgetDay >= 1200){
        return "У вас высокий уровень дохода";
    }
    if(budgetDay >= 600 && budgetDay < 1200){
        return "У вас средний уровень дохода";
    }
    if(budgetDay <= 600 && budgetDay >=0){
        return "К сожалению у вас уровень дохода ниже среднего";
    }
    if(budgetDay < 0){
        return "Что то пошло не так";
    }

};

let showTypeOf = function(data){
    console.log(typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let expenses = [];

function getExpensesMonth(){
    
    let sum = 0;
    for (let i = 0; i <2 ;i++){
        expenses[i]= prompt("Введите обязательную статью расходов");

        sum += +prompt("Во сколько это обойдется?");
        if (!isNumber(sum)){
        
        console.log("Данное число не является цифрой");
       }
       else{
        console.log("Данное число является цифрой");
       }
        
        
    }
    console.log(expenses);
    return sum;

};

let expensesAmount = getExpensesMonth();
console.log("Расходы за месяц: " + expensesAmount)


function getAccumulatedMonth(){
    return resultStart - expensesAmount;
};
let rezGetAccumulatedMonth = getAccumulatedMonth();
function getTargetMonth (){

    return Math.floor(mission/expensesAmount);

};
function getbudgetDay(){
    return rezGetAccumulatedMonth/30;
}
function getStatusIncome(){

    if(getbudgetDay() >= 1200){
        return "У вас высокий уровень дохода";
    }
    if(getbudgetDay() >= 600 && budgetDay < 1200){
        return "У вас средний уровень дохода";
    }
    if(getbudgetDay() <= 600 && budgetDay >=0){
        return "К сожалению у вас уровень дохода ниже среднего";
    }
    if(getbudgetDay() < 0){
        return "Что то пошло не так";
    }

};

console.log(addExpenses.split(', '));
console.log("Остаток на месяц: " + getAccumulatedMonth());
console.log("Цель будет достигнута за " + getTargetMonth() + " месяцев");
console.log(getStatusIncome());

