import '../styles/style.sass';
import { left, step, score, gamer, scoreX, scoreY, table, td, tr } from '../config';

import toHang, { nextStep }  from './loop';

gamer.innerText = nextStep;
toHang(td);
