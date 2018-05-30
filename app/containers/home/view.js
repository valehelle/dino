import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
const {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableWithoutFeedback
} = ReactNative

class Home extends Component{
    componentDidMount(){
        this.props.screenProps.fetchDinosours()
    }
    startButtonPress(){
        this.props.navigation.navigate('Alphabet')
        
    }
    speechButtonPress(){
        this.props.navigation.navigate('Speech')
        
    }
    render(){

        return ( 
            <ImageBackground style={styles.background} source = {require('../../assests/images/background3.jpg')}>
            <View style = { styles.container } >
                
                <View style = { styles.titleContainer }>
                    <Image source={ require('../../assests/images/dino_title.png') } style = { styles.title }/> 
                </View>
                <View style = { styles.startContainer }>
                <TouchableWithoutFeedback onPress={() => this.startButtonPress()}>
                        <Image
                            source={ require('../../assests/images/play.png') }
                            style = { styles.startButton }
                            />                
                </TouchableWithoutFeedback>                
                </View>
            </View>
            </ImageBackground>
        )
    }
}

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(Home)