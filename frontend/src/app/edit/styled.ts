'use client'
import styled from "styled-components";


export const EditContainer = styled.main`
display: flex;
align-items: center;
`
export const EditContents = styled.div`
min-height: 65vh;
max-width: 1200px;
width: 100%;
margin: 0 auto;
align-items: center;
justify-content: center;
display: flex;

form { 
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 90%;
}

input {
  min-width:300px;
  max-width: 600px;
  width:100%;
  height:35px;
  padding: 0 6px 0 8px;
  background:#f2f2f2;
  color:gray;
  border-radius:8px;
  font-size:15px;
  border:none;
}

.assine{
  background-color: rgba(0, 0, 0, 0.5); 
  color:white;
  border-radius:8px;
  border:none;
  padding:12px;
  font-weight:bold;
}
.assine:hover{
  background-color: rgba(0, 0, 0, 0.8); 
}
button{
  cursor: pointer;
}
`