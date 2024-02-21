class Taxes {
    constructor(aga, deductions) { // aga: Annual Gross Amount
        this._aga = aga;
        this._deductions = deductions;
    }
    // Getter & Setter for 'aga'
    get aga() {
        return this._aga;
    }
    set aga(aga) {
        this._aga = aga;
    }
    // Getter & Setter for 'deductions'
    get deductions() {
        return this._deductions;
    }
    set deductions(deductions) {
        this._deductions = deductions;
    }
}

export default Taxes; // Used to export the class