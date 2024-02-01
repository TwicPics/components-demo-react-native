
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const ratios = [ `1`, `4/3`, `16/9`, `3/4` ];
let indiceRatio = 0;
const Ratio = () => {
    const [ ratio, setRatio ] = useState( ratios[ 0 ] );
    const changeRatio = () => {
        indiceRatio = ( indiceRatio + 1 ) % ratios.length;
        setRatio( ratios[ indiceRatio ] );
    };
    return (
        <View style={styles.container}>
            <Button title={`Change ratio - ${ ratio }`} onPress={ changeRatio } />
            <View style={styles.imgContainer}>
                <TwicImg
                    src="sea-turtle.jpg"
                    ratio={ratio}
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

export default Ratio;
