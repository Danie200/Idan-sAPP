import * as React from 'react';
import {  Button, Card, Text } from 'react-native-paper';
import { SafeArea } from '../components/safearea';
import { TouchableOpacity } from 'react-native';


export function CobraStretch ({navigation})  {
  return (
    <SafeArea>
  <Card>
    
  <Card.Cover source={{ uri: 'https://pbs.twimg.com/ext_tw_video_thumb/1617175471992758275/pu/img/872-eFZ4kARkVcwo?format=jpg&name=large' }} />
    <Card.Content>
      <Text variant="titleLarge">Cobra Stretch</Text>
      <Text variant="bodyMedium">
      Lie Flat On Your Stomach
     </Text>
      <Text variant="bodyMedium">
      Slowly Raise Your Head And Chest Off The Ground 
     </Text>
      <Text variant="bodyMedium">
      Hold this position for a few seconds before slowly lowering yourself back down to the ground.
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

