import './App.css';
import Card from './Components/Card/Card';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';
import { Wallet, TrendingDown, TrendingUp  } from 'lucide-react';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <header className="App-header">
        <h1>Budget Dashboard</h1>
        <p>Manage your envelope budgets and track your spending</p>
      </header>
      <div className="card-container">
        <Card title="Total Budget" value="1000" envelopes="10" icon={<Wallet />}></Card>
        <Card title="Total Spent" value="500" envelopes="10" icon={<TrendingDown />}></Card>
        <Card title="Remaining Budget" value="500" envelopes="10" icon={<TrendingUp />}></Card>
      </div>
    </div>
  );
}

export default App;
