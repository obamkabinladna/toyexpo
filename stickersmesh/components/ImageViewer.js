import {StyleSheet, Image} from "react-native";

export default function ImageViewer({placeholderImageSource, selectedImage}) {
    const imageSource = selectedImage ? {uri: selectedImage} : placeholderImageSource // condition ? value_if_true : value_if_false
    return (
        <Image source={imageSource} style={styles.image}></Image>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    }
})