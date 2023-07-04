import React, { memo } from 'react';
import { useBook } from '../contexts/BookContext';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
const Item = memo(({ item }) => {
   const { id, genre, author, code } = item;
   const { onDel } = useBook();
   const { authed } = useAuth();
   return (
      <tr>
         <td>{genre}</td>
         <td>{author}</td>
         <td>{code}</td>
         <td>
            {authed && (
               <>
                  <button>
                     <Link to={`/edit/${id}`}>
                        <i className="xi-pen"></i>
                     </Link>
                  </button>
                  <button onClick={() => onDel(id)}>
                     <i className="xi-close"></i>
                  </button>
               </>
            )}
         </td>
      </tr>
   );
});

export default Item;
