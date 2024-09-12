
function calculateTax(income, expenses){
    if(income < expenses )
        return "Invalid Input"
    

    const money = income - expenses
    const tax = money * .20
    return tax
}

