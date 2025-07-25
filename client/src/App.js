import './App.css';
import Card from './Components/Card/Card';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';
import { Wallet, TrendingDown, TrendingUp  } from 'lucide-react';
import PieChartComponent from './Components/Charts/PieChart';
import BarChartComponent from './Components/Charts/BarChart';

function App() {
  return (
    <div className="App">
      <ThemeToggle />
      <header className="App-header">
        <h1>Budget Dashboard</h1>
        <p>Manage your envelope budgets and track your spending</p>
      </header>
      <div className="card-container">
        <Card title="Total Budget" value="1000" envelopes="10" icon={<Wallet/>}></Card>
        <Card title="Total Spent" value="500" envelopes="10" icon={<TrendingDown/>}></Card>
        <Card title="Remaining Budget" value="500" envelopes="10" icon={<TrendingUp/>}></Card>
      </div>
      <div className="card-container">
        <Card title="Budget Allocation" minWidth="35rem" maxHeight="35rem" titleStyle={{fontSize: "28px", fontWeight: "bold", color: "var(--primary-text)" }}>
          <p style={{color: "var(--secondary-text)", marginTop: "0px", marginBottom: "50px"}}>Distribution of budget across envelopes</p>
          
          <div className="chart-container">
            <PieChartComponent />
          </div>
        </Card>

        <Card title="Spending Overview" minWidth="35rem" maxHeight="35rem" titleStyle={{fontSize: "28px", fontWeight: "bold", color: "var(--primary-text)" }}>
          <p style={{color: "var(--secondary-text)", marginTop: "0px", marginBottom: "50px"}}>Budget vs actual spending by envelope</p>
          <div className="chart-container">
            <BarChartComponent />
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
