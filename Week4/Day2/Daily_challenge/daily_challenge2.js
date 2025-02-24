// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

for (let i = 1; i <= 6; i++) {
    let output=""
    for (let j = 1; j <= i; j++) {
        output+= "*"
    }
    console.log(output)
}
// second way to do it 
for (let i = 1; i <= 6; i++) {
    console.log('*'.repeat(i))
}