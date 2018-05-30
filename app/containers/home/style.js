import { StyleSheet, Dimensions } from 'react-native';
const win = Dimensions.get('window');
const width = win.width * 1
const startWidth = win.width * 0.7
export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    titleContainer: {
        flex:1,
    },
    startContainer: {
        flex:1,
    },
    title: {
        flex: 1,
        width: width,
        resizeMode: 'contain',
        height: 'auto'
    },
    adventure: {
        flex: 1,
        width: width,
        resizeMode: 'contain',
        height: 'auto'
    },
    startButton: {
        flex: 1,
        width: startWidth,
        resizeMode: 'contain',
        height: 'auto'
    },
    
    background:{
        width: '100%',
        height: '100%'
    }
})