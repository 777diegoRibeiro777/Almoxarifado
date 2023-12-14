// document.getElementById('departamento').addEventListener('focus',function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="#90ee90"
// });

// document.getElementById('departamento').addEventListener('blur',function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="white"
// });

function adicionarCorAoFocarInput() {
    // const listinput = document.querySelectorAll("input[type=text]");
    const listinput = document.querySelectorAll("input");

    // console.log(listinput.length);
    // console.log(listinput);

    // for (let i = 0; i < listinput.length; i++) {
    //     listinput[i].style.backgroundColor="#90ee90"
    //   } // colocar cor em todos os .text

    // listinput[0].style.backgroundColor="#90ee90"
    // listinput[1].style.backgroundColor="#90ee90"

    listinput.forEach(function(campo){
        campo.addEventListener('focus',function(){
        campo.style.outlineColor ="#90ee90";

        })

        campo.addEventListener('blur',function(){
            campo.style.outlineColor = "white";
    
        })
        
    });


}
function carregarCategorias(){
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectCategoria.add(optFirst);

    categorias.forEach(function(categoria){
        var opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descrição;

        selectCategoria.add(opt);

    }) 
}

function carregarMotivos(){
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value = -1;
    optFirst.text = "";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    console.log("Categoria selecionada: "+ valorCategoria)
    const motivosFiltrados = motivos.filter((m)=> m.idCategoria==valorCategoria)

    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descrição;
        selectMotivo.add(opt);

    }) 
}

document.getElementById('categoriaMotivo').addEventListener('change',function(){
    carregarMotivos();
});



document.getElementById('CodigoProduto').addEventListener("keyup",function(){
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p)=> p.idProduto==codigoPesquisado);

    if(produtosFiltrados.length > 0){
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
    } else{
        document.getElementById('DescricaoProduto').value="";
    }
    if(produtosFiltrados.length > 0){
        document.getElementById('Estoque').value=produtosFiltrados[0].Estoque;
    } else{
        document.getElementById('Estoque').value="";
    }

});

document.getElementById('idDepartamento').addEventListener("keyup",function() {
    const codigoPesquisado = document.getElementById('idDepartamento').value;
    let departamentosFiltrados = departamentos.filter((p)=> p.idDep==codigoPesquisado);

    if(departamentosFiltrados.length > 0){
        document.getElementById('departamento').value=departamentosFiltrados[0].Descricao;
    } else{
        document.getElementById('departamento').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('NomeFuncionario').value=departamentosFiltrados[0].Responsavel;
    } else{
        document.getElementById('NomeFuncionario').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('idFuncionario').value=departamentosFiltrados[0].idFunc;
    } else{
        document.getElementById('idFuncionario').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('cargo').value=departamentosFiltrados[0].cargo;
    } else{
        document.getElementById('cargo').value="";
    }
    
});

document.getElementById('idFuncionario').addEventListener("keyup",function() {
    const codigoPesquisado = document.getElementById('idFuncionario').value;
    let departamentosFiltrados = departamentos.filter((p)=> p.idFunc==codigoPesquisado);

    if(departamentosFiltrados.length > 0){
        document.getElementById('departamento').value=departamentosFiltrados[0].Descricao;
    } else{
        document.getElementById('departamento').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('NomeFuncionario').value=departamentosFiltrados[0].Responsavel;
    } else{
        document.getElementById('NomeFuncionario').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('idDepartamento').value=departamentosFiltrados[0].idDep;
    } else{
        document.getElementById('idDepartamento').value="";
    }
    if(departamentosFiltrados.length > 0){
        document.getElementById('cargo').value=departamentosFiltrados[0].cargo;
    } else{
        document.getElementById('cargo').value="";
    }
    
});







document.getElementById('btn-gravar').addEventListener('click',function(){
    const elementosObrigatorios = document.querySelectorAll('[data-obrigatorio="true"]');
    console.log(elementosObrigatorios);
    
    elementosObrigatorios.forEach(function(item){
        
        if (item.value=="" || item.value==-1){
            item.style.backgroundColor='red';
        } 
    })
    const chkUrgenteValue = document.getElementById('urgente').checked;
    const chkMedioValue = document.getElementById('medio').checked;
    const chkBaixoValue = document.getElementById('baixo').checked;
    if (chkUrgenteValue==false && chkMedioValue==false && chkBaixoValue==false){
        const divPrioridade = document.getElementById("radioPrioridade");        
        divPrioridade.classList.remove('radioPrioridade');
        divPrioridade.classList.add('radioPrioridadeDesabilitado');        
        document.getElementById('urgente').classList.remove('chkPrioridade');
        document.getElementById('urgente').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('medio').classList.remove('chkPrioridade');
        document.getElementById('medio').classList.add('chkPrioridadeDesabilitado');
        document.getElementById('baixo').classList.remove('chkPrioridade');
        document.getElementById('baixo').classList.add('chkPrioridadeDesabilitado');
    }
});

function eventoClickPrioridadeHabilitarCor(){
    const checkboxesPrioridade = document.querySelectorAll('.chkPrioridade');    
    console.log(checkboxesPrioridade);
    checkboxesPrioridade.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {    
            const divPrioridade = document.getElementById("radioPrioridade");
            divPrioridade.classList.add('radioPrioridade');
            divPrioridade.classList.remove('radioPrioridadeDesabilitado');        
            document.getElementById('urgente').classList.add('chkPrioridade');
            document.getElementById('urgente').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('medio').classList.add('chkPrioridade');
            document.getElementById('medio').classList.remove('chkPrioridadeDesabilitado');
            document.getElementById('baixo').classList.add('chkPrioridade');
            document.getElementById('baixo').classList.remove('chkPrioridadeDesabilitado');
        });
    });
}



adicionarCorAoFocarInput(); // Inicia a função ao carregar a página 
carregarCategorias();
carregarMotivos();