var size = prompt("Якого розміру морозиво ви бажаєте? 1 - Маленьке (10грн) | 2 - Велике (25грн). Введіть обране число: ");
var sum = 0;
if (!size) {
    size = prompt("Оберіть, будь ласка розмір морозива.");
}
if (+size == 1) {
    sum += 10;
}
else if (+size == 2) {
    sum += 25;
}
else {
    size = prompt("Оберіть, будь ласка розмір морозива.");
}
var a = prompt("Оберіть начинку: 1 - шоколад | 2 - карамель | 3 - ягоди");
switch (a) {
    case "1":
        {
            sum += 5;
        }
        break;
    case "2":
        {
            sum += 6;
        }
        break;
    case "3":
        {
            sum += 10;
        }
        break;
    default:
        {
            sum += 5;
            alert("Ми додали в морозиво шоколадну крихту.");
        }
        break;
}
alert("\u0421\u0443\u043C\u0430 \u0437\u0430\u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F \u0441\u043A\u043B\u0430\u0434\u0430\u0454 " + sum + " \u0433\u0440\u043D.");
