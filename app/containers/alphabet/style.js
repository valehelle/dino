import { StyleSheet, Platform, Dimensions } from 'react-native'

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.7;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;




export default StyleSheet.create({
    container: {
        flex:1,
    },
    card: {
        backgroundColor: 'rgba(255,255,255, .4)',
        borderRadius: 10,
        alignItems: 'center',
        minHeight: 340,

    },
    pronounceCard: {
        backgroundColor: 'rgba(255,255,255, .4)',
        borderRadius: 10,
        marginBottom: 0,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',

    },
    alphabet: {
     textAlign: 'center',
     marginBottom: 5,
     fontSize: 50,
     color: 'white',
     textShadowColor: 'rgba(0, 0, 0, 0.3)',
     textShadowRadius: 4,
     textShadowOffset:{width: 4, height:4},
     paddingBottom :5,
    },
    name: {
     textAlign: 'center',
     marginBottom: 20,
     fontSize: 30,
     color: 'white',
    },
    pronunciation: {
     textAlign: 'center',
     fontSize: 20,
     color: 'white',
    },
    cardBack: {
     alignItems: 'center',
     justifyContent: 'center',
     padding:10,
     height: 420,
     borderRadius: 20,
    },
    info: {
     textAlign: 'justify',
     justifyContent: 'center',
     color: 'white',
     fontSize: 15,
     padding:5,
     
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    moreInfo: {
        padding: 5,
        position: 'absolute',
        bottom: 0,
        right: 0,
        
    },
    flipText: {
        color: 'white',
        fontSize: 15,
    },
    backButton:{
        marginTop: 20,
        marginLeft: 10,
        width: 60,
        height: 60,
    },
    background:{
        height: '100%',
        width: '100%',
        
    },
    backImage:{
        width: 60,
        resizeMode: 'contain',
        height: 60,
        padding:20,
    },
    moreInfoImage:{
        width: 60,
        resizeMode: 'contain',
        height: 60,
        padding:20,
    },
    backContainer:{
        flex: 1,
    },
    voiceButton:{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    voiceImage:{
        width: 100,
        resizeMode: 'contain',
        height: 100,
    },
})