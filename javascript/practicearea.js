//input from the user
const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question('how was your day',(user)=>{
    const a=user;
    console.log(user);
})