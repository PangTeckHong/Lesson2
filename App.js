/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

const Movie = ({title, year, icon_name, poster})=> {
  return (
      <View>
          <Image source={poster} style={{width:400,height:400}} />
          <Text>
              {title} {year}
          </Text>
          <Icon name={icon_name} size={20} color="#B23B23" />
      </View>
  );};


const Showing = () => {
  return(
      <ScrollView>
          <View>
              <Movie title="Doctor Sleep" year="2019" icon_name="skull" poster={require('./img/doctor-sleep.jpg')}/>
              <Movie title="Midway" year="2020" icon_name="person-rifle" poster={require('./img/midway.jpg')}/>
          </View>
      </ScrollView>

  );
};

export default Showing;
