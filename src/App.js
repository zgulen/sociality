import './style.css';
import Logo from './components/Logo';
import SidebarLogos from './components/SidebarLogos';
import Menu from './components/Menu';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <Logo/>
      <div style={{'display':'flex'}}>
        <SidebarLogos/>
        <Menu/>
      </div>
        <Description/>
    </div>
  );
}

export default App;
