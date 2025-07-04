import type { VoteType } from '../../types/votes';
import css from './VoteOptions.module.css'

interface VoteOptionsProps {
    onReset: () => void;
    canReset: boolean;
    onVote: (type: VoteType) => void;
}



export default function VoteOptions({onReset, canReset, onVote} :VoteOptionsProps){
    return(
        <div className={css.container}>
        <button className={css.button} onClick = {()=> onVote('good')}>Good</button>
        <button className={css.button} onClick = {()=> onVote('neutral')}>Neutral</button>
        <button className={css.button} onClick = {()=> onVote('bad')}>Bad</button>
        {canReset && (<button className={`${css.button} ${css.reset}`} onClick={onReset}>Reset</button>)}
        </div>
    )
}