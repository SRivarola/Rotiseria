import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    margin: 15,
    fontFamily: 'Lato-Bold',
    fontSize: 18,
  },
  orderList: {
    flex: 1,
  },
});