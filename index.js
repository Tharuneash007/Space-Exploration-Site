function checkInput(){
    if(Name.value === ''|| Name.value === null){
        messages.push('Name is required')
    }

    if(Email.value === ''|| Email.value === null){
        messages.push('Number is required')
    }
}

console.log(Name.value)
console.log(Email.value)
console.log("Applied Successfully")