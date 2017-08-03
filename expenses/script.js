var expenses = [
        {expense: "verizon", cost: 75},
        {expense: "electric", cost: 75},
        {expense: "safeAuto", cost: 75},
        {expense: "xfinity", cost: 75},
        {expense: "rent", cost: 475},
        {expense: "gas", cost: 100},
        {expense: "food", cost: 200},
    ];
    
var total = 0;
    expenses.forEach(function(expense){
       total += expense.cost;
       console.log(expense.expense + " = " + expense.cost)
        // console.log(total);
        
    })
    
    console.log("total = " +total)