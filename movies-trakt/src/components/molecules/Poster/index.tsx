import {Image, View} from 'react-native';
import Text from '../../atoms/Text';
import {styles} from './styles';
import {PosterProps} from './types';
import {LinearGradient} from 'expo-linear-gradient';

export function Poster({movie, size}: PosterProps) {
  const genres = movie.genres.map(genre => genre.name).join(', ');

  function getDimensionsBySize() {
    switch (size) {
      case 'small':
        return {width: 120, height: 180};
      case 'medium':
        return {width: 100, height: 100};
      case 'large':
        return {width: 415, height: 714};
      default:
        return {width: 100, height: 100};
    }
  }

  const dimensions = getDimensionsBySize();

  return (
    <View style={styles.container}>
      <Image
        style={[
          styles.image,
          {height: dimensions.height, width: dimensions.width},
        ]}
        source={{
          uri: `${movie.image_base}/${movie.poster_path}`,
        }}
      />

      <LinearGradient
        // Background Linear Gradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={{
          height: '50%',
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}
      />
      <View style={styles.footer}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>{genres}</Text>
      </View>
    </View>
  );
}
