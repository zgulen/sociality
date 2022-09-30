import './style.css';
import Logo from './components/Logo';
import SidebarLogos from './components/SidebarLogos';
import Menu from './components/Menu';
import Description from './components/Description';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div>
        <Logo />
        <div style={{ 'display': 'flex' }}>
          <SidebarLogos />
          <Menu />
        </div>
      </div>
      <div>
        <Description />
        <Card />
      </div>
    </div>
  );
}

export default App;
