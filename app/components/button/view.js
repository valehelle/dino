import ReactNative from 'react-native'
import React, { Component } from 'react'
import styles from './style'

const {
    View,
    TouchableOpacity,
    Text,

} = ReactNative

class Button extends Component {

    constructor(props) {
    super(props);
    this.state = {
      viewState: this.props.states
    };
  }

    render(){
        const {
            onPress,
            title,
        } = this.state.viewState

        return(
            <TouchableOpacity activeOpacity={ 0.8 } onPress={() => onPress()} style = { styles.button }>
                <Text style = { styles.buttonText }>{ title }</Text>
            </TouchableOpacity>
        )
    }
}
export default Button