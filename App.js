//@flow

import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './src/screens/Home';

//Main animations Views
import Animated from './src/screens/AnimatedList';
import Animatable from './src/screens/AnimatableList';
import Lottie from './src/screens/LottieList';

//Animated Views
import InfinitySpinAnimated from './src/Animated/InfinitySpin'

//Animatable View
import FadeInAnimatable from './src/Animatable/FadeIn'
import FadeInDownAnimatable from './src/Animatable/FadeInDown'
import LightSpeedInAnimatable from './src/Animatable/LightSpeedIn'
import LightSpeedOutAnimatable from './src/Animatable/LightSpeedOut'
import ZoomInAnimatable from './src/Animatable/ZoomIn'
import ZoomOutAnimatable from './src/Animatable/ZoomOut'

//Lottie Views
import SendEmailLottie from './src/Lottie/SendEmail'
import RocketLottie from './src/Lottie/Rocket'
import WorldLottie from './src/Lottie/World'

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Lottie: {
      screen: Lottie,
    },
    Animated: {
      screen: Animated,
    },
    Animatable: {
      screen: Animatable,
    },
    //Animated Views
    InfinitySpinAnimated: {
      screen: InfinitySpinAnimated,
    },

    //Animatable Views
    FadeInAnimatable: {
      screen: FadeInAnimatable,
    },
    FadeInDownAnimatable: {
      screen: FadeInDownAnimatable,
    },
    LightSpeedInAnimatable: {
      screen: LightSpeedInAnimatable,
    },
    LightSpeedOutAnimatable: {
      screen: LightSpeedOutAnimatable,
    },
    ZoomInAnimatable: {
      screen: ZoomInAnimatable,
    },
    ZoomOutAnimatable: {
      screen: ZoomOutAnimatable,
    },

    //Lottie Views
    SendEmailLottie: {
      screen: SendEmailLottie,
    },
    WorldLottie: {
      screen: WorldLottie,
    },
    RocketLottie: {
      screen: RocketLottie,
    },

  },
  {
    initialRouteName: 'Home',
  }
);

class App extends Component<*> {
  render() {
    return <RootStack />
  }
}

export default App;