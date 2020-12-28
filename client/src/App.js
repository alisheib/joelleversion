import './App.css';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import forgotP from './pages/forgotPassword';
import Signup from './pages/Signup';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={Signup} />
          <Route path='/forgot-password' component={forgotP} />
        </Switch>
        <Newsletter />
        <Footer />

      </Router>
    </div>

  );
}

export default App;
