import React, { useRef } from "react";
import {
  Animated,
  Text,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import { styled, TailwindProvider } from "tailwindcss-react-native";
import LinearGradient from "react-native-linear-gradient";
// import AnimetedBtn from "./AnimetedBtn";
export default function App() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnim2 = useRef(new Animated.Value(1)).current;
  // const fadeAnimText = useRef("Join")).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    // Animated.timing(fadeAnimText, {
    //   toValue: "✓",
    //   duration: 2000,
    // }).start();
    Animated.timing(fadeAnim2, {
      toValue: 0,
      duration: 2000,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
    setTimeout(() => {
      fadeOut();
    }, 2000);
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim2, {
      toValue: 1,
      duration: 2000,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  return (
    <TailwindProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Text className="" style={styles.textColor}>
              {"Press prototype to see "}
            </Text>
            <Text className="" style={styles.textColor}>
              {"button animation"}
            </Text>
            {/* <Animated.View
              style={[
                styles.fadingContainer,
                {
                  // Bind opacity to animated value
                  opacity: fadeAnim,
                },
              ]}
            >
              <Text style={styles.fadingText}>{"✓"}</Text>
            </Animated.View> */}
            <View style={styles.buttonRow}>
              {/* <Button
                title="Fade In View"
                style={[
                  styles.btn,
                  {
                    // Bind opacity to animated value
                    opacity: fadeAnim,
                  },
                ]}
                textColor="#000"
                color="transparent"
                onPress={fadeIn}
              > */}
              <LinearGradient
                colors={["#ff00e0", "#c000ff", "#9100ff"]}
                style={styles.linearGradient}
                locations={[0, 0.3, 0.8]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                onPress={fadeIn}
              >
                {/* <Text onPress={fadeIn} style={styles.btnTextColor}>
                  {"Join"}
                </Text> */}
                <Animated.View
                  style={[
                    styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim2,
                    },
                  ]}
                >
                  <Text onPress={fadeIn} style={styles.btnTextColor}>
                    {"Join"}
                  </Text>
                </Animated.View>
                <Animated.View
                  style={[
                    styles.fadingContainer,
                    {
                      // Bind opacity to animated value
                      opacity: fadeAnim,
                    },
                  ]}
                >
                  <Text style={styles.btnTextColor}>{"✓"}</Text>
                </Animated.View>
              </LinearGradient>
              {/* </Button> */}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  textColor: {
    color: "#000",
    fontWeight: `bold`,
  },
  btnTextColor: {
    color: "#fff",
    fontWeight: `bold`,
  },
  btn: {
    color: "#000",
    backgroundColor: "red",
    backgroundImage: "linear-gradient(to #ff00e0, #c000ff, #9100ff ) ",
  },
  box: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    backgroundImage: "linear-gradient(to #ff00e0, #c000ff, #9100ff ) ",
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    color: "#000",
    backgroundImage: "linear-gradient(from #ff00e0,to #9100ff )",
  },
  linearGradient: {
    display: "flex",
    color: "#fff",
    margin: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    height: "auto",
    width: "auto",
    fontWeight: "bold",
  },
});
