var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(name, cost, idNumber) {
        this.name = name;
        this.cost = cost;
        this.idNumber = idNumber;
    }
    Product.prototype.getInfo = function () {
        return this.name + " \u0446\u0456\u043D\u0430 " + this.cost + " \u0448\u0442\u0440\u0438\u0445\u043A\u043E\u0434: " + this.idNumber;
    };
    Object.defineProperty(Product.prototype, "className", {
        get: function () {
            return "item";
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var Food = /** @class */ (function (_super) {
    __extends(Food, _super);
    function Food(name, cost, idNumber, calories) {
        var _this = _super.call(this, name, cost, idNumber) || this;
        _this.calories = calories;
        return _this;
    }
    Food.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u043A\u0430\u043B\u043E\u0440\u0456\u0439\u043D\u0456\u0441\u0442\u044C: " + this.calories;
    };
    Object.defineProperty(Food.prototype, "className", {
        get: function () {
            return "food-item";
        },
        enumerable: true,
        configurable: true
    });
    return Food;
}(Product));
var Close = /** @class */ (function (_super) {
    __extends(Close, _super);
    function Close(name, cost, idNumber, size) {
        var _this = _super.call(this, name, cost, idNumber) || this;
        _this.size = size;
        return _this;
    }
    Close.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u0440\u043E\u0437\u043C\u0456\u0440: " + this.size;
    };
    Object.defineProperty(Close.prototype, "className", {
        get: function () {
            return "close-item";
        },
        enumerable: true,
        configurable: true
    });
    return Close;
}(Product));
///--------------
var Candy = /** @class */ (function (_super) {
    __extends(Candy, _super);
    function Candy(name, cost, idNumber, calories, variety) {
        var _this = _super.call(this, name, cost, idNumber, calories) || this;
        _this.variety = variety;
        return _this;
    }
    Candy.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u0440\u0456\u0437\u043D\u043E\u0432\u0438\u0434 " + this.variety;
    };
    Object.defineProperty(Candy.prototype, "className", {
        get: function () {
            return "candy-item";
        },
        enumerable: true,
        configurable: true
    });
    return Candy;
}(Food));
var Fruit = /** @class */ (function (_super) {
    __extends(Fruit, _super);
    function Fruit(name, cost, idNumber, calories, country) {
        var _this = _super.call(this, name, cost, idNumber, calories) || this;
        _this.country = country;
        return _this;
    }
    Fruit.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u043A\u0440\u0430\u0457\u043D\u0430 \u0432\u0438\u0440\u043E\u0431\u043D\u0438\u043A - " + this.country;
    };
    Object.defineProperty(Fruit.prototype, "className", {
        get: function () {
            return "fruit-item";
        },
        enumerable: true,
        configurable: true
    });
    return Fruit;
}(Food));
///---------------
var Socks = /** @class */ (function (_super) {
    __extends(Socks, _super);
    function Socks(name, cost, idNumber, size, color) {
        var _this = _super.call(this, name, cost, idNumber, size) || this;
        _this.color = color;
        return _this;
    }
    Socks.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u043A\u043E\u043B\u0456\u0440: " + this.color;
    };
    Object.defineProperty(Socks.prototype, "className", {
        get: function () {
            return "socks-item";
        },
        enumerable: true,
        configurable: true
    });
    return Socks;
}(Close));
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    function Shirt(name, cost, idNumber, size, color, pattern) {
        var _this = _super.call(this, name, cost, idNumber, size) || this;
        _this.color = color;
        _this.pattern = pattern;
        return _this;
    }
    Shirt.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u043A\u043E\u043B\u0456\u0440: " + this.color + " \u0432\u0456\u0437\u0435\u0440\u0443\u043D\u043E\u043A: " + this.pattern;
    };
    Object.defineProperty(Shirt.prototype, "className", {
        get: function () {
            return "shirt-item";
        },
        enumerable: true,
        configurable: true
    });
    return Shirt;
}(Close));
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress(name, cost, idNumber, size, length) {
        var _this = _super.call(this, name, cost, idNumber, size) || this;
        _this.length = length;
        return _this;
    }
    Dress.prototype.getInfo = function () {
        var base = _super.prototype.getInfo.call(this);
        return base + " \u0434\u043E\u0432\u0436\u0438\u043D\u0430: " + this.length;
    };
    Object.defineProperty(Dress.prototype, "className", {
        get: function () {
            return "dress-item";
        },
        enumerable: true,
        configurable: true
    });
    return Dress;
}(Close));
var PrintInHtml = /** @class */ (function () {
    function PrintInHtml() {
    }
    PrintInHtml.print = function (div, data) {
        var ul = document.createElement("ul");
        for (var i = 0; i < data.length; i++) {
            var li = document.createElement("li");
            li.innerHTML = data[i].getInfo();
            li.className = data[i].className;
            ul.appendChild(li);
        }
        div.appendChild(ul);
    };
    return PrintInHtml;
}());
window.onload = function () {
    var items = [];
    items.push(new Candy("Milka", 25, "idf34D", 500, "молочний шоколад"));
    items.push(new Candy("Світоч", 20, "idRjnvk4", 475, "екстра-чорний шоколад"));
    items.push(new Socks("Puma", 40, "Gk7593", 39, "блакитний"));
    items.push(new Socks("Nike", 50, "hf049", 40, "жовтий"));
    items.push(new Fruit("Яблуко", 10, "j4ld8", 30, "Україна"));
    items.push(new Shirt("Футболка", 100, "K69400", 45, "білий-чорний", "клітинка"));
    items.push(new Dress("Mango", 300, "Ds694", 36, "міді"));
    var div = document.getElementById("section");
    PrintInHtml.print(div, items);
};
