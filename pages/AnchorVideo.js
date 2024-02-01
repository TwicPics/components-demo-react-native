import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TwicVideo } from '@twicpics/components/react-native';

const config = [
  { anchor: 'center', mode: 'contain', ratio: '4/3' },
  { anchor: 'left', mode: 'contain', ratio: '4/3' },
  { anchor: 'right', mode: 'contain', ratio: '4/3' },
  { anchor: 'bottom', mode: 'contain', ratio: '3/4' },
  { anchor: 'center', mode: 'contain', ratio: '3/4' },
  { anchor: 'top', mode: 'contain', ratio: '3/4' },
  { anchor: 'center', mode: 'cover', ratio: '3/4' },
  { anchor: 'left', mode: 'cover', ratio: '3/4' },
  { anchor: 'right', mode: 'cover', ratio: '3/4' },
  { anchor: 'bottom', mode: 'cover', ratio: '4/3' },
  { anchor: 'center', mode: 'cover', ratio: '4/3' },
  { anchor: 'top', mode: 'cover', ratio: '4/3' },
];
let indiceConfig = 0;

const AnchorVideo = () => {
  const [ value, setConfig ] = useState( config[ 0 ] );
  const changeAnchor = () => {
    setConfig( config[ ( config.indexOf( value ) + 1 ) % config.length ] );
  };
    return (
        <View style={styles.container}>
            <Button title="Change anchor" onPress={changeAnchor}/>
            <View>
                <Text>anchor = { value.anchor }</Text>
                <Text>mode = { value.mode }</Text>
                <Text>ratio = { value.ratio }</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicVideo
                    src="video/sea-anemone.mp4"
                    anchor={value.anchor}
                    mode={value.mode}
                    preTransform="crop=1080x1080"
                    ratio={value.ratio}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    "imgContainer": {
        "marginTop": 20,
    },
    "container": {
        "padding": 20,
    },
} );

export default AnchorVideo;
