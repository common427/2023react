import logo from './logo.svg';
import { useState } from 'react';

function App() {
  const han = "안녕";
  let [listData, setListData] = useState
  function test() {
    return 100;
  }
  return (
    <div className="App">
      <div>{han}{test()}</div>
    </div>
  );
}

export default App;
