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
export const itemHeight = viewportWidth;



export default StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    card: {
        borderColor: '#e1e8ee',
        borderWidth: 1,
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
        paddingTop: 10,

    },
    alphabet: {
     textAlign: 'center',
     marginBottom: 20,
     fontSize: 50,
     color: 'white',
    },
    name: {
     textAlign: 'center',
     marginBottom: 20,
     fontSize: 30,
     color: 'white',
    },
    pronunciation: {
     textAlign: 'center',
     marginBottom: 20,
     fontSize: 20,
     color: 'white',
    },
    image: {
        backgroundColor:'red',
        height: 200,
        width: 200,
        marginBottom: 10,
    },
})