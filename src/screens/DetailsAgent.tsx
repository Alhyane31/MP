// @ts-nocheck
import {Box, Text, HStack, Pressable, Actionsheet, FlatList} from 'native-base';
import React, {useState,useEffect} from 'react';
import {usePathologyStore} from 'store/pathologies';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getPathologiesByAgent} from 'utils/data';
import Pdf from 'react-native-pdf';
import {ImageBackground} from 'react-native';
import {openDatabase} from '../utils/database'; 
import {useRoute} from '@react-navigation/native';
const image = require('../assets/images/background.png');

const DetailsAgent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const route = useRoute();
  const {agent} = route.params;
  const [pathologies, setPathologies] = useState([]);

  const handleClose = () => {
    setSelectedFile(null);
  };

  
   // Fetch path from the database
   useEffect(() => {
    const fetchPathologies = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'Select *  from path where id in(select IDPath FROM PathTab where NTAB = ? )',
          [agent.NTAB],
          (tx, results) => {
            const pathologiesData = [];
            for (let i = 0; i < results.rows.length; i++) {
              pathologiesData.push(results.rows.item(i));
            }// @ts-ignore
            setPathologies(pathologiesData);
            console.log(pathologiesData)
            console.log("eee")
          },
          (tx, error) => {
            console.error('Error fetching Agents:', error.message);
          }
        );
      });
    };

    fetchPathologies();
   // console.log(agents)
  }, []);
  const url =`https://raw.githubusercontent.com/Alhyane31/MP/fcdf8a7e8c79e527dcbc2d0cbc688e2fc5ec11fd/FilesMP/FR/${selectedFile}.pdf`;
  if (!agent) {
    return <Text>Loading...</Text>;
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
      <Box flex={1} py="15px" px="15px">
        <HStack
          shadow="1"
          bg="white"
          justifyContent="space-between"
          alignItems="center"
          px={4}
          py={5}
          mb="15px">
          <Box w="80%">
            <Text fontSize="md" isTruncated w="100%">
              {agent.LibelleFR}
            </Text>
            <Text bold fontSize="sm">N.Tableau : {agent.NTAB}</Text>
          </Box>
          <Box>
            <Pressable onPress={() => setSelectedFile(agent.NTAB.toString().replace(/\./g, '-'))}>
              <FontAwesome name="file-pdf-o" size={25} color="black" />
            </Pressable>
          </Box>
        </HStack>
        <Text color = "white" fontSize="md" mb={2}>
          Pathologies :
        </Text>
        <FlatList
          _contentContainerStyle={{
            py: '5px',
            px: '1px',
          }}
          data={pathologies}
          renderItem={({item}) => (
            <HStack
              shadow="1"
              bg="white"
              justifyContent="space-between"
              alignItems="center"
              px={4}
              py={5}
              mb="15px">
              <Box w="100%">
                <Text fontSize="md" isTruncated w="100%">
                  {item.LibelleFR}
                </Text>
              </Box>
            </HStack>
          )}
          keyExtractor={item => item}
        />
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
                  console.log(url);
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

export default DetailsAgent;
