import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const transforms = [ ``, `flip=x`, `flip=y`, `focus=47px65p/crop=30px30p` ];
let indiceTransform = 0;

const Transform = () => {
    const [ transform, setTransform ] = useState( transforms[ indiceTransform ] );
    const changeTransform = () => {
        indiceTransform = ( indiceTransform + 1 ) % transforms.length;
        setTransform( transforms[ indiceTransform ] );
    };
    return (
        <View style={styles.container}>
            <Button title={`Change transform - ${ transform }`} onPress={() => changeTransform()} />
            <View style={styles.imgContainer}>
                <TwicImg
                    src="sea-anemone.jpg"
                    preTransform={transform}
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

export default Transform;
