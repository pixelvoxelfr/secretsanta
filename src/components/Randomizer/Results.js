import React from "react";

import classes from "./Results.module.css";

function Results(props) {
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
    <div className={classes.results}>
      <div className={classes.explanationside}>
        <h1>Secret Santa Organizer</h1>
        {gifters.length === 0 && (
          <p>
            Write down one person per line in the input on the left and click on
            Randomize
          </p>
        )}
      </div>

      <ul>
        {gifters.map((gifter, index) => {
          const receiver = receiversChecked[index];
          return (
            <li key={index}>
              <span className={classes.gifter}>{gifter}</span> gifts{" "}
              <span className={classes.gifter}>{receiver}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Results;
