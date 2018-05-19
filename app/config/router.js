import { TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation'
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
        },
       
    },
    Alphabet:{
        screen: Screen.alphabet,
        navigationOptions:{
            title: 'Alphabet',
        }
    },   
},{
    headerMode: 'none',
})

export const LaunchStack = StackNavigator({
    Launch:{
        screen: Screen.launch,
        navigationOptions:{
            title: 'Launch',
        }
    },
}, {
    mode: 'modal',
    headerMode: 'none',
})

export const Root = SwitchNavigator({
    Launch: {
        screen: LaunchStack,
    },
    Home: {
        screen: HomeStack,
    }
}, {
    headerMode: 'none',
})