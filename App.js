import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';

import 'react-native-get-random-values';
import { uuid } from 'uuidv4';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { Button } from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
	const [items, setItems] = useState([
		{ id: uuid(), text: 'Süt' },
		{ id: uuid(), text: 'Yumurta' },
		{ id: uuid(), text: 'Ekmak' },
		{ id: uuid(), text: 'Mevye Suyu' }
	])

	const deleteItem = (id) => {
		setItems(previousItems => {
			return previousItems.filter(item => item.id != id);
		});
	}

	const addItem = (text) => {
		if (!text || !(/\S/.test(text))) {
			Alert.alert('Error', 'Please enter an item');
		} else {
			setItems(previousItems => {
				return [{id: uuid(), text}, ...previousItems];
			});
		}
	}

	return (
		<View style={styles.container}>
			<Header title='ToDo List' />
			<AddItem addItem={addItem} />
			<FlatList
				data={items}
				renderItem={({ item }) => (
					<ListItem
						item={item} 
						deleteItem={deleteItem} 
					/>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default App;