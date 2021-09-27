import moment from "moment";

export const momentDate = (day) =>moment(day).format('MMMM Do YYYY, h:mm:ss a')

export let calculateSumOfNumbers = (arr) =>{
  let res = 0
  arr.forEach( el =>{
    res = res + el['amount']

  })
 return res

}




