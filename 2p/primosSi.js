function init(){
    for (n=2;n<100;n++){
     s=Math.sqrt(n);
     noFactorSoFar = true;
      for (f=2;f<=s;f++){
       r = n % f;
       if (r==0){
          noFactorSoFar = false;
          break;
       }
      }
      if (noFactorSoFar){
        document.write(n)
        document.write("<br/>")
        console.log(n);
      }
    }
  document.write('primes from 2 to 100...')
  console.log('primes from 2 to 100...')
  }
  
  init();