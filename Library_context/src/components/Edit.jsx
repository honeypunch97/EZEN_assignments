import React, { memo, useEffect, useState } from 'react';
import { FormContainer, MainContainer } from './style/style';
import { useNavigate, useParams } from 'react-router-dom';
import { useBook } from '../contexts/BookContext';

const Edit = memo(() => {
   const { editID } = useParams();
   const { data, onEdit } = useBook();
   const [current, setCurrent] = useState({ id: 0, genre: '', author: '', code: '' });
   const { genre, author, code } = current;
   const navigate = useNavigate();

   const editBook = e => {
      const { name, value } = e.target;
      setCurrent({ ...current, [name]: value });
   };
   const submitBook = e => {
      e.preventDefault();
      onEdit(current);
      navigate('/');
   };
   useEffect(() => {
      setCurrent(data.find(item => item.id === Number(editID)));
   }, [editID, data]);

   return (
      <MainContainer>
         <h2>Edit</h2>
         <FormContainer onSubmit={submitBook}>
            <label>장르</label>
            <input type="text" name="genre" value={genre} onChange={editBook} />
            <label>저자</label>
            <input type="text" name="author" value={author} onChange={editBook} />
            <label>코드</label>
            <input type="text" name="code" value={code} onChange={editBook} />

            <div className="info-box">
               <strong>현재 내용으로 수정하시겠습니까?</strong>
            </div>
            <div className="btn-wrap">
               <button type="submit">예</button>
               <button type="button" onClick={() => navigate('/')}>
                  아니오
               </button>
            </div>
         </FormContainer>
      </MainContainer>
   );
});

export default Edit;
