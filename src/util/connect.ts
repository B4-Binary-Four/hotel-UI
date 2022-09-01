import axios, {AxiosResponse} from "axios";

export const connect:(username:string,password:string)=>(Promise<AxiosResponse<any, any>>)=(username:string,password:string)=>{
    return axios.get(`http://localhost:8080/ping`,{
    headers: {
        authorization: `Basic ${window.btoa(username+':'+password)}`,
    },
},);
};
export const save:(token:string)=>void=(token:string)=>{
    window.localStorage.setItem("token",token)
}
export const headers =(token:string)=> ({
    authorization: `Basic ${token}`
})
