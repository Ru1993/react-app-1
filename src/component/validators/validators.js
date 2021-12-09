export const required = (value) =>{
    if(value) return undefined

    return 'Fild is required';
}

export const maxLenghtCreator = (maxLenght) => (value)=>{
    if(value.length > maxLenght) return `Sumbol is ${maxLenght}`

    return undefined;
}

