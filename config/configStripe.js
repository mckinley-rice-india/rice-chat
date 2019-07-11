const keyPublishable = 'pk_test_W1IYLYrlNjCcV4Vzmh3lZnUM004OkkRgBh';
const keySecret = 'sk_test_GdYnmIDy8vpoGB13R0gw9RGr00S0Ciroy8';
const stripe = require("stripe")(keySecret);

module.exports=stripe;