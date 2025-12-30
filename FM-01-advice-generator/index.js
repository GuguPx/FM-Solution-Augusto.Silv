import { getAdviceData } from './Src/script/services/advice.js';
import { screen } from './Src/script/objects/screen.js';

const btnAdvice = document.getElementById('btnAdvice');
let loading = false;
btnAdvice.addEventListener('click', genAdvice);

alert('We are having a problem with our server, so the request is a bit slow. Thanks for your understanding.')
async function genAdvice() {
    if(loading) return;

    loading = true;
    try{
    const conselho = await getAdviceData();
    console.log(conselho);
    screen.renderAdvice(conselho);
    }catch(erro){
        console.error(erro)
    }finally{
        loading = false;
    }
}

genAdvice()