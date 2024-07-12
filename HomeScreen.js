import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

export default function Homescreen({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setItems(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        Alert.alert('Error', 'Failed to fetch data. Please try again later.');
      })
      .finally(() => setLoading(false));
  };

  const handleSearch = () => {
    console.log('Search button clicked');
  };

  const handleMenu = () => {
    console.log('Menu button clicked');
  };

  const handleFilter = () => {
    console.log('Filter button clicked');
  };

  const handleListView = () => {
    console.log('List view button clicked');
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    alert(`${item.title} added to cart!`);
  };

  const navigateToDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  const navigateToCart = () => {
    navigation.navigate('Cart', { cartItems });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.navigationBar}>
          <TouchableOpacity onPress={handleMenu}>
            <Image source={require('./assets/Menu.png')} style={styles.menuIcon} />
          </TouchableOpacity>
          <Image source={require('./assets/Logo.png')} style={styles.logoIcon} />
          <TouchableOpacity onPress={handleSearch}>
            <Image source={require('./assets/Search.png')} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToCart}>
            <Image source={require('./assets/shoppingBag.png')} style={styles.shoppingIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.secondNav}>
          <Text style={styles.ourStoryText}>OUR STORY</Text>
          <TouchableOpacity onPress={handleFilter}>
            <Image source={require('./assets/Filter.png')} style={styles.filterIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleListView}>
            <Image source={require('./assets/Listview.png')} style={styles.listIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.pictureContainer}>
  {items.map(item => (
    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToDetail(item)}>
      <Image source={{ uri: item.image }} style={styles.picture} />
      <Text style={styles.form}>{item.title}</Text>
      <Text style={styles.cost}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  ))}
</View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  navigationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  logoIcon: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  shoppingIcon: {
    width: 30,
    height: 30,
  },
  secondNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  ourStoryText: {
    fontSize: 24,
    fontFamily: 'serif',
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  listIcon: {
    width: 30,
    height: 30,
  },
  pictureContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    width: '48%', 
    alignItems: 'center',
  },
  picture: {
    borderRadius: 15,
    marginBottom: 10,
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  form: {
    fontSize: 16,
    fontFamily: 'serif',
    marginTop: 10,
  },
  cost: {
    fontSize: 18,
    fontFamily: 'serif',
    color: 'orange',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
