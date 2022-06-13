
import './App.css';
import './bootswatch.min.css'
import LoginScreen from './screens/LoginScreen';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import OtpScreen from './screens/OtpScreen'
import SuccessScreen from './screens/SuccessScreen'

function App() {
  return (
    <Router>
      <main>
        <Container>
            <Route path= '/' component= {LoginScreen} exact />
            <Route path= '/verify' component= {OtpScreen} />
            <Route path= '/success' component= {SuccessScreen} />
        </Container>
        </main>
    </Router>
  );
}

export default App;
