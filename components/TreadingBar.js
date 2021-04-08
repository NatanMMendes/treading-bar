import React from 'react';
import { View, FlatList, Image , ScrollView , Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default TreadingBar = (props) => {
  const renderMenuItem = ({ item, index }) => {

    return (
      <ListItem containerStyle={{ width:320,height:200, backgroundColor: '#e6f2f3' }} key={index} hideChevron={true}>
        <Avatar
          size="large"
          source={{ uri: item.urlimage }}
          containerStyle={{ backgroundColor: '#000' }}
        />
        <ListItem.Content>
          <ListItem.Title style={{ color: 'black', fontWeight: 'bold' }}>
            {item.title}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={{height:200, flexDirection: 'row'}}>
      <Text style={{height:30,width:200,textAlign:'center',color:'white',marginTop:85,marginLeft:-85,marginRight:-90,backgroundColor:'#027d7e',fontWeight: "bold",textTransform: 'uppercase', transform: [{ rotate: '-90deg'}] }}>
        Para Você
      </Text>
      <FlatList 
        style={{
        height:200,width:300}}
        data={props.data}
        renderItem={renderMenuItem}
        horizontal={true}
      />

    </View>
  );
}
