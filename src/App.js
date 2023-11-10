import logo from './logo.svg';
import { useState } from 'react';

function App() {
  let [listData, setListData] = useState(1)
  return (
    <div className="App">
      <div>{listData}</div>
      
      <button onClick={()=>{
        setListData(listData*2)
      }}>click</button>
    </div>
  );
}

export default App;
