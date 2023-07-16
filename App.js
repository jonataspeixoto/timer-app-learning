import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from "@react-native-picker/picker";

export default function App() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [alarmSound, setAlarmSound] = useState([
		{
			selected: true,
			sound: 'alarm 1',
			file: 'alarm1.mp3'
		},
		{
			selected: false,
			sound: 'alarm 2',
			file: 'alarm2.mp3'
		}
	])
    
    const fillNumbers = () => {
        let tnumbers = [];
        for(var i = 1; i <=60; i++){
            tnumbers.push[i + ''];
        }
        return numbers.length > 0 ? true : false ;
    }

    let tnumbers = [];
    for (let i = 1; i <= 60; i++){
        tnumbers.push(i);
    }
    const renderNumbersList = () => {     
       
    }
    

	return (
		<View style={styles.container}>
			<Text style={{ color: 'white', fontSize: 30 }}>Select your Time:</Text>
			<View style={{flexDirection: 'row'}}>
                <Text style={{color: 'white'}}>Min:</Text>
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
                <Text style={{color: 'white'}}>Sec:</Text>
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
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(80,50,168)',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
