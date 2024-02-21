import Client from './client.js';
import Taxes from './taxes.js';

const taxClient1 = new Taxes(100000, 20000);
const client1 = new Client("Jane");
client1.tax = taxClient1;

console.log(`El impuesto a pagar por ${client1.name} es: $${client1.calculateTax().toFixed(2)}`);

