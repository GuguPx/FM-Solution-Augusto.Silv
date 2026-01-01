const btnAdvice = document.getElementById('btnAdvice');
const url = "https://api.adviceslip.com/advice";
let loading = false;

btnAdvice.addEventListener('click', genAdvice);

async function getAdviceData() {
    const response = await fetch(url);
    const { slip } = await response.json();
    return slip;
}
const screen = {
    id: document.querySelector('#numId'),
    text: document.querySelector('.text-advice'),
    renderAdvice(conselho){
        this.id.innerHTML = conselho.id;
        this.text.innerHTML = conselho.advice;
    }
}

async function genAdvice() {
    if(loading) return;
    btnAdvice.classList.add('loading');
    loading = true;
    try{
    const conselho = await getAdviceData();
    screen.renderAdvice(conselho);
    }catch(erro){
        console.error(erro)
    }finally{
        btnAdvice.classList.remove('loading');
        loading = false;
    }
}
