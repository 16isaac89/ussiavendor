import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import CreatePost from './CreatePost';
import ItemDetails from './ItemDetails';
import ChatScreen from './Chats/ChatScreen';
import Items from './Items';
import DrawerNavigation from './DrawerNavigation';
import Components from '../Screens/components';
import SignIn from './Auth/SignIn';
import Stock from './Stock/Stock';
import AddProduct from './Stock/AddProduct';
import Sales from './Sale/Sales'
import AddSale from './Sale/AddSale';
import AddItemSale from './Sale/AddItemSale';
import AddPurchase from './purchase/AddPurchase';
import SaleReturns from './Sale Return/SaleReturns';
import AddSaleReturn from './Sale Return/AddSaleReturn';

const StackComponent = createStackNavigator();

const Pages = () => {

    return (
        <>
            <StackComponent.Navigator
            // BootomNavigation
                initialRouteName={"SignIn"}
                detachInactiveScreens={true}
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: "transparent" },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                >
                <StackComponent.Screen name={"SignIn"} component={SignIn} />
                <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
                <StackComponent.Screen name={"CreatePost"} component={CreatePost} />
                <StackComponent.Screen name={"ItemDetails"} component={ItemDetails} />
                <StackComponent.Screen name={"ChatScreen"} component={ChatScreen} />
                <StackComponent.Screen name={"Items"} component={Items} />
                <StackComponent.Screen name={"Components"} component={Components} />
                <StackComponent.Screen name={"AddProduct"} component={AddProduct} />
                <StackComponent.Screen name={"Stock"} component={Stock} />
                <StackComponent.Screen name={"Sales"} component={Sales} />
                <StackComponent.Screen name={"AddSale"} component={AddSale} />
                <StackComponent.Screen name={"AddItemSale"} component={AddItemSale} />
                <StackComponent.Screen name={"AddPurchase"} component={AddPurchase} />
                <StackComponent.Screen name={"SaleReturns"} component={SaleReturns} />
                <StackComponent.Screen name={"AddSaleReturn"} component={AddSaleReturn} />
            </StackComponent.Navigator>
        </>
    );

};


export default Pages;