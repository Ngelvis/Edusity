// import React, {useState, useEffect, useContext, useReducer} from 'react'

// const Raw = () => {

//     // React Form Method One

//     const [userEmail, setUserEmail] = useState('')
//     const [userName, setUserName] = useState('')
    
   
//     // React Form Method Two
//     // const [formData, setFormData] = useState({
//     //     userName: '',
//     //     userEmail: ''
        
//     // })


//     // const handleChange = (e) => {
        
//     //     const {name, value} = e.target
//     //     setFormData((prevData)=>({
//     //         ...prevData, [name]: value
//     //     }));
//     // }

//     const [error, setError] = useState({})

//     const handleSubmit = (e) => {

//         e.preventDefault()

//         const newErrors = {}

//         if(!formData.userName){
//             newErrors.userName = 'Name is required'
//         }

//         if(!formData.userEmail){
//             newErrors.userEmail = 'Email is required'
//         }

//         setError(newErrors)

//         if (Object.keys(newErrors).length === 0){}
//     }



//     // useState

//     const [count, setCount] = useState(0)
//     const [data, setData] = useState([])

    
//     const handleDecrement = () => {

//         count > 0 ? setCount(count - 1) : alert(`You can't remove anymore items`)
           
//     }
    
//     // useEffect
    
//     // useEffect(() => {
        
//     //     fetch('http://jsonplaceholder.typicode.com/users')
//     //     .then((response) => response.json())
//     //     .then((result) => setData(result))
//     //     .catch((response)=>console.log(`Error fetching data: `+ error))
        
//     // })
    
//     const handleIncrement = () =>{

//         setCount(count + 1)

            
//     }
    




    
//     return (
//         <div style={{
//             backgroundColor: 'white',
//             padding: '20px',
//             border: '1px solid black',
//             borderRadius: '5px',
//             boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//             outline: 'none',
//             gap:'20px'
//         }}>
//             <h1>You clicked {count} times</h1>
//             <button onClick={() => handleDecrement(count - 1)} style={{
//                 backgroundColor: 'red',
//                 color: 'white',
//                 width: '200px',
//                 padding: '10px',
//                 border: 'none',
//                 margin: '10px',
//                 cursor: 'pointer',
//                 fontSize: '40px',
//                 fontWeight: 'bold',
//                 borderRadius: '5px',
//                 boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//                 outline: 'none'
//             }}>
//                 -
//             </button>

//             <button onClick={() => handleIncrement(count + 1)} style={{
//                 backgroundColor: 'green',
//                 color: 'white',
//                 width: '200px',
//                 margin: '10px',
//                 padding: '10px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 fontSize: '40px',
//                 fontWeight: 'bold',
//                 borderRadius: '5px',
//                 boxShadow: '2px 2px 2px 2px rgba(0,0,0,0.2)',
//                 outline: 'none'
//             }}>
//                 +
//             </button>

//             /* <br /> <br /> <br />

//             {/* {

//             data ? (
//                 <p>
//                     Data loaded: {JSON.stringify(data)}
//                 </p>
//             ) : (
//                 <p>
//                     Loading data...
//                 </p>
//             )


//             } */}


//             <br /> <br /> <br />


//             {error.userName && <span>{error.userName}</span>}

//             <form onSubmit={handleSubmit}>


//                 <label htmlFor="">Your Name: 
//                     <input type="text" 
//                     name='username'
//                     value={formData.userName}
//                     onChange={(e)=>setUserName(e.target.value)}/>
//                 </label>

//                 <br /> <br /> <br />

//                 <label htmlFor="">Your Email: 
//                     <input type="email" 
//                     name='email'
//                     value={formData.userEmail}
//                     onChange={(e)=>setUserEmail(e.target.value)}/>
//                 </label>

//                 <br /> <br /> <br />

//                 <button type="submit">Submit</button>
//             </form>

//         </div>
//     )


// }

// export default Raw




