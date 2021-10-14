import Header from './components/Header';
import Main from './components/Main';
import Form from './components/Form';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
  <Router>
  <>
  <Header />
  <Switch>
  <Route path="/" component={Main}/>
  <Route path="/form" component={Form} />
  </Switch>
  <Footer />
  </>
  </Router>
  );
}

export default App;
