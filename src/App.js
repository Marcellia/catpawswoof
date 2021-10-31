import './App.css';
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";
import { StrictMode } from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import ThemeContext from "./ThemeContext";



function App() {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div className = "page">
      
        <Router>
          <header>
            <Link to="/">CatPaws & woof!</Link>
          </header>
          
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>

        {/* <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
