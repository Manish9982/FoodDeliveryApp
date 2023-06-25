import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Screens/Login/Login';
import Splash from '../Screens/Splash/Splash';
import DataContext from '../Context/DataContext';
import Dashboard from '../Screens/Dashboard/Dashboard';
import ProductDetails from '../Screens/ProductDetails/ProductDetails';
import FoodCard from '../Components/Cards/FoodCard';
import BottomTabsCustomer from './BottomTabsCustomer';
import Signup from '../Screens/Signup/Signup';
import TrackOrder from '../Screens/TrackOrder/TrackOrder';
import MyProfile from '../Screens/MyProfile/MyProfile';
import MyOffers from '../Screens/MyOffers/MyOffers';
import ContactUs from '../Screens/ContactUs/ContactUs';
import CustomerSupport from '../Screens/CustomerSupport/CustomerSupport';

const Stack = createNativeStackNavigator();

const Router = () => {
    const { NisSignedIn } = useContext(DataContext)
    const [isSignedIn, setIsSignedIn] = NisSignedIn

    const returnStack = () => {
        //if the user is signed in return this stack
        if (isSignedIn == "customer") {
            return (
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='BottomTabsCustomer' component={BottomTabsCustomer} />
                    <Stack.Screen name='ProductDetails' component={ProductDetails} />
                    <Stack.Screen name='FoodCard' component={FoodCard} />
                    <Stack.Screen name='TrackOrder' component={TrackOrder} />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                    <Stack.Screen name='MyProfile' component={MyProfile} />
                    <Stack.Screen name='MyOffers' component={MyOffers} />
                    <Stack.Screen name='ContactUs' component={ContactUs} />
                    <Stack.Screen name='CustomerSupport' component={CustomerSupport} />

                </Stack.Navigator>
            )
        }
        else if (isSignedIn == "rider") {
            return (
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='BottomTabsCustomer' component={BottomTabsCustomer} />
                    <Stack.Screen name='ProductDetails' component={ProductDetails} />
                    <Stack.Screen name='FoodCard' component={FoodCard} />

                </Stack.Navigator>
            )
        }
        //if user is not logged in return this
        else {
            return (
                <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Splash' component={Splash} />
                    <Stack.Screen name='Login' component={Login} options={{ animationTypeForReplace: isSignedIn ? 'pop' : 'push' }} />
                    <Stack.Screen name='Signup' component={Signup} />
                </Stack.Navigator>
            )
        }
    }

    return (
        <NavigationContainer>
            {returnStack()}
        </NavigationContainer>

    );
}


export default Router