import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './style';

const {
    View,
    Text,
    Image,
    Platform,
    TouchableHighlight,
} = ReactNative
const IS_ANDROID = Platform.OS === 'android';


class Alphabet extends Component{

  constructor(props) {
    super(props);
  }
    

    imagePress(position){
        let sound = this.props.dinosours[position].sound
        sound.play()
    }


    _renderItem ({item, index}) {
        return (
            <View style={styles.card}>
                <Text style={styles.alphabet}>{ item.alphabet }</Text>

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