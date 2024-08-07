import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceholderImage = require("./assets/images/background-image.png");

export default function App() {
   const [showAppOptions, setShowAppOptions] = useState(false);

   const [selectedImage, setSelectedImage] = useState(null);

   const pickImageAsync = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
         allowEditing: true,
         quality: 1,
      });
      if (!result.canceled) {
         setSelectedImage(result.assets[0].uri);
         setShowAppOptions(true);
      } else {
         alert("Você não selecionou uma imagem.");
      }
   };
   const onReset = () => {
      setShowAppOptions(false);
   };

   const onAddSticker = () => {};

   const onSaveImageAsync = async () => {};
   return (
      <View style={styles.container}>
         <View style={styles.imageContainer}>
            <ImageViewer
               placeholderImageSource={PlaceholderImage}
               selectedImage={selectedImage}
            />
         </View>
         {showAppOptions ? (
            <View style={styles.optionsContainer}>
               <View style={styles.optionsRow}>
                  <IconButton icon="refresh" label="Reset" onPress={onReset} />
                  <CircleButton onPress={onAddSticker} />
                  <IconButton
                     icon="save-alt"
                     label="Save"
                     onPress={onSaveImageAsync}
                  />
               </View>
            </View>
         ) : (
            <View style={styles.footerContainer}>
               <Button
                  theme="primary"
                  label="Escolha uma foto"
                  onPress={pickImageAsync}
               />
               <Button
                  label="Use essa foto"
                  onPress={() => setShowAppOptions(true)}
               />
            </View>
         )}
         <StatusBar style="auto" />
      </View>
   );
}

const styles = StyleSheet.create({
   //  container: {
   //     flex: 1,
   //     backgroundColor: "#25292e",
   //     alignItems: "center",
   //     justifyContent: "center",
   //  },
   container: {
      flex: 1,
      backgroundColor: "#25292e",
      alignItems: "center",
   },
   imageContainer: {
      flex: 1,
      paddingTop: 58,
   },
   footerContainer: {
      flex: 1 / 3,
      alignItems: "center",
   },
   optionsContainer: {
      position: "absolute",
      bottom: 80,
   },
   optionsRow: {
      alignItems: "center",
      flexDirection: "row",
   },
   //  image: {
   //     width: 320,
   //     height: 440,
   //     borderRadius: 18,
   //  },
});
// modal emoji
