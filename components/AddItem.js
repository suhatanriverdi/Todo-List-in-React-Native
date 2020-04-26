import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({ title, addItem }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => setText(textValue);

  return (
    <View>
      <TextInput placeholder='Type Here...' style={styles.input} onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
	input: {
    backgroundColor: '#efefef',
		height: 60,
		fontSize: 16,
    margin: 5
	},
	btn: {
		backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
	},
	btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
	}
});

export default AddItem;