import React, { memo, useState } from 'react';
import { FormContainer, MainContainer } from './style/style';
import { useAuth } from '../contexts/AuthContext';

const Login = memo(() => {
   const [user, setUser] = useState({ email: '', pw: '' });
   const { login } = useAuth();
   const changeUser = e => {
      const { name, value } = e.target;
      setUser({ ...user, [name]: value });
   };
   const onSubmitLogin = e => {
      e.preventDefault();
      login(user.email, user.pw);
   };
   return (
      <MainContainer>
         <h2>Login</h2>
         <FormContainer onSubmit={onSubmitLogin}>
            <label>Email</label>
            <input
               type="email"
               placeholder="이메일 입력"
               required
               name="email"
               value={user.email}
               onChange={changeUser}
            />
            <label>PassWord</label>
            <input
               type="text"
               placeholder="비밀번호 입력(1234)"
               required
               name="pw"
               value={user.pw}
               onChange={changeUser}
            />
            <button>로그인</button>
         </FormContainer>
      </MainContainer>
   );
});

export default Login;
