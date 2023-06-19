import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity } from 'react-native';


export function Widearmpushup ({navigation})  {
  return (
    <SafeArea>
  <Card>
  <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.a17cd9d7eb4614f87233a504fcd63ed9?rik=DmphATJbJY0IlQ&pid=ImgRaw&r=0' }} />
    <Card.Content>
      <Text variant="titleLarge">Wide Arm Push-Ups</Text>
      <Text variant="bodyMedium">Start in plank position with your hands wider than your shoulders.
Face your fingers forward or slightly to the outside.
Slowly bend your elbows out to the side as you lower your body toward the floor.
Pause when your chest is just below your elbows.
Engage your core as you press into your hands to lift your body back to the starting position. </Text>
    </Card.Content>
    
    <Card.Actions>
    <TouchableOpacity onPress={() =>navigation.navigate('Bchest')}>
      <Button>Ok</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
  </SafeArea>
)};

