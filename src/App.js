import './App.css';
import Logo from './components/Logo';
import SidebarLogos from './components/SidebarLogos';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Logo/>
      <div style={{'display':'flex'}}>
        <SidebarLogos/>
        <Menu/>
      </div>
    </div>
  );
}

export default App;
