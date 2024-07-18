#!/usr/bin/env node

function InputFlag(flag: string[]):void {
  switch(flag[3]) {
    case 'upperCase':
        callSomeFunctionUpperCase();
    break;
    case 'lowerCase':
      callSomeFunctionLowerCase();
    break;
    case 'capitalize':
      callSomeFunctionCapitalizeCase();
    break; 
    default: 
      console.error('ocorreu um erro: MENSAGEM DE ERRO');
      process.exit(1);
  }
}

InputFlag(process.argv);

// Se fosse com if...else:

#!/usr/bin/env node

function InputFlag(flag: string[]): void {
  if(flag[3] === 'upperCase') {
    callSomeFunctionUpperCase();
  } else if (flag[3] === 'lowerCase') {
    callSomeFunctionLowerCase();
  } else if (flag[3] === 'capitalize') {
    callSomeFunctionCapitalizeCase();
  } else {
      console.error('ocorreu um erro: MENSAGEM DE ERRO');
      process.exit(1);
  }
};

InputFlag(process.argv);
