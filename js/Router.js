import {StackNavigator} from "react-navigation";
import DrawerPage from "./DrawerPage";
import SettingPage from "./page/SettingPage";
import OrderPage from "./page/OrderPage";
import WaitingOrderPage from "./page/WaitingOrderPage";

const Router = StackNavigator({
    Order:{
        screen:OrderPage,
        navigationOptions:{

        }
    },
    Setting: {
        screen: SettingPage,
        navigationOptions:{

        }
    },
    WaitingOrder:{
        screen:WaitingOrderPage,
        navigationOptions:{
        }
    }
});
export default Router;