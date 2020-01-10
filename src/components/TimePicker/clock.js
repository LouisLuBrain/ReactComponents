
function timeFormating(date, config) {
  let res = {H: date.getHours(), M: date.getMinutes(), S: date.getSeconds()}
  return config.map(v => {
    return res[v] < 10 ? `0${res[v]}`: `${res[v]}`
  })
}

const configObject = {
  H: 23,
  M: 59,
  S: 59,
}

export default {
  timeFormating: timeFormating,
  configObject: configObject,
}