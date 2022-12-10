export interface AccountResponse {
  Tipo: string;
  Retorno: Retorno[];
  Sucesso: boolean;
  Mensagem: string;
  TempoExecucao: string[];
}

export interface Retorno {
  Nome: string;
  SobreNome: string;
  CPF: string;
  DataNascimento: string;
  Sexo: string;
  EstadoCivil: string;
  Email: string;
  Telefone: string;
  Celular: string;
  CEP: string;
  Endereco: string;
  Numero: string;
  Complemento: string;
  Bairro: string;
  Cidade: string;
  Estado: string;
}
