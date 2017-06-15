function loopyLighthouse(range,mutiples,words){
  for(var x = range[0]; x < range[1] + 1; x++){
    if(x % mutiples[0] === 0 && x % mutiples[1] === 0){
      console.log(words[0] + words[1])
    }else if(x % mutiples[0] === 0){
      console.log(words[0]);
    }else if(x % mutiples[1] === 0){
      console.log(words[1]);
    }else{
      console.log(x);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
