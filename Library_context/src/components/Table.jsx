import React, { memo } from 'react';
import { useBook } from '../contexts/BookContext';
import Item from './Item';
import { TableContainer } from './style/style';

const List = memo(() => {
   const { data } = useBook();
   return (
      <TableContainer>
         <colgroup>
            <col className="w1" />
            <col className="w2" />
            <col className="w3" />
            <col className="w4" />
         </colgroup>
         <thead>
            <tr>
               <th>장르</th>
               <th>저자</th>
               <th>코드</th>
               <th>관리</th>
            </tr>
         </thead>
         <tbody>
            {data.map(item => (
               <Item key={item.id} item={item} />
            ))}
         </tbody>
      </TableContainer>
   );
});

export default List;
