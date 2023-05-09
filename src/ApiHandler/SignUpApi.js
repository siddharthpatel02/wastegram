import axios from "axios";

const signUp= async(data)=>{
    try {
      const response =await axios.post('http://localhost:8080/signup',data)
      console.log(response)
    } catch (error) {
      console.log(error)
      
    }
   
    
    } 
export default signUp;
