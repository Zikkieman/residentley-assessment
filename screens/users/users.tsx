import React from "react";
import { Dimensions, Text, View } from "react-native";
import { FontEnum } from "../../utils/resources";
import { StyleSheet } from "react-native";

import UsersList from "../../components/usersOutput/usersList";

const Users = () => {
  return (
    <View className="pt-5 px-5  bg-[#fff]" style={{ paddingTop: 60 }}>
      <View>
        <Text
          style={{ fontFamily: FontEnum["Satoshi-Bold"] }}
          className="text-[24px] mb-10"
        >
          Users
        </Text>
      </View>
      <View
        className="bg-[#EFF2F7] rounded-xl mb-[10px]"
        style={styles.container}
      >
        <UsersList />
      </View>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get("screen").height,
  },
});
