import { TabNavigator, StackNavigator } from 'react-navigation'
import * as Screen  from '../containers'
import ReactNative from 'react-native'

const {
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
} = ReactNative


export const HomeStack = StackNavigator({
    Home:{
        screen: Screen.home,
        navigationOptions:{
            title: 'Home',
        }
    },
})

export const Root = StackNavigator({
    HomeStack: {
        screen: HomeStack,
    },

}, {
    mode: 'modal',
    headerMode: 'none',
})