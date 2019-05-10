var Cat = (function () {
    function Cat(breed, color) {
        this.breed = breed;
        this.color = color;
    }
    Cat.prototype.move = function () {
        return "Всі коти тихо підкрадаються на чотирьох лапах.";
    };
    return Cat;
}());
var Fish = (function () {
    function Fish() {
    }
    Fish.prototype.move = function () {
        return "Кожна риба плаває. Це їх сутність.";
    };
    return Fish;
}());
var Bird = (function () {
    function Bird() {
    }
    Bird.prototype.move = function () {
        return "Птахи літають високо в небі, а на землі кумедно стрибають на двох лапках.";
    };
    return Bird;
}());
var Leopold = new Cat("персидський кіт", "рудий");
console.log(Leopold.move());
