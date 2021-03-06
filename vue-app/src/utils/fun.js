const fun = {
  titleCase5: str => str.toLowerCase().replace(/( |^)[a-z]/g, L => L.toUpperCase()),
  diffTime: (dateB) => {
  	const dateAB = new Date(dateB).getTime() - new Date().getTime()

    //计算出相差天数
    const days=Math.floor(dateAB/(24*3600*1000))

    //计算出小时数
    const leave1=dateAB%(24*3600*1000) //计算天数后剩余的毫秒数
    const hours=Math.floor(leave1/(3600*1000))

    //计算相差分钟数
    const leave2=leave1%(3600*1000) //计算小时数后剩余的毫秒数
    const minutes=Math.floor(leave2/(60*1000))

    //计算相差秒数
    const leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    const seconds=Math.round(leave3/1000)

    return {days,hours,minutes,seconds,}
  },
};
export default fun;
