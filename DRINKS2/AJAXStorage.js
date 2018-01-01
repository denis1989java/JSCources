class TAJAXStorage {
    constructor() {
        this.ajaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";
    }


    addValue(key, value) {
        $.ajax(this.ajaxHandlerScript, {
            type: 'POST', dataType: 'json',
            data: {
                f: 'INSERT',
                n: key,
                v: JSON.stringify(value)
            },
            success: suc,
            error: err
        });
    }

    getValue(key) {
        $.ajax(this.ajaxHandlerScript, {
            type: 'POST', dataType: 'json',
            data: {
                f: 'READ',
                n: key
            },
            success: suc1,
            error: err1
        });
    }
}

function suc(data) {
    if(data['result']===""){
        alert(data['error'])
    }else{
        alert("напиток добавлен успешно");
    }
}

function err(data) {
    alert("error: "+ data['error']);
}

function suc1(drinkName) {
    if(drinkName.result===""){
        alert("такой напиток не существует или введенное имя не правильное");
    }else{
        let drink=JSON.parse(drinkName.result);
        alert(drink['имя'] + ': ' + '\n' + 'алкогольный: ' + drink['алкогольный'] + '\n' + 'цвет: ' + drink['цвет'] + '\n' + 'рецепт приготовления: ' + drink['рецепт приготовления']);
    }
}

function err1(data) {
    alert("error: "+ data['error']);
}
let drinkStorage = new TAJAXStorage();

function addDrink() {
    let drinkName;
    do {
        drinkName = prompt("Введите название напитка");
    } while (!drinkName || drinkName.length === 0);
    let drink = {};
    drink['имя']=drinkName;
    drinkName = "dr_" + drinkName;
    let alco = confirm("Напиток алкогольный?");
    let color;
    do {
        color = prompt("Какого цвета напиток");
    } while (!color || color.length === 0);
    let recept;
    do {
        recept = prompt("Какой рецепт");
    } while (!recept || recept.length === 0);

    if (alco) {
        drink['алкогольный'] = 'да';
    } else {
        drink['алкогольный'] = 'нет';
    }
    drink['цвет'] = color;
    drink['рецепт приготовления'] = recept;
    if(drinkName && drink){
        drinkStorage.addValue(drinkName, drink);
    }
}

function getDrink() {
    let drinkName;
    do {
        drinkName = prompt("Введите название напитка");
    } while (!drinkName || drinkName.length === 0);
    drinkName = "dr_" + drinkName;
    if(drinkName){
        drinkStorage.getValue(drinkName)
    }
}