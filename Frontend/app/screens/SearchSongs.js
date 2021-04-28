import React from 'react';
import { TouchableOpacity } from 'react-native';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

function SearchSongs({navigation}) {
    state = {
        search: '',
      };
    
      updateSearch = (search) => {
        this.setState({ search });
      };
    const { search } = state;

    const DATA = [];

const getItem = (data, index) => ({
  id: Math.random().toString(12).substring(0),
  title: `Song ${index+1}`
});

const getItemCount = (data) => 50;

const Item = ({ title }) => (
  <View style={styles.item}>
      <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

    return (
        <SafeAreaView style={styles.container}>
        <SearchBar
        style={styles.searchArea}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <Text style={styles.textHeader}>Songs You May Like:</Text>
      <VirtualizedList
        data={DATA}
        initialNumToRender={4}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
      </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      height: 100,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
    searchArea:{
        
    },
    textHeader:{
        color:"deeppink",
        marginTop:10,
        fontSize:20,
        marginLeft:17,
        fontWeight:"bold"
    }
  });
export default SearchSongs;