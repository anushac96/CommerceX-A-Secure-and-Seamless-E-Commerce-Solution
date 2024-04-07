import './App.css'
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/homePage/HomePage';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <div>
        <HomePage></HomePage>
      </div>
    </div>
  );
}

export default App;