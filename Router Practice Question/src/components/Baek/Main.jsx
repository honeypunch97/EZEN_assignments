import React, { memo } from 'react';
import { MainContainer } from '../styled/BaekStyle';
import { useAxios } from '../../hooks/useAxios';
import Character from './Character';

const Main = memo(() => {
   const { state: data } = useAxios(
      'https://gist.githubusercontent.com/honeypunch97/b643b7b674f7861f7d0874960bf80089/raw/dc1dd484ec674f9aa7e0107de0a877d6398eb654/Business%2520genius%2520Jongwon%2520Baek',
   );
   return (
      <MainContainer>
         <h2>장사천재 백종원</h2>
         <ul>
            {data.map(item => (
               <Character key={item.id} item={item} />
            ))}
         </ul>
      </MainContainer>
   );
});

export default Main;
