
let user = []
for (let i = 0; i < Infinity; i++){
    let names = prompt('введите команду')
    let command = names.split(', ') 
    if(command[0] == 'add'){
        user.push(command[1])
    }else if(command[0] == 'del'){
        for (let key in user) {
           user[key] == command[1] ? user.splice(key,1)   : ''
        }
    }else if(command[0] == 'stop'){
        break
    }
    console.log(user);
}


