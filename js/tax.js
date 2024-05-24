function calculateTax(income, status) {
        let tax = 0;
        status ="single" || "married"
        if (status === "single") {
            
            if (income <= 10000) {
                tax = income * 0.10;
            }
            else if (income <= 50000) {
                tax = 10000 * 0.10 + (income - 10000) * 0.20;
    
            }
             else {
                tax = 10000 * 0.10 + 40000 * 0.20 + (income - 50000) * 0.30;
            }
        } 
    
        else if (status === "married") {
            if (income <= 20000) {
                tax = income * 0.10;
            } 
            else if (income <= 100000) {
                tax = 20000 * 0.10 + (income - 20000) * 0.20;
            } 
            else {
                tax = 20000 * 0.10 + 80000 * 0.20 + (income - 100000) * 0.30;
                }
        }
        return tax
    }
    console.log(calculateTax(1000));
    
    
    function calculateTax(income,status) {
        let tax
    }
    