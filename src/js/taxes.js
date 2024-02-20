class Taxes {
    constructor(aga, deductions) {
        this.aga = aga;
        this.deductions = deductions;
    }

    // Getter & Setter for 'aga'
    get aga() {
        return this.aga;
    }
    set aga(newAga) {
        this.aga = newAga;
    }

    // Getter & Setter for 'deductions'
    get deductions() {
        return this.deductions;
    }
    set deductions(newDeductions) {
        this.deductions = newDeductions;
    }
}