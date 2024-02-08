function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== 'number') {
      return 'invalid input';
    }
    let totalIncome = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        totalIncome += arr[i] * 0.8;
      } else {
        totalIncome += arr[i];
      }
    }
    const savings = totalIncome - livingCost;
    if (savings === 0) {
      return 0;
    } else if (savings > 0) {
      return savings;
    } else {
      return 'earn more';
    }
  }
  console.log(monthlySavings([1000, 2000, 3000], 5400));
  console.log(monthlySavings([1000, 2000, 2500], 5000)); 
  console.log(monthlySavings([900, 2700, 3400], 10000)); 
  console.log(monthlySavings(100, [900, 2700, 3400])); 
  
  
  