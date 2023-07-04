import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { FooterContainer } from './style/style';

const Footer = memo(() => {
   return (
      <FooterContainer>
         <h2>
            <Link to={'/'}> Footer</Link>
         </h2>
      </FooterContainer>
   );
});

export default Footer;
