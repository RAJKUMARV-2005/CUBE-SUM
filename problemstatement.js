let m=prompt("Enter the value for m");
let n=prompt("Enter the value for n");
let cube_sum=0;
if(m>n){
    alert("M is greater than N");
}
else{
    for(let i=m;i<=n;i++){
        cube_sum+=(i*i*i);
    }
    alert("The sum value is"+cube_sum);
}
