import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [product, setProduct] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  const addProduct = () => {
    setShoppingList([...shoppingList, {key: product}]);
    setProduct('');
  }

  const clearList = () => {
    setShoppingList([]);
  }
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.textInputStyle} onChangeText={text => setProduct(text)} value={product}></TextInput>
      <View style={styles.buttonContainer}>
        <View style={{marginRight: 30}}>
          <Button title="ADD" onPress={addProduct}></Button>
        </View>
        <Button title="CLEAR" onPress={clearList}></Button>
      </View>

      <Text style={styles.shoppingListStyle}>Shopping List</Text>
      <FlatList data={shoppingList} renderItem={({item}) => <Text>{item.key}</Text>} />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  textInputStyle: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 30
  },
  shoppingListStyle: {
    fontWeight: 'bold',
    color: '#00008B'  
  }
});