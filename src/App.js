import "./App.css";
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';
import {motos} from "./components/Motos";

const App = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm"></div>
        <div className="col-sm-6">
          <h1>Current Motos status</h1>
          <hr />
          <List motos={motos} />
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}

export default App;
