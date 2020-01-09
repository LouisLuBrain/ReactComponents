
function timeFormating(date, config) {
  let res = {H: date.getHours(), M: date.getMinutes(), S: date.getSeconds()}
  return config.map(v => {
    return res[v] < 10 ? `0${res[v]}`: `${res[v]}`
  })
}

export default {
  timeFormating: timeFormating
}