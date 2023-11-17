import React from 'react';

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <title>My React App</title>
      <Component {...pageProps} />
    </div>
  );
};

export default App;