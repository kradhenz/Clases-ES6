class Client {
    constructor(name, tax) {
        this._name = name;
        this._tax = tax;
    }
    // Getter & Setter for 'name'
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    calculateTax() {
        if (!this._tax) {
            console.log("El cliente no tiene información de impuestos.");
            return 0;
        }

        const tax = this._tax;
        return (tax.aga - tax.deductions) * 0.21;
    }
    set tax(tax) {
        this._tax = tax;
    }
}

export default Client;