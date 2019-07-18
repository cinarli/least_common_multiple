function lcm(a,b){
    let vur=1;
    for(let i=2;i<=a;i++){
        while(a%i===0 && b%i===0){
            vur*=i
            a/=i
            b/=i
        }
    }
    return a*b*vur;
}