import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  FlatList,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function SearchSongs({ navigation }) {
  const [search, setSearch] = useState("");
  const [tracks, setTracks] = useState([]);
  const [filteredTracks, setFilteredTracks] = useState([]);

  useEffect(() => {
    const response = [
      {
        id: 1,
        title: "Stressed Out",
        artist: "Twenty One Pilots",
        albumArtUrl:
          "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 2,
        title: "Love Yourself",
        artist: "Justin Bieber",
        albumArtUrl:
          "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 3,
        title: "Hotline Bling",
        artist: "Drake",
        albumArtUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
    ];
    setFilteredTracks([
      {
        id: 1,
        title: "Stressed Out",
        artist: "Twenty One Pilots",
        albumArtUrl:
          "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 2,
        title: "Love Yourself",
        artist: "Justin Bieber",
        albumArtUrl:
          "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 3,
        title: "Hotline Bling",
        artist: "Drake",
        albumArtUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
    ]);
    setTracks([
      {
        id: 1,
        title: "Stressed Out",
        artist: "Twenty One Pilots",
        albumArtUrl:
          "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 2,
        title: "Love Yourself",
        artist: "Justin Bieber",
        albumArtUrl:
          "http://arrestedmotion.com/wp-content/uploads/2015/10/JB_Purpose-digital-deluxe-album-cover_lr.jpg",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
      {
        id: 3,
        title: "Hotline Bling",
        artist: "Drake",
        albumArtUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png",
        audioUrl:
          "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_5MG.mp3",
      },
    ]);
  }, []);

  const updateSearch = (search) => {
    setSearch(search);
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = tracks.filter(function (song) {
        const songData = song.title
          ? song.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return songData.indexOf(textData) > -1;
      });
      setFilteredTracks(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredTracks(tracks);
      setSearch(text);
    }
  };

  const renderItem = ({ item, index }) => {
    const key = item.id;
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("KaraokePlayer", { paramKey: { key } })
        }
      >
        <View style={styles.cardContainer}>
          <Image
            style={styles.image}
            source={{
              uri: item.albumArtUrl,
            }}
          />
          <View style={styles.cardText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
          </View>
          
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        containerStyle={styles.searchAreaContainer}
        inputContainerStyle={styles.searchArea1}
        style={styles.searchArea}
        placeholder="Search Songs..."
        onChangeText={(text) => searchFilterFunction(text)}
        value={search}
        color="black"
      />
      <Text style={styles.header}>Songs you may like</Text>
      <View>
        <FlatList
          data={filteredTracks}
          keyExtractor={(item, index) => {
            index.toString();
          }}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignContent: "center",
    backgroundColor:"#B19CD9"
  },
  item: {
    backgroundColor: "#f9c2ff",
    height: 100,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  searchAreaContainer:{
    backgroundColor:"#B19CD9",
   borderBottomColor:"#B19CD9",
   marginBottom:8
  },
  searchArea: {
    // paddingBottom: 20,
    backgroundColor: "white",
  },
  searchArea1:{
    backgroundColor: "white",
    borderColor:"black",
    borderWidth:1,
    borderBottomWidth:1,
  },
  header: {
    color: "white",
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
  },
  cardContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f9c2ff",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 2,
  },
  title: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  artist: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    marginLeft: 10,
    paddingTop: 10,
  },
  cardText: {
    flexDirection: "column",
  },
});
export default SearchSongs;
