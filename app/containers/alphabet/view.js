import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';


const {
    View,
    Text,
    Image,
    Dimensions,
} = ReactNative

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}
const itemHorizontalMargin = wp(2);
const slideWidth = wp(75);
export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;


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


    _renderItem ({item, index}) {
        return (
            <View style={{backgroundColor: 'blue'}}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            const nextPosition = this.state.position + 1
            return  (
                <View>
                    <Image
                    source={this.props.dinosours[this.state.position].image}
                     />
                    <Text>Name: {this.props.dinosours[this.state.position].name} </Text>
                    <Button states={{title: this.props.dinosours[nextPosition].alphabet.toString() ,onPress: this.nextButtonPress.bind(this)}} />
                    <Carousel
                        layout={'default'} 
                        ref={(c) => { this._carousel = c; }}
                        data={ENTRIES1}
                        renderItem={this._renderItem}
                        sliderWidth={sliderWidth}
                        itemWidth={itemWidth}
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