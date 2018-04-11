import {StackNavigator} from "react-navigation";
import DrawerPage from "./DrawerPage";
import SettingPage from "./page/SettingPage";
import OrderPage from "./page/OrderPage";

const Router = StackNavigator({
    Drawer: {
        title:'Drawer',
        screen: DrawerPage,
    },
    Order:{
        screen:OrderPage
    },
    Setting: {
        screen: SettingPage
    },

});
module.exports = Router;