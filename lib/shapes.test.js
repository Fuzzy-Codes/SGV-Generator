const { Square, Triangle, Circle } = require("./shapes");

describe("Circle", () => {
    test("create orange circle object", () => {
        const expectedSvg = '<circle cx="150" cy="100" r="80" fill="orange" />';
        const circle = new Circle();
        circle.setColor("orange");
        const actualSvg = circle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});

describe("Triangle", () => {
    test("create blue triangle object", () => {
        const expectedSvg =
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const triangle = new Triangle();
        triangle.setColor("blue");
        const actualSvg = triangle.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});
describe("Square", () => {
    test("create purple square object", () => {
        const expectedSvg =
            '<rect x="90" y="40" width="120" height="120" fill="purple" />';
        const square = new Square();
        square.setColor("purple");
        const actualSvg = square.render();
        expect(actualSvg).toEqual(expectedSvg);
    });
});