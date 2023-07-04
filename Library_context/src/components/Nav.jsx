import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Nav = memo(() => {
   const { authed } = useAuth();
   return (
      <nav>
         <ul>
            <li>
               <Link to={'/'}>Home</Link>
            </li>
            {authed && (
               <li>
                  <Link to={'/add'}>Add</Link>{' '}
               </li>
            )}

            {authed ? (
               <li>
                  <Link to={'/logout'}>Logout</Link>
               </li>
            ) : (
               <li>
                  <Link to={'/login'}>Login</Link>
               </li>
            )}
         </ul>
      </nav>
   );
});

export default Nav;
