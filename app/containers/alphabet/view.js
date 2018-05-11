import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'

const {
    View,
    Text,
} = ReactNative

class Alphabet extends Component{
    componentDidMount(){
        this.props.screenProps.fetchDinosours()
    }


    _renderDinosour(){
        if(this.props.dinosours != undefined ){
           return  (<Text>Name: {this.props.dinosours[0].name} </Text>)
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