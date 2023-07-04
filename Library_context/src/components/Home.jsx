import React, { memo } from 'react';
import Table from './Table';
import { MainContainer } from './style/style';

const Home = memo(() => {
   return (
      <MainContainer>
         <h2>Home</h2>
         <Table />
      </MainContainer>
   );
});

export default Home;
