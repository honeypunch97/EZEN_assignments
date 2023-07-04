import React, { memo } from 'react';
import { LogoutContainer, MainContainer } from './style/style';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = memo(() => {
   const { user, logout } = useAuth();
   const { email } = user;
   const navigate = useNavigate();
   return (
      <MainContainer>
         <h2>Logout</h2>
         <LogoutContainer>
            <p>이메일 : {email}</p>
            <div className="info-box">
               <strong>로그아웃 하시겠습니까?</strong>
               <p className="btn-wrap">
                  <button onClick={logout}>예</button>
                  <button onClick={() => navigate('/')}>아니요</button>
               </p>
            </div>
         </LogoutContainer>
      </MainContainer>
   );
});

export default Logout;
