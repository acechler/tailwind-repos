## TestCard Component

The `TestCard` component is used to showcase the `Card` component by rendering multiple cards in a horizontal layout.

### Props

The `TestCard` component does not accept any props. 

### Usage

To use the `TestCard` component, simply import it and include it in your JSX code:

```jsx
import React from "react";
import TestCard from "./TestCard";

const App = () => {
  return (
    <div>
      {/* Other components */}
      <TestCard />
      {/* Other components */}
    </div>
  );
};

export default App;
