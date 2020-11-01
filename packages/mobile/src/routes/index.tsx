import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import OrphanageData from '../pages/OrphanageData';
import OrphanageDetails from '../pages/OrphanageDetails';
import OrphanagesMap from '../pages/OrphanagesMap';
import SelectMapPosition from '../pages/SelectMapPosition';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen
          name="OrphanageDetails"
          component={OrphanageDetails}
          options={{
            headerShown: true,
            header: () => <Header title="Orfanatos" showCancel={false} />,
          }}
        />
        <Screen
          name="SelectMapPosition"
          component={SelectMapPosition}
          options={{
            headerShown: true,
            header: () => (
              <Header title="Selecione no mapa" showCancel={false} />
            ),
          }}
        />
        <Screen
          name="OrphanageData"
          component={OrphanageData}
          options={{
            headerShown: true,
            header: () => <Header title="Informe os dados" showCancel />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
