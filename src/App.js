import React, { useEffect } from 'react';
import AlphaAPI from './apis/alphavantage';

const App = () => {
  useEffect(() => {
    const fetch = async () => {
      const { success, result } = await AlphaAPI.Intraday.getAll("PETR4.SA");
      console.log(`success: ${success}`);
      console.log(result);
    };
    fetch();
  }, []);

  return (
    <div className="App">
      <h1>Testing requests with React and Apicase</h1>
      <h2>Just a simple string, focus on console!</h2>
    </div>
  );
};

export default App;