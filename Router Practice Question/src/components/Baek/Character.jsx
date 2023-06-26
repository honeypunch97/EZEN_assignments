import React, { memo } from 'react';
import { CharItem } from '../styled/BaekStyle';
import { useNavigate } from 'react-router-dom';

const Character = memo(({ item }) => {
   const { id, name, img } = item;
   const navigate = useNavigate();
   return (
      <CharItem>
         <div className="img-box" onClick={() => navigate(`/char/${id}`)}>
            <img src={img} alt={name} />
            <span>{name}</span>
         </div>
      </CharItem>
   );
});

export default Character;
