export function splitPrice(n) {
  let str = n + ""
  let splitStr = ""
  let result = []
  let c = 0
  for (let i = str.length - 1; i >= 0; i--) {
    splitStr += str[i]
    c++
    if (c >= 3 || i == 0) {
      result.push(splitStr.split("").reverse().join(""))
      c = 0
      splitStr = ""
    }
  }
  return result.reverse().join(" ")
}