import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {MoviesFeed} from '../../components/templates/MoviesFeed';
import {useGetPopularMovies} from '../../services/movies/useGetPopularMovies';
import {useGetTrendingMovies} from '../../services/movies/useGetTrendingMovies';

export default function Feed() {
  const {data: popular} = useGetPopularMovies();

  const {data: trending} = useGetTrendingMovies();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MoviesFeed
        sections={[
          {movies: popular || [], title: 'Popular'},
          {movies: trending || [], title: 'Trending'},
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
