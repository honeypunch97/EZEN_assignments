import React from 'react';

export const BookReducer = (state, action) => {
   switch (action.type) {
      case 'ADD':
         return { ...state, data: [...state.data, action.book] };
      case 'DEL':
         return { ...state, data: state.data.filter(item => item.id !== action.id) };
      case 'EDIT':
         return { ...state, data: state.data.map(item => (item.id === action.book.id ? action.book : item)) };

      default:
         return state;
   }
};
