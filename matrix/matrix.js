
function matrix(M,N) {
    console.log(M);
    console.log(N);
    let a1=[];
    console.log("Matrix:");
    for(var i=0; i<M;i++){
        let a2=[];
        for (var j=0; j<N;j++){
            a2[j]=Math.floor(Math.random()*(10))+1;
        }
        a1[i]=a2;
        console.log(a1[i].toString());
    }
    return a1;
}
function summ(a1) {
    var summ=0;
    for(var i=1; i<a1.length;i++) {
        for (var j = 0; j<=i-1; j++) {
            summ=summ+a1[i][j];
        }
    }
    return summ;
}
console.log("Summ of matrix's numbers low central diagonal: "+ summ(matrix(5,5)));

