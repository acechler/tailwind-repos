## Card Component

The `Card` component is used to display a card-like container with a title and content.

### Props

| Prop     | Type            | Description                           |
| -------- | --------------- | ------------------------------------- |
| title    | string          | The title of the card.                 |
| content  | React.ReactNode | The content to be displayed in the card.|

### Usage

To use the `Card` component, import it and include it in your JSX code:

```jsx
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      {/* Other components */}
      <Card
        title="Card Title"
        content={<p>This is the content of the card.</p>}
      />
      {/* Other components */}
    </div>
  );
};

export default App;
