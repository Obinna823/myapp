import { View, FlatList, Text, StyleSheet } from 'react-native';

// create 20 products
const products = [
  { id:'1', name: 'Rice (5kg)', price: 45 },
  { id:'2', name: 'Beans (2kg)', price: 30},
  { id:'3', name: 'Garri (2kg)', price: 25},
  { id:'4', name: 'Groundnut Oil (iL)', price: 55},
  { id:'5', name: 'Tomatoes (1kg)', price: 20},
  { id:'6', name: 'Onions (1kg)', price: 15},
  { id:'7', name: 'Bread (loaf)', price: 10},
  { id:'8', name: 'Eggs (12pcs)', price: 18},
  { id:'9', name: 'Chicken (whole)', price: 65},
  { id:'10', name: 'Fish (frozen)', price: 40},
  { id:'11', name: 'Milk (1L)', price:12},
  { id:'12', name: 'Sugar (1kg)', price: 8 },
  { id:'13', name: 'Indomie (carton)', price: 70},
  { id:'14', name: 'Spaghetti (500g)', price:7},
  { id:'15', name: 'Salt (500g)', price: 3},
  { id:'16', name: 'Cooking Gas (refill)', price:60},
  { id:'17', name: 'Soap (bar)', price:5},
  { id:'18', name: 'Detergent (500g)', price:6},
  { id:'19', name: 'Toothpaste', price: 6},
  { id:'20', name: 'Toilet Paper (rolls)', price: 4},
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item}) => (
          <View style={styles.productCard}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={[styles.productPrice, item.price > 50 && styles.redPrice]}>
              ${item.price}
            </Text>
          </View>  
        )}
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e7216',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'ash',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width:0, height: 1},
    elevation:2,
  },
  productName: {
    fontSize:16,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  redPrice: {
    color: 'red',
  },
});