import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const modes = [ `cover`, `contain` ];

const Mode = () => {
    const [ mode, setMode ] = useState( modes[ 0 ] );
    const changeMode = () => {
        setMode( modes[ ( modes.indexOf( mode ) + 1 ) % modes.length ] );
    };
    return (
        <View style={styles.container}>
            <Button title={`Change mode - ${ mode }`} onPress={changeMode} />
            <View style={styles.imgContainer}>
                <TwicImg
                    src="sea-turtle.jpg"
                    ratio="16/9"
                    mode={mode}
                    placeholder="preview"
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

export default Mode;
