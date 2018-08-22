import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Titulo extends Component {
    render () {
        return (
            <Text style={Styles.textStyles}>Dicionario</Text>
        );
    }
}

const styles = StyleSheet.create({
    textStyles: {
        fontSize: 30,
        color: '#717171'
    }
});