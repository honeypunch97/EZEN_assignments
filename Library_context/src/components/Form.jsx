import React, { memo, useState } from 'react';
import { useBook } from '../contexts/BookContext';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './style/style';

const Form = memo(() => {
   const { onAdd } = useBook();
   const [newBook, setNewBook] = useState({ genre: '', author: '', code: '' });
   const navigate = useNavigate();
   const changeBook = e => {
      const { name, value } = e.target;
      setNewBook({ ...newBook, [name]: value });
   };
   const addSubmit = e => {
      e.preventDefault();
      onAdd(newBook);
      setNewBook({ genre: '', author: '', code: '' });
      navigate('/');
   };
   return (
      <FormContainer onSubmit={addSubmit}>
         <label>장르</label>
         <input
            type="text"
            name="genre"
            placeholder="책 장르 입력(소설)"
            value={newBook.genre}
            required
            onChange={changeBook}
         />
         <label>저자</label>
         <input
            type="text"
            name="author"
            placeholder="저자 입력(임수정)"
            value={newBook.author}
            required
            onChange={changeBook}
         />
         <label>책 코드</label>
         <input
            type="text"
            name="code"
            placeholder="책 코드 입력(000001)"
            value={newBook.code}
            required
            onChange={changeBook}
         />
         <button type="submit">추가</button>
      </FormContainer>
   );
});

export default Form;
