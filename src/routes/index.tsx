import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { TabRoutes } from "./tab.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      {/* <StackRoutes /> */}
      <TabRoutes />
    </NavigationContainer>
  )
}

export { Routes }