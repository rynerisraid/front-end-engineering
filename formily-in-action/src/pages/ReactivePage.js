import React from 'react'
import {observable, observer} from "@/which";


const obj = observable({ count: 1 })


const ReactivePage = observer(()=>{
    return (
        <div>
            <h3>ReactivePage</h3>

            <button onClick={() => {
                obj.count++
                console.log('onclick')
            }}>{obj.count}</button>
        </div>

    )
})

export default ReactivePage