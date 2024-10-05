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


  const selectedPathologyLabelAR = pathologies.find(
    (pathology) => pathology.ID.toString() === selectedPathology
  )?.LibelleAR;
  const selectedPathologyLabelFR = pathologies.find(
    (pathology) => pathology.ID.toString() === selectedPathology
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
            <Text color="muted.400" fontSize="xs">
              Pathologies
            </Text>
            <Select
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
            <Text color="muted.400" fontSize="xs">
              Type d'atteinte
            </Text>
            <Select
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
          >
            Afficher les agents
          </Button>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

export default HomeScreen;
