import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {Home} from 'screens';
import styles from './AppLayout.style';
import {TabButton} from 'components';
import {COLORS} from 'constants/theme';
import LinearGradient from 'react-native-linear-gradient';

const AppLayout = () => {
  const tabItems = {
    home: 'home',
    calendar: 'calendar',
    flame: 'flame',
    person: 'person',
  };
  const [selectedTab, setSelectedTab] = useState(tabItems.home);
  useEffect(() => {
    renderTopContainer();
    renderFooterContainer();
  }, [selectedTab]);

  const renderTopContainer = () => {
    if (selectedTab === tabItems.home) {
      return <Home />;
    }
    if (selectedTab === tabItems.calendar) {
      return <Text style={styles.text}>Calendar</Text>;
    }
    if (selectedTab === tabItems.flame) {
      return <Text style={styles.text}>Flame</Text>;
    }
    if (selectedTab === tabItems.person) {
      return <Text style={styles.text}>Person</Text>;
    }
  };
  const renderFooterContainer = () => {
    return (
      <View style={styles.footerContainer}>
        {Object.keys(tabItems).map(item => {
          return (
            <TabButton
              key={item}
              iconName={item}
              isSelected={selectedTab === tabItems[item]}
              onPress={() => setSelectedTab(tabItems[item])}
            />
          );
        })}
      </View>
    );
  };
  return (
    <LinearGradient
      colors={[COLORS.black, COLORS.darkGray]}
      style={styles.container}>
      <View style={styles.topContainer}>{renderTopContainer()}</View>
      {renderFooterContainer()}
    </LinearGradient>
  );
};
export default AppLayout;
