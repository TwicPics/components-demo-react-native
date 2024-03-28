import { Text, ScrollView, StyleSheet, View } from 'react-native';
import { TwicImg, TwicVideo } from '@twicpics/components/react-native';

const assets = [
  { url: 'clown-fish.jpg' },
  { url: 'coral-reef.jpg' },
  { url: 'sea-anemone.jpg' },
  { url: 'sea-turtle.jpg' },
  { url: 'turtle-swimming.mp4', video: true },
  { url: 'coral-reef.mp4', video: true },
  { url: 'sea-anemone.mp4', video: true },
  { url: 'jellyfish.mp4', video: true },
];;


const LazyLoading = () => (
<ScrollView>
      <View>
        { assets.map( ( asset, i ) => (
          <View key={ i }>
            { asset.video ? 
              <TwicVideo
                src={ `video/${ asset.url } ` }
                style={ styles.item }
                ratio="3/4" // displays a video with aspect ratio = 3/4
              />:
              <TwicImg
                src={ asset.url }
                style={ styles.item }
                ratio="3/4" // displays an image with aspect ratio = 3/4
              />
            }
          </View>
          ) )
        }
        <Text>➡➡ An horizontal slider with lazy loaded images ➡➡</Text>
        <ScrollView
          horizontal 
          style={ styles.slider }
        >
          { assets.map( ( asset, i ) => (
              <View style={ styles.sliderItem } key={ i }>
              { asset.video ? 
                <TwicVideo
                  src={ `video/${ asset.url } ` }
                  style={ styles.item }
                  ratio="16/9" // displays a video with aspect ratio = 16/9
                />:
                <TwicImg
                  src={ asset.url }
                  style={ styles.item }
                  ratio="16/9" // displays an image with aspect ratio = 3/4
                />
              }
              </View>
            ) ) 
          }
        </ScrollView>
      </View>
    </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 20,
  },
  slider: {
    "marginHorizontal": 20,
  },
  sliderItem: {
    width: 500,
  },
});

export default LazyLoading;
