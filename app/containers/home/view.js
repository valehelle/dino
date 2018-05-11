import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
const {
    View,
    Text,
} = ReactNative

class Home extends Component{
    startButtonPress(){
        this.props.screenProps.fetchDinosours()
    }
    render(){

        return ( 
            <View style = { styles.about } >
                <Text>Hello World</Text>
                <Button states={{title: 'Start' ,onPress: this.startButtonPress.bind(this)}} />
            </View>
        )
    }
}

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(Home)