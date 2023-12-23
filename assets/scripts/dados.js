const categorias = [
  {
      idCategoria: 1,
      Descricao: "Gestão",
  },
  {
      idCategoria: 2,
      Descricao: "Cliente",
  },
  {
      idCategoria: 3,
      Descricao: "RP",
  },
]

const motivos = [
  {
      idMotivo: 1,
      Descricao: "Planejamento",
      idCategoria: 1
  },
  {
      idMotivo: 2,
      Descricao: "Financeiro",
      idCategoria: 1
  },
  {
      idMotivo: 3,
      Descricao: "Quebra de Máquina",
      idCategoria: 2
  },
  {
      idMotivo: 4,
      Descricao: "Funções",
      idCategoria: 3
  },
]

const produtos = [
  {
      idProduto: 1,
      Descricao: "Vassoura",
      Estoque: 20,
      EstoqueMinimo: 5,
      Unidade: "Un",
      Preco: 10.00,

  },
  {
      idProduto: 2,
      Descricao: "Fiação",
      Estoque: 21,
      EstoqueMinimo: 20,
      Unidade: "Un",
      Preco: 16.00,
  },
  {
      idProduto: 3,
      Descricao: "Ventilador",
      Estoque: 1,
      EstoqueMinimo: 5,
      Unidade: "Un",
      Preco: 10.00,
    },
  
]

const departamentos = [
  {
      idDep: 10,
      Descricao: "Sec. Educacao",
      Responsavel: "José",
      idFunc: 1,
      idCargo: "Comissionado"
  },
  {
      idDep: 30,
      Descricao: "Sec. Trabalho",
      Responsavel: "Luiz",
      idFunc: 2,
      idCargo: "Gestor"
  },
  {
      idDep: 40,
      Descricao: "NAT",
      Responsavel: "Maria",
      idFunc: 3,
      idCargo: "Gerente"
  },
  
]