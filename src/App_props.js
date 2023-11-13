import { useState } from 'react';
import './App.css'

import ModalView from "./components/ModalView.jsx"

function App() {
  const [num,setNum] = useState(0)
  const [data,setData] = useState([
    "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum impedit culpa laboriosam autem quo reiciendis illo repellendus, adipisci debitis magni quisquam molestiae ut, natus illum ullam, blanditiis cum et?",
    "2. Illo culpa exercitationem possimus, cumque officia similique natus quam repellat ipsam odio maiores laboriosam reiciendis totam, rem molestiae voluptatum. Corrupti necessitatibus et voluptate possimus perferendis quod reprehenderit minima sit eum.",
    "3. Quas veniam, minus voluptate asperiores accusamus iusto deleniti debitis aspernatur excepturi eum! Alias impedit odit obcaecati nemo earum, nulla optio, placeat quia dolore velit omnis fugit deleniti esse iure corporis."
  ])
    // function  handlerTap(index) {
  //       setNum(1)
  // }
  return (
    <div className="App">
     

      {/* <ModalView/> */}
      {num}

      <div className='tab'>
        <ul>
          <li onClick={()=>{setNum(0)}} className={`${num===0?"active":""}`}>tab1</li>
          <li onClick={()=>{setNum(1)}} className={`${num===1?"active":""}`}>tab1</li>
          <li onClick={()=>{setNum(2)}} className={`${num===2?"active":""}`}>tab1</li>
        </ul>
      </div>

      <div style={{margin:"0 0 10px 0"}}>
        {data[num]}
      </div>
      <hr/>

      <ul className='lists'>
        {
          data.map(function(item,i){
            return (
              <>
                <li onClick={()=>setNum(i)}>{item}</li>
              </>
            )
          })
        }
      </ul>
        <Modal rData={data} rNum={num}/>
    </div>
  );
}

function Modal(props){
  return (
    <>
      <div className='modal'>
        <h3>suject1</h3>
        <p>{props.rData[props.rNum] }</p>
      </div>
    </>
  )
}

export default App;
