import React, { memo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAxios } from '../../hooks/useAxios';
import { CharacterDetailContainer } from '../styled/BaekStyle';

const CharacterDetail = memo(() => {
   const { charID } = useParams();
   const { state: data } = useAxios(
      'https://gist.githubusercontent.com/honeypunch97/b643b7b674f7861f7d0874960bf80089/raw/dc1dd484ec674f9aa7e0107de0a877d6398eb654/Business%2520genius%2520Jongwon%2520Baek',
   );
   const navigate = useNavigate();
   return (
      <CharacterDetailContainer>
         {data
            .filter(item => item.id === Number(charID))
            .map(item => (
               <div key={Number(charID)} className="container-box">
                  <div className="img-box">
                     <img src={item.img} alt={item.name} />
                     <strong>{item.name}</strong>
                     <em>{item.nickname}</em>
                  </div>
                  <div className="text-box">{item.desc}</div>
                  <button onClick={() => navigate('/')}>처음화면으로</button>
               </div>
            ))}
      </CharacterDetailContainer>
   );
});

export default CharacterDetail;
