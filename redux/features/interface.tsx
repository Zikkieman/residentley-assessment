import { StackNavigationProp } from "@react-navigation/stack";

export type StackType = {
  signin: undefined;
  users: undefined;
};

export type NavigationHook = StackNavigationProp<StackType>;
