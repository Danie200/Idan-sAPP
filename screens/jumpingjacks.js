import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity } from 'react-native';


export function Jumpingjacks ({navigation})  {
  return (
    <SafeArea>
  <Card>
  <Card.Cover source={{ uri: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Jumping-jack.gif' }} />
    <Card.Content>
      <Text variant="titleLarge">Jumping Jacks</Text>
      <Text variant="bodyMedium">Stand in a straight position with your feet together, arms fully extended, hands by your sides, and toes pointed forward. This athletic position is the starting step. 
Next, slightly bend your knee in a rapid movement, jump your feet out to your body's sides, swing your arms out to either side and raise them above your head. Make sure to do all of these things simultaneously. 
After landing on the ground, reverse the pattern and return to your starting position with arms by your side and feet together. 
Repeat the entire process, performing between 10 to 100 reps for about six sets. Remember to maintain your posture and avoid slouching or twisting your toes outward.</Text>
    </Card.Content>
    
    <Card.Actions>
    <TouchableOpacity onPress={() =>navigation.navigate('Bchest')}>
      <Button>Ok</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
  </SafeArea>
)};

