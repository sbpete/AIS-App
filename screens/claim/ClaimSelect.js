import React from "react";
import { View, Text, StyleSheet } from 'react-native';
// my components
import MyButton from "../../components/MyButton";
// select list
import { SelectList } from 'react-native-dropdown-select-list';
// data
import { claimTypes } from '../../macros';
// styling
import { colors } from '../../styles';

// Claim Select screen
const ClaimSelect = ({ route, navigation }) => {

    // get progress bar
    const { setProgress } = route.params;

    // state variable to store the selected claim type
    const [selected, setSelected] = React.useState("");

    // next
    const onPress = () => {
      setProgress(0.5);
      // Navigate to the sign-up screen
      navigation.navigate("Company Select", {
        claimType: selected,
      });
    }
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What type of claim will you be filing?</Text>
        <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 150}}>
          <SelectList
            setSelected={(value) => setSelected(value)}
            data={claimTypes}
            search={false}
            save='value'
            boxStyles={styles.boxStyles}
            inputStyles={{color: '#2196F3', fontSize: 15 }}
            dropdownStyles={styles.dropdownStyles}
            disabledItemStyles={{backgroundColor: '#E3F2FD'}}
            disabledTextStyles={styles.listHeading}
          />
        </View>
        <View style={styles.buttonView}>
          {selected && (
            <MyButton text="Next" onPress={onPress} />
          )}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    padding: 20,
  },
  boxStyles: {
    alignItems: 'center',
    width: 300,
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
  dropdownStyles: {
    borderWidth: 0,
    borderRadius: 20,
    backgroundColor: colors.lightBlue,
  },
  listHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginTop: 10,
  },
  buttonView: {
    position: 'absolute',
    padding: 30,
    bottom: 0,
    top: '83%',
    left: '58%',
    right: 0,
  },
});

export default ClaimSelect;