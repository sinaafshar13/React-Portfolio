import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css"
function App() {
  let Router = useRoutes(routes);
  return Router;
}

export default App;
