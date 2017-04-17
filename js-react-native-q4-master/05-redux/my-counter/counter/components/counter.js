import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter, resetCounter } from '../actions';
import { View, Text, StyleSheet } from 'react-native';
import B from './b';

class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.counter}</Text>
        <B styles={styles.button} title="+" onPress={()=>{this.props.incrementCounter()}} />
        <B styles={styles.button} title="-" onPress={()=>{this.props.decrementCounter()}} />
        <B styles={styles.button} title="RESET" onPress={()=>{this.props.resetCounter()}} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return { counter: state.counter }
}

export default connect(mapStateToProps, {incrementCounter, decrementCounter, resetCounter})(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center'
  },
  button: {
    fontSize: 40
  }
});
