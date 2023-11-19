// @ts-nocheck
import React from 'react';
import {
  Box,
  Text,
  VStack,
  Select,
  Center,
  Button,
  ChevronDownIcon,
} from 'native-base';
import {ImageBackground} from 'react-native';
import {usePathologyStore} from 'store/pathologies';
import {getPathologyTypes, pathologies} from 'utils/data';
import {useNavigation} from '@react-navigation/native';

const image = require('../assets/images/background.png');

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    selectedPathology,
    setSelectedPathology,
    selectedPathologyType,
    setSelectedPathologyType,
  } = usePathologyStore(state => state);

  const handleNavigation = () => {
    navigation.navigate('Agents');
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
      <Center flex={1}>
        <VStack bg="white" shadow={2} w="90%" space={15} px={5} py={5}>
          <Box>
            <Text color="muted.400" fontSize="xs">
              Pathologies
            </Text>
            <Select
              _actionSheet={{animationPreset: 'fade'}}
              selectedValue={selectedPathology}
              _focus={{
                bg: 'transparent',
              }}
              _selectedItem={{
                bg: 'muted.200',
              }}
              mt={1}
              onValueChange={itemValue => {
                setSelectedPathology(itemValue);
                setSelectedPathologyType('');
              }}
              height={'45px'}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}>
              {pathologies.sort((a, b) => a.label > b.label ? 1 : -1).map((pathology, idx) => (
                <Select.Item
                  key={idx}
                  label={pathology.label}
                  value={pathology.value}
                />
              ))}
            </Select>
          </Box>
          <Box>
            <Text color="muted.400" fontSize="xs">
              Type d'atteinte
            </Text>
            <Select
              _actionSheet={{animationPreset: 'fade'}}
              selectedValue={selectedPathologyType}
              _focus={{
                bg: 'transparent',
              }}
              _selectedItem={{
                bg: 'muted.200',
              }}
              mt={1}
              onValueChange={itemValue => setSelectedPathologyType(itemValue)}
              height={'45px'}
              isDisabled={Boolean(selectedPathology === '')}
              dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}>
              {selectedPathology &&
                getPathologyTypes(selectedPathology).sort((a, b) => a.label > b.label ? 1 : -1).map(
                  (
                    pathologyType: {label: string; value: string},
                    idx: React.Key | null | undefined,
                  ): any => (
                    <Select.Item
                      key={idx}
                      label={pathologyType.label}
                      value={pathologyType.value}
                    />
                  ),
                )}
            </Select>
          </Box>
          <Button
            onPress={handleNavigation}
            mt={5}
            bg="primary.600"
            isDisabled={Boolean(selectedPathologyType === '')}>
            Afficher les agents
          </Button>
        </VStack>
      </Center>
    </ImageBackground>
  );
};

export default HomeScreen;
