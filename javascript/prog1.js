//Christmas Greetings
const readline= require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

readline.question('Enter your input:',(a)=>{
    const ans=Number(a);
  if(ans!=25){
    console.log("Ordinary");
}else{
    console.log("Christmas");
}  
readline.close();
});
