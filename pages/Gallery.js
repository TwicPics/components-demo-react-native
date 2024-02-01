import { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const seed = [
  `angel-fish.jpg`,
  `clown-fish.jpg`,
  `coral-reef.jpg`,
  `hypocampus.jpg`,
  `jelly-fish.jpg`,
  `shark.jpg`,
  `sea-anemone.jpg`,
  `sea-turtle.jpg`,
  `tiger-fish.jpg`,
];
const images = [ ...seed, ...seed, ...seed, ...seed, ...seed, ...seed ];

class Gallery extends Component {
    render() {
        return (
            <ScrollView
                style={styles.imagesContainer}
                contentContainerStyle={{
                    "flexDirection": `row`,
                    "flexWrap": `wrap`,
                    "justifyContent": `center`,
                }}
                horizontal={false}
            >
                { images.map( ( image, i ) => (
                    <View
                        style={{
                            "width": `30%`,
                            "margin": `1.5%`,
                        }}
                        key={i}
                    >
                        <TwicImg
                            refit="5p"
                            src={image}
                            step="20"
                            style={ styles.image }
                        />
                    </View>
                ) ) }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create( {
    "imagesContainer": {
        "marginHorizontal": 4,
        "marginTop": 30,
        "width": `100%`,
    },
} );

export default Gallery;
