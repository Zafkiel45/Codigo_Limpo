interface Endereço {
    nome?: string;
    rua: string;
    avenida: string;
    estado: string;
};

// Acima temos um interface pare endereços com informações gerais 
// Abaixo, supondo que surgiu a necessidade de um número para uma melhor 
// identificação do local, adicionamos uma propriedade extra, sem alterar
// a original... Está é a meneira errada de se fazer isso! 
interface Endereço {
    nome?: string;
    rua: string;
    avenida: string;
    estado: string;
    numero: number;
};
// ACIMA ESTA ESTREITAMENTE ERRADO! 

// FORMA CORRETA:

// Usando o extends para copiar as propriedades anteriores e adicionar uma nova

interface EndereçoComNumero extends Endereço{
    numero: number;
};

// consulte a explicação para mais detalhes.
