//for ([initialization]; [condition]; [iteration]) 
//{[loop body]}

let message = new Array()
function writeCards(name, event) {
    for (let i = 0; i < name.length; i++) { 
        message[i]= `Thank you, ${name[i]}, for the wonderful ${event} gift!`;
 } 
  return message
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

function countDown(number) {
    while (number > -1) {
        console.log(number--)
    }
}

countDown(10)