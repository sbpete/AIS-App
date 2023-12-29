import React from 'react';
import { View, Text, StyleSheet, Button, SectionList, TextInput} from 'react-native';
// my components
import Header from '../components/Header';
import Heading from '../components/Heading';
import MyButton from '../components/MyButton';
// linking
import { openURL } from 'expo-linking';
// data
import { documents } from '../macros';
// styling
import { colors } from '../styles';
import { Icon } from 'react-native-elements';

// Documents upload/download screen
const Documents = ({ navigation }) => {

  // states
  const [search, setSearch] = React.useState("");

  // sort documents alphabetically, search, and create section list
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const searchedDocuments = documents.filter(document => document.docName.toLowerCase().includes(search.toLowerCase()));
  const alphabeticalDocuments = searchedDocuments.sort((a, b) => a.docName.localeCompare(b.docName));
  const sectionedList = alphabet.map(letter => {
    const filteredDocuments = alphabeticalDocuments.filter(document => document.docName.startsWith(letter));
    return {
      title: letter,
      data: filteredDocuments,
    }
  });
  
  return (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <Heading text='Documents' iconName='folder' iconType='feather' />
      <View style={{ alignItems: 'center'}}>
        <View style={styles.search} >
          <Icon name='search' type='feather' color={colors.blue} size={20} />
          <TextInput 
           style={styles.searchText}
            placeholder='Search' 
            onChangeText={setSearch}
          />
        </View>
        <SectionList
          style={styles.listStyle}
          sections={sectionedList}
          renderSectionHeader={({section: {title}}) => <Text style={styles.headerText}>{title}</Text>}
          renderItem={({item}) => <Text style={styles.text}>{item.docName}</Text>}
          ItemSeparatorComponent={() => <View style={{height: 1, backgroundColor: colors.darkGray}} />}
          keyExtractor={(item, index) => item + index}
        />
      </View>
      <View style={styles.buttonView}>
        <MyButton text='Send Document' onPress={() => openURL('mailto:info@ais-ins.net')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  search: {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
    margin: 20,
    marginTop: 0,
    paddingLeft: 20,
    paddingVertical: 12,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: colors.blue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
  },
  searchText: {
    width: '90%',
  },  
  listStyle: {
    padding: 30,
    width: '90%',
    height: '59%',
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
  buttonView: {
    position: 'absolute',
    width: 300,
    padding: 30,
    bottom: 0,
    top: '88%',
    left: '32%',
    right: 0,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
  },
});

export default Documents;