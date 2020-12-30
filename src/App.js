import { Route, Switch } from "react-router-dom";

import Main from "./components/main/Main";
import SearchResults from "./components/search-results/SearchResults";
import Product from "./components/product/Product";

export default function App() {
  return (
    <div className="bg-light">
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/search-results" component={SearchResults} />

        <Route exact path="/product/:id" component={Product} />
      </Switch>
    </div>
  );
}
