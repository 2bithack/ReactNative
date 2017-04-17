import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class TitleBar extends Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}
export default TitleBar;

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#FFF',

    },
    title: {
        fontSize: 24,
        color: '#000',
        flex: 0
    }
});
