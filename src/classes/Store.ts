export class Store {
    private _number: string;
    private _name: string;
  
    constructor();
    constructor(numberValue?: string, nameValue?: string) {
      this._number = numberValue!;
      this._name = nameValue!;
    }
  
    private greet(): string {
      return "Hello, my name is " + this._name + " and I have the number: ";
    }

    setNumber(n: string){
      this._number = n;
    }

    getNumber(): string{
      return this._number;
    }

    setName(n: string){
      this._name = n;
    }

    getName(): string{
      return this._name;
    }
  }