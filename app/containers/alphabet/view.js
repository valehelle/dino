import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './style';
import { DINO_CARD_COLORS } from '../../helpers/colors'
const {
    View,
    Text,
    Image,
    Platform,
    TouchableHighlight,
} = ReactNative
var sound

class Alphabet extends Component{

  constructor(props) {
    super(props);
  }
    

    imagePress(position){
        sound = this.props.dinosours[position].sound
        sound.play()
    }

    userScroll(){
        if (sound != undefined){
            sound.stop()
        }
    }


    _renderItem ({item, index}) {
        return (
            <View style={[styles.card, {backgroundColor: DINO_CARD_COLORS[index]} ]}>
                <Text style={styles.alphabet}>{ item.name.charAt(0).toUpperCase() }{ item.name.charAt(0).toLowerCase() }</Text>

                <TouchableHighlight onPress={() => this.imagePress(index)}>
                <Image
                    source={ item.image }
                    style = { styles.image }
                    
                    />                
                </TouchableHighlight>
                <Text style={styles.name}>{ item.name }</Text>
                <Text style={styles.pronunciation}>{ item.pronunciation }</Text>
            </View>
        );
    }

    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            return  (
                <View style = {styles.container}>
                    <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={ this.props.dinosours }
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    firstItem={ 0 }
                    inactiveSlideScale={0.94}
                    inactiveSlideOpacity={0.7}
                    enableMomentum = {true}
                    onScroll = {this.userScroll.bind(this)}
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