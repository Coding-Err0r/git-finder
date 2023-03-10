import React from 'react';
import { AppProvider } from '../../contexts/AppContext';
import { Container } from '../../components/Container';
import { UserBox } from '../../components/UserBox';
import { SearchWrapper } from '../../components/SearchWrapper';
import { Header } from '../../components/Header';

const App = () => {
  return (
    <AppProvider>
      <Container>
        <div style={{ zIndex: 50 }}>
          <Header />
          <SearchWrapper />
          <UserBox />
        </div>
      </Container>
    </AppProvider>
  );
};

export default App;
