import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Settings = ({ setIsDarkTheme, isDarkTheme }) => {
  const theme = useTheme();

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.background }}>
      <Container>
        <SettingItem>
          <SettingText>Language</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>My Profile</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Contact Us</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Change Password</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Privacy Policy</SettingText>
        </SettingItem>
        <SettingItem>
          <SettingText>Theme</SettingText>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
        </SettingItem>
      </Container>
    </ScrollView>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const SettingText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.text};
`;

export default Settings;
