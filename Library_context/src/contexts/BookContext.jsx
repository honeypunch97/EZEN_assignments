import React, { createContext, memo, useContext, useEffect, useMemo, useReducer, useRef } from 'react';
import { BookReducer } from './BookReducer';

const initialState = {
   text: '',
   data: JSON.parse(localStorage.getItem('data')) || [
      { id: 1, genre: '소설', author: '저자1', code: '000001' },
      { id: 2, genre: '수필', author: '저자2', code: '000002' },
      { id: 3, genre: '시', author: '저자3', code: '000003' },
      { id: 4, genre: '에세이', author: '저자4', code: '000004' },
      { id: 5, genre: '고전문학', author: '저자5', code: '000005' },
   ],
};
const BookContext = createContext();
export const useBook = () => useContext(BookContext);

export const BookProvider = memo(({ children }) => {
   const [state, dispatch] = useReducer(BookReducer, initialState);
   const { text, data } = state;
   const no = useRef(JSON.parse(localStorage.getItem('no')) || data.length + 1);
   const onAdd = item => {
      dispatch({ type: 'ADD', book: { ...item, id: no.current++ } });
   };
   const onDel = id => {
      dispatch({ type: 'DEL', id });
   };
   const onEdit = book => {
      dispatch({ type: 'EDIT', book });
   };
   useEffect(() => {
      localStorage.setItem('data', JSON.stringify(data));
      localStorage.setItem('no', JSON.stringify(no.current));
   }, [data, no]);
   const value = useMemo(
      () => ({
         text,
         data,
         onDel,
         onAdd,
         onEdit,
      }),
      [text, data, onDel, onAdd, onEdit],
   );
   return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
});
