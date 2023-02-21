import {Text as RNText} from 'react-native';
import {TextProps} from './types';

export default function Text(props: TextProps) {
  return <RNText {...props}>{props.children}</RNText>;
}
