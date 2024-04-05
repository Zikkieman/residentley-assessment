import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useFormik } from "formik";
import { FontEnum } from "../../utils/resources";
import { useNavigation } from "@react-navigation/native";

import { NavigationHook } from "../../redux/features/interface";
import { SignUpSchema } from "../../models/yup-schema/signinSchema";
import Message from "../../components/svg/message";
import Logo from "../../components/svg/logo";
import { TextInput } from "../../components/input";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation<NavigationHook>();

  const onSubmit = async () => {
    navigation.navigate("users");
    resetForm();
  };

  const {
    handleChange,
    handleBlur,
    touched,
    errors,
    values,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit,
  });

  const handlePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleTapOutside}>
      <View className="p-5 bg-[#fff] flex-1" style={{ paddingTop: 50 }}>
        <View className="flex items-center ">
          <View className="flex flex-row justify-center items-center mt-8 mb-[50px] gap-x-2">
            <Logo />
            <Text className=" text-[#000] text-[30px]" style={styles.boldFont}>
              Residentley
            </Text>
          </View>

          <Text className="text-[#322B8C] text-[36px]" style={styles.boldFont}>
            Welcome!
          </Text>
          <Text
            className="text-[#6E717C] text-[18px] font-light p-2 text-center leading-[25px]"
            style={styles.mediumFont}
          >
            Sign up or log in to your account to manage access to your users
            smartly.
          </Text>
        </View>
        <View className="flex  gap-y-5 mt-1" style={{ overflow: "hidden" }}>
          <View>
            <View className="bg-[#F9FAFC] rounded-[20px] border-[#EFF2F7] border-2 overflow-hidden ">
              <TextInput
                className="mt-1 placeholder:text-[#6E717C] placeholder:font-light placeholder:text-[16px] text-[#000]"
                autoCorrect={false}
                icon={<Message />}
                autoCapitalize="none"
                autoComplete="off"
                label="Email Address"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                style={styles.mediumFont}
              />
            </View>

            {errors.email && touched.email && (
              <Text className="text-red-500" style={styles.mediumFont}>
                {errors.email}
              </Text>
            )}
          </View>

          <View>
            <View className="flex  flex-row bg-[#F9FAFC] rounded-[20px] border-[#EFF2F7] overflow-hidden border-2  items-center relative">
              <TextInput
                className="mt-1 "
                label="Password"
                placeholder="password"
                secureTextEntry={showPassword}
                autoCorrect={false}
                autoCapitalize="none"
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                style={styles.mediumFont}
                icon={
                  <Image
                    source={require("../../assets/Lock.png")}
                    style={{ resizeMode: "contain", width: 20, height: 20 }}
                  />
                }
              />

              {values.password.length === 0 ? (
                <>
                  <Text
                    className=" absolute right-5 text-[#FF8600] text-[16px] font-light"
                    style={styles.mediumFont}
                  >
                    Forgot?
                  </Text>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={handlePasswordVisiblity}
                    className="absolute right-5"
                  >
                    <Feather
                      name={showPassword ? "eye-off" : "eye"}
                      size={24}
                      color="#6E717C"
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
            {errors.password && touched.password && (
              <Text className="text-red-500" style={styles.mediumFont}>
                {errors.password}
              </Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          className="mt-[80px] bg-[#FF8600] flex items-center rounded-lg py-5"
          onPress={() => handleSubmit()}
        >
          <View>
            <Text
              className="text-white text-[16px]"
              style={{ fontFamily: FontEnum["Satoshi-Medium"] }}
            >
              Login
            </Text>
          </View>
        </TouchableOpacity>
        <View className="flex items-center mt-5">
          <Text className="text-[18px]" style={styles.mediumFont}>
            <Text className="text-[#FF8600]">Sign up</Text> instead
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mediumFont: {
    fontFamily: FontEnum["Satoshi-Medium"],
  },
  boldFont: {
    fontFamily: FontEnum["Satoshi-Bold"],
  },
});
