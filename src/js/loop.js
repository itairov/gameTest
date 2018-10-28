// element.addEventListener('event', () => {});
// element.removeListener('event', () => {});

/* function counter(num) {
    return num;
} */
import { left, step, score, gamer, scoreX, scoreY, table, td, tr } from '../config';
import analyzeGame from './game';

export let nextStep = 'X';

const toHang = td => {
    let counter = 0; 
    for (let tdTag of td) {
        tdTag.addEventListener('click', function nextAction() {
            counter++;
            tdTag.innerText = nextStep;
            if(nextStep === 'X'){
                nextStep = 'O';
            }else{
                nextStep = 'X';
            }
            gamer.innerText = nextStep;
            analyzeGame(counter, td);
            tdTag.removeEventListener('click', nextAction);
        })
    }
}

export default toHang;