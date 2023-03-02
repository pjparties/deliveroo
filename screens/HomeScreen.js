import { View, Image, SafeAreaView, Text, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, MagnifyingGlassIcon,AdjustmentsVerticalIcon } from 'react-native-heroicons/outline';
import  Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false,
      })
},[])
  
  
  return ( 
    <SafeAreaView className='bg-white pt-5'>
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
        {/* Header */}
         <View>
          <Image
            source = {{
              uri: "https://links.papareact.com/wru",
            }} 
            className = "h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
         </View>


         <View className='flex-1'>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className='font-bold text-xl'>Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
         </View>

         <UserIcon size={35} color="#00ccbb" />


    </View>

    {/* Search */}
    <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
      <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
        <MagnifyingGlassIcon color="gray" size={20} />
        <TextInput placeholder="Search Dishes or Restaurants" keyboardType='default'/>
      </View>

      <AdjustmentsVerticalIcon color='#00ccbb'/>
    </View>

    {/* Body */}
    <ScrollView className="bg-gray-100
     contentContainerStyle = {{
        paddingBottom: 20,
     }}">
      {/* Categories slider */}
          <Categories />

      {/* Featured */}
        <FeaturedRow 
        title="Featured"
        id="1"
        description="From our partners for you"
        />

      {/* Discounts */}
        <FeaturedRow 
        title="Discounts"
        id= "2"
        description="Get the best discounts on your favourite restaurants"
        />

      {/* Popular Near You */}
        <FeaturedRow 
        title="Popular Near You"
        id="3"
        description="Explore the most popular restaurants near you"
        />
        
    </ScrollView>

    </SafeAreaView>
  );
};

export default HomeScreen;