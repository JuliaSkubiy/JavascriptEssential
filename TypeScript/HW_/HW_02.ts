interface AnimalMove {
    move: () => string;
}

class Cat implements AnimalMove {

    constructor(public breed: string, public color: string){}

    move(): string{
        return "Всі коти тихо підкрадаються на чотирьох лапах.";
    }
}

class Fish implements AnimalMove{
    move(): string{
        return "Кожна риба плаває. Це їх сутність.";
    }
}

class Bird implements AnimalMove{
    move(): string{
        return "Птахи літають високо в небі, а на землі кумедно стрибають на двох лапках.";
    }
}

let Leopold = new Cat("персидський кіт", "рудий");

console.log(Leopold.move());