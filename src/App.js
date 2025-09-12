import React from 'react';
function App()
{
  const show =()=>{

var name=document.getElementById("t1").value;
			 
			 document.getElementById("res").innerHTML="<h2>your name:"+name+"</h2>";

       var age=document.getElementById("t2").value;
       document.getElementById("res1").innerHTML="your age:"+age;
  }
  return(
    <>
    <h1>hello</h1>
    <input type="text" id="t1" placeholder="enter your name"></input>
     <input type="text" id="t2" placeholder="age"></input>
    <button onClick={show}>click me</button>
    <div id="res"></div>
    <div id="res1"></div>
    <img src="/images/images (3).jpg" alt=""></img>
    <img src="/images/logo.svg" alt="" ></img>
    </>
  )
}
export default App
/*
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Alert from  'react-bootstrap/Alert';
import Stack from 'react-bootstrap/Stack';
import Button  from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
function App()
{
  return(
    <>
    <h1>example heading <Badge bg="secondary">new</Badge></h1>

<h1>React Bootstrap</h1>

<Alert variant="primary" key="primary">this is Alert Message!!!</Alert>

{[
'primary',
'secondary',
'success',
'danger',
'warning',
'info',
'light',
'dark',
].map((variant)=>(
<Alert key={variant} variant={variant}>
	this is a {variant} alert-check it out!
	</Alert>
))}
<Stack direction='horizontal' gap={2}>
  <Badge bg='warning'>click me</Badge>
  <Badge bg='success'>click me</Badge>
  <Badge bg='danger'>click me</Badge>
</Stack>
<Button variant='info' style={{gap:"2"}}>profile  <Badge bg='warning'>9</Badge></Button>
<br></br>
<br></br>
<ButtonGroup>
  <Button className='me-5' variant='primary'>click me</Button>
   <Button variant='danger'>click me</Button>
    <Button variant='success'>click me</Button>
</ButtonGroup>
    </>
  )
}
export default App
/*
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faGear,faHouse,faUsers} from "@fortawesome/free-solid-svg-icons" 
function App()
{
  return(
    <>
    <h2>react 3rd party libraries - fontAwesome</h2>
    <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
<FontAwesomeIcon icon={faUsers}></FontAwesomeIcon>
    </>
  )
}
export default App

/*import { useState } from 'react'
import Axios from 'axios'
function App()
{
  const[list,SetList]=useState([]);
  const show=()=>{
    const apikey="8303f24af2f0fb9ed10ed1df7db8e45a"
    const apiurl="https://api.aviationstack.com/v1/countries"
    Axios.get(apiurl,{params:{access_key:apikey}}).then((res)=>{
console.log(res.data)
console.log("==================")

SetList(res.data.data)
    }).catch((err)=>{
      console.log(err.response.data)
      SetList(err.response.data)
    })

  }
  
  return(
    <>
    <h1>find weather report using city name world wide</h1>
    <center>
     
      <input type='button' onClick={show} value=" report"></input>
      <table border="2" cellSpacing="5" align='center'>
<tr><th>country name</th><th>capital</th><th>population</th></tr>
{list.map((item,key)=><tr><td>{item.country_name}</td><td>{item.capital}</td><td>{item.population}</td></tr>)}</table>
     
    </center>
    </>
  )
}
export default App

/*import { useState } from 'react'
import Axios from 'axios'
function App()
{
  const[list,SetList]=useState(null);
  const show=()=>{
    const apikey="8303f24af2f0fb9ed10ed1df7db8e45a"
    const apiurl="https://api.aviationstack.com/v1/countries"
    Axios.get(apiurl,{params:{access_key:apikey}}).then((res)=>{
console.log(res.data)
console.log("==================")
console.log(res.data.data[5])
SetList(res.data)
    }).catch((err)=>{
      console.log(err.response.data)
      SetList(err.response.data)
    })

  }
  
  return(
    <>
    <h1>find weather report using city name world wide</h1>
    <center>
     
      <input type='button' onClick={show} value=" report"></input>
     
    </center>
    </>
  )
}
export default App

/*import { useState } from 'react'
import Axios from 'axios'
function App()
{
  const [city,SetCity]=useState("");
  const[list,SetList]=useState(null);
  const show=()=>{
    const apikey="0d496f8678547697dc4b8db04f166c8c"
    const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    Axios.get(apiurl).then((res)=>{
console.log(res.data)
SetList(res.data)
    }).catch((err)=>{
      console.log(err.response.data)
      SetList(err.response.data)
    })

  }
  const cityfun=(e)=>{
    SetCity(e.target.value)
  }
  return(
    <>
    <h1>find weather report using city name world wide</h1>
    <center>
      <input type='text' onChange={(e)=>cityfun(e)} value={city} placeholder='enter city name here'></input>
      <br></br>
      <input type='button' onClick={show} value="weather report"></input>
      <br></br>
      {list!==null && list.cod===200 && "main:"+list.weather[0].main}
      <br></br>
       {list!==null && list.cod===200 && "description:"+list.weather[0].description}
       <br></br>
       {list!==null && list.cod===200 && "Windspeed:"+list.wind.speed}
       <br></br>
       {list!==null && list.cod===200 && "Sea level:"+list.main.sea_level+"meters"}
       <br></br>
       {list!==null && list.cod===200 && "Temperature:"+list.main.temp+"farenheit"}
       <br></br>
       {list!==null && list.cod===200 && "country:"+list.sys.country}
       <br></br>
       {list!==null && list.cod===200 && "sunrise:"+list.sys.sunrise}
       <br></br>
       {list!==null && list.cod===200 && "sunset:"+list.sys.sunset}
       <br></br>
       {list!==null && list.cod===200 && "clouds:"+list.clouds.all}
       <br></br>
        {list!==null && list.cod===200 && "longitude:"+list.coord.lon}
       <br></br>
        {list!==null && list.cod===200 && "latitude:"+list.coord.lat}
       <br></br>
        {list!==null && list.cod===200 && "gust:"+list.wind.gust}
       <br></br>
       {list!==null && list.cod==="404" && list.message}
    </center>
    </>
  )
}
export default App

/*
import React from "react";
class Child extends React.Component
{
  componentWillUnmount()  
  { ++
    document.getElementById("res").innerHTML="component removed"
  }
  render()
  {
    return(
      <>
      <h1>this is child component</h1>
      <h1>this is child component</h1>
      <h1>this is child component</h1>
      <h1>this is child component</h1>
      <h1>this is child component</h1>
      </>
    )
  }
}
class App extends Child
{
  constructor()
  {
super()
this.state={
  cvisible:true
}
  }
  delcom=()=>{
    this.setState({cvisible:false})
  }
  render()
  {
    let cc
    if(this.state.cvisible===true)
      cc=<Child/>
    return(
   <>
   {cc}
    <h1>this is App component</h1>
    <h1>this is App component</h1>
    <h1>this is App component</h1>
    <h1>this is App component</h1>
    <h1>this is App component</h1>
    <button onClick={this.delcom}> delete child component</button>
    <div id="res"></div>
   </>
    )
  }
}
export default App
/*
import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      rno:1001,
      sname:"vignesh",
      mark:80
    }
  }
  
  shouldComponentUpdate()
  {
    return true;
  }
  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({rno:1002,sname:"ranjith",mark:100})
    },5000)
  }
  componentDidUpdate()
  {
    document.getElementById("r1").innerHTML="updated success"
  }
  getSnapshotBeforeUpdate(prevProps,prevState)
  {
    document.getElementById("r2").innerHTML="previous value:"+prevState.rno+" "+prevState.sname+" "+prevState.mark
  }
render()
{
  return(
    <>
     <h1>this is life cycle of class component</h1>
      <h2>roll number:{this.state.rno}</h2>
       <h2>student name:{this.state.sname}</h2>
        <h2>student mark:{this.state.mark}</h2>
        <div id="r1"></div>
        <div id="r2"></div>
    </>
  )
}
}
export default App
/*
import React from "react";
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      rno:1001,
      sname:"gowtham",
      mark:88
    }
  }
  componentDidMount()
  {
    setTimeout(()=>{
      this.setState({rno:1002,sname:"vignesh",mark:100})
    },4000)
  }
  render()
  {
    return(
      <>
      <h1>this is life cycle of class component</h1>
      <h2>roll number:{this.state.rno}</h2>
       <h2>student name:{this.state.sname}</h2>
        <h2>student mark:{this.state.mark}</h2>
      </>
    )
  }
}
export default App
/*
import {useForm} from 'react-hook-form'
function App()
{
  const{register,handleSubmit,formState:{errors}}=useForm()
  const dis=(data)=>{
    console.log(data)
    console.log(data.city)
    console.log(data.uname)
    console.log(data.mobile)
  }
  return(
<form onSubmit={handleSubmit(dis)}>
  roll no<input type='text' {...register("uname",{required:true,minLength:5,maxLength:10,pattern:/^[0-9]{5,10}$/})}></input>
{errors.uname && errors.uname.type==="required" && <font color='red'>* must fill roll number</font>} 
{errors.uname && errors.uname.type==="minLength" && <font color='red'>* 5 min cahrts required</font>} 
{errors.uname && errors.uname.type==="maxLength" && <font color='red'>* do not exceed above 10 letters</font>}
{errors.uname && errors.uname.type==="pattern" && <font color='red'>* roll no must only be numbers</font>}  
  <br></br>
  student name<input type='text' {...register("city",{required:true,pattern:/^[A-Z]{8,}$/})}></input>
  {errors.city && errors.city.type==="required" && <font color='red'>* must fill student name</font>}  
  {errors.city && errors.city.type==="pattern" && <font color='red'>* city name only upper case and must be 8 and max infinite</font>}  
  <br></br>
  contact number<input type='text' {...register("mobile",{required:true,pattern:/^[0-9]{10,10}$/})}></input>
  {errors.mobile && errors.mobile.type==="required" && <font color='red'>* must fill mobile number</font>}  
  {errors.mobile && errors.mobile.type==="pattern" && <font color='red'>* mobile name must 10 digits min and max</font>}  
  <br></br>
  <input type='submit' value={"submit"}></input>

</form>
  )
}
export default App

/*
import {useForm} from 'react-hook-form'
function App()
{
  const{register,handleSubmit}=useForm()
  const dis=(data)=>{
    console.log(data)
    console.log(data.city)
    console.log(data.uname)
    console.log(data.mobile)
  }
  return(
<form onSubmit={handleSubmit(dis)}>
  roll no<input type='text' {...register("uname")}></input>
  <br></br>
  student name<input type='text' {...register("city")}></input>
  <br></br>
  contact number<input type='text' {...register("mobile")}></input>
  <br></br>
  <input type='submit' value={"submit"}></input>

</form>
  )
}
export default App

/*
import { useState } from "react"
function App()
{
  const [rno,setRno]=useState("...")
  const [sname,setName]=useState("...")
  const [mark,setMark]=useState("0")
    const dis=(e)=>{
      if(e.target.id==="t1")
      setRno(e.target.value)
    if(e.target.id==="t2")
      setName(e.target.value)
    if(e.target.id==="t3")
      setMark   (e.target.value)
    }
    const datafun=()=>{
      var jsonobj={
        rno:rno,
        sname:sname,
        mark:mark
      }
      console.log("data:",jsonobj)
    }
  
  return(
    <>
    <h1>value attributes issues in textbox - react hooks advanced</h1>
    rno<input type="text" id="t1" onChange={(e)=>dis(e)} value={rno}></input>
    sname<input type="text" id="t2" onChange={(e)=>dis(e)} value={sname}></input>
    mark<input type="text" id="t3" onChange={(e)=>dis(e)} value={mark}></input>
    <input type="button" value="click me" onClick={datafun}></input>
    </>
  )
}
export default App

/*import { useState } from "react"
function App()
{
  const [name,setName]=useState("...")
    const dis=(e)=>{
      setName.apply(e.target.value)
      console.log("typing....")
    }
  
  return(
    <>
    <h1>value attributes issues in textbox - react hooks</h1>
    <input type="text" onChange={(e)=>dis(e)} value={name}></input>
    </>
  )
}
export default App
/*
function App()
{
  //none
  const rsmall=(e)=>{
    if(e.target.checked===true)
    {
      document.getElementById("c1").checked=false
      document.getElementById("c2").checked=false
      document.getElementById("c3").checked=false
    }
  }
//c C++ Java
const disp=(e)=>{
  if(document.getElementById("c4").checked===true)
  {
    document.getElementById("c1").checked=false
      document.getElementById("c2").checked=false
      document.getElementById("c3").checked=false
  }
}

  return(
    <>
  <h1>checkbox demo with validation</h1>
  <input id="c1" type="checkbox" value="c" onChange={(e)=>disp(e)} ></input>c  
   <input id="c2" type="checkbox" value="c++" onChange={(e)=>disp(e)} ></input>c++  
    <input id="c3" type="checkbox" value="java" onChange={(e)=>disp(e)} ></input>java  
     <input id="c4" type="checkbox" value="none" onChange={(e)=>rsmall(e)} ></input>none of these above  
    </>
  )
}
export default App
/*
function App()
{
const show=()=>{
  var len=document.getElementByTagName("input").length;
  document.getElementById("res1").innerHTML="no of input tags:"+len
  var intags=document.getElementsByTagName("input");
  var sum=0;
  for(var i=0;i<len;i++)
  {
    sum=sum+parseInt(intags[i].value)
  }
  document.getElementById("res2").innerHTML="total:"+sum
}
  return(
    <>
    mark1:<input  type="text"></input><br></br>
    mark2:<input  type="text"></input><br></br>
    mark3:<input  type="text"></input><br></br>
    mark4:<input  type="text"></input><br></br>
    mark5:<input  type="text" ></input><br></br>
    mark6:<input  type="text"></input><br></br>
    mark7:<input  type="text"></input><br></br>
    mark8:<input  type="text"></input><br></br>
    mark9:<input  type="text"></input><br></br>
    mark10:<input  type="text" ></input><br></br>
    <button onClick={show}>Total input tags</button><br></br>
    <div id="res1"></div>
    <div id="res2"></div>
    </>

  )
}
export default App
/*
function App()
{
const show=()=>{
  var len=document.getElementByTagName("input").length;
  document.getElementById("res1").innerHTML="no of input tags:"+len
  var intags=document.getElementsByTagName("input");
  var sum=0;
  for(var i=0;i<len;i++)
  {
    sum=sum+parseInt(intags[i].value)
  }
  document.getElementById("res2").innerHTML="total:"+sum
}
  return(
    <>
    mark1:<input  type="text"></input><br></br>
    mark2:<input  type="text"></input><br></br>
    mark3:<input  type="text"></input><br></br>
    mark4:<input  type="text"></input><br></br>
    mark5:<input  type="text" ></input><br></br>
    <button onClick={show}>Total input tags</button><br></br>
    <div id="res1"></div>
    <div id="res2"></div>
    </>

  )
}
export default App
/*
function App()
{
const show=()=>{
  var m1=parseInt(document.getElementById("t1").value);
  var m2=parseInt(document.getElementById("t2").value);
  var m3=parseInt(document.getElementById("t3").value);
  var m4=parseInt(document.getElementById("t4").value);
  var m5=parseInt(document.getElementById("t5").value);
  var tot=m1+m2+m3+m4+m5;
  document.getElementById("res").innerHTML="total:"+tot;
  }
  return(
<>
mark1:<input  type="text" id="t1"></input><br></br>
mark2:<input  type="text" id="t2"></input><br></br>
mark3:<input  type="text" id="t3"></input><br></br>
mark4:<input  type="text" id="t4"></input><br></br>
mark5:<input  type="text" id="t5"></input><br></br>
<button onClick={show}>total</button>
total:<div id="res"></div>
</>
  )
}
export default App
/*
function App()
{
  const dis=(e)=>{
    document.getElementById("res").innerHTML="current use type"+e.target.type
  }
  return(
    <>
    <h1>event.target.type</h1>
    <input type="text" onChange={(e)=>dis(e)}></input><br></br>
    <select onChange={(e)=>dis(e)}>
      <option>sunday</option>
      <option>monday</option>
    </select>
    <div id="res"></div>
    </>
  )
}
export default App
/*
function App()
{
  const dis=(e)=>{
    document.getElementById("res").innerHTML="current use tagname"+e.target.tagName
  }
  return(
    <>
    <h1>event.target.tagName</h1>
    <input type="text" onChange={(e)=>dis(e)}></input><br></br>
    <div id="res"></div>
    </>
  )
}
export default App
/*
function App()
{
  
  const dis=(event)=>{
    var res=0
    if(event.target.id==="t1")
      res=res+(500*event.target.value)
    if(event.target.id==="t2")
      res=res+200*event.target.value

  document.getElementById("res").innerHTML="total amount ₹"+res
  }
  return(
    <form onInput={(e)=>dis(e)}>
      500 x <input type="text" id="t1" name="t1" placeholder="enter no. of notes"></input>
      <br></br>
      200 x <input type="text" id="t2" name="t2" placeholder="enter no. of notes"></input>
      <div id="res"></div>
    </form>
  )
}
export default App
/*
function App()
{
  const dis=(event)=>{
event.preventDefault()
var un=document.getElementById("t1").value;
var pw=document.getElementById("t2").value;
document.getElementById("res1").innerHTML=un;
document.getElementById("res2").innerHTML=pw;

  }

  return(
<form onSubmit={(e)=>dis(e)}>
  <input type="text" id="t1" name="user" placeholder="enter user name"></input>
  <input type="password" id="t2" name="pass" placeholder="enter password"></input>
  <input type="submit"></input>
  <div id="res1"></div>
  <div id="res2"></div>
 
</form>
  )
}
export default App
/*
function App()
{
  const dis1=(ev)=>{
    document.getElementById("res").innerHTML="cursor inside box"
    document.getElementById("t1").style.backgroundColor="green"
  }
  const dis2=(ev)=>{
    document.getElementById("res").innerHTML="cursor outside box"
    document.getElementById("t1").style.backgroundColor="red"
  }
return(
  <>
  <h1><center>handling events or event handling: do perform some action</center></h1>
  <label>enter user name</label>
  {/* <input type="text" id="t1" onChange={(e)=>dis(e)}></input> */
  /* <input type="button" onClick={(e)=>dis(e)} value="clickme" id="nbut"></input> */
  // <input type="button" id="t1" onFocus={(e)=>dis1(e)} onBlur={(e)=>dis2(e)}></input>
  // <div id="res"></div>
  // </>
