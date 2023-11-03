function writeCards(names, event) {
    let messages = [];
    for (let i=0; i<names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}


let num = Number

function countDown(num) {
  for (let i = num; i > -1; i--) {
    console.log(i);
  }
}

console.log(countDown())