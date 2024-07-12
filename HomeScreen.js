import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function Homescreen({ navigation, cart, setCart }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchMockData();
  }, []);

  const fetchMockData = () => {
    // Simulating asynchronous fetch operation with setTimeout
    setTimeout(() => {
      const mockItems = [
        { id: 1, source: require('./assets/dress1.png'), title: 'OFFICE WEAR', description: 'Reversible Angora Cardigan', price: '$120' },
        { id: 2, source: require('./assets/dress2.png'), title: 'BLACK', description: 'Reversible Angora Cardigan', price: '$125' },
        { id: 3, source: require('./assets/dress3.png'), title: 'CHURCH WEAR', description: 'Reversible Angora Cardigan', price: '$130' },
        { id: 4, source: require('./assets/dress4.png'), title: 'LAMEREI', description: 'Reversible Angora Cardigan', price: '$138' },
        { id: 5, source: require('./assets/dress5.png'), title: '21WN', description: 'Reversible Angora Cardigan', price: '$140' },
        { id: 6, source: require('./assets/dress6.png'), title: 'LOPO', description: 'Reversible Angora Cardigan', price: '$155' },
        { id: 7, source: require('./assets/dress7.png'), title: '21WN', description: 'Reversible Angora Cardigan', price: '$125' },
        { id: 8, source: require('./assets/dress8.jpg'), title: 'PLAY SUIT', description: 'Reversible Angora Cardigan', price: '$145' },
      ];
      setItems(mockItems);
    }, 1000); // Simulate delay with setTimeout
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
    setCart([...cart, item]);
    alert(`${item.title} added to cart!`);
  };

  const navigateToDetail = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

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
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
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
          <View style={styles.pictureRow}>
            {items.slice(0, 4).map(item => (
              <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToDetail(item)}>
                <Image source={item.source} style={styles.picture} />
                <Text style={styles.form}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.cost}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.pictureRow}>
            {items.slice(4).map(item => (
              <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToDetail(item)}>
                <Image source={item.source} style={styles.picture} />
                <Text style={styles.form}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.cost}>{item.price}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
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
    marginTop: 30,
    marginRight: 25,
  },
  pictureRow: {
    marginLeft: 15,
  },
  picture: {
    borderRadius: 15,
    marginBottom: 15,
    width: 150,
    height: 150,
  },
  card: {
    marginBottom: 15,
    marginRight: 15,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    fontSize: 16,
    fontFamily: 'serif',
    marginTop: 10,
  },
  description: {
    fontSize: 12,
    fontFamily: 'serif',
    color: 'grey',
  },
  cost: {
    fontSize: 18,
    fontFamily: 'serif',
    color: 'orange',
    marginTop: 5,
  },
  addButton: {
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 25,
    marginTop: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
