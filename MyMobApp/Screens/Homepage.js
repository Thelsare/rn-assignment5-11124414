import React from 'react';
import { ScrollView, Text, Image } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

const Homepage = () => {
  const theme = useTheme();

  return (
    <Container style={{ backgroundColor: theme.background }}>
      <Header>
        <ProfileImage source={require('../assets/profile.png')} />
        <WelcomeContainer>
          <WelcomeText>Welcome,</WelcomeText>
          <UserName>Thelsare</UserName>
        </WelcomeContainer>
        <SearchIcon source={require('../assets/search.png')} />
      </Header>
      <CardImage source={require('../assets/Card.png')} />
      <Actions>
        <ActionButton>
          <ActionIconCircle>
            <ActionIcon source={require('../assets/send.png')} />
          </ActionIconCircle>
          <ActionText>Sent</ActionText>
        </ActionButton>
        <ActionButton>
          <ActionIconCircle>
            <ActionIcon source={require('../assets/recieve.png')} />
          </ActionIconCircle>
          <ActionText>Receive</ActionText>
        </ActionButton>
        <ActionButton>
          <ActionIconCircle>
            <ActionIcon source={require('../assets/loan.png')} />
          </ActionIconCircle>
          <ActionText>Loan</ActionText>
        </ActionButton>
        <ActionButton>
          <ActionIconCircle>
            <ActionIcon source={require('../assets/topUp.png')} />
          </ActionIconCircle>
          <ActionText>Topup</ActionText>
        </ActionButton>
      </Actions>
      <Transactions>
        <TransactionHeader>
          <TransactionTitle>Transaction</TransactionTitle>
          <SellAllText>Sell All</SellAllText>
        </TransactionHeader>
        <TransactionList>
          <TransactionItem>
            <TransactionIconCircle>
              <TransactionIcon source={require('../assets/apple.png')} />
            </TransactionIconCircle>
            <TransactionDetails>
              <TransactionName>Apple Store</TransactionName>
              <TransactionCategory>Entertainment</TransactionCategory>
            </TransactionDetails>
            <TransactionAmount>- $5.99</TransactionAmount>
          </TransactionItem>
          <TransactionItem>
            <TransactionIconCircle>
              <TransactionIcon source={require('../assets/spotify.png')} />
            </TransactionIconCircle>
            <TransactionDetails>
              <TransactionName>Spotify</TransactionName>
              <TransactionCategory>Music</TransactionCategory>
            </TransactionDetails>
            <TransactionAmount>- $12.99</TransactionAmount>
          </TransactionItem>
          <TransactionItem>
            <TransactionIconCircle>
              <TransactionIcon source={require('../assets/moneyTransfer.png')} />
            </TransactionIconCircle>
            <TransactionDetails>
              <TransactionName>Money Transfer</TransactionName>
              <TransactionCategory>Transaction</TransactionCategory>
            </TransactionDetails>
            <TransactionAmount>+ $300</TransactionAmount>
          </TransactionItem>
          <TransactionItem>
            <TransactionIconCircle>
              <TransactionIcon source={require('../assets/grocery.png')} />
            </TransactionIconCircle>
            <TransactionDetails>
              <TransactionName>Grocery</TransactionName>
              <TransactionCategory>Shopping</TransactionCategory>
            </TransactionDetails>
            <TransactionAmount>- $88</TransactionAmount>
          </TransactionItem>
        </TransactionList>
      </Transactions>
    </Container>
  );
};

const Container = styled(ScrollView)`
  flex: 1;
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;

const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const WelcomeContainer = styled.View`
  margin-left: 8px;
`;

const WelcomeText = styled.Text`
  font-size: 14px;
  color: #888;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
`;

const SearchIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: auto;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 16px;
`;

const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ActionButton = styled.TouchableOpacity`
  align-items: center;
`;

const ActionIconCircle = styled.View`
  width: 32px; /* Adjusted size */
  height: 32px; /* Adjusted size */
  border-radius: 16px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  margin-bottom: 4px;
`;

const ActionIcon = styled.Image`
  width: 16px; /* Adjusted size */
  height: 16px; /* Adjusted size */
`;

const ActionText = styled.Text`
  color: ${({ theme }) => theme.text};
`;

const Transactions = styled.View`
  margin-bottom: 16px;
`;

const TransactionHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const TransactionTitle = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const SellAllText = styled.Text`
  font-size: 14px;
  color: blue;
`;

const TransactionList = styled.View``;

const TransactionItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

const TransactionIconCircle = styled.View`
  width: 28px; /* Adjusted size */
  height: 28px; /* Adjusted size */
  border-radius: 14px;
  background-color: #eee;
  justify-content: center;
  align-items: center;
`;

const TransactionIcon = styled.Image`
  width: 20px; /* Adjusted size */
  height: 20px; /* Adjusted size */
`;

const TransactionDetails = styled.View`
  flex: 1;
  margin-left: 8px;
`;

const TransactionName = styled.Text`
  font-size: 14px; /* Adjusted size */
  color: ${({ theme }) => theme.text};
`;

const TransactionCategory = styled.Text`
  font-size: 12px; /* Adjusted size */
  color: grey;
`;

const TransactionAmount = styled.Text`
  font-size: 14px; /* Adjusted size */
  color: ${({ theme }) => theme.text};
`;

export default Homepage;
