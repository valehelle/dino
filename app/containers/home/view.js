import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
const {
    View,
    Text,
    Image,
    ImageBackground
} = ReactNative

class Home extends Component{
    componentDidMount(){
        this.props.screenProps.fetchDinosours()
    }
    startButtonPress(){
        this.props.navigation.navigate('Alphabet')
        
    }
    render(){

        return ( 
            <ImageBackground style={styles.background} source = {require('../../assests/images/background.jpg')}>
            <View style = { styles.container } >
                
                <View style = { styles.titleContainer }>
                <Text style = { styles.title }>Dino Flash Card</Text>
                </View>
                <View style = { styles.startContainer }>
                <Button style = { styles.startButton } states={{title: 'Start' ,onPress: this.startButtonPress.bind(this)}} />
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