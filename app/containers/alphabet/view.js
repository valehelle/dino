import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './style';
import { DINO_CARD_COLORS } from '../../helpers/colors'
import CardFlip from 'react-native-card-flip';
const {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    ImageBackground,
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

    backButtonPressed(){
         this.props.navigation.goBack()
    }

    userScroll(){
        if (sound != undefined){
            sound.stop()
        }
    }


    _renderItem ({item, index}) {
        return (
              <CardFlip style={{height: 400}} ref={ (card) => this['card' + index] = card } >

                    <View style={[styles.card, {backgroundColor: DINO_CARD_COLORS[index]} ]}>
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

    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            return  (
                <View style = {styles.container}>
                    <ImageBackground style={styles.background} source = {require('../../assests/images/background2.png')}>
                        <View style = {styles.backButton}>
                            <TouchableWithoutFeedback  onPress={() => this.backButtonPressed()}>
                                <Text>Back</Text>
                            </TouchableWithoutFeedback>
                        </View>
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
                        containerCustomStyle = {{paddingTop: 30, paddingBottom: 60}}
                    />
                </ImageBackground>
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