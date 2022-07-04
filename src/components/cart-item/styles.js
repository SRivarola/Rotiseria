import { StyleSheet } from "react-native";
import { colors } from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    headerContainer: {
      flex: 1,
      margin: 5,
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: colors.primary,
      borderBottomWidth: 1,
    },
    header: {
      paddingLeft: 5,
      fontSize: 16,
      fontFamily: "Lato-Bold",
    },
    categoryTitle: {
      color: colors.secondary,
    },
    containerDetail: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    detailPrice: {
      fontSize: 16,
      fontFamily: "Lato-Bold",
    },
    deleteButton: {
      margin: 5,
      alignSelf: 'center',
    },
  });