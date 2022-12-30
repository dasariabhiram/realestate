import axios from 'axios';


export const baseUrl= 'https://bayut.p.rapidapi.com'
 


export const fetchApi = async(url) =>{
    const { data } =await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': 'c83243f335msh91356f2bae15831p16bf68jsn1cf6a814a416',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    });
    return data;
}

