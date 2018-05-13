import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'

const {
    View,
    Text,
    Image,
} = ReactNative

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