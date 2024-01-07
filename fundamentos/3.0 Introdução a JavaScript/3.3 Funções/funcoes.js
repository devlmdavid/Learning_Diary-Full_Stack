const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
function addCustomer(customer) {
    if (typeof customer != 'string') {
        return 'O parâmetro deve ser do tipo string';
    }
};
trybeBankCustomers(addCustomer, 'joão');