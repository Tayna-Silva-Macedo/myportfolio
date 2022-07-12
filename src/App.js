import Header from './components/Header';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={ Projects }/>
        <Route path="/contacts" component={ Contacts }/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
