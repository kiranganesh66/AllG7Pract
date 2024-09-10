// src/cal.js
class Calculator {
    constructor(presenter = console.log) {
        this.operators = {};
        this.presenter = presenter;
        this.formatter = formatters.inline; 
    }

    execute(value1, oprName, value2) {
        if (this.operators[oprName]) {
            const opr = this.operators[oprName];
            const result = opr(value1, value2);
            const output = this.formatter(value1, oprName, value2, result);
            this.presenter(output); 
            return output;
        } else {
            throw new Error(`Invalid operation ${oprName}`);
        }
    }

    addOperator(operator, ...names) {
        for (let name of names) {
            this.operators[name] = operator;
        }
    }

    setFormatter(formatter) {
        this.formatter = formatter;
    }

    setPresenter(presenter) {
        this.presenter = presenter 
    }
}

const formatters = {
    inline: (v1, o, v2, r) => `${v1} ${o} ${v2} = ${r}`,
    raw: (_, __, ___, result) => result,
    function: (v1, o, v2, r) => `${o}(${v1}, ${v2}) = ${r}`,
};

module.exports = { Calculator, formatters };




























// describe("Presenter", function () {
//     it("Presenting in UI", function () {
        
//         calc.setPresenter((message) => { output = message; });

//         calc.addOperator((a, b) => a + b, "plus");
//         calc.execute(5, "plus", 3);

//         expect(output).to.equal("5 plus 3 = 8");
//     });
// });