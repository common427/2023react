import logo from './logo.svg';


function App() {
  const han = "안녕";
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
