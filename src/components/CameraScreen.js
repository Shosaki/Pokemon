//import liraries
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Camera, Permissions } from "expo-camera";

// import * as Permissions from "expo-permissions";
// import * as MediaLibrary from "expo-media-library";

import * as ImagePicker from "expo-image-picker";

let camera = Camera;

// create a component
const CameraScreen = ({ navigation }) => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

  const __takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    setPreviewVisible(true);
    setCapturedImage(photo);
  };

  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
  };

  const __savePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    // status = "granted";
    // if (status === "granted") {
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync();
    // Explore the result
    console.log(result);
    if (!result.cancelled) {
      setCapturedImage(result.uri);
      console.log("Image picker path:", result.uri);
    }
  };

  const __switchCamera = () => {
    if (cameraType === "back") {
      setCameraType("front");
    } else {
      setCameraType("back");
    }
  };

  return (
    <View style={styles.container}>
      {previewVisible && capturedImage ? (
        <CameraPreview
          photo={capturedImage}
          // savePhoto={__savePhoto}
          retakePicture={__retakePicture}
        />
      ) : (
        <Camera
          type={cameraType}
          style={styles.cameraStyle}
          ref={(r) => {
            camera = r;
          }}
        >
          <TouchableOpacity
            onPress={__switchCamera}
            style={styles.switchCameraStyle}
          >
            <Text style={styles.flashSwitchTextStyle}>
              {cameraType === "front" ? "🤳" : "📷"}
            </Text>
          </TouchableOpacity>

          <View style={styles.cameraView1}>
            <View style={styles.cameraView2}>
              <TouchableOpacity
                onPress={__takePicture}
                style={styles.takePictureStyle}
              />
            </View>
          </View>
        </Camera>
      )}
    </View>
  );
};

const CameraPreview = ({ photo, savePhoto, retakePicture }) => {
  console.log("THE CONSOLE LOG WE NEED", photo["uri"]);
  return (
    <View style={styles.cameraPreviewStyle}>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={styles.imageBackgroundStyle}
      >
        <View style={styles.cameraPreviewView1}>
          <View style={styles.cameraPreviewView2}>
            <TouchableOpacity
              onPress={retakePicture}
              style={styles.retakeSaveStyle}
            >
              <Text style={styles.retakeSaveTextStyle}>Re-take</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={savePhoto}
              style={styles.retakeSaveStyle}
            >
              <Text style={styles.retakeSaveTextStyle}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cameraStyle: {
    flex: 1,
    width: "100%",
  },
  switchCameraStyle: {
    position: "absolute",
    left: "5%",
    top: "18%",
    height: 27,
    width: 27,
  },
  flashSwitchTextStyle: {
    fontSize: 20,
  },
  cameraView1: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
  },
  cameraView2: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  takePictureStyle: {
    width: 70,
    height: 70,
    bottom: 0,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  cameraPreviewStyle: {
    backgroundColor: "transparent",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageBackgroundStyle: {
    flex: 1,
  },
  cameraPreviewView1: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    justifyContent: "flex-end",
  },
  cameraPreviewView2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  retakeSaveStyle: {
    width: 130,
    height: 40,
    alignItems: "center",
    borderRadius: 4,
  },
  retakeSaveTextStyle: {
    color: "#fff",
    fontSize: 20,
  },
});

//make this component available to the app
export default CameraScreen;
