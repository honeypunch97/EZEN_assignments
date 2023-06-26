import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = url => {
   const [state, setState] = useState([]);
   const [loading, setLoading] = useState(false);
   const [Error, setError] = useState(null);

   useEffect(() => {
      axios
         .get(url)
         .then(res => {
            setState(res.data);
            setLoading(true);
            setError(null);
         })
         .catch(error => {
            setState([]);
            setLoading(false);
            setError('에러입니다.');
         });
   }, [url]);
   return { state, loading, Error };
};
