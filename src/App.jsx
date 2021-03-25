import "./App.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
