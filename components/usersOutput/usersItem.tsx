import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontEnum } from "../../utils/resources";
import { PropsType } from "../../redux/features/interface";

const UsersItem = ({ name, username, status, initial }: PropsType) => {
  return (
    <View className="flex w-full border-2" style={styles.listContainer}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <View
          className=" bg-[#fff] p-3 w-[10%]"
          style={styles.initialContainer}
        >
          <Text style={styles.initial}> {initial}</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 2,
          borderColor: "white",
          backgroundColor: status === "Active" ? "#E1EAD6" : "",
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 100,
        }}
      >
        <Text
          style={{
            fontFamily: FontEnum["Satoshi-Medium"],
            color: status === "Active" ? "#7A9F56" : undefined,
          }}
        >
          {status}
        </Text>
      </View>
    </View>
  );
};

export default UsersItem;

const styles = StyleSheet.create({
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#fff",
    flexDirection: "row",
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  initialContainer: {
    backgroundColor: "white",
    display: "flex",
    paddingHorizontal: 13,
    paddingVertical: 16,
    borderRadius: 8,
  },
  initial: {
    fontFamily: FontEnum["Satoshi-Bold"],
    fontSize: 16,
  },
  nameContainer: {
    display: "flex",
    gap: 2,
  },
  username: {
    fontFamily: FontEnum["Satoshi-Medium"],
    color: "#6E717C",
  },
  name: {
    fontFamily: FontEnum["Satoshi-Bold"],
  },
});
