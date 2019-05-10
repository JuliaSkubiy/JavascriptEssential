interface Write{
    getInfo: () => string;
    className: string;
}

abstract class Product implements Write{
    private name: string;
    private cost: number;
    private idNumber: string;

    constructor(name: string, cost: number, idNumber: string){
        this.name = name;
        this.cost = cost;
        this.idNumber = idNumber;
    }

    getInfo(): string{
        return  `${this.name} ціна ${this.cost} штрихкод: ${this.idNumber}`;
    }
    get className(){
        return "item";
    }
}

abstract class Food extends Product{
    private calories: number;

    constructor(name: string, cost: number, idNumber: string, calories: number){
        super(name, cost, idNumber);
        this.calories = calories;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} калорійність: ${this.calories}`;
    }

    get className(){
        return "food-item";
    }
}

abstract class Close extends Product{
    private size: number;

    constructor(name: string, cost: number, idNumber: string, size: number){
        super(name, cost, idNumber);
        this.size = size;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} розмір: ${this.size}`;
    }

    get className(){
        return "close-item";
    }
}


///--------------
class Candy extends Food{
    private variety: string;

    constructor(name: string, cost: number, idNumber: string, calories: number, variety: string){
        super(name, cost, idNumber, calories);
        this.variety = variety;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} різновид ${this.variety}`;
    }

    get className(){
        return "candy-item";
    }
}

class Fruit extends Food{
    private country: string;

    constructor(name: string, cost: number, idNumber: string, calories: number, country: string){
        super(name, cost, idNumber, calories);
        this.country = country;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} країна виробник - ${this.country}`;
    }

    get className(){
        return "fruit-item";
    }
}


///---------------

class Socks extends Close{
    private color: string;

    constructor(name: string, cost: number, idNumber: string, size: number, color: string){
    super(name, cost, idNumber, size);
        this.color = color;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} колір: ${this.color}`;
    }

    get className(){
        return "socks-item";
    }
}

class Shirt extends Close{
    private color: string;
    private pattern: string;

    constructor(name: string, cost: number, idNumber: string, size: number, color: string, pattern: string){
    super(name, cost, idNumber, size);
        this.color = color;
        this.pattern = pattern;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} колір: ${this.color} візерунок: ${this.pattern}`;
    }

    get className(){
        return "shirt-item";
    }
}

class Dress extends Close{
    private length: string;

    constructor(name: string, cost: number, idNumber: string, size: number, length: string){
    super(name, cost, idNumber, size);
        this.length = length;
    }

    getInfo(): string{
        let base = super.getInfo();
        return `${base} довжина: ${this.length}`;
    }

    get className(){
        return "dress-item";
    }
}


class PrintInHtml {
    static print (div: HTMLDivElement, data: Write[]): void{
        let ul = document.createElement("ul");

        for (let i = 0; i < data.length; i++){
            let li = document.createElement("li");
            li.innerHTML = data[i].getInfo();
            li.className = data[i].className;

            ul.appendChild(li);
        }

        div.appendChild(ul);
    }
}

window.onload = function(){
    let items: Write[] = [];
    items.push(new Candy("Milka", 25, "idf34D", 500, "молочний шоколад"));
    items.push(new Candy("Світоч", 20, "idRjnvk4", 475, "екстра-чорний шоколад"));
    items.push(new Socks("Puma", 40, "Gk7593", 39, "блакитний"));
    items.push(new Socks("Nike", 50, "hf049", 40, "жовтий"));
    items.push(new Fruit("Яблуко", 10, "j4ld8", 30, "Україна"));
    items.push(new Shirt("Футболка", 100, "K69400", 45, "білий-чорний", "клітинка"));
    items.push(new Dress("Mango", 300, "Ds694", 36, "міді"));

    let div = <HTMLDivElement> document.getElementById("section");
    PrintInHtml.print(div, items);
}