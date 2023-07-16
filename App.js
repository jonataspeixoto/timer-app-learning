import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [alarmSound, setAlarmSound] = useState([
		{
            id: 1,
			selected: true,
			sound: 'Alarm 1',
			file: 'alarm1.mp3'
		},
		{
            id: 2,
			selected: false,
			sound: 'Alarm 2',
			file: 'alarm2.mp3'
		},
        {
            id: 3,
			selected: false,
			sound: 'Alarm 3',
			file: 'alarm3.mp3'
		}
	])
    
    let tnumbers = [];
    for (let i = 1; i <= 60; i++){
        tnumbers.push(i);
    }  

    const setAlarm = (id) => {
        let alarmTemp = alarmSound.map((val) => {
            if(id != val.id){
                val.selected = false;
            } else {
                val.selected = true;
            }
            return val;
        })
        
        setAlarmSound(alarmTemp);
    }
	return (
		<View style={styles.container}>
            <StatusBar style='auto' />
            <LinearGradient
                // Background Linear Gradient
                colors={['rgba(59, 29, 105, 1)', 'rgba(59, 29, 105, 0.8)']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            />
			<Text style={{ color: 'white', fontSize: 30 }}>Select your Time:</Text>
			<View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white', paddingTop: 16}}>Min:</Text>
                <Picker
                    selectedValue={minutes}
                    onValueChange={(itemValue, itemIndex) => {setMinutes(itemValue)}}
                    style={{ height: 50, width: 100, color: 'white'  }}
                    >
                    {
                        (tnumbers.map((val) => {
                            return( <Picker.Item key={val} label={val.toString()} value={val.toString()} /> );
                        }))
                    }
                </Picker>
                <Text style={{color: 'white', paddingTop: 16}}>Sec:</Text>
                <Picker
                    selectedValue={seconds}
                    onValueChange={(itemValue, itemIndex) => {setSeconds(itemValue)}}
                    style={{ height: 50, width: 100, color: 'white' }}
                    >
                    {
                        (tnumbers.map((val) => {
                            return( <Picker.Item key={val} label={val.toString()} value={val.toString()} /> );
                        }))
                    }
                </Picker>
            </View>
            <View style={{flexDirection: 'row'}}>
                {
                    alarmSound.map((val) => {
                        if(val.selected){
                            return (
                                <TouchableOpacity onPress={ () => setAlarm(val.id) } style={styles.btnChooseSelected}>
                                    <Text style={{color: 'white'}}>{val.sound}</Text>
                                </TouchableOpacity>
                            )
                        } else {
                            return (
                                <TouchableOpacity onPress={ () => setAlarm(val.id) } style={styles.btnChoose}>
                                    <Text style={{color: 'white'}}>{val.sound}</Text>
                                </TouchableOpacity>
                            )
                        }
                    })
                }
            </View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: 'rgb(80,50,168)',
		alignItems: 'center',
		justifyContent: 'center',
	},
    btnChoose: {
        marginRight: 10,
        padding: 8,
        backgroundColor: 'rgb(116, 67, 191)'
    },
    btnChooseSelected: {
        marginRight: 10,
        padding: 8,
        backgroundColor: 'rgba(116, 67, 191, 0.3)',
        borderColor: 'white',
        borderWidth: 1
    }
});
