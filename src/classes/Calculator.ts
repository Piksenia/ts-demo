export class Calculator {
    firstNumber: number;
    secondNumber: number;
  
    constructor(firstNumberValue: number, secondNumberValue: number) {
      this.firstNumber = firstNumberValue;
      this.secondNumber = secondNumberValue;
    }
  
    addition(): number {
      return this.firstNumber + this.secondNumber;
    }

    subtraction(): number{
        return this.firstNumber - this.secondNumber;
    }

    multiplication(): number{
        return this.firstNumber * this.secondNumber;
    }

    division(): number{
        return this.firstNumber / this.secondNumber;
    }
  }