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

    // Getter & Setter for 'tax'
    get tax() {
        return this._tax;
    }
    set tax(tax) {
        this._tax = tax;
    }

    // Function to verify data client and calculate client taxes
    calculateTax() {
        if (!this._tax) { // Alert message for empty data client
            console.log("El cliente no tiene información de impuestos.");
            return 0;
        }

        const tax = this._tax;
        return (tax.aga - tax.deductions) * 0.21; // Formula to calculate taxes
    }
}

export default Client; // Used to export the class