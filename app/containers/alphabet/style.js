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
        borderColor: '#e1e8ee',
        borderRadius: 20,
        marginBottom: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0, .2)',
                shadowOffset: { height: 0, width: 0 },
                shadowOpacity: 1,
                shadowRadius: 1,
            },
            android: {
                elevation: 1,
            },
        }),
    
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
        paddingBottom: 20,
        position: 'absolute',
        bottom: 0
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