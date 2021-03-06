import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Currency from "./Pages/currency";
import Landing from "./Pages/landing";
import { ArcAppFooterDemo } from "./Shared/footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/currency-list" component={Currency} />
        <Redirect to={"/"} />
      </Switch>
      <ArcAppFooterDemo />
    </div>
  );
}

export default App;
