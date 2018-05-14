import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';
import SliderEntry from '../../components/sliderentry/view';
import { sliderWidth, itemWidth } from '../../components/sliderentry/style';
import { colors } from '../../components/sliderentry/index.style';
const {
    View,
    Text,
    Image,
    Dimensions,
    Platform,
} = ReactNative
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 0;

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: require('../../assests/images/dinosour.jpg'),
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: require('../../assests/images/dinosour.jpg')
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: require('../../assests/images/dinosour.jpg')
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: require('../../assests/images/dinosour.jpg')
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: require('../../assests/images/dinosour.jpg')
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: require('../../assests/images/dinosour.jpg')
    }
];

class Alphabet extends Component{

  constructor(props) {
    super(props);
    this.state = {position: 0};

  }

    componentDidMount(){
        this.props.screenProps.fetchDinosours()
    }
    
    nextButtonPress(){
        this.setState({position: this.state.position + 1})
        // Import the react-native-sound module
        var Sound = require('react-native-sound');

        // Enable playback in silence mode
        Sound.setCategory('Playback');

        let sound = new Sound('SampleAudio_0.4mb.mp3', Sound.MAIN_BUNDLE, (error) => {
                    if (error) {
                        alert('failed to load the sound', error);
                    } else {
                        sound.play(); // have to put the call to play() in the onload callback
                    }
                });
    }


    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            const nextPosition = this.state.position + 1
            return  (
                <View>
                    <Text>Name: {this.props.dinosours[this.state.position].name} </Text>
                    <Button states={{title: this.props.dinosours[nextPosition].alphabet.toString() ,onPress: this.nextButtonPress.bind(this)}} />
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  hasParallaxImages={true}
                  firstItem={SLIDER_1_FIRST_ITEM}
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
/>
                </View>
           )
        }
    }

    render(){
        return (
            <View>
                {this._renderDinosour()}
            </View>
        )
    }
}
 function mapStateToProps(state){
    return {
        dinosours: state.dinosours.list
    }
}
export default connect(mapStateToProps)(Alphabet)