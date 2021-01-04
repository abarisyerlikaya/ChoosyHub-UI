import { Route, Switch } from "react-router-dom";

import Main from "./components/main/Main";
import SearchResults from "./components/search-results/SearchResults";
import Product from "./components/product/Product";
import InternalError from "./components/utils/InternalError";
import NotFound from "./components/utils/NotFound";

export default function App() {
  return (
    <div className="bg-light" style={{ "scroll-behavior": "smooth" }}>
      <Switch>
        <Route exact path="/" component={Main} />

        <Route exact path="/search-results" component={SearchResults} />

        <Route exact path="/product" component={Product} />

        <Route exact path="/500" component={InternalError} />

        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}
