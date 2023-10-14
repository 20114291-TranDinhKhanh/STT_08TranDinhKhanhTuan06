import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useNavigation } from "@react-navigation/native";

const SrceenHome = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Image
          resizeMode="contain"
          source={require(`./../assets/${
            data?.image ? data.image : "vs_blue.png"
          }`)}
          style={{ width: 301, height: 361 }}
        />
      </View>
      <View style={styles.view2}>
        <Text style={styles.text1}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <Rating
          style={styles.rating}
          type="star"
          ratingCount={5}
          imageSize={30}
          startingValue={5}
        />
        <Text style={styles.text2}>(Xem 828 đánh giá)</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.price1}>1.790.000 đ</Text>
        <Text style={styles.price2}>1.790.000 đ</Text>
      </View>
      <View style={styles.view4}>
        <Text style={styles.text3}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Button
          role="button"
          onPress={() => {
            navigation.navigate("ScreenColor");
          }}
          style={styles.buttonChose}
          textColor="black"
        >
          4 MÀU-CHỌN MÀU
        </Button>
        <Button role="button" style={styles.buttonBuy} textColor="white">
          CHỌN MUA
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
    bottom: "100px",
  },
  view2: {
    bottom: "150px",
  },
  rating: {
    top: "60px",
    right: "80px",
  },
  text1: {
    fontSize: "15px",
    fontWeight: "400",
    top: "50px",
  },
  text2: {
    fontSize: "15px",
    fontWeight: "400",
    top: "35px",
    left: "150px",
  },
  text3: {
    color: "#FA0000",
    fontSize: "12px",
    fontWeight: "700",
    bottom: "80px",
  },
  price1: {
    fontSize: "18px",
    fontWeight: "700",
    bottom: "80px",
    right: "100px",
  },
  price2: {
    color: "rgba(0, 0, 0, 0.58)",
    textDecorationLine: "line-through",
    fontSize: "15px",
    fontWeight: "700",
    bottom: "100px",
    left: "60px",
  },
  buttonChose: {
    width: "300px",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "#FFF",
    borderColor: "black",
    bottom: "40px",
  },
  buttonBuy: {
    width: "300px",
    borderRadius: "10px",
    borderWidth: "1px",
    backgroundColor: "#EE0A0A",
    top: "60px",
  },
});
export default SrceenHome;
