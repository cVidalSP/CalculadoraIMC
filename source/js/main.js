const categorias = 
[
    {
        nome : 'Abaixo do Peso',
        cor: '#fe0000'
    },
    {
        nome : 'Peso Normal',
        cor: '#00fe26'
    },
    {
        nome : 'Sobrepeso',
        cor: '#fef100'
    },
    {
        nome : 'Obesidade Grau I',
        cor: '#fe9800'
    },
    {
        nome : 'Obesidade Grau II',
        cor: '#fe5d00'
    },
    {
        nome : 'Obesidade Grau III',
        cor: '#fe0000'
    },
]

function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (!isNaN(altura) && !isNaN(peso)) {
        let imc = peso / ((altura / 100) ** 2);
        let categoria = definirCategoria(imc);
        document.getElementById("containerResultado").style.visibility = 'visible';

        document.getElementById("resultado").style.color = categoria.cor;

        document.getElementById("resultado").textContent = `${imc.toFixed(2)} ${categoria.nome}`;
    } else {
        alert("Por favor, insira valores válidos para altura e peso.");
    }
}

function definirCategoria(imc){
    switch (true) {
        case imc < 18.5:
            return categorias[0];
            
        case imc > 18.5 && imc < 24.9:
            return  categorias[1];
            
        case imc > 25 && imc < 29.9:
            return categorias[2];
            
        case imc > 30 && imc < 34.9:
            return  categorias[3];
            
        case imc > 35 && imc < 39.9:
            return categorias[4];
            
        case imc > 40.0:
            return categorias[5];

        default:
            break;
    }
}