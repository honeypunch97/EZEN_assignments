import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Character from './components/Baek/Character';
import NotFiles from './components/NotFiles';
import CharacterDetail from './components/Baek/CharacterDetail';
import Main from './components/Baek/Main';
import GlobalStyle from './components/styled/Global';

const App = () => {
   return (
      <>
         <GlobalStyle />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Main />} />
               <Route path="char">
                  <Route path=":charID" element={<CharacterDetail />} />
               </Route>
               <Route path="*" element={<NotFiles />} />
            </Routes>
         </BrowserRouter>
      </>
   );
};

export default App;
