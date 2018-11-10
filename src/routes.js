import { createStackNavigator } from "react-navigation";

import Timeline from "./pages/Timeline";
import Login from "./pages/Login";
import New from "./pages/New";

const Routes = createStackNavigator({
  Login,
  Timeline,
  New
});

export default Routes;
