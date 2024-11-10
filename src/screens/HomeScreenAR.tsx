
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

const HomeScreenAR = () => {
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
            }
            // @ts-ignore
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
              }
              // @ts-ignore
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
    navigation.navigate('AgentsAR', {
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
           <Text bold color='#233b67' fontSize="lg" textAlign= 'right' >
            الأمراض
            </Text>
            <Select
fontSize="md"
              selectedValue={selectedPathology}
              onValueChange={itemValue => {
                setSelectedPathology(itemValue);
                setSelectedPathologyType('');
              }}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}
              placeholder="اختر مرضًا" // Optional placeholder
            //  placeholder="Sélectionnez une pathologie" // Optional placeholder
            // @ts-ignore
            style={{ textAlign: 'right' }} // Align text to the right
            >
              {pathologies.map((pathology, idx) => (
                <Select.Item
                  
                key={idx}// @ts-ignore
                  label={pathology.LibelleAR}
                  // @ts-ignore
                  value={pathology.ID.toString()} 
                  style={{alignItems : 'flex-end'}}// Assurez-vous que cela correspond à votre structure
                />
              ))}
            </Select>
          </Box>
          <Box>
          <Text bold color='#233b67' fontSize="lg"  textAlign= 'right' >
            نوع الإصابة
            </Text>
            <Select 
              selectedValue={selectedPathologyType}
              onValueChange={itemValue => setSelectedPathologyType(itemValue)}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}
              isDisabled={!selectedPathology}
fontSize="md"

             
              placeholder="اختر نوع الإصابة" // Optional placeholder
            //  placeholder="Sélectionnez une pathologie" // Optional placeholder
            // @ts-ignore
             style={{ textAlign: 'right' }} // Align text to the right
            >
              {pathologyTypes.map((pathologyType, idx) => (
                <Select.Item 
                  key={idx}// @ts-ignore
                  label={pathologyType.LibelleAR} // Assurez-vous que cela correspond à votre structure
                 // @ts-ignore
                  value={pathologyType.ID.toString()} // Idem
                  style={{alignItems : 'flex-end'}}
                />
              ))}
            </Select>
          </Box>
          <Button
            onPress={handleNavigation}
            mt={5}
             bg='#233b67'
            isDisabled={Boolean(selectedPathologyType === '')}>
                <Text bold color="white" fontSize="lg">
                عرض مسببات الأمراض</Text>
     
          </Button>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

export default HomeScreenAR;
