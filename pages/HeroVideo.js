import {StyleSheet, View } from 'react-native';
import { TwicVideo } from '@twicpics/components/react-native';

const HeroVideo = () => {
    return (
        <View style={styles.container}>
            <TwicVideo
                style={{
                  "height":'100%' // we have to set the height of the asset when using ratio = "none"
                }}
                src="video/turtle-swimming.mp4"
                ratio="none"
            />
        </View>
    );
};

const styles = StyleSheet.create( {
  "container": {
    "width": '100%',
    "height": '100%'
  },
} );

export default HeroVideo;
