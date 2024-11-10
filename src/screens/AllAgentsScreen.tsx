/* eslint-disable react-native/no-

-styles */
// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {Box, Text, HStack, FlatList, Pressable, Input} from 'native-base';
import {getAllAgents, searchAgents} from 'utils/data';
import FontAwesome from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {usePathologyStore} from 'store/pathologies';
import {ImageBackground} from 'react-native';
import {openDatabase} from '../utils/database'; // Assurez-vous que le chemin est correct


const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const {setAgent} = usePathologyStore(state => state);
  const [agents, setAgents] = useState([]);
   
  const searchAgents = searchTerm => {
    return agents.filter(agent => {
      const regex = new RegExp(searchTerm, 'gi');
      return agent.LibelleFR.match(regex) || agent.NTAB.match(regex);
    });};
  // Fetch Agents from the database
  useEffect(() => {
    const fetchAgents = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'Select *  from agents ',
          [],
          (tx, results) => {
            const agentsData = [];
            for (let i = 0; i < results.rows.length; i++) {
              agentsData.push(results.rows.item(i));
            }// @ts-ignore
           
            setAgents(agentsData);// console.log(agentsData)
          },
          (tx, error) => {
            console.error('Error fetching Agents:', error.message);
          }
        );
      });
    };

    fetchAgents();
  //  console.log(agents)
  }, []);
  const handleNavigation = item  => {
  
    navigation.navigate('DetailsAgent',{agent : item});
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

          
          data={searchTerm !== '' ? searchAgents(searchTerm) : agents.sort((a, b) => a.LibelleFR> b.LibelleFR ? 1 : -1)}
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
                <Text isTruncated={false}  w="100%">
                  {item.LibelleFR}
                </Text>
                <Text fontSize="xs">N.Tableau : {item.NTAB}</Text>
              </Box>
              <Box>
                <Pressable onPress={() => handleNavigation(item)}>
                  <FontAwesome name="info" size={28} color="black" />
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
