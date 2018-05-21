import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './style';
import { DINO_CARD_COLORS } from '../../helpers/colors'
import CardFlip from 'react-native-card-flip';
import Voice from 'react-native-voice';
const {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
} = ReactNative
var sound

class Speech extends Component{

  constructor(props) {
    super(props);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
    
  onSpeechResults(e) {
    alert('onSpeechResults' + e.value);
}

    imagePress(position){
        sound = this.props.dinosours[position].sound
        sound.play()
    }

  async _startSpeech() {
    try {
      await Voice.start('en-US');
    } catch (e) {

    }
}

  async _endSpeech(e) {
    alert('end');
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
}


    render(){
        return (
            <View style = {{flex: 1, backgroundColor: 'red'}}>
                    <TouchableWithoutFeedback onPressIn={this._startSpeech.bind(this)} onPressOut={this._endSpeech.bind(this)}>
                                <View style = {{flex:1, backgroundColor: 'blue'}} >
                                    <Text style = {styles.flipText} >start</Text>
                                </View>
                    </TouchableWithoutFeedback>
            </View>
        )
    }
}
 function mapStateToProps(state){
    return {
        dinosours: state.dinosours.list
    }
}
export default connect(mapStateToProps)(Speech)