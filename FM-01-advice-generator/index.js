const botao = document.getElementById('btnGerador') 
let carregando = false;

botao.addEventListener('click', novoConselho);

async function buscarConselho() {
    const url = "https://api.adviceslip.com/advice";
    const resposta = await fetch(url);
    return await resposta.json();
}

async function novoConselho() {
    if (carregando) return;

    carregando = true;
    try{
        const dados = await buscarConselho();
        document.getElementById("advice").innerHTML = dados.slip.advice;
        document.getElementById("numberCounter").innerHTML = dados.slip.id;
        console.log(`Gerado novo conselho!${dados.slip.id}`)
    }catch(err){
        console.error(erro);
    }finally{
        carregando = false;
    }
}




