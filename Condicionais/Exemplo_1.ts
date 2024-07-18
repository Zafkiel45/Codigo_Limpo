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
