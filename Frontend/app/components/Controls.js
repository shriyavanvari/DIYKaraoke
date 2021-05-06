import React, { Component } from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Controls = ({
  shuffleOn,
  repeatOn,
  onPlayPausePress,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  forwardDisabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={onPressShuffle}>
      <Image
        style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
        source={require("../assets/ic_shuffle_white.png")}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity onPress={onBack}>
      <Image source={require("../assets/ic_skip_previous_white_36pt.png")} />
    </TouchableOpacity>
    <View style={{ width: 20 }} />
    {isPlaying ? (
      <TouchableOpacity onPress={onPlayPausePress}>
        <View style={styles.playButton}>
          <Image source={require("../assets/ic_pause_white_48pt.png")} />
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPlayPausePress}>
        <View style={styles.playButton}>
          <Image source={require("../assets/ic_play_arrow_white_48pt.png")} />
        </View>
      </TouchableOpacity>
    )}
    <View style={{ width: 20 }} />
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Image
        style={[forwardDisabled && { opacity: 0.3 }]}
        source={require("../assets/ic_skip_next_white_36pt.png")}
      />
    </TouchableOpacity>
    <View style={{ width: 40 }} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      <Image
        style={[styles.secondaryControl, repeatOn ? [] : styles.off]}
        source={require("../assets/ic_repeat_white.png")}
      />
    </TouchableOpacity>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 72 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
});
