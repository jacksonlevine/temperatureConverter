function FtoC(fvalue) {
  return (fvalue-32)*(5/9);
}

function CtoF(cvalue) {
  return cvalue*(9/5)+32;
}

function askForTemp(userinput) {
  if(userinput === "C") {
      let cval = window.prompt("Enter your C value");
      window.alert(CtoF(cval));
  }
  if(userinput === "F") {
      let fval = window.prompt("Enter your F value");
      window.alert(FtoC(fval));
  }
}
let choice = window.prompt("Enter F or C to choose");
askForTemp(choice);