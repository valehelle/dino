import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'

const {
    View,
    Text,
} = ReactNative

class Alphabet extends Component{
    render(){
        return (
            <View>alphabet container</View>
        )
    }
}
 function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps)(Alphabet)