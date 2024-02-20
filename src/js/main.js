/*import { resta, multiplicacion } from './client.js'
import "./taxes.js"

console.log('resta', resta(50, 30))

console.log('multiplicacion', multiplicacion(10, 5))*/

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
console.log(client1.calculateTax());