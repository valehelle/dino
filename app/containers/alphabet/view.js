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
    this.state = {position: 0};
  }
    

    imagePress(position){
        sound = this.props.dinosours[this.state.position].sound
        sound.play()
    }
    newPosition(newPosition){
        this.setState({position: newPosition})
    }

    backButtonPressed(){
         this.props.navigation.goBack()
    }

    userScroll(){
        if (sound != undefined){
            sound.stop()
        }
    }
    flipCard(){
        this['card' + this.state.position].flip()
    }
    _renderFlipFront(){
        return(
            <TouchableWithoutFeedback onPress={() => this.flipCard()} style = {styles.moreInfo}>
                <View style = {styles.moreInfo} >
                                <Image
                                source={ require('../../assests/images/info.png') }
                                style = { styles.backImage }
                                />  
                            </View>
            </TouchableWithoutFeedback>
        )
    }

    _renderFlipBack(){
            return(
                <TouchableWithoutFeedback onPress={() => this.flipCard()} style = {styles.moreInfo}>
                    <View style = {styles.moreInfo} >
                                    <Image
                                    source={ require('../../assests/images/info.png') }
                                    style = { styles.moreInfoImage }
                                    />  
                                </View>
                </TouchableWithoutFeedback>
            )
    }

    _renderItem ({item, index}) {
        return (
            <View style = {{flex:1}}>
                <CardFlip perspective= {8000} flipZoom = {0} style={{flex: 8, marginBottom:10,}} ref={ (card) => this['card' + index] = card } >
                    <View style={[styles.card ]}>
                        <Text style={styles.alphabet}>{ item.name.charAt(0).toUpperCase() }{ item.name.charAt(0).toLowerCase() }</Text>
                        <Image
                            source={ item.image }
                            style = { styles.image }
                            
                            />                
                        <Text style={styles.name}>{ item.name }</Text>
                       
                    </View>

                    <View style={[styles.card ]}>
                        <Image
                            source={ item.image }
                            style = { styles.image }
                            
                            />    
                        <Text style={styles.info}>{ item.description }</Text>
                    </View>
                </CardFlip>
                <View style={[styles.pronounceCard ]}>
                    <Text style={styles.pronunciation}>{ item.pronunciation }</Text>
                </View>
                
            </View>
        );
    }

    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            return  (
                <View style = {styles.containerDinosour}>
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
                        containerCustomStyle = {{paddingTop: 10}}
                        onSnapToItem= {(index) => {this.newPosition(index)}}
                    />
            </View>
           )
        }
    }
    _renderBack(){
        return(                        
            <View style = {styles.backButton}>
                <TouchableWithoutFeedback  onPress={() => this.backButtonPressed()}>
                        <View style = {styles.backContainer}>
                            <Image
                            source={ require('../../assests/images/home.png') }
                            style = { styles.backImage }
                            />  
                        </View>
                </TouchableWithoutFeedback>
            </View>
                        )

    }
    _renderVoice(){
        return(                        
            <View style = {styles.voiceButton}>
                <TouchableWithoutFeedback  onPress={() => this.imagePress(0)}>
                        <View style = {styles.bottomContainer}>
                            <View style = {styles.voiceContainer}>
                                <Image
                                source={ require('../../assests/images/voice.png') }
                                style = { styles.voiceImage }
                                />
                            </View>
                            {this._renderFlipBack()}  
                        </View>
                </TouchableWithoutFeedback>
            </View>
                        )

    }

    render(){
        return (
            <View style = {styles.container}>
                 <ImageBackground style={styles.background} source = {require('../../assests/images/background2.png')}>
                    {this._renderBack()}
                    {this._renderDinosour()}
                    {this._renderVoice()}
                </ImageBackground>
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