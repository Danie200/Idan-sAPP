import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity } from 'react-native';


export function ChestStretch ({navigation})  {
  return (
    <SafeArea>
  <Card>
    
  <Card.Cover source={{ uri: 'https://fitnessprogramer.com/wp-content/uploads/2022/11/Reverse-Chest-Stretch.gif' }} />
    <Card.Content>
      <Text variant="titleLarge">Cobra Stretch</Text>
      <Text variant="bodyMedium">
      From a squatting position as shown with your knees and elbows bent, position your hands on a table or bench.
     </Text>
      <Text variant="bodyMedium">
      With a firm grip on the table or bench, slowly lower your body until you feel a good stretch in your chest and biceps.
     </Text>
      <Text variant="bodyMedium">
      Hold 10-30 seconds.
     </Text>
    </Card.Content>
    
    <Card.Actions>
    <TouchableOpacity onPress={() =>navigation.navigate('Bchest')}>
      <Button>Ok</Button>
      </TouchableOpacity>
    </Card.Actions>
  </Card>
  </SafeArea>
)};