// )
// }
// export default App
/*
function App()
{
  return(
    <form>
    <h1>react forms</h1>
    <label>enter user name:</label><input type="text" value="vignesh"></input><br></br>
    number box:<input type="number" value="1254"></input><br></br>
    <input type="password" placeholder="enter password"></input><></>

    <label>Gender:</label><input type="radio" name="gen"></input>male
    <input type="radio" name="gen"></input>female
    <input type="radio" name="gen"></input>others<br></br>
    <label>select courses:</label>
    <input type="checkbox" name="c1"></input>c
     <input type="checkbox" name="c2"></input>c+
      <input type="checkbox" name="c3"></input>java
       <input type="checkbox" name="c4"></input>python
        <input type="checkbox" name="c5"></input>php
        <br></br>
        <label>enter address:</label>
        <textarea rows="6" column="20"></textarea>
        <br></br>
        <label>select weekday</label>
        <select>
          <option>sunday</option>
          <option>monday</option>
          <option>tuesday</option>
          <option>wednesday</option>
          <option>thursday</option>
          <option>friday</option>
          <option>saturday</option>
          </select>
          <br></br>
          enter email:<input type="email" name="e"></input>
          <br></br>
          <input type="date" name="d"></input>
          <br></br>
          <input type="time" name="t"></input>
          <br></br>
          <input type="week" name="w"></input>
          <br></br>
          <input type="file" name="f"></input>
          <br></br>
          <input type="range" value="7" min="0" max="10"></input>
          <br></br>
          <input type="hidden" value="100" name="h"></input>
          <input type="submit"></input>
          <input type="button" value="clickme"></input>
          <input type="reset" value="clear"></input>
          <button>clickme</button>


    </form>
  )
}
export default App
/*
import React from "react";
class App extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state=props
  }
  render()
  {
    return(
      <>
      {this.state.props.user.map((item)=><>{item.sno} {item.sname} {item.mark}<br></br></>)}
      </>
    )
  }
}
export default App

/*
function App(props)
{
 return (
  <>
  {props.user.map((item)=><>{item.sno} {item.sname} {item.mark}<br></br></>)}
  </>
 )
}
export default App
/*
function App(props)
{
 return (
  <>
  <h1>1.simple props - properties</h1>
  <h2> name:{props.user.rno}</h2>
  <h2>tamil mark:{props.user.marks.tamil}</h2>
  <h2>english mark:{props.user.marks["english"]}</h2>
  <h2>maths mark:{props.user.marks[2]}</h2>
  <h2>maths mark:{props.user.marks[2]}</h2>
  </>
 )
}
export default App
/*
function App(props)
{
 return (
  <>
  <h1>1.simple props - properties</h1>
  <h2>user name:{props.user}</h2>
  </>
 )
}
export default App
/*import "./mystyle.css"
function App()
{ 
  const mystyle={
    backgroundColor:"yellow",
    color:"red",
    fontSize:"22px",
    border:"10px solid green"
  }
  return(
    <>
    <h1 style={{backgroundColor:"green"}}>welcome to inline css</h1>
    <h2 style={mystyle}>this is internal css</h2>
    <h2 style={mystyle}>this is internal css</h2>
    <h2>this is internal css</h2>
    <h3>this is america</h3>
    <h3>this is america</h3>
    <h3>this is america</h3>
    </>
  )
}
export default App
/*
import React from 'react'
import Success from './components/Success'
import Failure from './components/Failure'
import { myimg1, myimg2 } from './components/component'
export const App = (props) => {
  var isValid=true
  return(
    <>
    <div>App</div>
    <h1>{props.data.marks["tamil"]}</h1>
     <h1>{props.data.marks["english"]}</h1>
      <h1>{props.data.marks.maths}</h1>
       <h1>{props.data.marks[0]}</h1>
        <h1>{props.data.marks[1]}</h1>
         <h1>{props.data.marks[2]}</h1>

    <h1>{props.data.sname}</h1>
     <h1>{props.data.rno}</h1>
      <h1>{props.data.mark}</h1>
    <img src={myimg1} width="50%" alt='path not found'></img>
    <img src={myimg2} width="50%" alt='path not found'></img>
    <h1>{isValid===true?<Success/>:<Failure/>}</h1>
    </>
  )
}
export default App
/*
function App()
{
  var m1=99;
  var m2=200;
  return(
    <>
    <h1>biggest number:{m1>m2 ? m1:m2}</h1>
    </>
  )
}
export default App
/*
function App()
{
  var[v1,,v2,...v3]=[11,22,33,44,55,66,77];
  return(
    <>
    <h1>spread operator</h1>
    <h1>value:1{v1}</h1>
    <h1>value:3{v2}</h1>
    <h1>value remaining:{v3}</h1>
    <h1>v3 type:{(Array.isArray(v3) && "array") || "not array"}</h1>
    <ol>{v3.map((item)=><li>{item}</li>)}</ol>
    </>
  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,55,66,77,88,99]
  
  return(
    <>
    <h1>array value:{arr[0]} {arr[1]}</h1>
    <h1>array value:{arr[1]}</h1>
    <h1>array value:{arr[2]}</h1>
    <h1>array value:{arr[3]}</h1>
    <h1>array value:{arr[4]}</h1>
    <h1>array value:{arr[5]}</h1>
    <h1>array value:{arr[6]}</h1>
    <h1>array value:{arr[7]}</h1>
    <h1>array value:{arr[8]}</h1>
    </>
  )
}
export default App

/*
function App()
{
  var arr=[11,22,33,44,55,66]
  var json={
    rno:1001,
    sname:"vignesh"
  }
  return(
<>
{(Array.isArray(arr) && "this is array") || "this is json"}
<br></br>
{(Array.isArray(json) && "this is array") || "this is json"}
</>
  )
}
export default App
/*
function App()
{
var arr=[11,22,33,44,55,66,77,45,-10,35,68]
var s=0,c=0,big=arr[0]
return(
<>
<div style={{display:"none"}}>
  {arr.map(v=><>{s=s+v}{c=c+1}{big<v && <>{big=v}</>}</>)}

</div>
<ol type="I">
{arr.map((item)=><li>{item}</li>)}
</ol>
<ol type="I">
{arr.map((item)=><li>{item%2===0 && item}</li>)} 
</ol>
<ol type="I">
{arr.map((item)=><li>{item%2===1&& item}</li>)} 
</ol>
<ol type="I">
{arr.map((item)=>item>0 && <li>{item}</li>)}
</ol>
<ol type="I">
{arr.map((item)=>item<0&& <li>{item}</li>)}
</ol>



<h1>sum:{s}</h1>
<h1>count:{c}</h1>
<h1>max:{big}</h1>
</>

)
}
export default App
/*
function App()
{
var arr=[11,22,33,44,55,66,77,45,-10,35,68]
var s=0,c=0,big=arr[0]
return(
<>
<div style={{display:"none"}}>
  {arr.map(v=><>{s=s+v}{c=c+1}{big<v && <>{big=v}</>}</>)}

</div>
<ol type="I">
{arr.map((item)=><li>{item}</li>)}
</ol>
<h1>sum:{s}</h1>
<h1>count:{c}</h1>
<h1>max:{big}</h1>
</>

)
}
export default App
/*
function App()
{
  var sobj={
    rno:1001,
    sname:"vignesh",
    marks:{
      tamil:88,
      english:93,
      maths:81,
      science:100,
      social:100
    }
}
const show=({rno,sname,marks:{tamil,english,maths,science,social}})=>
{
  return[rno,sname,tamil,english,maths,science,social]
}
var [v1,v2,v3,v4,v5,v6,v7]=show(sobj)
  return(
    <>
    roll number:{v1}
    <br></br>
    student name:{v2}
    <br></br>
   tamil mark:{v3}
   <br></br>
   english mark:{v4}
   <br></br>
   maths mark:{v5}
   <br></br>
   science mark:{v6}
   <br></br>
   social mark:{v7}
    </>

  )
}
export default App
/*
function App()
{
  var sobj={
    rno:1001,
    sname:"vignesh",
    mark:88
}
const show=({rno,sname,mark})=>
{
  return[rno,sname,mark]
}
var [v1,v2,v3]=show(sobj)
  return(
    <>
    roll number:{v1}
    <br></br>
    student name:{v2}
    <br></br>
    mark:{v3}
    </>

  )
}
export default App
/*
function App()
{
  const disp=(a,b)=>{
    var add=a+b
    var sub=a-b
    var mul=a*b
    var div=a/b
    return[add,sub,mul,div]
  }
  var [v1,v2,v3,v4]=disp(11,22)
  return(
<>
Addition:{v1}
<br></br>
Subraction:{v2}
<br></br>
Multiplication:{v3}
<br></br>
Division:{v4}
</>
  )
}
export default App
/*
function App()
{
  var [v1,v2,v3,v4,v5,v6]=[11,22,33,44,55,66]
  var [a1,a2,a3,...a4]=[11,22,33,44,55,66]
  var [b1,,b2,b3,...b4]=[11,22,33,44,55,66]

  return(
<>
{v1}
{v2}
{v3}
{v4}
{v5}
{v6}
<br></br>
{a1}
{a2}
{a3}
<br></br>
{a4}
<br></br>
{b1}
{b2}
{b3}
{b4}
</>

  )
}
export default App
/*
function App()
{
  if(true)
  {
    var s=100; //global + increment
    s=s+1;
    let l=100; // local + increment
    
    const c=100; // local + not increment
  }
  return(
    <>
    {s}
    </>
  )
}
export default App
/*
function App()
{
  return(
    <h1>hello google</h1>
  )
}
export default App
/*
function App()
{
  const dis=()=>{
    document.getElementById("res1").innerHTML="button clicked"
  }
 const show=(a,b)=>{
    document.getElementById("res").innerHTML="total:"+(a+b)
  }
  return(
<>
<h1>arrow function without parameter</h1>
<button onClick={dis}>click me</button>
<div id="res1"></div>

<h1>arrow function with parameter</h1>
<button onClick={()=>show(11,22)}>click me</button>

<div id="res"></div>
</>
  )
}
export default App
/*
function App()

  {
    var s1={
      rno:17102,
      sname:'vignesh kumar',
      subjects:[88,93,81,100,100]
    }
    var s2={
      rno:17103,
      sname:'suresh kumar',
      subjects:[88,93,81,100,100]
    }
    var s3={
      rno:17104,
      sname:'dinesh',
      subjects:[88,93,81,100,100]
    }
    var allstud=[s1,s2,s3]
  return(
    <>
    <h1>react inside json</h1>
    {allstud.map((item)=><>
    {item.rno}&nbsp;
    {item.sname}&nbsp;
    {item.subjects[0]}&nbsp;
    {item.subjects[1]}&nbsp;
    {item.subjects[2]}&nbsp;
    {item.subjects[3]}&nbsp;
    {item.subjects[4]}&nbsp;
    <br></br>
    </> )}
    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[0].rno}</h1>
    <h1>student name:{allstud[0].sname}</h1>
    <h1>tamil:{allstud[0].subjects[0]}</h1>
    <h1>english:{allstud[0].subjects[1]}</h1>
    <h1>roll maths:{allstud[0].subjects[2]}</h1>
    <h1>roll science:{allstud[0].subjects[3]}</h1>
    <h1>roll social:{allstud[0].subjects[4]}</h1>

    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[1].rno}</h1>
    <h1>student name:{allstud[1].sname}</h1>
    <h1>tamil:{allstud[1].subjects[0]}</h1>
    <h1>english:{allstud[1].subjects[1]}</h1>
    <h1>roll maths:{allstud[1].subjects[2]}</h1>
    <h1>roll science:{allstud[1].subjects[3]}</h1>
    <h1>roll social:{allstud[1].subjects[4]}</h1>

    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[2].rno}</h1>
    <h1>student name:{allstud[2].sname}</h1>
    <h1>tamil:{allstud[2].subjects[0]}</h1>
    <h1>english:{allstud[2].subjects[1]}</h1>
    <h1>roll maths:{allstud[2].subjects[2]}</h1>
    <h1>roll science:{allstud[2].subjects[3]}</h1>
    <h1>roll social:{allstud[2].subjects[4]}</h1>
    </>

  )
}
export default App
/*
function App()
{
  var s1={
    rno:17102,
    sname:'vignesh kumar',
    subjects:[88,93,81,100,100]
  }
  var s2={
    rno:17103,
    sname:'suresh kumar',
    subjects:[88,93,81,100,100]
  }
  var s3={
    rno:17104,
    sname:'dinesh',
    subjects:[88,93,81,100,100]
  }
  var allstud=[s1,s2,s3]
  return(
    <>
    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[0].rno}</h1>
    <h1>student name:{allstud[0].sname}</h1>
    <h1>tamil:{allstud[0].subjects[0]}</h1>
    <h1>english:{allstud[0].subjects[1]}</h1>
    <h1>roll maths:{allstud[0].subjects[2]}</h1>
    <h1>roll science:{allstud[0].subjects[3]}</h1>
    <h1>roll social:{allstud[0].subjects[4]}</h1>

    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[1].rno}</h1>
    <h1>student name:{allstud[1].sname}</h1>
    <h1>tamil:{allstud[1].subjects[0]}</h1>
    <h1>english:{allstud[1].subjects[1]}</h1>
    <h1>roll maths:{allstud[1].subjects[2]}</h1>
    <h1>roll science:{allstud[1].subjects[3]}</h1>
    <h1>roll social:{allstud[1].subjects[4]}</h1>

    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{allstud[2].rno}</h1>
    <h1>student name:{allstud[2].sname}</h1>
    <h1>tamil:{allstud[2].subjects[0]}</h1>
    <h1>english:{allstud[2].subjects[1]}</h1>
    <h1>roll maths:{allstud[2].subjects[2]}</h1>
    <h1>roll science:{allstud[2].subjects[3]}</h1>
    <h1>roll social:{allstud[2].subjects[4]}</h1>
    </>

  )
}
export default App
/*
function App()
{
  var sobj={
    rno:17102,
    sname:'vignesh',
    subjects:[88,93,81,100,100]
  }
  return(
    <>
    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{sobj.rno}</h1>
    <h1>student name:{sobj.sname}</h1>
    <h1>tamil:{sobj.subjects[0]}</h1>
    <h1>english:{sobj.subjects[1]}</h1>
    <h1>roll maths:{sobj.subjects[2]}</h1>
    <h1>roll science:{sobj.subjects[3]}</h1>
    <h1>roll social:{sobj.subjects[4]}</h1>
    </>

  )
}
export default App
/*
function App()
{
  var sobj={
    rno:17102,
    sname:'vignesh',
    subjects:{
    tamil:88,
    english:93,
    maths:81,
    science:100,
    social:100
  }
  }
  return(
    <>
    <h1>react nested json or denormalized json or embed json</h1>
    <h1>roll number:{sobj.rno}</h1>
    <h1>student name:{sobj.sname}</h1>
    <h1>tamil:{sobj.subjects.tamil}</h1>
    <h1>english:{sobj.subjects.english}</h1>
    <h1>roll maths:{sobj.subjects["maths"]}</h1>
    <h1>roll science:{sobj.subjects.science}</h1>
    <h1>roll social:{sobj.subjects.social}</h1>
    </>

  )
}
export default App
/*
function App()
{
  var sobj={
    rno:17102,
    sname:'vignesh',
    tamil:88,
    english:93,
    maths:81,
    science:100,
    social:100
  }
  return(
    <>
    <h1>react json or normalized json</h1>
    <h1>roll number:{sobj.rno}</h1>
    <h1>student name:{sobj.sname}</h1>
    <h1>tamil:{sobj.tamil}</h1>
    <h1>english:{sobj.english}</h1>
    <h1>roll maths:{sobj.maths}</h1>
    <h1>roll science:{sobj.science}</h1>
    <h1>roll social:{sobj.social}</h1>
    </>

  )
}
export default App
/*
function App()
{
  var arr=[11,22,33,44,55,66,77]
  return(
    <>
    <h1>var index 0:{arr[0]}</h1>
    <h1>var index 1:{arr[1]}</h1>
    <h1>var index 2:{arr[2]}</h1>
    <h1>var index 3:{arr[3]}</h1>
    <h1>var index 4:{arr[4]}</h1>
    <h1>var index 5:{arr[5]}</h1>
    <h1>var index 6:{arr[6]}</h1>

    <h1>new advanced arry</h1>
    {arr.map((v)=><><br></br>{v}</>)}
    </>

  )
}
export default App
/*
function Vignesh(props)
{
  var m1=parseInt(props.m1)
  var m2=parseInt(props.m2)
  var m3=parseInt(props.m3)
  var tot=(m1+m2+m3)
  var avg=tot/3
  var res="fail"
  if(m1>34 && m2>34 && m3>34)
    res="pass"
  return(
<>
<h2>total:{tot}</h2>
<h2>percentage:{avg}</h2>
<h1>grade: {(res==="pass" && ((avg>=85 && "outstanding") ||
           (avg>=75 && "excellent") ||
            (avg>=65 && "very good") ||
            (avg>=55 && "good") ||
            "Fair")) ||
            "no grade because fail"

  }</h1>
</>
  )
}
export default Vignesh
/*
function App()
{
  var avg=100
  var res="pass"
  return(
<>
<h1>grade: {(res==="pass" && ((avg>=85 && "outstanding") ||
            (avg>=75 && "excellent") ||
            (avg>=65 && "very good") ||
            (avg>=55 && "good") ||
            "Fair")) ||
            "no grade because fail"

  }</h1>
</>
  )
}
export default App
/*
function App()
{
  var avg=64
  return(
<>
<h1>grade: {(avg>=85 && "outstanding") ||
            (avg>=75 && "excellent") ||
            (avg>=65 && "very good") ||
            (avg>=55 && "good") ||
            "Fair"

  }</h1>
</>
  )
}
export default App
/*
function App()
{
  var mark=100
  return(
   <h1>{(mark>34 && "PASS") || "FAIL"}</h1>
  )
}
export default App
/*
import myimg from "./myimages/vignesh pic.jpg"
function App()
{
  var a="welcome"
  return(
    <>
    <input type="text" value={a}></input>
    <br></br>
    <img src={myimg} alt="path wrong"></img>
    </>
    )
}
export default App
/*
function App()
{
  var a=100
  var b=200
  return(
    <>
    <h1>A value:{a}</h1>
    <h1>B value:{b}</h1>
    <h1>A+B value:{a+b}</h1>
    </>


  )
  
}
export default App
/*
import React from "react";
class Vignesh extends React.Component
{
  render()
  {
    return(
      <>
      <h1>welcome to the component</h1>
      <h2>welcome to class component</h2>
      </>
    )
  }
}
class App extends Vignesh
{

  render()
  {
    return(
      <>
      <Vignesh></Vignesh>
      <h1>welcome to karur</h1>
      <h2>welcome to bangalore</h2>
      </>
    )
  }

}
export default App 
/*
import React from "react";
class App extends React.Component
{
  render()
  {
    return(
      <>
      <h1>welcome to the component</h1>
      <h2>welcome to class component</h2>
      </>
    )
  }
}
export default App
/*function App()
{
  return(
    <div>
    <h1>my name is vignesh kumar</h1>
    <h2>my name is ranjith</h2>
    <input type="text" placeholder="enter user name"></input>
    <br></br>
    <button>clickme</button>
    
    </div>
  )
}
export default App
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
*/
