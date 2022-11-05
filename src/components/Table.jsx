import React, { useState } from 'react'

export default function Table() {
    const [data, setData] = useState([
            "№",
            "Name",
            "1 day",
            "2 day",
            "3 day",
            "4 day",
            "5 day",
            "6 day",
            "7 day",
            "8 day",
            "9 day",
            "10 day",
            "11 day",
            "12 day",
            "13 day",
            "14 day",
            "15 day",
            "16 day",
            "17 day",
            "18 day",
            "19 day",
            "20 day",
            "21 day",
            "22 day",
            "23 day",
            "24 day",
            "25 day",
            "26 day",
            "27 day",
            "28 day",
            "29 day",
            "30 day"
    ])
    const [user,setUser]=useState([
        {name:"Tommy",grades:[1,0,1]},
        {name:"John",grades:[1,1,1]},
        {name:"Mohamed",grades:[1,1,0]},
        {name:"Walker",grades:[1,1,1,]},
        {name:"Tommy",grades:[1,0,1]},
        {name:"John",grades:[1,1,1]},
        {name:"Mohamed",grades:[1,1,0]},
        {name:"Walker",grades:[1,1,1,]},
        {name:"Tommy",grades:[1,0,1]},
        {name:"John",grades:[1,1,1]},
        {name:"Mohamed",grades:[1,1,0]},
        {name:"Walker",grades:[1,1,1,]},
        {name:"Tommy",grades:[1,0,1]},
        {name:"John",grades:[1,1,1]},
        {name:"Mohamed",grades:[1,1,0]},
        {name:"Walker",grades:[1,1,1,]}
    ]);
    return (
        <div className='table-responsive'>
            <table class="table table-bordered border-primary">
                <thead className='table-secondary'>
                    <tr>
                        {data.map((item)=><th>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                {user.map((item,ind)=>
                    <tr>
                        <td>{ind+1}</td>
                        <td>{item.name}</td>
                    {item.grades.map(nums=>
                        <td className={nums==1?"bg-success":"bg-danger"}></td>
                        )}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
