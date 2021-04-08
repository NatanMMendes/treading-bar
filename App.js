import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TreadingBar from './components/TreadingBar.js';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://natanmmendes.github.io/trendingbar.json?teste')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);
  return (
    <View style={styles.container}>
      <View style={{height:100 , backgroundColor: '#fff'}}>
        <TreadingBar data={data}/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width:'100%',
    height:'100%'
  }
});
