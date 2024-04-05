import { ComponentProps, ReactNode } from "react";
import {
  View,
  TextInput as RNTextInput,
  StyleProp,
  TextStyle,
  StyleSheet,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { FontEnum } from "../../utils/resources";

interface Props extends Partial<ComponentProps<typeof RNTextInput>> {
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  icon: ReactNode;
}

export const TextInput = (props: Props) => {
  const scale = useSharedValue(1);
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const rStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value,
        },
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  });

  const animeIn = () => {
    scale.value = withTiming(0.8);
    x.value = withTiming(0);
    y.value = withTiming(-20);
  };

  const animeOut = () => {
    scale.value = withTiming(1);
    x.value = withTiming(0);
    y.value = withTiming(0);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#F9FAFC",
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 17,
          left: 10,
        }}
        className="absolute"
      >
        {props.icon}
      </View>
      <View style={styles.inputContainer} className="pl-5 w-full">
        <Animated.Text
          className="text-[]"
          style={[props.labelStyle, rStyles, styles.label]}
        >
          {props.label}
        </Animated.Text>

        <RNTextInput
          className="mt-1 text-[#000]"
          autoCorrect={false}
          autoCapitalize="none"
          autoComplete="off"
          value={props.value}
          secureTextEntry={props.secureTextEntry}
          onFocus={() => {
            animeIn();
          }}
          onChangeText={props.onChangeText}
          onBlur={(e) => {
            if (!props.value?.length) {
              animeOut();
            }
            props.onBlur && props.onBlur(e);
          }}
          style={[props.style, styles.inputStyle]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    position: "absolute",
    top: 20,
    left: 40,
    color: "#6E717C",
    fontSize: 16,
  },

  inputStyle: {
    height: 55,
    // borderWidth: 1,
    width: "100%",
    paddingLeft: 50,
    fontFamily: FontEnum["Satoshi-Bold"],
    fontSize: 18,
    marginTop: 5,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
  },
});
