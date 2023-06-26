import { styled } from 'styled-components';

// Main
export const MainContainer = styled.div`
   width: 1400px;
   margin: auto;
   position: relative;
   padding: 50px 0;
   h2 {
      font-size: 45px;
      text-align: center;
      font-weight: 600;
      margin-bottom: 30px;
   }
   ul {
      display: flex;
      justify-content: space-around;
   }
`;

// Character
export const CharItem = styled.li`
   .img-box {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      &:hover {
         img {
            scale: 1.1;
         }
         span {
            transform: translateY(0);
         }
      }

      img {
         width: 100%;
         height: 100%;
         transition: 0.3s;
      }
      span {
         display: block;
         width: 300px;
         padding: 10px 0;
         font-weight: 600;
         margin-top: 10px;
         position: absolute;
         left: 0;
         text-align: center;
         bottom: 10px;
         z-index: 10;
         font-size: 30px;
         background-color: rgba(255, 255, 255, 0.5);
         transition: 0.3s;
         transform: translateY(80px);
      }
   }
`;

// CharacterDetail
export const CharacterDetailContainer = styled.div`
   width: 1400px;
   margin: 50px auto;
   background: #dcdcdc;
   box-sizing: border-box;
   border-radius: 25px;
   .container-box {
      padding: 50px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      position: relative;
      .img-box {
         width: 300px;
         img {
            width: 300px;
            border-radius: 25px;
         }
         strong {
            font-size: 30px;
            padding-right: 10px;
            font-weight: 600;
         }
         em {
            font-size: 14px;
         }
      }
      .text-box {
         width: 900px;
         display: flex;
         justify-content: center;
         align-items: center;
         font-size: 18px;
         font-weight: 500;
      }
      button {
         position: absolute;
         right: 30px;
         bottom: 30px;
         cursor: pointer;
         border-radius: 10px;
         border: 1px solid #fff;
      }
   }
`;
