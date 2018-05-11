import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'

const {
    View,
    Text,
} = ReactNative

class Alphabet extends Component{

  constructor(props) {
    super(props);
    this.state = {position: 0};

  }

    componentDidMount(){
        this.props.screenProps.fetchDinosours()
    }
    
    nextButtonPress(){
        this.setState({position: this.state.position + 1})
    }


    _renderDinosour(){
        if(this.props.dinosours != undefined ){
            const nextPosition = this.state.position + 1
            return  (
                <View>
                    <Text>Name: {this.props.dinosours[this.state.position].name} </Text>
                    <Button states={{title: this.props.dinosours[nextPosition].alphabet.toString() ,onPress: this.nextButtonPress.bind(this)}} />
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