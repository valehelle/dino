import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'

const {
    View,
    Text,
} = ReactNative

class Launch extends Component{
    componentDidMount(){
        setTimeout(() => { this.props.navigation.navigate('Home') }, 1000)
    }

    render(){
        return (
            <View style = { styles.container }>
                <Text style = { styles.icon } >launch container</Text>
            </View>
        )
    }
}
 function mapStateToProps(state){
    return {}
}
export default connect(mapStateToProps)(Launch)