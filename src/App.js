import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import './App.css';
import Footer from './components/Footer';
import CardList from './components/CardList';

function App() {
  return (
    <div className="app-container">
      <div className="content">
       <CardList/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
