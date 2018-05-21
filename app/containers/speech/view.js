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
    alert(e.value);
    Voice.stop();

}

    imagePress(position){
        sound = this.props.dinosours[position].sound
        sound.play()
    }

    startSpeech(){
         Voice.start();
    }
    endSpeech(){
         Voice.stop();
    }
    userScroll(){
        if (sound != undefined){
            sound.stop()
        }
    }


    _renderItem ({item, index}) {
        return (
              <CardFlip style={{height: 400}} ref={ (card) => this['card' + index] = card } >

                    <View style={[styles.card ]}>
                        <Text style={styles.alphabet}>{ item.name.charAt(0).toUpperCase() }{ item.name.charAt(0).toLowerCase() }</Text>
                        <TouchableWithoutFeedback onPress={() => this.imagePress(index)}>
                        <Image
                            source={ item.image }
                            style = { styles.image }
                            
                            />                
                        </TouchableWithoutFeedback>
                        <Text style={styles.name}>{ item.name }</Text>
                        <Text style={styles.pronunciation}>{ item.pronunciation }</Text>
                        <TouchableWithoutFeedback onPress={() => this['card' + index].flip()}>
                            <View style = {styles.moreInfo} >
                                <Text style = {styles.flipText} >More Info</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={[styles.cardBack, {backgroundColor: 'grey'} ]}>
                        <Text style={styles.info}>{ item.description }</Text>
                        <TouchableWithoutFeedback onPress={() => this['card' + index].flip()}>
                            <View style = {styles.moreInfo} >
                                <Text style = {styles.flipText} >Back</Text>
                            </View>
                        </TouchableWithoutFeedback>
                </View>
            </CardFlip>
        );
    }



    render(){
        return (
            <View style = {{flex: 1, backgroundColor: 'red'}}>
                    <TouchableWithoutFeedback onPress={() => this.startSpeech()}>
                                <View style = {{flex:1, backgroundColor: 'blue'}} >
                                    <Text style = {styles.flipText} >start</Text>
                                </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.endSpeech()}>
                                <View style = {{flex:1, backgroundColor: 'blue'}} >
                                    <Text style = {styles.flipText} >end</Text>
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