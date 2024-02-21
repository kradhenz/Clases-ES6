"use strict";

require("core-js/modules/es.number.to-fixed.js");
var _client = _interopRequireDefault(require("./client.js"));
var _taxes = _interopRequireDefault(require("./taxes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// define tax data for each client in array
var customerData = [
// aga: Annual Gross Amount
{
  name: "Jane",
  aga: 100000,
  deductions: 20000
}, {
  name: "William",
  aga: 150000,
  deductions: 30000
}, {
  name: "Alba",
  aga: 80000,
  deductions: 10000
}];

// Create customer instances and assign tax data
var customers = customerData.map(function (data) {
  var taxes = new _taxes["default"](data.aga, data.deductions);
  return new _client["default"](data.name, taxes);
});

// show the tax calculated for each client
customers.forEach(function (customer) {
  console.log("El impuesto a pagar por ".concat(customer.name, " es: $").concat(customer.calculateTax().toFixed(2)));
});