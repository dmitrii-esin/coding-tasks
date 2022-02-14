// Интересная задача с датами:
// https://leetcode.com/problems/number-of-days-between-two-dates/

// new Date(1) - new Date(2) / 1000 / 60 / 60 / 24 - НЕ ПОЙДЕТ НА ИНТЕРВЬЮ

// год, номер которого кратен 400, — високосный;
// остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100);
// остальные годы, номер которых кратен 4, — високосные[5].


const getDaysInMonth = (isLeap) => ({
    0: 31,
    1: isLeap ? 29 : 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31
});

 

const checkIsLeapYear = (year) => {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
}

 

const getDays = (y, m, d) => {
        let days = 0;
        for (let i = 1970; i < +y; i++) {
            days += checkIsLeapYear(i) ? 366 : 365; 
        }
        for (let i = 0; i < +m - 1; i++) {
            days += getDaysInMonth(checkIsLeapYear(+y))[i]; 
        }
        return days + parseInt(d, 10);
    }

 

var daysBetweenDates = function(date1, date2) {
    const [y1, m1, d1] = [date1.slice(0, 4), date1.slice(5, 7), date1.slice(8)];
    const [y2, m2, d2] = [date2.slice(0, 4), date2.slice(5, 7), date2.slice(8)];
    
    let days1 = getDays(y1, m1, d1);
    let days2 = getDays(y2, m2, d2);
    
    return Math.abs(days2 - days1);
};