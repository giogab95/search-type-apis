import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import TrySearch from "./components/TrySearch";
import Magic from "./components/Magic";
import SearchMagic from "./components/SearchMagic";
import Footer from "./components/Footer";
import FilmSearch from "./components/FilmSearch";
import ReduxTodolist from "./components/ReduxTodolist";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/searchit" component={Search} />
          <Route path="/try_search_it" component={TrySearch} />
          <Route path="/Magic" component={Magic} />
          <Route path="/Magic-Search" component={SearchMagic} />
          <Route path="/Film-Search" component={FilmSearch} />
          <Route path="/Redux-Todolist" component={ReduxTodolist} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
