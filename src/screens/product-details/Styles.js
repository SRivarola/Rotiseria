import { StyleSheet, Dimensions } from "react-native";
import { colors } from '../../constants/theme/colors'

const { height, width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imagen: {
      height: '30%',
      width: '90%',
      borderRadius: 10,
    },
    details: {
      height: height / 3,
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingHorizontal: 15,
    },
    name: {
      fontFamily: 'Lato-Bold',
      fontSize: 20,
      textAlign: 'center',
      marginBottom: 20,
      paddingHorizontal: 20,
    },
    description: {
      fontFamily: 'Lato-Regular',
      paddingHorizontal: 25,
      textAlign: 'justify',
    },
    price: {
      fontFamily: 'Lato-Black',
      fontSize: 20,
    },
    addButton: {
      backgroundColor: colors.primary,
      borderRadius: 5,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    buttonText: {
      color: colors.white,
      fontFamily: "Lato-Regular",
    },
  });