import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [notice, setNotice] = useState('')
  const [text, setText] = useState([])
  const [complete, setComplete] = useState([])
  const [uncomplete, setUncomplete] = useState([])
  const data =[
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },
    {
      "userId": 1,
      "id": 11,
      "title": "vero rerum temporibus dolor",
      "completed": true
    },
    {
      "userId": 1,
      "id": 12,
      "title": "ipsa repellendus fugit nisi",
      "completed": true
    },
    {
      "userId": 1,
      "id": 13,
      "title": "et doloremque nulla",
      "completed": false
    },
    {
      "userId": 1,
      "id": 14,
      "title": "repellendus sunt dolores architecto voluptatum",
      "completed": true
    },
    {
      "userId": 1,
      "id": 15,
      "title": "ab voluptatum amet voluptas",
      "completed": true
    },
    {
      "userId": 1,
      "id": 16,
      "title": "accusamus eos facilis sint et aut voluptatem",
      "completed": true
    },
    {
      "userId": 1,
      "id": 17,
      "title": "quo laboriosam deleniti aut qui",
      "completed": true
    },
    {
      "userId": 1,
      "id": 18,
      "title": "dolorum est consequatur ea mollitia in culpa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 19,
      "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      "completed": true
    },
    {
      "userId": 1,
      "id": 20,
      "title": "ullam nobis libero sapiente ad optio sint",
      "completed": true
    },]
    data.map((d) => {
      if( d.completed){
          d.completedd = 'done'         
      } else{
        d.completedd = 'not finish'       
      }
    })
  const allclick = () =>{   
    setText(data)
  }  
  const completeclick = () =>{
    data.map((d) => {
      if( d.completed){      
          setComplete( prev => [...prev,d])
      } 
    })
    setText(complete)
  }  
  const notcompleteclick = () =>{
    data.map((d) => {
      if(!d.completed){      
          setUncomplete( prev => [...prev,d])
      } 
    })
    setText(uncomplete)
  }  
  const handleinput1 = (e) =>{
    setInput1(e.target.value)  
             
  }
  const handleinput2 = (e) =>{
    setInput2(e.target.value)   
  }
  const handleinput3 = (e) =>{
    setInput3(e.target.value)   
  }
  const handlesubmit = (e) =>{
    e.preventDefault()
    if( input1 == '' || input2 == '' || input3 == '') {
      alert('Yêu cầu nhập lại')
      setInput2('')
      setInput3('')
    }
    if( input2 != input3) {
      alert('Yêu cầu nhập lại password')
      setInput2('')
      setInput3('')
    } else {
      setNotice(input1)
      console.log(notice);
    }
  }
  return (
    <div className="App">
      <form className='form' onSubmit={handlesubmit}>
         username
        <input type='text' value={input1} onChange={handleinput1} /> <br/>
         password
        <input type='password' value={input2} onChange={handleinput2} /> <br/>
         Confirm password
        <input type='password' value={input3} onChange={handleinput3} /> <br/>
        <button type='submit'> submit</button>
        <h1> Welcome {notice}!</h1>
      </form>
      <button onClick={allclick}> All</button>
      <button onClick={completeclick}> Completed</button>
      <button  onClick={notcompleteclick}> Not Completed</button>
      {text.map((d,index) =>(
      <div key={index} className = 'dataitem'>
        <h4>title : {d.title}</h4>
        <p>id : {d.id}</p>
        <p>completed : {d.completedd}</p>
       
      </div>
    ))}
  
    </div>
  );
}

export default App;
