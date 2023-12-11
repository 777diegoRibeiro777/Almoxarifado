// document.getElementById('departamento').addEventListener('focus', function(){
//     const inputDepartamento = document.getElementById('departamento');
//     inputDepartamento.style.backgroundColor="green"   
// });

document.getElementById('departamento').addEventListener('blur', function(){
    const inputDepartamento = document.getElementById('departamento');
    inputDepartamento.style.backgroundColor="white"   
});

function adicionarCorAoFocarInput () {
    const listInput = document.querySelectorAll("input")

    // console.log(listInput.length);
    // console.log(listInput);

    // listInput[1].style.backgroundColor="green" 
    // listInput[].style.backgroundColor="green" 

    // for (let i = 0; i <  listInput.length; i++) {
    //     listInput[i].style.backgroundColor="green"
    // }

    // listInput.forEach(function(campo){
    //     campo.style.backgroundColor="green"
    // })

    listInput.forEach(function(item){
        item.addEventListener('focus', function(){
            item.style.backgroundColor='green'
        })
    })

    listInput.forEach(function(item){
        item.addEventListener('blur', function(){
            item.style.outlineColor='white'
        })
    })
}

function carregarCategorias() {
    const selectCategoria = document.getElementById('categoriaMotivo');
    selectCategoria.innerHTML="";
    
    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectCategoria.add(optFirst);


    categorias.forEach(function(categoria){
        const opt = document.createElement('option');
        opt.value=categoria.idCategoria;
        opt.text=categoria.Descrição;
        selectCategoria.add(opt); 
    });   
}

function carregarMotivos() {
    const selectMotivo = document.getElementById('Motivo');
    selectMotivo.innerHTML="";

    const optFirst = document.createElement('option');
    optFirst.value=-1;
    optFirst.text="";
    selectMotivo.add(optFirst);

    const valorCategoria = document.getElementById('categoriaMotivo').value;
    const motivosFiltrados = motivos.filter((m) => m.idCategoria == valorCategoria)
    
    motivosFiltrados.forEach(function(motivo){
        var opt = document.createElement('option');
        opt.value=motivo.idMotivo;
        opt.text=motivo.Descrição;
        selectMotivo.add(opt); 
    });
}

document.getElementById('categoriaMotivo').addEventListener('change', function() {
    carregarMotivos();
})

document.getElementById('CodigoProduto').addEventListener("keyup", function() {
    const codigoPesquisado = document.getElementById('CodigoProduto').value;
    let produtosFiltrados = produtos.filter((p) => p.idProduto == codigoPesquisado);

    if (produtosFiltrados.length>0) {
        document.getElementById('DescricaoProduto').value=produtosFiltrados[0].Descricao;
    } else {
        document.getElementById('DescricaoProduto').value="";
    }
})

adicionarCorAoFocarInput();
carregarCategorias();
carregarMotivos();