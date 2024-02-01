import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

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

const Anchor = () => {
    const [ value, setConfig ] = useState( config[ 0 ] );
    const changeAnchor = () => {
      setConfig( config[ ( config.indexOf( value ) + 1 ) % config.length ] );
    };
    return (
        <View style={styles.container}>
            <Button title="Change anchor" onPress={changeAnchor} style={styles.button}/>
            <View>
                <Text>anchor = { value.anchor }</Text>
                <Text>mode = { value.mode }</Text>
                <Text>ratio = { value.ratio }</Text>
            </View>
            <View style={styles.imgContainer}>
                <TwicImg
                    src="clown-fish.jpg"
                    anchor={value.anchor}
                    mode={value.mode}
                    preTransform="focus=50px40p/crop=1000x1000"
                    ratio={value.ratio}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create( {
    "button": {
        "alignItems": `center`,
        "justifyContent": `center`,
        "paddingVertical": 12,
        "paddingHorizontal": 32,
        "borderRadius": 50,
        "elevation": 3,
        "backgroundColor": `#8D00F4`,
        "position": `absolute`,
        "right": 5,
        "top": 5,
    },
    "imgContainer": {
        "marginTop": 20,
    },
    "container": {
        "padding": 20,
    },
} );

export default Anchor;
