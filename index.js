const inquirer = require("inquirer");
const SVG = require("./lib/svg");
const { Circle, Triangle, Square } = require("./lib/shapes");
const { writeFile } = require("fs/promises");

const questions = [
    {
        name: "text",
        type: "input",
        message:
            "What would you like your SVG to say? (3 characters or less)",
        validate: (textInput) =>
            textInput.length <= 3 ||
            "Please enter 3 or less characters",
    },
    {
        name: "textColor",
        type: "input",
        message: "Enter a text color",
    },
    {
        name: "shape",
        type: "list",
        message: "Select a shape for your SVG.",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Enter a shape color",
    },
]


const init = () => {
    inquirer.prompt(questions).then((data) => {
        let shape;
        if (data.shape === "Circle") {
            shape = new Circle();
        }
        if (data.shape === "Square") {
            shape = new Square();
        }
        if (data.shape === "Triangle") {
            shape = new Triangle();
        }
        console.log(shape)
    })
}

init()

    
   
 