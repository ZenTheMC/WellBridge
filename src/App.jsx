import React from "react";

const App = () => {
  const name = "John";
  const x = 10;
  const y = 20;
  const names = ["Amaar", "Zen", "Lee", "Mai"];
  const loggedIn = true;
  const styles = {
    color: "green",
    fontSize: "44px",
  };
  return (
    <>
      <div className="text-5xl">App</div>
      <p style={{ color: "red", fontSize: "24px" }}>Hello {name}</p>
      <p style={styles}>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))};
      </ul>
      {loggedIn ? <h1>Hello Member</h1> : <h1>Hello Guest</h1>};
    </>
  );
};

export default App;