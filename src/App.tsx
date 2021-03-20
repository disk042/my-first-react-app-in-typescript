import React from 'react';

interface AppProps  {
  message: string;
}

const App = ({ message }: AppProps) => {
  return <div>{ message }</div>;
};

export default App;
