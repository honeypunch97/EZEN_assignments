import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/style/GlobalStyles';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { Wrap } from './components/style/style';
import { BookProvider } from './contexts/BookContext';
import Add from './components/Add';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Logout from './components/Logout';
import Edit from './components/Edit';

const AppProvider = ({ contexts, children }) =>
   contexts.reduce(
      (prev, context) =>
         React.createElement(context, {
            children: prev,
         }),
      children,
   );
const App = () => {
   return (
      <div>
         <GlobalStyles />
         <HashRouter>
            <AppProvider contexts={[BookProvider, AuthProvider]}>
               <Wrap>
                  <Header />
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/add" element={<Add />} />
                     <Route path="/login" element={<Login />} />
                     <Route path="/logout" element={<Logout />} />
                     <Route path="/edit">
                        <Route path=":editID" element={<Edit />} />
                     </Route>
                     <Route path="/*" element={<Home />} />
                  </Routes>
                  <Footer />
               </Wrap>
            </AppProvider>
         </HashRouter>
      </div>
   );
};

export default App;
