import Client from './client.js';
import Taxes from './taxes.js';

// Evaluate only one client
const taxClient1 = new Taxes(100000, 20000);
const client1 = new Client("Thomas");
client1.tax = taxClient1;

console.log(`One client test:\n El impuesto a pagar por ${client1.name} es: $${client1.calculateTax().toFixed(2)}\n`);

// Define the tax data for each customer in an array
const customerData = [
    { name: "Jane", aga: 100000, deductions: 20000 },
    { name: "William", aga: 150000, deductions: 30000 },
    { name: "Alba", aga: 80000, deductions: 10000 }
];

// Create customer instances and assign tax data
const customers = customerData.map(data => {
    const taxes = new Taxes(data.aga, data.deductions);
    return new Client(data.name, taxes);
});

// show the tax calculated for each customer
console.log('Multiple customers test:');
customers.forEach(customer => {
    console.log(` El impuesto a pagar por ${customer.name} es: $${customer.calculateTax().toFixed(2)}`);
});