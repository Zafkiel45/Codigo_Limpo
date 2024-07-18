# Introdução:

Quando estamos criando uma aplicação, é como existirem condicionais. E, naturalmente, existem boas práticas ao utilizar-los. Um erro muito comum é utilizar apenas `if..else` ao 
invés de `switch`, onde também funciona como uma condicional. 

# Passou de 3 condições, considere o switch: 

Para novos estudantes que não viram ainda, `switch` também é uma condicional, entretanto, com uma estrutura diferente de um `if...else` que é mais simples. Switch é muito útil em 
casos onde estamos verificando valores fixos/específicos. 

Então, supondo que temos uma aplicação em `node.js`, onde o usuário pode entrar com algumas `flag` para personalizar a execução do scripts, e existem 3 valores esperados para a 
`flag`: `type`, onde devem ser um dos 3 valores `upperCase`, `lowerCase` ou `Capitalize`. Qualquer valor diferente desses 3 deve retornar um erro ou simplesmente retornar um valor
padrão. 

Agora, abra o arquivo neste mesmo diretório com o nome `exemplo.ts` para ver como ficaria em código e retorne aqui para continuar a leitura da situação.

## Explicando a motivação para o uso do Switch ao invés de if...else neste caso:

Primeiro de tudo, o código fica mais elegante do que usando o `if...else`. Usando o `switch`, o código fica mais semântico, mais legível, ajudando o próximo programador a 
por a mão neste código. 

Segundo: Você está aplicando o conhecimento certo no momento certo. Com o `if...else`, funciona, mas realmente é a opção mais eficiente? É realmente a melhor opção para este 
problema? Bom, ao menos para mim, nesta situação ou semelhantes, um `switch` é mais eficiente, legível e coerente que um `if...else`. 

# Faça algo: 

Estude mais sobre o `switch` e casos onde ele pode ser aplicado. Considere utilizar IA de maneira estratégica para gerar exemplos de comparação. Uma recomendação é a utilização 
do Phind, que se mostra ser uma IA mais eficiente para programadores. 

