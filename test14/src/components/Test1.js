import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test1 = () => {

    const [data,setData] = useState()

    // useEffect(()=>{
            //1.
    //     // fetch('https://jsonplaceholder.typicode.com/todos')
    //     // .then(res => res.json())
    //     // .then(res =>{ console.log(res)
    //     //     setData(res)})

            //2.
    //     axios.get('https://jsonplaceholder.typicode.com/todos')
    //     .then(res =>{ console.log(res)
    //         setData(res.data)})    
    // },[])

    //3.async/await 사용
    // useEffect(()=>{
    //     const getData = async() => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    //         const data = await res.json()
    //         setData(data)
    //     }

    //     getData()
    // },[])

    //4. async/await + axios 사용
    useEffect(()=>{
        const getData = async()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setData(res.data)
        }
        getData()
    },[])

    return (
        <div>
            {
                data && data.map(item => <p key={item.id}>
                    {item.id} / {item.title} / {item.completed}
                </p>)
            }
        </div>
    );
};

export default Test1;

/*
서버로부터 네트워크 요청을 하고 응답을 받을 수 있게 함
[Ajax요청 방법]

1.fetch 사용(javascript에서 지원)
fetch(url,[option])

fetch(url).then(응답=>응답.json)

2.axios를 사용
axios.get(url).then(응답=>응답.data)

3.async/await 사용
비동기를 동기처럼 사용

js -> import aaa from ; './경로/파일명'

export default [
    {id:1,name:'배수지',age:27,addr:'서울'}
]

json파일 -> import aaa from './경로/파일명.json'



*/