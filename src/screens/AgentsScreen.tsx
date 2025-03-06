/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import React, {useState, useEffect} from 'react';
import {Box, Text, Actionsheet, HStack, FlatList, Pressable,Center} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {openDatabase} from '../utils/database';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Pdf from 'react-native-pdf';
import {ImageBackground} from 'react-native';

const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [agents, setAgents] = useState([]); // Déclare l'état pour les agents
  const route = useRoute();
  const {pathology, pathologyType,PathologyLabelAR,PathologyLabelFR} = route.params;

  console.log('Pathology:', pathology); // Vérifiez les valeurs des paramètres
  console.log('Pathology Type:', pathologyType);

  // Fonction pour fermer l'Actionsheet
  const handleClose = () => {
    setSelectedFile(null);
  };

  // Fetch agents depuis la base de données
  useEffect(() => {
    const fetchAgents = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM agents WHERE NTAB IN (SELECT PathTab.NTAB FROM PathTab WHERE IDPath = ?)',
          [pathologyType],
          (tx, results) => {
            const agentsData = [];
            for (let i = 0; i < results.rows.length; i++) {
              agentsData.push(results.rows.item(i));
            }
            setAgents(agentsData);
          },
          (tx, error) => {
            console.error('Error fetching agents:', error.message);
          }
        );
      });
    };

    fetchAgents();
  }, [pathologyType]); // Déclencher l'effet quand pathologyType change

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
       
      <Box flex={1}>
      <Center>
        <Text w="90%" fontSize="xl" color = "white"  fontWeight="bold" mt={4} mb={4}>
        {PathologyLabelFR}       </Text>
      </Center>
        {pathology && pathologyType && (
          <FlatList
            _contentContainerStyle={{
              py: '15px',
              px: '15px',
            }}
            data={agents}
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
                  <Text style={ {    textAlign: 'justify' }} fontSize="md" w="100%" flexWrap="wrap" // Gérer le retour à la ligne
                   // Limiter le nombre de lignes avant de couper le texte
                    isTruncated={false} > 
                    {item.LibelleFR}
                  </Text>
                  <Text  fontWeight="bold">N.Tableau : {item.NTAB}</Text>
                </Box>
                <Box>
                  <Pressable onPress={() => setSelectedFile(item.NTAB.toString().replace(/\./g, '-')) 
                  }>
                    <FontAwesome name="file-pdf-o" size={25} color="black" />
                  </Pressable>
                </Box>
              </HStack>
            )}
            keyExtractor={item => item.NTAB.toString()}
          />
        )}
        <Actionsheet
          animationPreset="fade"
          isOpen={Boolean(selectedFile)}
          onClose={handleClose}>
          <Actionsheet.Content>
            <Box w="100%" h="100%">
              <Pdf
                trustAllCerts={false}
                source={{
                  uri: `https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/FR/${selectedFile}.pdf`,
                }}
                onLoadComplete={numberOfPages => {
                  console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={page => {
                  console.log(`Current page: ${page}`);
                }}
                onError={error => {
                  console.error('Error loading PDF:', error);
                }}
                onPressLink={uri => {
                  console.log(`Link pressed: ${uri}`);
                }}
                style={{flex: 1}}
              />
            </Box>
          </Actionsheet.Content>
        </Actionsheet>
      </Box>
    </ImageBackground>
  );
};

export default AgentsScreen;
