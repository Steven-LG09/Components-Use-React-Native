import {Image,ScrollView,StyleSheet } from "react-native";

const ImageList = ({route}) =>{
    const{images} = route.params;

    return(
        <ScrollView>
            {images.map(image => (
            <Image key={image.id} source={{ uri: image.uri }} style={styles.image} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 200,
      margin: 10,
    },
  });
export default ImageList;