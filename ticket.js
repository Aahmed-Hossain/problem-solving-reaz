function calculateMoney(ticketSale){
    const ticketPrice = 120;
    const totalSecurity = 1;
    const SecuritySalary = 500;
    const securityExpense = (totalSecurity*SecuritySalary);
    const totalStaff = 8;
    const StaffLunchAmount =50;
    const staffExpense = (totalStaff*StaffLunchAmount);
    const restAmount = ((ticketSale*ticketPrice) - (securityExpense+staffExpense))
    if(ticketSale < 0){
       return `Invalid Number`
    }else{
       return restAmount;
    }
}
calculateMoney(10);