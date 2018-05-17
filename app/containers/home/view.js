import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import styles from './style'
import  Button  from '../../components/button/view'
const {
    View,
    Text,
    Image
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