const day = 31;

const monthList = [0, -2, 0, -1, 0, -1, 0, 0, -1, 0, -1, 0]

function getDayOfMonth(month, year) {
  // leap year Feb
  if (month === 1 
      && ((year % 400 === 0)
        || (year % 100 !== 0
        && year % 4 === 0))
      ) {
    return day + monthList[month] + 1
  }
  // normal year
  return day + monthList[month]
}
// get the day of the first day
function getWeekDay(month, year, day = 1) {
  return new Date(year, month, day).getDay()
}
// pre month
function getPreDayOfMonth(month, year) {
  return month === 0 
    ? getDayOfMonth(11, year - 1) 
    : getDayOfMonth(month - 1, year)
}
/**
 * next month
 */
function getNextDayOfMonth(month, year) {
  return month === 11 
    ? getDayOfMonth(0, year + 1) 
    : getDayOfMonth(month + 1, year)
}
/**
 * generate days list of the chosen month
 * @param {Number | Date} month 
 * @param {Number} [year=0]
 * @returns {Array}
 */
function genDayOfMonth(month, year = 0) {
  if(month instanceof Date || year === 0) {
    return genDayOfMonth(month.getMonth(), month.getFullYear())
  }
  else {
    let pD = getPreDayOfMonth(month, year)
    let dD = getDayOfMonth(month, year)
    let firstD = getWeekDay(month, year)
    let lastD = getWeekDay(month, year, dD)
    // push the calender data into the array
    let days = [], preD = firstD, nextD = dD + firstD
    for (;dD;dD--) days.unshift(dD)
    for (;firstD > 0; firstD--) days.unshift(pD--)
    for (let i = 0;lastD < 6; lastD++) days.push(++i);
    
    return {days, preD, nextD}
  }
}
function dateFormating(date) {
  let y = date.getFullYear(), 
  m = date.getMonth() + 1,
  d = date.getDate()
  return [y, m, d]
}
export default {
  genDayOfMonth: genDayOfMonth,
  dateFormating: dateFormating
}