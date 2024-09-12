function  waitingTime(waitingTimes  , serialNumber) {
    if(waitingTimes)
        return "Invalid Input"
    if(serialNumber)
        return "Invalid Input"
    average = sum(waitingTimes) / length(waitingTimes)
    averageTime = round(average)

     const number1 =  serialNumber -1 ;
     const number2 =  length(waitingTimes);
     const time = number1 - number2
     const totalTime = time * averageTime
     return totalTime
}

