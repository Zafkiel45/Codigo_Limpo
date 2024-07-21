# Usando Extends no TypeScript:

`extends` permite extender uma classe ou interface no `typescript`. Isso é 
muito útil para evitar repetição de propriedades, principalmente quando 
nossa classe precisa apanas de propriedades extras.

## Observação:
`extends` é uma palavra chave também existente no `javaScript`, afinal 
`typeScript` é um superset do `javaScript`. Entretanto, no `javaScript`
não existem `interfaces` que é o que iremos utilizar para tornar o exemplo
mais simples.

Então, caso não saiba o que é um `interface`, pule rapidinho na documentação 
do `typescript` antes e depois volte. 

# Cenário:

Considere o cenário onde temos um `interface` de endereço, com algumas propriedades
gerais como: rua, estado, avenida e etc. E, por algum motivo, surgiu a necessidade
de adicionar uma informação entra, o número da unidade, afinal o cliente pode 
morar num condomínio.

Então, temos um problema... Precisamos do `interface` inicial com as propriedades
gerais, entratando precisamos de um outro `interface`, com as mesmas propriedades, 
mas somente com uma propriedade extra, o `numero`. 

Ao invés de criar um `interface` com as mesmas proriedades do primeiro `interface` 
e adiconar o `numero` como propriedade extra, apenas use o `extends` para "copiar"
as propriedades do primeiro `interface` no segundo e adicione a propriedade extra. 

> veja o arquivo de exemplo 