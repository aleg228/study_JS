
function secretNumber() {

    let y = 5;
    let x = +prompt("Угадай число от 1 до 100?");
    // console.log(x);
    // console.log(typeof x);
    if(x == 0 ){

        console.log("Конец игры");
        return alert("Конец игры");
        
    }
    if( x > y){

        console.log("Загаданное число меньше");
        alert("Загаданное число меньше");
        return secretNumber()
    }
    if( x < y){

        console.log("Загаданное число больше");
        alert("Загаданное число больше");
        return secretNumber()
    }
    if(x == y){

        console.log("Вы победили!");
        return alert("Вы победили");
    }
    if(x !== isNaN() || x === ""){


        console.log("Введите число");
        alert("Введите число");
        return secretNumber()
    }
    
}

secretNumber();