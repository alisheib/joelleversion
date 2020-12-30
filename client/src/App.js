import './App.css';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import forgotPage from './pages/forgotPassword';
import errorPage from './pages/404';
import SignUp from './pages/SignUp';
import LandingPage from './pages/landingPage';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/forgot-password' component={forgotPage} />
          <Route path='*' component={errorPage} />
        </Switch>
        <Newsletter />
        <Footer />

      </Router>
    </div>

  );
}

export default App;
