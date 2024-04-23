import { useRoutes } from "react-router-dom";
import routes from "./routes";
function App() {
  let Router = useRoutes(routes);
  return Router;
}

export default App;
