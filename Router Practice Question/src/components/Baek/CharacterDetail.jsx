import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';

const CharacterDetail = memo(() => {
   const { charID } = useParams();
   const { state: data } = useAxios(
      'https://gist.githubusercontent.com/honeypunch97/b643b7b674f7861f7d0874960bf80089/raw/dc1dd484ec674f9aa7e0107de0a877d6398eb654/Business%2520genius%2520Jongwon%2520Baek',
   );
   console.log(charID, data);
   return (
      <div>
         {data
            .filter(item => item.id === charID)
            .map(item => (
               <p>{item.name}</p>
            ))}
      </div>
   );
});

export default CharacterDetail;
