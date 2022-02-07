//🔥LOOPING LAB🔥//

// const names = [`Guadalupe`, `Ollie`, `Aki`],
//   event = `surprise`;

//Thank You Cards Function
function writeCards(names, event) {
  let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }
  return thankYouCards;
}

//Count Down Function
function countDown(startInt) {
  while (startInt > 0) {
    console.log(startInt);
    startInt -= 1;
  }
  console.log(startInt);
}
