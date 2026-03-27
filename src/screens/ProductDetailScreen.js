import { LinearGradient } from "expo-linear-gradient";
import { View, Text,Image,StyleSheet,ScrollView, TouchableOpacity } from "react-native";

export default function ProductDetailScreen({route, navigation,cart,setCart}) {
  const {name,price,image,description}=route.params;
  return (
    <LinearGradient
      colors={["#ffffff", "#19409c"]} 
      style={styles.container}
    >

      <ScrollView style={styles.container}>
      <Image
          source={{uri:image}}
          style={styles.image}
        />

        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>

          <Text style={styles.price}>${price}</Text>

          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              const newProduct={name,price,image};
              setCart([...cart,newProduct]);
              alert("Producto agregado al carrito");
            }}
          >

            <Text style={styles.buttonText}>Agregar al carrito</Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  image:{
    marginTop:20,
    width:"100%",
    height:"100%",
  },
  infoContainer:{
    padding:20,
  },
  name:{
    fontSize:26,
    fontWeight:"bold",
    color:"#111",
  },
  price:{
    fontSize:22,
    color:"#46f3c5",
    marginTop:10,
    fontWeight:"600",
  },
  description:{
    marginTop:20,
    fontSize:16,
    color:"#555",
    lineHeight:25,
  },
  button:{
    backgroundColor:"#000",
    padding:15,
    borderRadius:10,
    marginTop:20,
    alignItems:"center",
  },

  buttonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"600",
  },



})