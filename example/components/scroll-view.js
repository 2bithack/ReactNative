import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

const ScrollingFun = () => {

    var array = [];
    for (var i = 0; i < 20; i++) {
        array.push(<View style = {styles.box} />);
    }

    return (
        <ScrollView>
            {array}
        </ScrollView>
    );
}

export default ScrollingFun;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        height: 100,
        margin: 5,
        backgroundColor: 'indigo',
        borderRadius: 10
    }
});
