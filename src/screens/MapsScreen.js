import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location'


export default function MapsScreen() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(()=>{
    (async() => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted'){
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  let text = 'svp patienter...';
  if(errorMsg){
    text = errorMsg;
  }else if(location){
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {location ? (
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 5.0,
            longitudeDelta: 5.0,
          }}
        >
          <Marker 
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"ma Position"}
          />
        </MapView>
      ):(
        <Text>{text}</Text>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
