// colocamos o I no nome da nossa interface para indicar que é uma interface
export interface IUserEntities {
  id: string;
  name: string;
  email: string;
  password: string;
  cpf: string; // cpf só pode ser string / existe CPF que tem o 0 na frente e o banco desconsidera esse cara!
  role: string;
}

// isAdmin é para bolean

// role/ controle de acesso do usuário e podemos salvar somo string, etc


// ===== começamos pelas entities e depois vamos para o service