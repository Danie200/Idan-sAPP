import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity } from 'react-native';


export function Inclinepushup ({navigation})  {
  return (
    <SafeArea>
  <Card>
  <Card.Cover source={{ uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif' }} />
    <Card.Content>
      <Text variant="titleLarge">Incline Push-Ups</Text>
      <Text variant="bodyMedium">Lie flat on an inclined bench.
Keep your spine neutral and feet flat on the floor
Grasp the barbell at about 1½ times the width of your shoulders.
Lift the barbell off the rack and lower it by bending your elbows.
Reverse the movement, lifting the barbell away from your chest.
Your elbows should be under the bar at all times for proper balance.
Remember not to arch your back or thrust your head forward. </Text>
    </Card.Content>
    
    <Card.Actions>
    <TouchableOpacity onPress={() =>navigation.navigate('Bchest')}>
      <Button>Ok</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
  </SafeArea>
)};

