import path from "path";

import fs from 'fs'

const filePath = path.join(process.cwd(),'./src/data/user.json')


export const readData = () =>{
    // Read file and return js data
    const data = fs.readFileSync(filePath,'utf-8')
 
    return JSON.parse(data)
}


export const writeData = (user:any) =>{
    fs.writeFileSync(filePath,JSON.stringify(user,null,2))
}