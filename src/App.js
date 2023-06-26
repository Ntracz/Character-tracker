import StatsBlock from './components/StatsBlock';
import HitPoints from './components/HitPoints';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
      <main>
        <HitPoints starting= {10} />
        <StatsBlock />
      </main>
    </div>
  );
}

export default App;
