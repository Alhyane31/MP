/* eslint-disable react-native/no-

-styles */
// @ts-nocheck
import React, {useState} from 'react';
import {Box, Text, HStack, FlatList, Pressable, Input} from 'native-base';
import {getAllAgents, searchAgents} from 'utils/data';
import FontAwesome from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {usePathologyStore} from 'store/pathologies';
import {ImageBackground} from 'react-native';

const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const {setAgent} = usePathologyStore(state => state);

  const handleNavigation = item => {
    setAgent(item);
    navigation.navigate('DetailsAgent');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
      <Box
        bg="#0891b2"
        alignItems="center"
        justifyContent="center"
        py={4}
        px="15px">
        <Input
          bgColor="white"
          value={searchTerm}
          onChangeText={value => setSearchTerm(value)}
          placeholder="Recherche"
        />
      </Box>
      <Box flex={1}>
        <FlatList
          _contentContainerStyle={{
            py: '15px',
            px: '15px',
          }}

          
          data={searchTerm !== '' ? searchAgents(searchTerm) : getAllAgents().sort((a, b) => a.name> b.name ? 1 : -1)}
          renderItem={({item}) => (
            <HStack
              shadow="1"
              bg="white"
              justifyContent="space-between"
              alignItems="center"
              px={4}
              py={5}
              mb="15px">
              <Box w="80%">
                <Text isTruncated w="100%">
                  {item.name}
                </Text>
                <Text fontSize="xs">N.Tableau : {item.n_table}</Text>
              </Box>
              <Box>
                <Pressable onPress={() => handleNavigation(item)}>
                  <FontAwesome name="info" size={20} color="black" />
                </Pressable>
              </Box>
            </HStack>
          )}
          keyExtractor={item => item.name}
        />
      </Box>
    </ImageBackground>
  );
};

export default AgentsScreen;
