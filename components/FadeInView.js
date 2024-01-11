import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: props.duration ? props.duration : 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  if (props.navigation) {
    React.useEffect(() => {
      const unsubscribe = props.navigation.addListener('focus', () => {
        // fade in from 0 to 1
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: props.duration ? props.duration : 500,
          useNativeDriver: true,
        }).start();
      });

      const unsubscribeOut = props.navigation.addListener('blur', () => {
        // fade in from 1 to 0
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: props.duration ? props.duration : 500,
          useNativeDriver: true,
        }).start();
      });

      return unsubscribe;
    }, [props.navigation]);
  }

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};

export default FadeInView