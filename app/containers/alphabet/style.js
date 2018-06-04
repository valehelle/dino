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
    containerDinosour: {
        flex:7,
    },
    card: {
        backgroundColor: 'rgba(255,255,255, .4)',
        borderRadius: 10,
        alignItems: 'center',
        flex:1,
    },
    pronounceCard: {
        backgroundColor: 'rgba(255,255,255, .4)',
        borderRadius: 10,
        marginBottom: 0,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        flex:1,
    },
    alphabetFront: {

     fontSize: 60,
     color: '#EF6C00',
     fontFamily: "KomikaText",
    },
    alphabetBack: {
     fontSize: 60,
     color: '#c62828',
     fontFamily: "KomikaText",
    },
    alphabetContainer: {
        paddingLeft:10,
        flexDirection: 'row',
        alignSelf: 'flex-start',  
    },
    name: {
     textAlign: 'center',
     fontSize: 30,
     color: '#4E342E',
     fontFamily: "KomikaText",
    },
    pronunciation: {
     textAlign: 'center',
     fontSize: 20,
     color: '#F9A825',
     fontFamily: "KomikaText",
    },
    cardBack: {
     alignItems: 'center',
     justifyContent: 'center',
     padding:10,
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
        flex:1,
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
        flex:1,
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
        marginLeft:40,
    },
    backContainer:{
        flex:1,
        flexDirection:'row'
    },
    bottomContainer:{
        flex:1,
        flexDirection:'row'
    },
    voiceContainer:{
        flex:1,
        
    },
    voiceButton:{
        bottom: 0,
        flex:1,
        flexDirection: 'column',
        paddingTop:5,
        paddingBottom:5,
    },
    voiceImage:{
        width: 60,
        resizeMode: 'contain',
        height: 60,
        alignSelf: 'flex-end',
        marginRight: 40,
    },
})