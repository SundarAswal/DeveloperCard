import './App.css';
import PortfolioCard from './components/PortfolioCard';
import WelcomeMessage from './WelcomeMessage';
function App(){
  const name = "Sundar";
  const currentYear = new Date().getFullYear();
  return (
    <div className="App">
      <PortfolioCard />
    </div>
  )
}
export default App;