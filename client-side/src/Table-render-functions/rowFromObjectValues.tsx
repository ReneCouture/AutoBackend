import React from "react"

/*
    returns all the object values as a row in a table
*/
export function rowFromObjectValues(obj:any)
{
    if(!obj) return(<></>)

    let jsx=(<></>)

    for(let property in obj)
    {
        if(typeof(obj[property])=='number'
        || typeof(obj[property])=='string')
        {
            //console.log(`getDisplayTextRow() property=${property}`)
            jsx=(<>{jsx}<td>{obj[property]}</td></>)
        }
        else
        {
            jsx=(<>{jsx}<td>BAD</td></>)
        }
    }

    return (<tr>{jsx}</tr>)
}