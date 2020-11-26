import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Signup from "./Signup";
import Login from "./Login";
import Main from "./main";
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
              title: "Home",
            },
          },
        
      Login: {
        screen: Login,
        navigationOptions: {
          title: "Login",
        },
      },
       Signup: {
         screen: Signup,
         navigationOptions: {
           title: "Signup",
         },
       },
      
    },
    {
      defaultNavigationOptions: {
        headerStyle: { backgroundColor: "dodgerblue" },
      },
    }
  );
  const Navcontainer = createAppContainer(HomeStack);
  export default Navcontainer