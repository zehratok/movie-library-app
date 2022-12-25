import React, {useEffect} from "react";
import {Text, View} from "react-native";
import SplashScreen from "react-native-splash-screen";

const Router = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View>
            <Text>Router</Text>
        </View>
    );
}
export default Router;
