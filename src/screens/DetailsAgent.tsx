// @ts-nocheck
import {Box, Text, HStack, Pressable, Actionsheet, FlatList} from 'native-base';
import React, {useState} from 'react';
import {usePathologyStore} from 'store/pathologies';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getPathologiesByAgent} from 'utils/data';
import Pdf from 'react-native-pdf';
import {ImageBackground} from 'react-native';

const image = require('../assets/images/Picture6.png');

const DetailsAgent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const {agent} = usePathologyStore(state => state);

  const handleClose = () => {
    setSelectedFile(null);
  };

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
            <Text isTruncated w="100%">
              {agent.name}
            </Text>
            <Text fontSize="xs">N.Tableau : {agent.n_table}</Text>
          </Box>
          <Box>
            <Pressable onPress={() => setSelectedFile(agent.path)}>
              <FontAwesome name="file-pdf-o" size={18} color="black" />
            </Pressable>
          </Box>
        </HStack>
        <Text fontSize="xs" mb={2}>
          Pathologies :
        </Text>
        <FlatList
          _contentContainerStyle={{
            py: '5px',
            px: '1px',
          }}
          data={getPathologiesByAgent(agent.name)}
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
                  {item}
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

export default DetailsAgent;
