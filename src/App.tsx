import { LandingPage } from './components/landingPage';
import {
  BrowserRouter as Router,
} from "react-router-dom";

const App = () => {
  return (
    <Router basename='/tourism-app'>
      <LandingPage />
    </Router>
  );
};

export default App;
