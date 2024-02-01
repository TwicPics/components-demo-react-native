import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const Basic = () => (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <TwicImg alt="a sea turtle" src="sea-turtle.jpg"/>
                <Text>Mode = cover - Ratio = 1 (default)</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg src="sea-turtle.jpg" ratio="16/9"/>
                <Text>Mode = cover - Ratio = 16/9 - Maincolor</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg src="sea-turtle.jpg" ratio="4/3"/>
                <Text>Mode = cover - Ratio = 4/3</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg alt="a sea turtle" src="sea-turtle.jpg" mode="contain"/>
                <Text>Mode = cover - Ratio = 1 (default) - Mode = contain</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg src="sea-turtle.jpg" ratio="16/9" mode="contain"/>
                <Text>Mode = cover - Ratio = 16/9 - Mode = contain</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg src="sea-turtle.jpg" ratio="4/3" mode="contain"/>
                <Text>Mode = cover - Ratio = 4/3 - Mode = contain</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg alt="a sea turtle" src="sea-turtle.jpg" placeholder='meancolor'/>
                <Text>Mode = cover - Ratio = 1 (default) - Placeholder = meancolor</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg alt="a sea turtle" src="sea-turtle.jpg" placeholder='maincolor'/>
                <Text>Mode = cover - Ratio = 1 (default) - Placeholder = maincolor</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg src="sea-turtle.jpg" ratio="1" preTransform="flip=x" />
                <Text>Mode = cover - Ratio = 1 - PreTransform = flip=x </Text>
            </View>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create( {
    "imgContainer": {
        "width": `100%`,
        "marginBottom": 20,

    },
    "customImage": {
        "width": `50%`,
        "height": 100,
        "backgroundColor": `#8F00FF`,
    },
    "container": {
        "padding": 20,
    },
} );

export default Basic;
