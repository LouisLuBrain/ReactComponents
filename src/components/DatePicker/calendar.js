const day = 31;

const monthList = [0, -2, 0, -1, 0, -1, 0, 0, -1, 0, -1, 0]

function getDayOfMonth(year, month) {
  // 闰年二月
  if (month === 1 && (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0)) {
    return day + monthList[month] + 1
  }
  // 平年、普通月
  return day + monthList[month]
}

function getWeekDay(date) {
  let year = date.year
  let month = date.month
  return new Date(year, month, 1).getDay()
}

function getPreDayOfMonth(year, month) {
  return month === 0 
    ? getDayOfMonth(year - 1, 11) 
    : getDayOfMonth(year, month - 1)
}
function getNextDayOfMonth(year, month) {
  return month === 11 
    ? getDayOfMonth(year + 1, 0) 
    : getDayOfMonth(year, month + 1)
}

export default {
  getDayOfMonth: getDayOfMonth,
  getPreDayOfMonth: getPreDayOfMonth,
  getNextDayOfMonth: getNextDayOfMonth,
  getWeekDay: getWeekDay
}