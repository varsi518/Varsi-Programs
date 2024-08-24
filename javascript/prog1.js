const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("Enter your numbers : ",(words)=>{
    const num=words.trim();
    let counter=0;
    let num2=num.split(/\s+/);
    num2.forEach(element => {
        let num3=parseInt(element);
        if(element>=10){
            counter++;
        }
    });
    console.log(counter);
    readline.close();
})