import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';


const LogInScreen = () => 
{
    return ( <View style = 
    {
        styles.container


    }
    >  
    <TextInput
     label="Email"
    
    />

    
    </View >


    
    );

    
}
const styles = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
    });

export default LogInScreen;