import React, { useState } from "react";
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
  const tracks = [
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

  updateSearch = (search) => {
    setSearch(search);
  };

  // const getItem = (data, index) => ({
  //   id: Math.random().toString(12).substring(0),
  //   title: `Song ${index + 1}`,
  // });

  renderItem = ({ item, index }) => {
    const key = item.id;
    return (
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate("KaraokePlayer", { paramKey: { key } })
        }
      >
        <Image
          style={styles.image}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/c/c9/Drake_-_Hotline_Bling.png",
          }}
        />
        <Text>{item.title}</Text>
      </TouchableWithoutFeedback>
    );
  };

  const getItemCount = (data) => 50;

  const Item = ({ title }) => (
    <View style={styles.cardContainer}>
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
      <Text
        style={styles.textHeader}
        onPress={() => navigation.navigate("KaraokePlayer")}
      >
        Songs You May Like:
      </Text>

      <View style={styles.cardContainer}>
        <FlatList
          data={tracks}
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
  searchArea: {},
  textHeader: {
    color: "deeppink",
    marginTop: 10,
    fontSize: 20,
    marginLeft: 17,
    fontWeight: "bold",
  },
  image: {
    width: 70,
    height: 70,
  },
  // cardContainer: {
  //   height: 70,
  //   width: "100%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
});
export default SearchSongs;
