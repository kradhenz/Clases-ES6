import Client from './client.js';
import Taxes from './taxes.js';

// define tax data for each client in array
const customerData = [ // aga: Annual Gross Amount
    { name: "Jane", aga: 100000, deductions: 20000 },
    { name: "William", aga: 150000, deductions: 30000 },
    { name: "Alba", aga: 80000, deductions: 10000 }
];

// Create customer instances and assign tax data
const customers = customerData.map(data => {
    const taxes = new Taxes(data.aga, data.deductions);
    return new Client(data.name, taxes);
});

// show the tax calculated for each client
customers.forEach(customer => {
    console.log(`El impuesto a pagar por ${customer.name} es: $${customer.calculateTax().toFixed(2)}`);
});