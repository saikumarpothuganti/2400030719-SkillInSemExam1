import React from "react";
import Card from "./card";

function App() {
  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Props and Children Example</h2>

      <Card title="User Profile">
        <p>Name: John Doe</p>
        <p>Role: Developer</p>
      </Card>

      <Card title="Product Info">
        <ul>
          <li>Product: Laptop</li>
          <li>Price: $999</li>
        </ul>
      </Card>

      <Card title="Action">
        <button>Click Me!</button>
      </Card>
    </div>
  );
}

export default App;
