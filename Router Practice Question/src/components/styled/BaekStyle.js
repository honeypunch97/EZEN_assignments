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
