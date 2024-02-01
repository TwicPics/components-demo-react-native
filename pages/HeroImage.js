import {StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const HeroImage = () => {
    return (
        <View style={styles.container}>
            <TwicImg
                style={{
                  "height":'100%' // we have to set the height of the asset when using ratio = "none"
                }}
                src="sea-anemone.jpg"
                ratio="none"
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    "container": {
        "width": '100%',
    },
} );

export default HeroImage;
