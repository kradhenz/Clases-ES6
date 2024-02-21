class Client {
    constructor(name, tax) {
        this._name = name; 
        this._tax = tax;
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

var client1 = new Client("Roger", 15000);
console.log(client1.calculateTax());