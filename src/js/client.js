//const resta = (a, b) => a - b
//const multiplicacion = (a, b) => a * b


class Client {
    constructor(name, tax) {
        this._name = name; // Cambiado de name a _name
        this._tax = tax; // Cambiado de tax a _tax
    }

    // Getter & Setter for 'name'
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    
    // Getter & Setter for 'tax'
    get tax() {
        return this._tax;
    }
    set tax(newTax) {
        this._tax = newTax;
    }

    calculateTax() {
        return this.tax;
    }
}

let client1 = new Client("Jorge", 15000);
console.log(client1);

//export { resta, multiplicacion }
