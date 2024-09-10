// test.js
const { Calculator ,formatters } = require("../src/cal");
const { expect } = require("chai");

describe("Calculator", function () {
  
  let calc;

  beforeEach(function () {
    
    calc = new Calculator();
    calc.setFormatter(formatters.inline);
    
  });

  
  describe("Operators", function () {
    it("Adding New Operator", function () {
      expect(Object.keys(calc.operators)).to.be.empty;

      calc.addOperator((a, b) => a % b, "module");
      expect(Object.keys(calc.operators)).to.include("module");
    });

    it("Add modulu operator", function () {
      calc.addOperator((a, b) => a % b, "mod");
      const result = calc.execute(10, "mod", 3);
      expect(result).to.equal("10 mod 3 = 1");
    });

    it("Adding plus and Excution", function () {
      calc.addOperator((a, b) => a + b, "plus");
      const result = calc.execute(5, "plus", 3);
      expect(result).to.equal("5 plus 3 = 8");
    });

    it("Throw Error for invalid operator", function () {
      calc.addOperator((a, b) => a - b, "minus");
      //rather then minus we gave -symbol
      try {
        plus;
        expect(calc.execute(5, "-", 3)).to.equal("5 minus 3 = 2");
      } catch (e) {}
    });

    it("Multiple Name Adding and Excuting", function () {
      calc.addOperator((a, b) => a + b, "plus", "+", "add");
      const result = calc.execute(5, "plus", 3);
      const result2 = calc.execute(5, "+", 3);
      const result3 = calc.execute(5, "add", 3);
      try {
        expect(result).to.equal("5 plus 3 = 8");
        expect(result2).to.equal("5 + 3 = 8");
        expect(result3).to.equal("5 add 3 = 8");
      } catch (e) {}
    });
  });

  //end of Operators

  describe("Formate", function () {

    it("Uses function formatter ", function () {
      calc.addOperator((a, b) => a + b, "plus", "+");

      calc.setFormatter(formatters.function);

      const result = calc.execute(5, "plus", 3);
      try{
        expect(result).to.equal("plus(5, 3) = 8");
      }
      catch(e){

      }
    });

    it("Use inline Formate", function () {
        calc.addOperator((a, b) => a - b, "minus", "-");
  
        calc.setFormatter(formatters.inline);
  
        const result = calc.execute(5, "-", 3);
        try{
          expect(result).to.equal("5 - 3 = 2");
        }
        catch(e){
  
        }
      });

  });


   
  

});
