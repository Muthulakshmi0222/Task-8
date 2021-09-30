var Circle =  (function () {
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getColor = function () {
        return this.color;
    };
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    Circle.prototype.toString = function () {
        return "Radius: " + this.radius + " Color: " + this.color;
    };
    Circle.prototype.getArea = function () {
        return (2 * (Math.PI) * this.radius);
    };
    Circle.prototype.getCircumference = function () {
        return (2 * this.radius);
    };
    return Circle;
}());
var c1 = new Circle();
console.log("Constructor with no parameter: " + c1.toString());
var c2 = new Circle(3.5);
console.log("Constructor with one parameter: " + c2.toString());
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after set of Radius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after set of Color: " + c3.getColor());
console.log(c3.toString());
console.log("Area of the circle: " + c3.getArea());
console.log("Circumference of the circle: " + c3.getCircumference());