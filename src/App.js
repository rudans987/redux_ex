import React from 'react';
import {useDispatch, useSelector} from "react-redux";
// import { changeName } from './redux/modules/cat';
import { changeName } from './redux/modules/catSlice';

const App = () => {
  const cat = useSelector(state=>state.cat);
  const dispatch = useDispatch();
  console.log(cat);
    return(
     <div>
      <p>{cat.name}</p>
      <button onClick={()=> {
      dispatch(changeName("루비"))
      }}>이름 바꾸기</button>
     </div>
  );
}


    

export default App;
