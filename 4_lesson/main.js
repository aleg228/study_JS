let money =  +prompt("Ваш месячный доход?");
let income= "работа";
let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
let deposit = confirm("Есть ли у вас депозит в банке?");
let period = 8;
let expenses1 = prompt("Введите обязательную статью расходов");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов");
let amount2 = +prompt("Во сколько это обойдется?");
let budgetMonth = money - (amount1+amount2);
mission = Math.ceil(100000/budgetMonth);
let budgetDay = Math.floor(budgetMonth/ 30);

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

function showTypeOf(data){
    return typeof data;
}
console.log(showTypeOf(money));
console.log(showTypeOf(income));
console.log(showTypeOf(deposit));

function getExpensesMonth(){
    
    return amount2 + amount1

};
function getAccumulatedMonth(){
    return money - (amount2 + amount1);
};
function getTargetMonth (){

    return Math.floor(100000/getExpensesMonth());

};
function getbudgetDay () {  
    return getAccumulatedMonth()/30;
};
console.log(getExpensesMonth());
console.log(addExpenses.split(', '));
console.log(getAccumulatedMonth());
console.log(getTargetMonth());
console.log(getbudgetDay());
console.log(getStatusIncome());
let accumulatedMonth = getAccumulatedMonth ();