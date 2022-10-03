import './style.css';
import DataContextProvider from './context/DataContext';
import Panel from './components/Panel';


function App() {
  return (
    <div className="App">

      <DataContextProvider>
        <Panel />
      </DataContextProvider>
    </div>
  );
}

export default App;
