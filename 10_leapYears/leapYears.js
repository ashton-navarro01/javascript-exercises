const leapYears = function(year) {
    if(year % 4 == 0 && (!(year % 100 == 0) || year % 400 == 0)) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;


// Leap years are years divisible by four (like 1984 and 2004). 
// However, years divisible by 100 are not leap years (such as 1800 and 1900) 
// unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 

// Case 1: Leap year divisible by 400 and divisible by 4 = True
// Case 2: Leap year not divisible by 100 but divisible by 400 and are divisible by 4 = True
// Case 3: Leap year not divisible by 100 and 400 but are divisible by 4 = True
// Case 4: Leap year divisible by 100 but not 400 = False
// Case 5: Leap year not divisible by four (base case) = False