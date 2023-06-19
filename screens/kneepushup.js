import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity,StyleSheet } from 'react-native';


export function Kneepushup ({navigation})  {
  return (
    <SafeArea>
  <Card >
  <Card.Cover source={{ uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/01/Kneeling-Push-up.gif' }} />
    <Card.Content>
      <Text variant="titleLarge"> Knee Push-Ups</Text>
      <Text variant="bodyMedium">It's like a push-up… but on your knees. 
      Kneel on the floor. Extend arms and put hands shoulder-width apart on the floor in front of you. 
      Tighten abs while you bend arms, lowering your torso until chest grazes the floor. 
      Push torso back up by straightening arms. Slow and steady,then repeat.  </Text>
    </Card.Content>
    
    <Card.Actions>
    <TouchableOpacity onPress={() =>navigation.navigate('Bchest')}>
      <Button>Ok</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
  </SafeArea>
)};

const styles = StyleSheet.create({

})