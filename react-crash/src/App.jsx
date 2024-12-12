import './App.css'
import Activity from './components/Activity';
import Manydiv from './components/Manydiv';
import MidPic from './components/midpic';
import Design from './components/Design';


function App() {
  return (
    <>
      <MidPic />
      <ul className="breadcrumb">
      <li><a href="#">商品</a></li>
      <li><a href="#">設計館故事</a></li>
      <br />
      <Activity />
      <Manydiv />
      <Design />
      </ul>
      
    </>
  )
}


export default App;