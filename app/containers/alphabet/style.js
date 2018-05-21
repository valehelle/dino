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
        height: '100%',
        backgroundColor : 'white'
    },
    card: {
        backgroundColor: 'rgba(255,255,255, .4)',
        borderRadius: 20,
        marginBottom: 0,

    
        alignItems: 'center',
        height: 420,

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
          textShadowColor: 'rgba(0, 0, 0, 0.3)',
     textShadowRadius: 4,
     textShadowOffset:{width: 4, height:4}
    },
    pronunciation: {
     textAlign: 'center',
     marginBottom: 20,
     fontSize: 20,
     color: 'white',
          textShadowColor: 'rgba(0, 0, 0, 0.3)',
     textShadowRadius: 4,
     textShadowOffset:{width: 4, height:4}
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
     fontSize: 20,
     
    },
    image: {
        height: 200,
        width: 300,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    moreInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginBottom: 15,
        position: 'absolute',
        bottom: 0,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    flipText: {
        color: 'white',
        fontSize: 15,
    },
    backButton:{
        marginTop: 40,
        marginLeft: 30,
    },
    background:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        
    }
})