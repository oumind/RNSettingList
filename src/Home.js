/**
 * Copyright 2016 UVO PLUS TECH CO., LTD.
 * The setup of pApp.
 * @flow
 */

'use strict';

import React, {
  Component
} from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View
} from 'react-native';

import UjlSettingList from './UjlSettingList';

/**
 * realistic iPhone example
 */
class Home extends Component {
  constructor(){
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = {switchValue: false};
  }

  render() {
    return (
      <View style={{backgroundColor:'#EFEFF4',flex:1}}>
        <View style={{borderBottomWidth:1, backgroundColor:'#f7f7f8',borderColor:'#c8c7cc'}}>
          <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text>
        </View>
        <View style={{backgroundColor:'#EFEFF4',flex:1}}>
          <UjlSettingList borderColor='#c8c7cc' defaultItemSize={50}>
            <UjlSettingList.Header headerStyle={{marginTop:15}}/>
            <UjlSettingList.Item
              icon={
                  <Image style={styles.imageStyle} source={require('./images/airplane.png')}/>
              }
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title='Airplane Mode'
              titleStyle={{fontSize:16}}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/wifi.png')}/>}
              title='Wi-Fi'
              titleStyle={{fontSize:16}}
              titleInfo='Bill Wi The Science Fi'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route to Wifi Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/blutooth.png')}/>}
              title='Blutooth'
              titleStyle={{fontSize:16}}
              titleInfo='Off'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route to Blutooth Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/cellular.png')}/>}
              title='Cellular'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To Cellular Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/hotspot.png')}/>}
              title='Personal Hotspot'
              titleStyle={{fontSize:16}}
              titleInfo='Off'
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert('Route To Hotspot Page')}
            />
            <UjlSettingList.Header headerStyle={{marginTop:15}}/>
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/notifications.png')}/>}
              title='Notifications'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To Notifications Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/control.png')}/>}
              title='Control Center'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To Control Center Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/dnd.png')}/>}
              title='Do Not Disturb'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To Do Not Disturb Page')}
            />
            <UjlSettingList.Header headerStyle={{marginTop:15}}/>
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/general.png')}/>}
              title='General'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To General Page')}
            />
            <UjlSettingList.Item
              icon={<Image style={styles.imageStyle} source={require('./images/display.png')}/>}
              title='Display & Brightness'
              titleStyle={{fontSize:16}}
              onPress={() => Alert.alert('Route To Display Page')}
            />
          </UjlSettingList>
        </View>
      </View>
    );
  }

  onValueChange(value){
    this.setState({switchValue: value});
  }
}
const styles = StyleSheet.create({
  imageStyle:{
    marginLeft:15,
    alignSelf:'center',
    height:30,
    width:30
  },
  titleInfoStyle:{
    fontSize:16,
    color: '#8e8e93'
  }
});

export default Home;