export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export function stopAllTimeout(timeOutView) {
  for (var i = 0; i < timeOutView.length; i++) {
    clearTimeout(timeOutView[i]);
  }
}

export function vibrate() {
  window.navigator.vibrate([1000]);
}

export function randomElements(array, quantity) {
  return shuffle([...array]).slice(0, quantity);
}
