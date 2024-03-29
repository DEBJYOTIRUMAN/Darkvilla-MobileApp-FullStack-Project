import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikVideoPostUploader from "./FormikVideoPostUploader";

const AddNewVideoPost = ({ navigation, progress, setProgress }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <FormikVideoPostUploader navigation={navigation} progress={progress} setProgress={setProgress} />
    </View>
  );
};
const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../../assets/icons/back.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>New Post</Text>
    <Text></Text>
  </View>
);
const styles = StyleSheet.create({
    container: {
      margin: 10,
    },
    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5
    },
    headerText: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 20,
      marginRight: 23,
    },
  });
export default AddNewVideoPost;
