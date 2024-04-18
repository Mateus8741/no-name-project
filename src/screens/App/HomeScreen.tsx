import React, { useRef, useState } from 'react';
import { FlatList, SectionList } from 'react-native';

import { Box, Carousel, Header, Menu, MenuProducts } from '@/components';
import { CATEGORIES, MENU, ProductProps } from '@/mock';
import { AppTabScreenProps } from '@/routes';

export function HomeScreen({ navigation }: AppTabScreenProps<'HomeScreen'>) {
  const [currentCategory, setCurrentCategory] = useState(CATEGORIES[0]);

  const flatListRef = useRef<FlatList<string>>(null);

  const sectionListRef = useRef<SectionList<ProductProps>>(null);

  function handleCategoryChange(newCategory: string) {
    setCurrentCategory(newCategory);

    const categoryIndex = CATEGORIES.findIndex((category) => category === newCategory);

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: categoryIndex,
      });
    }

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex: categoryIndex,
        itemIndex: 0,
      });
    }
  }

  function handleProductPress(product: ProductProps) {
    navigation.navigate('ProductScreen', { product });
  }

  return (
    <Box>
      <Header hasNotification fullName="Mateus Tavares" />

      <Carousel />

      <Menu
        data={CATEGORIES}
        flatListRef={flatListRef}
        currentCategory={currentCategory}
        handleCategoryChange={handleCategoryChange}
      />

      <MenuProducts
        MENU={MENU}
        sectionListRef={sectionListRef}
        onProductPress={(product) => handleProductPress(product)}
      />
    </Box>
  );
}