import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test3 = () => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState()
    const [valueId, setValueId] = useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${valueId}`)
        .then(res=>{//응답 성공
            setData(res.data)
            setLoading(false)
            setError('')
        }).catch(error=>{//응답실패
            setData({})
            setLoading(true)
            setError('데이터를 찾을 수 없습니다.')
        })
    },[valueId])//타이핑 할때마다 실행


    return (
        <div>
            <input type='text' value={valueId} onChange={evt=>setValueId(evt.target.value)}/>
            <h4>
            {
               data && loading ? <h2>로딩중</h2>
               :
               <h3>출력: {data.id} / {data.title} </h3>
               
            }
            <p>
                {error}
            </p>
            </h4>
        </div>
    );
};

export default Test3;