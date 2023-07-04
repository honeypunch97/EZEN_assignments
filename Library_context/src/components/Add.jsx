import React, { memo } from 'react';
import { MainContainer } from './style/style';
import Form from './Form';

const Add = memo(() => {
   return (
      <MainContainer>
         <h2>Add</h2>
         <Form />
      </MainContainer>
   );
});

export default Add;
