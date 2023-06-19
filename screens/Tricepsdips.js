import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity,StyleSheet } from 'react-native';


export function Tricepsdips ({navigation})  {
  return (
    <SafeArea>
  <Card >
  <Card.Cover source={{ uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Triceps-Dips-on-Floor.gif' }} />
    <Card.Content>
      <Text variant="titleLarge"> Tricep Dips</Text>
      <Text variant="bodyMedium">Sit on the edge of a stable chair, weight bench, or step and grip the edge next to your hips. Some pull-up bars can also be used for tricep dips. Your fingers should be pointed at your feet, your legs extended, and your feet about hip-width apart, with the heels touching the ground. Look straight ahead with your chin up.

Press into your palms to lift your body and slide forward just far enough that your behind clears the edge of the chair.
Lower yourself until your elbows are bent between 45 and 90 degrees. Control the movement throughout the range of motion.
Push yourself back up slowly until your arms are almost straight, and repeat.  </Text>
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