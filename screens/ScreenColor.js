import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const ScreenColor = () => {
  const [image, setImage] = useState("vs_blue.png");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image source={require(`./../assets/${image}`)} />
      </View>
      <View style={styles.view2}>
        <Image
          source={require(`./../assets/${image}`)}
          style={{ width: 112, height: 132, right: 100 }}
        />
        <Text style={styles.text1}>
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text2}>Chọn một màu bên dưới:</Text>
        <View
          style={{
            paddingVertical: 20,
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          {Array("silver", "red", "black", "blue").map((item) => {
            return (
              <Pressable onPress={() => setImage(`vs_${item}.png`)}>
                <View
                  style={{ width: 85, height: 80, backgroundColor: item }}
                ></View>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.view4}>
        <Button
          role="button"
          onPress={() => {
            navigation.navigate("ScreenHome", { image });
          }}
          style={styles.buttonHome}
          textColor="white"
        >
          XONG
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    width: "112px",
    height: "132px",
    bottom: "100px",
  },
  view2: {
    bottom: "150px",
  },
  view3: {
    bottom: "150px",
  },
  rating: {
    top: "60px",
    right: "80px",
  },
  text1: {
    fontSize: "15px",
    fontWeight: "400",
    left: "50px",
    width: "180px",
    bottom:"100px",
  },
  text2: {
    fontSize: "18px",
    fontWeight: "400",
    bottom: "20px",
    right: "80px",
  },

  buttonHome: {
    width: "326px",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "rgba(25, 82, 226, 0.58)",
    borderColor: "black",
    bottom: "120px",
  },
});
export default ScreenColor;
