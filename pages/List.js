import { SafeAreaView, StatusBar, View, FlatList, StyleSheet } from 'react-native';
import { TwicImg } from '@twicpics/components/react-native';

const seed = [
  `angel-fish.jpg`,
  `clown-fish.jpg`,
  `coral-reef.jpg`,
  `hypocampus.jpg`,
  `jelly-fish.jpg`,
  `shark.jpg`,
  `sea-anemone.jpg`,
  `sea-turtle.jpg`,
  `tiger-fish.jpg`,
];

const images = [ ...seed, ...seed, ...seed, ...seed, ...seed, ...seed];


const renderItem = ( { item } ) => (
    <View style={ { "padding": 10 } } >
        <TwicImg src={ item } eager refit="5p"/>
    </View>
);

const List = () => (
    <SafeAreaView style={styles.container}>
        <FlatList data={images} renderItem={renderItem} keyExtractor={_ => Math.floor( Math.random() * 1000000 )}/>
    </SafeAreaView>
);
const styles = StyleSheet.create( {
    "container": {
        "flex": 1,
        "marginTop": StatusBar.currentHeight || 0,
    },
} );

export default List;
