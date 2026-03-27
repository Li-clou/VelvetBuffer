import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ProductCard from "../components/ProductCard";
import { LinearGradient } from "expo-linear-gradient";

export default function ProductListScreen({navigation}) {

  const products = [
    {
      id: "1",
      name: "Laptop Gamer Alienware",
      price: 12000,
      description:"Fornite? Tu sabes que esta laptop merece que tus ojos se derritan en ella",
      image: "https://i.blogs.es/992711/alienware-m17x-1/450_1000.jpg"
    },
    {
      id: "2",
      name: "Celular Y2K Flip",
      price: 800,
      description:"Abandona el brainrot con este celular",
      image: "https://www.y2kphones.com/cdn/shop/files/kyocera-kyf44-unlocked-android-10-keitai-flip-phone-8042334.png"
    },
    {
      id: "3",
      name: "Audífonos Retro Sony",
      price: 1500,
      description:"La musica es sagrada y solo esto la vuelve celestial",
      image: "https://m.media-amazon.com/images/I/71vO2U33WpL.jpg"
    },
    {
      id: "4",
      name: "Teclado Mecánico",
      price: 900,
      description:"Que de tus dedos escape humo con este teclado ",
      image: "https://i.redd.it/exp4x57lk5ve1.jpeg"
    }
  ];

  return(
    <LinearGradient
      colors={["#ffffff", "#19409c"]} 
      style={styles.container}
    >

      
        <Text style={styles.title}>Catálogo de Productos</Text>
        <FlatList
          data={products}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>(
            <ProductCard 
              name={item.name} 
              price={item.price}
              description={item.description} 
              image={item.image}
              navigation={navigation}
            />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}   
        />
    </LinearGradient>

  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingHorizontal:16,
    paddingTop:20,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color:"#111",
    marginBottom: 18,
  },
  listContainer:{
    paddingBottom:20,
  }
});