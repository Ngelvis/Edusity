// import React, {useContext, createContext, useReducer} from 'react'
// import { IoIosAddCircleOutline } from "react-icons/io";
// import { FiMinusCircle } from "react-icons/fi";

import React from 'react';
import './App.css';
import Navbar from './components/navigation/Navbar';
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs';
import Title from './components/title/Title';
import About from './components/about/About';
import Campus from './components/campus/Campus';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Video from './components/video/Video';
import { useState } from'react';

// import Raw from './components/raw/Raw';

// const AppContext = createContext();

// const reducer = (state, action) => {
  
//   switch (action.type){
//     case 'INCREMENT':
//       return {...state, count: state.count + 1};

//     case 'DECREMENT':
//       return {...state, count: state.count - 1};

//     default:
//       return state
//   }
  
// }

function App() {

  const  [playState, setPlayState] = useState(false);

  // const initialState ={count: 0};
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (

    // <AppContext.Provider value={{state, dispatch}}>
    //   <div>
    //     <Counter/>
    //   </div>
    // </AppContext.Provider>
  <div>

    <Navbar/>

    <Hero/>

    <div className='container'>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Students Say'/>
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <Video playState={playState} setPlayState={setPlayState}/>

  </div>
)
}

export default App;


// const Counter = () => {

//   const {state, dispatch} = useContext(AppContext)

//   return (
    
  
//     <div style={{
//         backgroundColor: 'white',
//         padding: '20px',
//         border: '1px solid black',
//         borderRadius: '5px',
//         boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//         outline: 'none'
//     }}>
//         <h1>You clicked {state.count} times</h1>
//         <button onClick={() => dispatch({type: 'DECREMENT'})} 
//         style={{
//             backgroundColor: 'red',
//             color: 'white',
//             width: '200px',
//             padding: '10px',
//             border: 'none',
//             margin: '10px',
//             cursor: 'pointer',
//             fontSize: '20px',
//             fontWeight: 'bold',
//             borderRadius: '5px',
//             boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//             outline: 'none'
//         }}>
//              <FiMinusCircle />
//         </button>

//         <button onClick={() => dispatch({type: 'INCREMENT'})} 
//         style={{
//             backgroundColor: 'green',
//             color: 'white',
//             width: '200px',
//             margin: '10px',
//             padding: '10px',
//             border: 'none',
//             cursor: 'pointer',
//             fontSize: '20px',
//             fontWeight: 'bold',
//             borderRadius: '5px',
//             boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//             outline: 'none'
//         }}>
//              <IoIosAddCircleOutline />
//         </button>
//     </div>
//   )


// }