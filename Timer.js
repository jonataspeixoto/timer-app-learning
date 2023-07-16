import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { Audio } from 'expo-av';

export default function Timer(props) {
    var done = false;

    async function playSound() {
        const soundObject = new Audio.Sound();
        console.log('Loading Sound');
        let alarm = (props.alarmSound.find((val) => { return val.selected }))
        console.log(alarm)
        await soundObject.loadAsync( alarm.file );
    
        console.log('Playing Sound');
        await soundObject.playAsync();
      }

    useEffect(() => {
        const timer = setInterval(() => {
            props.setSeconds(props.seconds - 1)

            if(props.seconds <= 0){
                if (props.minutes > 0) {
                    props.setMinutes ( minutes - 1 );
                    props.setSeconds(59);
                } else {
                    if (!done){
                        done = true;
                        props.setState('select');
                        props.setMinutes(0);
                        props.setSeconds(1);
                        playSound();
                    }
                }
            }
        }, 1000)

        return () => clearInterval(timer);
    })

    function reset(){
        props.setState('select');
        props.setMinutes(0);
        props.setSeconds(1);
    }

    function numberFormatter(number){
        var finalNumber = '';
        if (number < 10) {
            finalNumber = '0' + number;
        } else {
            finalNumber = number;
        }
        return finalNumber;
    }

    var seconds = numberFormatter(props.seconds);
    var minutes = numberFormatter(props.minutes);

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
                <Text style={styles.txtTimer}>{minutes} : </Text>
                <Text style={styles.txtTimer}>{seconds}</Text>
            </View>
            <TouchableOpacity onPress={() => reset('select')} style={styles.btnStart}>
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