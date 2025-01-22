import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { supabase } from '../../services/Supabase'; // Update the path if needed
import { ThameFont } from '../../Constants/theme';

const HomeScreen = () => {

  const testConnection = async () => {
    try {
      const { data, error } = await supabase.from('test_table').select('*');
      if (error) {
        alert(`Error: ${error.message}`);
        console.error('Supabase Error:', error);
      } else {
        alert(`Data: ${JSON.stringify(data)}`);
        console.log('Supabase Data:', data);
      }
    } catch (err) {
      alert(`Unexpected Error: ${err.message}`);
      console.error('Unexpected Error:', err);
    }
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <TouchableOpacity style={{backgroundColor:'brown'}} onPress={testConnection}><Text style={{fontFamily:ThameFont.PrimaryExtraBold, fontSize:18}}>Press Here</Text></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})