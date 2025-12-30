const screen = {
    title: document.querySelector('.title-advice'),
    text: document.querySelector('.text-advice'),
    renderAdvice(conselho){
        this.title.innerHTML = `ADVICE #${conselho.id}`;
        this.text.innerHTML = conselho.advice;
    }
}
export {screen}