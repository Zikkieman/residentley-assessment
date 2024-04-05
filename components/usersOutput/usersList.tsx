import { View, FlatList, ActivityIndicator } from "react-native";
import React from "react";

import UsersItem from "./usersItem";
import { useFetchUsersQuery } from "../../redux/features/apiSlice";
import { PropsType } from "../../redux/features/interface";

const renderUserList = ({ item }: { item: PropsType }) => {
  return <UsersItem {...item} />;
};

const UsersList = () => {
  const { data = [], isLoading } = useFetchUsersQuery(null);

  if (isLoading) {
    return (
      <View style={{ paddingTop: 50 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ marginBottom: 100 }}>
      <FlatList
        data={data}
        renderItem={renderUserList}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 120 }}
      />
    </View>
  );
};

export default UsersList;
