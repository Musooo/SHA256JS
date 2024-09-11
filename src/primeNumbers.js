const primeNArr = [];

function isPrime(n){
    if (n<=1) return false;
    if (n<=3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function primeNPop(x){
    let num = 2;
    while (primeNArr.length != x){
        if(isPrime(num)){
            primeNArr.push(num);
        }
        num++;
    }

    return primeNArr
}

export default primeNPop;