import React from "react";

function Results(props) {
  //    const shuffle = (array) => {
  //       let currentIndex = array.length, temporaryValue, randomIndex;

  //       // While there remain elements to shuffle...
  //       while (0 !== currentIndex) {

  //           // Pick a remaining element...
  //           randomIndex = Math.floor(Math.random() * currentIndex);
  //           currentIndex -= 1;

  //           // And swap it with the current element.
  //           temporaryValue = array[currentIndex];
  //           array[currentIndex] = array[randomIndex];
  //           array[randomIndex] = temporaryValue;
  //       }

  //       return array;
  //   }

  //   gifters.forEach(gifter => {
  //    while (gifters.indexOf(gifter) !== receivers.indexOf(gifter)) {
  //       const indexOfGifter = gifters.indexOf(gifter);
  //       const clearedGifters = gifters.splice(indexOfGifter, 1);
  //       const random = Math.floor(Math.random() * (clearedGifters.length));
  //       receivers.push(clearedGifters[random]);
  //    }
  //   })

  const gifters = [...props.gifters];

  function matchGifters(gifters) {
    if (gifters.length === 1) {
      return gifters;
    }

    // Duplicate the gifters array to a new array
    const receivers = gifters.slice();

    // Iterate over the gifters array and match each gifter to a random receiver, except for himself.
    for (let i = 0; i < gifters.length; i++) {
      let receiverIndex = Math.floor(Math.random() * receivers.length);

      // If the receiver index is equal to the gifter index, then find another random receiver.
      while (receiverIndex === i) {
        receiverIndex = Math.floor(Math.random() * receivers.length);
      }

      // Swap the gifter at the current index with the receiver at the random index.
      [receivers[i], receivers[receiverIndex]] = [
        receivers[receiverIndex],
        receivers[i],
      ];
    }

    return receivers;
  }

  const receivers = matchGifters(gifters);

  function checkMatching(receivers, gifters) {
    for (let i = 0; i < gifters.length; i++) {
      if (gifters[i] === receivers[i]) {
        switch (i) {
          case 0:
            [receivers[i], receivers[i + 1]] = [receivers[i + 1], receivers[i]];
            break;
          case gifters.length - 1:
            [receivers[i], receivers[i - 1]] = [receivers[i - 1], receivers[i]];
            break;
          default:
            [receivers[i], receivers[i - 1]] = [receivers[i - 1], receivers[i]];
            break;
        }
      }
    }

    return receivers;
  }

  const receiversChecked = checkMatching(receivers, gifters);

  return (
    <div>
      <p>TEST</p>
      <ul>
         {gifters.length === 0 && <p>Write down one person per line on the input on the left and click on Validate</p>}
        {gifters.map((gifter, index) => {
          const receiver = receiversChecked[index];
          return (
            <li key={index}>
              {gifter} gifts {receiver}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;
