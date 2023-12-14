const categorias = [
    {
        "idCategoria": 1,
        "Descrição": "Gestão",
    },
    {
        "idCategoria": 2,
        "Descrição": "Cliente",
    },  
    {
        "idCategoria": 3,
        "Descrição": "RP",
    },
]

const motivos=[
    {
        "idMotivo": 1,
        "Descrição": "Planejamento",
        "idCategoria" : 1
    },
    {
        "idMotivo": 2,
        "Descrição": "Financeiro",
        "idCategoria" : 1
    },
    {
        "idMotivo": 3,
        "Descrição": "Quebra da Máquina",
        "idCategoria" : 2
    },
]

const produtos = [
    {
        "idProduto": 1,
        "Descricao": "Computador",
        "Estoque": 10,
        "EstoqueMinimo": 5
    },
    {
        "idProduto": 2,
        "Descricao": "Mouse",
        "Estoque": 5,
        "EstoqueMinimo": 5
    },

    {
        "idProduto": 3,
        "Descricao": "Notebook",
        "Estoque": 15,
        "EstoqueMinimo": 5
    },


]

const departamentos = [
    {
        "idDep": 10,
        "Descricao": "Sec. Educacao",
        "Responsavel": "Jose",
        "idFunc": 1,
        "cargo" : "Gerente"
    },
    {
        "idDep": 30,
        "Descricao": "Sec. do Trabalho",
        "Responsavel": "Luiz",
        "idFunc": 2,
        "cargo" : "Funcionario"
    },
    {
        "idDep": 40,
        "Descricao": "NAT",
        "Responsavel": "Maria",
        "idFunc": 3,
        "cargo" : "Gestor"
    },
]