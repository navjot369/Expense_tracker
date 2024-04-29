import { Outlet } from 'react-router-dom';

function App() {
  return (<div id="most-outer-container">
    <div id="dashboard-container"></div>
    <div><Outlet/ ></div>
  </div>
  );
}

export default App;
