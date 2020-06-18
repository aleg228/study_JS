'use strict';
let isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money;
let start = function(){

    money = +prompt("Ваш месячный доход?");
    while (!isNumber(money)){

        money = +prompt("Ваш месячный доход?");
    }
    return money;
    
};
start();


let appData = {
    income: {},
    addIncome:[],
    expenses:{

    },
    addExpenses:[],
    deposit: false,
    mission: 100000,
    period: 4,
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function(){

        let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
            appData.addExpenses = addExpenses.toLowerCase().split(', ');
            appData.deposit = confirm("Есть ли у вас депозит в банке?");

        for (let i = 0; i <2 ;i++){

           let a = prompt("Введите обязательную статью расходов");
           let b = +prompt("Во сколько это обойдется?");
           appData.expenses[a] = b;
        }
        console.log(appData);
    },
    getExpensesMonth :function(){
    
        let sum = 0;
        for(let key in appData.expenses){
            sum +=  appData.expenses[key];
        }
        return sum;
    
    },
    getBudgetDay: function(){
        appData.budgetDay = appData.budget/30;
        appData.budgetMonth = appData.budget - appData.getExpensesMonth();
        return appData.budgetMonth;
        

    },
    getTargetMonth: function(){

        return appData.mission / appData.getBudgetDay(appData.budgetMonth);
    
    },
    getStatusIncome: function(){

        if(appData.budgetDay >= 1200){
            return "У вас высокий уровень дохода";
        }
        if(appData.budgetDay >= 600 && appData.budgetDay < 1200){
            return "У вас средний уровень дохода";
        }
        if(appData.budgetDay <= 600 && appData.budgetDay >=0){
            return "К сожалению у вас уровень дохода ниже среднего";
        }
        if(appData.budgetDay < 0){
            return "Что то пошло не так";
        }
    
    }
    



};
appData.asking();
appData.getBudgetDay();
console.log("Расходы за месяц " + appData.getExpensesMonth());
console.log("Цель будет достигнута через "+ appData.getTargetMonth() + "Месяцев");
console.log(appData.getStatusIncome());

