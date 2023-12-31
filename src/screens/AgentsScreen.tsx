/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck
import React, {useState} from 'react';
import {Box, Text, Actionsheet, HStack, FlatList, Pressable} from 'native-base';
import {usePathologyStore} from 'store/pathologies';
import {getPathologyTypeAgents} from 'utils/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Pdf from 'react-native-pdf';
import {ImageBackground} from 'react-native';

const image = require('../assets/images/background.png');

const AgentsScreen = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {selectedPathology, selectedPathologyType} = usePathologyStore(
    state => state,
  );

  const handleClose = () => {
    setSelectedFile(null);
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={{flex: 1}}>
      <Box flex={1}>
        {selectedPathology && selectedPathologyType && (
          <FlatList
            _contentContainerStyle={{
              py: '15px',
              px: '15px',
            }}
            data={getPathologyTypeAgents(
              selectedPathology,
              selectedPathologyType,
            )}
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
                  <Pressable onPress={() => setSelectedFile(item.path)}>
                    <FontAwesome name="file-pdf-o" size={18} color="black" />
                  </Pressable>
                </Box>
              </HStack>
            )}
            keyExtractor={item => item.name}
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
                  uri: `https://raw.githubusercontent.com/badris101/pathologies-app/a0d7f9b5879925efb66cf5992c74993d6e1f43fd/Files/${selectedFile}`,
                }}
                onLoadComplete={numberOfPages => {
                  console.log(`Number of pages: ${numberOfPages}`);
                }}
                onPageChanged={page => {
                  console.log(`Current page: ${page}`);
                }}
                onError={error => {
                  console.log(error);
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
