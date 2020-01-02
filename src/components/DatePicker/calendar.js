const day = 31;

const monthList = [0, -2, 0, -1, 0, -1, 0, 0, -1, 0, -1, 0]

function getDayOfMonth(date) {
  let year = date.year
  let month = date.month
  // 闰年二月
  if (month === 1 && !year % 4) {
    return day + monthList[month] + 1
  }
  // 平年、普通月
  return day + monthList[month]
}

export default {
  getDayOfMonth: getDayOfMonth
}