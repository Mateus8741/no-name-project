import React from 'react';
import { View } from 'react-native';

import { Box, SegmentCard } from '@/components';

const segments = [
  { id: 1, segment: 'Pedir comida', source: { uri: 'https://picsum.photos/500/400' } },
  { id: 2, segment: 'Retirada', source: { uri: 'https://picsum.photos/500/400' } },
  { id: 3, segment: 'Reservar mesa', source: { uri: 'https://picsum.photos/500/400' } },
  { id: 4, segment: 'Rotina alimentar', source: { uri: 'https://picsum.photos/500/400' } },
  { id: 5, segment: 'Refeições', source: { uri: 'https://picsum.photos/500/400' } },
];

export function OnboardingScreen() {
  return (
    <Box>
      <View className="flex-row flex-wrap items-center justify-around">
        {segments.map((item) => (
          <SegmentCard key={item.id} source={{ uri: item.source.uri }} segment={item.segment} />
        ))}
      </View>
    </Box>
  );
}
