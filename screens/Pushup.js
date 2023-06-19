import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity,StyleSheet } from 'react-native';


export function Pushup ({navigation})  {
  return (
    <SafeArea>
  <Card >
  <Card.Cover source={{ uri: 'https://www.bing.com/th/id/OGC.a17cd9d7eb4614f87233a504fcd63ed9?pid=1.7&rurl=https%3a%2f%2fhomeworkouts.org%2fwp-content%2fuploads%2fanim-push-ups.gif&ehk=NRlTQ3pqVRGoI4NwHMwiybFxwvdkDR%2ftOAb9Ne%2fUW%2fo%3d' }} />
    <Card.Content>
      <Text variant="titleLarge"> Push-Ups</Text>
      <Text variant="bodyMedium">To do a push-up you are going to get on the floor on all fours, positioning your hands slightly wider than your shoulders. Don't lock out the elbows; keep them slightly bent. Extend your legs back so you are balanced on your hands and toes, your feet hip-width apart. Once in this position, here is how you will do a push-up.

Contract your abs and tighten your core by pulling your belly button toward your spine. 
Inhale as you slowly bend your elbows and lower yourself to the floor, until your elbows are at a 90-degree angle.
Exhale while contracting your chest muscles and pushing back up through your hands, returning to the start position. 
Keep a tight core throughout the entire push-up. Also, keep your body in a straight line from head to toe without sagging in the middle or arching your back.  </Text>
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