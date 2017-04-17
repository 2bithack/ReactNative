import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TitleBar from './example-title-bar';
import ScrollingFun from './scroll-view';

//props = {color: "", size:00, title:""}
const App = (/*{color, size, tyle}*/props) => {
    return (
        <View style = {styles.container}>
            <TitleBar style = {styles.titleStyle} title="My spoon is too big.." />
            <ScrollingFun />
            <View style = {styles.content}>
                <Text style = {styles.title}>
                    I AM A BANANA!
                </Text>
            </View>
        </View>
    );
}

export default App;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    title: {
        fontSize: 48,
        fontFamily: 'Helvetica',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ff0'
    },
    content: {

    },
    titleStyle: {
        alignSelf: 'flex-start',
        backgroundColor: "indigo"
    }
});
