import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
export default function Timer(props) {
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <LinearGradient
                colors={['rgba(59, 29, 105, 1)', 'rgba(59, 29, 105, 0.8)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            />
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.txtTimer}>{props.minutes} : </Text>
                <Text style={styles.txtTimer}>{props.seconds}</Text>
            </View>
            <TouchableOpacity onPress={() => props.setState('select')} style={styles.btnStart}>
                <Text style={styles.txtStart}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTimer: {
        color: 'white',
        fontSize: 40
    },
    btnStart: {
        backgroundColor: 'rgb(116, 67, 191)',
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 30,
        borderColor: 'white',
        borderWidth: 2
    },
    txtStart: {
        textAlign: 'center',
        paddingTop: 30,
        color: 'white',
        fontSize: 25
    }
});