#!/usr/bin/env node

// Se fosse com if...else:

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