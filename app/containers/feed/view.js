import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
const {
    View,
    Text,
} = ReactNative

class Feed extends Component{
    
    render(){

        return ( 
            <View style = { styles.about } >
                <Text>Hello World</Text>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{}
}

export default connect(mapStateToProps)(Feed)