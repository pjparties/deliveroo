import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>

      <View className="mt-4 flex-row items-center justify-between px-4">

        <Text className='font-bold text-lg'>{title}</Text>
        <ArrowRightIcon color= '#00ccbb'/>

      </View>

      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

        <ScrollView
        horizontal
        contentContainerStyle={{paddingHorizontal:15,}}
        className='pt-4'
        showsVerticalScrollIndicator='false'>
            {/* Featured Cards */}
            <RestaurantCard
                id= {1}
                imgUrl="https://links.papareact.com/4cj"
                title="Ram Chole Bhature"
                rating={4.5}
                genre="North Indian"
                address="B-1, 2nd Floor, Sector 63, Noida"
                shortDescription="Chole Bhature is a popular Punjabi dish consisting of chole (spiced chickpeas) and bhatura (fried bread)."
                dishes= {[]}
                long= {77.3910}
                lat= {28.5355}
            />
            <RestaurantCard
                id= {1}
                imgUrl="https://links.papareact.com/4cj"
                title="Ram Chole Bhature"
                rating={4.5}
                genre="North Indian"
                address="B-1, 2nd Floor, Sector 63, Noida"
                shortDescription="Chole Bhature is a popular Punjabi dish consisting of chole (spiced chickpeas) and bhatura (fried bread)."
                dishes= {[]}
                long= {77.3910}
                lat= {28.5355}
            />
            <RestaurantCard
                id= {1}
                imgUrl="https://links.papareact.com/4cj"
                title="Ram Chole Bhature"
                rating={4.5}
                genre="North Indian"
                address="B-1, 2nd Floor, Sector 63, Noida"
                shortDescription="Chole Bhature is a popular Punjabi dish consisting of chole (spiced chickpeas) and bhatura (fried bread)."
                dishes= {[]}
                long= {77.3910}
                lat= {28.5355}
            />
            <RestaurantCard
                id= {1}
                imgUrl="https://links.papareact.com/4cj"
                title="Ram Chole Bhature"
                rating={4.5}
                genre="North Indian"
                address="B-1, 2nd Floor, Sector 63, Noida"
                shortDescription="Chole Bhature is a popular Punjabi dish consisting of chole (spiced chickpeas) and bhatura (fried bread)."
                dishes= {[]}
                long= {77.3910}
                lat= {28.5355}
            />

        </ScrollView>

    </View>
  )
}

export default FeaturedRow