// Se fosse com if...else:

// Este é um exemplo adaptado do Node.js, portanto, se houver dúvidas
// incoerência, abra uma issue ou faça uma pull request com um exemplo
// novo. 

function InputUser(flag: string[]): void {
  if(flag[3] === 'upperCase') {
    callSomeFunctionUpperCase();
  } else if (flag[3] === 'lowerCase') {
    callSomeFunctionLowerCase();
  } else if (flag[3] === 'capitalize') {
    callSomeFunctionCapitalizeCase();
  } else {
      console.error('ocorreu um erro: MENSAGEM DE ERRO');
  }
};

InputFlag(input.value); // entrada do usuário em um input no HTML