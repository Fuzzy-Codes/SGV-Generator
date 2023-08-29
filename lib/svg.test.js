const SVG = require("./svg");

test("should render svg", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
    const svg = new SVG();
    expect(svg.render()).toEqual(expectedSvg);
});

test("should add text to svg", () => {
    const expectedSvg =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">ABC</text></svg>';
    const svg = new SVG();
    svg.setText("ABC", "blue");
    expect(svg.render()).toEqual(expectedSvg);
});