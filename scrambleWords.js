function scramble(input) {
  let array = input[0].split(" ");
  const result = array.map((element) => {
    if (element.length > 3) {
      let elementArray = element.split("");
      let firstCharacter = elementArray.shift();
      let lastCharacter = elementArray.pop();
      let middleCharacter  = shuffle(elementArray).join(""); 
      return firstCharacter + middleCharacter + lastCharacter;        
    } else {
      return element
    }
  })
  return result.join(" ");
}

// modified fisher yates shuffle
function shuffle(input) {
  // create an array from input as to not mutate original input
  const array = new Array(...input);
  let m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
   // Check if the shuffled array is the same as the original array and reshuffle if needed
   if (JSON.stringify(input) === JSON.stringify(array)) {
    return shuffle(array); 
  }
  return array;
}
