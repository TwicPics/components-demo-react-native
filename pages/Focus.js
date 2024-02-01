import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const focuses = [ `none`, `50px60p`, `top`, `bottom`, `auto` ];
let indiceFocus = 0;

const Focus = () => {
    const [ focus, setFocus ] = useState( focuses[ indiceFocus ] );
    const changeFocus = () => {
        indiceFocus = ( indiceFocus + 1 ) % focuses.length;
        setFocus( focuses[ indiceFocus ] );
    };
    return (
        <View style={styles.container}>
            <Button title={`Change focus - ${ focus }`} onPress={() => changeFocus()} />
            <View style={styles.imgContainer}>
                <TwicImg
                    src="jelly-fish.jpg"
                    focus={focus}
                    ratio="16/9"
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

export default Focus;
