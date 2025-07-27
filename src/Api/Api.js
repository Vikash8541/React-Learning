// Add Api 

// We can change the limit from according to my way. We can write like this variable declaration or directly add the limit value

const desiredLimit = 208;
const API_URL = `https://dummyjson.com/users?limit=${desiredLimit}`;

// Here we declared all the value
// const API_URL = `https://dummyjson.com/users?limit=208`;

export const userData  = async () => {
    try{
      const response = await fetch(API_URL,{
      method:"GET",
      headers:{

        // Authorization is a token key , it is generated from OAuth , JWT token etc.
        // Bearer is a keyword that means you're using a bearer token.
        // token123 is a placeholder for your actual access token (usually a long random string).
        // Ex - 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',

        'Accept': 'application/json',
        'Authorization': 'Bearer token123'
      },  
    })

    if(!response.ok){
        console.log("Error",response)
      }
      
      const data =  await response.json();
      return data;
    }

    catch(error){
        console.log("Error : ",error);
    }
}



// NEWS API

export const blogData = async () => {
  try{
    const response = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-06-27&sortBy=publishedAt&apiKey=7c1be7bffb59477b934f4d0d47703425",{
      method:"GET",
      headers:{
        'Accept': 'application/json',
        'Authorization': 'Bearer token123'
      }
    })

    if(!response.ok){
      console.log("Api is not fetching",response);
    }

    const data = await response.json();
    return data;

  }
  catch(error){
    console.log("Error",error);
  }
}
