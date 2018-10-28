import { left, step, score, gamer, scoreX, scoreY, table, td, tr } from '../config';
import winnerPosition from '../config/logic';

const analyzeGame = (counter, tdList) => {
    if(counter >= 5){
        for(let winIndexFirst of winnerPosition) {
            for(let winIndexSecond of winIndexFirst) {
                if(tdList[winIndexSecond[0]].innerHTML === tdList[winIndexSecond[1]].innerHTML && tdList[winIndexSecond[1]].innerHTML === tdList[winIndexSecond[2]].innerHTML){
                    if(tdList[winIndexSecond[0]].innerHTML !== '' || tdList[winIndexSecond[1]].innerHTML !== '' || tdList[winIndexSecond[2]].innerHTML !== '') {
                        console.log('You win!');
                    }
                } 
            }
        }
    }
};

export default analyzeGame;