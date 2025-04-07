import React, { useState, useEffect } from 'react';

function UseStateEdgeCasesDemo() {
  const [countWrong, setCountWrong] = useState(0);
  const [countRight, setCountRight] = useState(0);

  const incrementWrong = () => {
    setCountWrong(countWrong + 1);
    setCountWrong(countWrong + 1); // will still be count + 1, not +2
  };

  const incrementRight = () => {
    setCountRight(prev => prev + 1);
    setCountRight(prev => prev + 1); // correct +2
  };

  const getHeavyData = () => {
    console.log("Heavy calculation...");
    // alert("Heavy calculation...");
    let sum = 0;
    for (let i = 0; i < 100000000; i++) sum += i;
    return sum;
  };

  // Bad (runs on every render)
//   const [heavyWrong, setHeavyWrong] = useState(getHeavyData());

  // Good (runs only once)
  const [heavyRight, setHeavyRight] = useState(() => getHeavyData());

  const [userWrong, setUserWrong] = useState({ name: "John", age: 25 });
  const [userRight, setUserRight] = useState({ name: "Jane", age: 30 });

  const updateUserWrong = () => {

    userWrong.age = 26;

    setUserWrong(funny); // no re-render
    console.log(userWrong.age);
  };

  const updateUserRight = () => {
    setUserRight(prev => ({ ...prev, age: prev.age + 1 })); // triggers re-render
  };

//   const [message, setMessage] = useState("Initial");
//   const [counter, setCounter] = useState(0);

//   const updateMessage = () => {
//     setMessage("Updated at " + new Date().toLocaleTimeString());
//     setCounter((prev) => prev + 1); // For visual differentiation
//   };

//   // Stale closure may show outdated value
//   const updateAsyncWrong = () => {
//     setTimeout(() => {
//       alert("Wrong (stale): " + message); // Might alert stale value
//     }, 2000);
//   };

//   // Captures latest state using function updater
//   const updateAsyncRight = () => {
//     setTimeout(() => {
//       setMessage((prev) => {
//         alert("Right (latest): " + prev); // Always shows latest value
//         return prev;
//       });
//     }, 2000);
//   };
const [message, setMessage] = useState("Initial");

const handleWrongClick = () => {
  const current = message; // captures stale value
  setTimeout(() => {
    alert("Wrong (stale): " + current); // uses captured value
  }, 2000);
  setMessage("Updated (after wrong click)");
};

const handleRightClick = () => {
  setMessage("Updated (after right click)");
  setTimeout(() => {
    setMessage((prev) => {
      alert("Right (latest): " + prev); // always latest
      return prev;
    });
  }, 2000);
};

  return (
    <div style={{ padding: 20 }}>
      <h1>useState Edge Cases Demo</h1>

      <h2>Batching State Updates</h2>
      <button onClick={incrementWrong}>Increment Wrong</button>
      <p>CountWrong: {countWrong}</p>
      <button onClick={incrementRight}>Increment Right</button>
      <p>CountRight: {countRight}</p>

      <hr />

      <h2>Lazy Initialization</h2>
      {/* <p>Heavy Calculation Result (only once): {heavyWrong}</p> */}
      <p>Heavy Calculation Result (only once): {heavyRight}</p>

      <hr />

      <h2>Object Mutation</h2>
      <button onClick={updateUserWrong}>Update User Wrong </button>
      <p>UserWrong Age: {userWrong.age}</p>
      <button onClick={updateUserRight}>Update User Right </button>
      <p>UserRight Age: {userRight.age}</p>

      <hr />

      {/* <h2>Async State Closure Demo</h2>
      <p><strong>Current Message:</strong> {message}</p>
      <p><strong>Update Count:</strong> {counter}</p>

      <button onClick={updateMessage}>Update Message Now</button>
      <br /><br />

      <button onClick={updateAsyncWrong}>Trigger Alert (Wrong)</button>
      <button onClick={updateAsyncRight}>Trigger Alert (Right)</button> */}
      <h2>Stale vs Latest State Demo</h2>
      <p><strong>Current Message:</strong> {message}</p>
      <button onClick={handleWrongClick}>Trigger Alert (Wrong)</button>
      <button onClick={handleRightClick}>Trigger Alert (Right)</button>
    </div>
  );
}

export default UseStateEdgeCasesDemo;
