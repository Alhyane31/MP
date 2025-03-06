import React, { useEffect, useState } from 'react';
import {
  Box,
  Text,
  VStack,
  Select,
  Center,
  Button,
  ChevronDownIcon,
} from 'native-base';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {openDatabase} from '../utils/database'; // Assurez-vous que le chemin est correct

const image = require('../assets/images/background.png');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [pathologies, setPathologies] = useState([]);
  const [selectedPathology, setSelectedPathology] = useState('');
  const [selectedPathologyType, setSelectedPathologyType] = useState('');
  const [pathologyTypes, setPathologyTypes] = useState([]);

  // Fetch pathologies from the database
  useEffect(() => {
    const fetchPathologies = async () => {
      const db = await openDatabase();
      db.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM PathType',
          [],
          (tx, results) => {
            const pathologiesData = [];
            for (let i = 0; i < results.rows.length; i++) {
              pathologiesData.push(results.rows.item(i));
            }// @ts-ignore
            setPathologies(pathologiesData);
          },
          (tx, error) => {
            console.error('Error fetching pathologies:', error.message);
          }
        );
      });
    };

    fetchPathologies();
  }, []);

  // Fetch pathology types when selectedPathology changes
  useEffect(() => {
    if (selectedPathology) {
      const fetchPathologyTypes = async () => {
        const db = await openDatabase();
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM Path WHERE PathTypeID = ?',
            [selectedPathology],
            (tx, results) => {
              const typesData = [];
              for (let i = 0; i < results.rows.length; i++) {
                typesData.push(results.rows.item(i));
              }// @ts-ignore
              setPathologyTypes(typesData);
            },
            (tx, error) => {
              console.error('Error fetching pathology types:', error.message);
            }
          );
        });
      };

      fetchPathologyTypes();
    } else {
      setPathologyTypes([]); // Reset when no pathology is selected
    }
  }, [selectedPathology]);


  const selectedPathologyLabelAR = pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleAR;
  const selectedPathologyLabelFR = pathologyTypes.find(
    (pathologyTypes) => pathologyTypes.ID.toString() === selectedPathologyType
  )?.LibelleFR;

  
  const handleNavigation = () => {
    navigation.navigate('Agents', {
      pathology: selectedPathology,
      pathologyType: selectedPathologyType,
      PathologyLabelAR: selectedPathologyLabelAR,
      PathologyLabelFR: selectedPathologyLabelFR
    });
  };

  return ( 
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <Center flex={1}>
        <VStack bg="white" shadow={2} w="90%" space={5} px={5} py={5}>
          <Box>
            <Text bold color='#233b67' fontSize="lg">
              Pathologies
            </Text>
            <Select
            fontSize="md"
              selectedValue={selectedPathology}
              onValueChange={itemValue => {
                setSelectedPathology(itemValue);
                setSelectedPathologyType('');
              }}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}
              placeholder="Sélectionnez une pathologie" // Optional placeholder
            >
              {pathologies.map((pathology, idx) => (
                <Select.Item
                  key={idx}// @ts-ignore
                  label={pathology.LibelleFR}// @ts-ignore
                  value={pathology.ID.toString()} // Assurez-vous que cela correspond à votre structure
                />
              ))}
            </Select>
          </Box>
          <Box>
            <Text bold color='#233b67' fontSize="lg">
              Type d'atteinte
            </Text>
            <Select
            fontSize="md"
              selectedValue={selectedPathologyType}
              onValueChange={itemValue => setSelectedPathologyType(itemValue)}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}
              placeholder="Sélectionnez type d'atteinte" // Optional placeholder
              isDisabled={!selectedPathology}
            >
              {pathologyTypes.map((pathologyType, idx) => (
                <Select.Item
                
                  key={idx}// @ts-ignore
                  label={pathologyType.LibelleFR} // Assurez-vous que cela correspond à votre structure
             // @ts-ignore
                  value={pathologyType.ID.toString()} // Idem
                />
              ))}
            </Select>
          </Box>
          <Button
            onPress={handleNavigation}
            isDisabled={!selectedPathologyType}

            bg='#233b67'
         >
           <Text bold color="white" fontSize="lg">
            Afficher les agents </Text>
          </Button>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

export default HomeScreen;
