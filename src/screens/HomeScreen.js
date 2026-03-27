import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={["#ffffff", "#19409c"]} 
      style={styles.container}
    
    >
      
      <ScrollView style={styles.container}>

        <Image source={{uri:"https://i.pinimg.com/736x/65/3f/6f/653f6f3ab32705317c6591f2082186b4.jpg"}} style={styles.banner}/>
        <Text style={styles.sectionTitle}>Velvet buffer</Text>

        <Text style={styles.sectionTitle}>Productos destacados</Text>
        <View style={styles.productCard}>
          <Text>Producto 1</Text>
        </View>

        <View style={styles.productCard}>
          <Text>Producto 2</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("ProductList")}
        >
        <Text style={styles.buttonText}>Ver catálogo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate("Cart")}
        >
        <Text style={styles.buttonText}>Ver carrito</Text>
        </TouchableOpacity>
    </ScrollView>
    </LinearGradient>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 20,
    resizeMode: "contain"
  },
  banner:{
    width: "90%",
    height:180,
    alignSelf:"center",
    borderRadius:20,
    marginTop:20,
  },


  sectionTitle: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },

  productsPreview: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20
  },

  productCard: {
    width: 120,
    height: 120,
    backgroundColor: "#ffff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation:3,
  },

  buttonContainer: {
    marginTop: 30,
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 20
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1
  }
});