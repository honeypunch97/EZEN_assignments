import { styled } from 'styled-components';

const mainColor = '#02343F';
const subColor = '#F0EDCC';
export const Wrap = styled.div`
   button {
      padding: 0;
      cursor: pointer;
      border: none;
   }
`;
export const HeaderContainer = styled.header`
   height: 15vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 50px 0;
   box-sizing: border-box;
   background-color: ${mainColor};

   h1 {
      margin-bottom: 30px;
      a {
         font-size: 30px;
         font-weight: 600;
         color: ${subColor};
      }
   }
   nav {
      ul {
         display: flex;
         li {
            margin-right: 30px;

            &:last-child {
               margin-right: 0;
            }

            a {
               color: ${subColor};
            }
            &:hover a {
               color: tomato;
            }
         }
      }
   }
`;
export const MainContainer = styled.div`
   width: 1200px;
   min-height: 70vh;
   margin: auto;
   padding: 50px;
   box-sizing: border-box;
   h2 {
      font-size: 24px;
      font-weight: 600;
      color: ${mainColor};
      margin-bottom: 20px;
   }
`;
export const TableContainer = styled.table`
   width: 100%;
   colgroup {
      .w1 {
         width: 20%;
      }
      .w2 {
         width: 20%;
      }
      .w3 {
         width: 40%;
      }
      .w4 {
         width: 20%;
      }
   }
   th,
   td {
      text-align: center;
      font-size: 18px;
      padding: 5px;
   }
   th {
      background-color: ${mainColor};
      color: ${subColor};
      font-weight: 600;
   }
   td {
      background-color: ${subColor};
      color: ${mainColor};
      button {
         width: 35px;
         height: 25px;
         padding: 0;
         margin-right: 10px;
         background-color: ${mainColor};
         color: ${subColor};
         &:last-child {
            margin-right: 0;
         }
         a {
            width: 100%;
            height: 100px;
            color: ${subColor};
         }
      }
   }
`;
export const FormContainer = styled.form`
   width: 100%;
   label {
      display: block;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
      color: ${mainColor};
   }
   input {
      width: 100%;
      font-size: 20px;
      padding: 10px 20px;
      box-sizing: border-box;
      margin-bottom: 20px;
      border: none;
      border-bottom: 2px solid ${mainColor};
      color: ${mainColor};
      outline: none;
      transition: 0.3s;
      &:focus {
         background-color: ${subColor};
         font-weight: 600;
      }
   }
   button {
      display: block;
      width: 300px;
      height: 40px;
      border-radius: 25px;
      background-color: ${subColor};
      color: ${mainColor};
      font-size: 18px;
      font-weight: 600;
      margin: auto;
      padding: 0;
      transition: 0.3s;
      &:hover {
         background-color: ${mainColor};
         color: ${subColor};
      }
   }
   .info-box {
      text-align: center;
      strong {
         display: block;
         margin-bottom: 20px;
      }
   }
   .btn-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
         margin: 0;
         margin-right: 20px;
         &:last-child {
            margin-right: 0;
         }
      }
   }
`;
export const LogoutContainer = styled.div`
   p {
      margin-bottom: 10px;
   }
   .info-box {
      background-color: ${subColor};
      padding: 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: ${mainColor};
      strong {
         font-size: 20px;
         font-weight: 600;
         margin-bottom: 20px;
      }
      .btn-wrap {
         button {
            margin-right: 10px;
            width: 80px;
            height: 30px;
            background-color: ${mainColor};
            color: ${subColor};
            &:last-child {
               margin-right: 0;
            }
         }
      }
   }
`;
export const FooterContainer = styled.footer`
   height: 15vh;
   background-color: ${mainColor};
   display: flex;
   justify-content: center;
   align-items: center;
   h2 {
      a {
         color: ${subColor};
         font-size: 24px;
      }
   }
`;
