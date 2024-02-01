
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const configs = [
  { "mode": "cover", "refit": undefined },
  { "mode": "cover", "refit": true },
  { "mode": "cover", "refit": "5p" },
  { "mode": "contain", "refit": undefined },
  { "mode": "contain", "refit": true, },
  { "mode": "contain", "refit": "5p" },
];

let indiceConfig = 0;

const Refit = () => {
    const [ config, setConfig ] = useState( configs[ indiceConfig ] );
    const changeConfig = () => {
        indiceConfig = ( indiceConfig + 1 ) % configs.length;
        setConfig( configs[ indiceConfig ] );
    };
    return (
        <View style={styles.container}>
            <Button title="Change configuration" onPress={() => changeConfig()} />
            <View>
                <Text>mode = { config.mode }</Text>
                <Text>refit = { config.refit === true ? `true` : config.refit ?? `false` }</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg
                    src="clown-fish.jpg"
                    mode={config.mode}
                    refit={config.refit}
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

export default Refit;
