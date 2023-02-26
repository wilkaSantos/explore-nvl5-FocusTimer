
export const Error = {
    mensage: document.querySelector('.containerError'),
    open(){
        this.mensage.classList.remove('disable');
    },
    close(){
        this.mensage.classList.add('disable');
    }
}