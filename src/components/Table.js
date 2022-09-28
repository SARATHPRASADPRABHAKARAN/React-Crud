import React, { useEffect, useState } from "react";
import "./Table.css"
import axios from "axios";
function Table(){


  useEffect(()=>{
    console.log('subru')
getData();
  },[])

const [  data,setUserData]=useState("")

function getData(){

  axios.get('http://localhost:9000/alldata')
   .then((response)=>{
     console.log(response.data)
     setUserData(response.data)
   })
 }

   return (
    <div>

<div class="wrapper">
  <div class="title">
    CSS Table
    <div class="line"></div>
  </div>
  <div class="container">
    <div class="table">
      <table cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <td colspan="2"><font class="header">CSS Table</font> </td>
            
          </tr>
          <tr>
            <td>Email</td>
            <td>Name</td>
            <td>Website</td>
            <td>Nro</td>
          </tr>
        </thead>
        <tbody>
          {data?.length>0&&data.map((user)=>{
            return(<>
            <tr>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>{user.Phone}</td>
            <td>1</td>
          </tr>
            
            </>)
          })}
          
          
        </tbody>
        <tfoot>
          <tr>
            <td colspan="100%">
              <div class="pagination">
                <div class="page active">1</div>
                <div class="page">2</div>
                <div class="page">3</div>
                <div class="page">4</div>
                <div class="page">5</div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</div>


    </div>

)
}



export default Table ;
