class Circle {
    constructor(radius, color) {
        this.radius = radius || 1;
        this.color = color || "red"
    }

    getRadius() {
        return this.radius
    }

    setRadius(value) {
        this.radius = value;
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    setColor(value) {
        this.color = value;
        return this.color;
    }
    toString() {
        return(`Circle [radius = ${this.radius},color = ${this.color}]`)
    }
    getArea() {
        let a = Math.PI*(this.radius**2)
        return(`Area = ${a.toFixed(2)}`)
    }
    getCircumference() {
        let circumference = 2 * Math.PI * this.radius;
        return (`Circumference = ${circumference.toFixed(2)}`)
    }

}

let round1 = new Circle();
let round2 = new Circle(7,"Blue");
let round3 = new Circle(8, "Pink");

console.log(round1);
console.log(round2);
console.log(round3);
console.log(round1.getRadius());
console.log(round2.getRadius());
console.log(round3.getRadius());
console.log(round1.getColor());
console.log(round2.getColor());
console.log(round3.getColor());
console.log(round1.setRadius(2));
console.log(round2.setRadius(6));
console.log(round3.setRadius(5));
console.log(round1.setColor("orange"));
console.log(round2.setColor("black"));
console.log(round3.setColor("white"));
console.log(round1);
console.log(round2);
console.log(round3);
console.log(round1.toString());
console.log(round2.toString());
console.log(round3.toString());
console.log(round1.getArea());
console.log(round2.getArea());
console.log(round3.getArea());
console.log(round1.getCircumference());
console.log(round2.getCircumference());
console.log(round3.getCircumference());