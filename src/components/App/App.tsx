
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import { useState } from 'react'
import type { Votes, VoteType} from '../../types/votes'
import VoteStats from '../VoteStats/VoteStats'
import Notification from '../Notification/Notification'

export default function App() {
  
  const [votes, setVotes] = useState<Votes>({good: 0, neutral: 0, bad: 0});

  const handleVote = (type: VoteType) => {
    const newVotes = {...votes};
    newVotes[type] += 1;
    setVotes(newVotes);
  
  }

  const resetVotes = () => {
    setVotes({good: 0, neutral: 0, bad: 0})
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0    

  const canReset = votes.good > 0 || votes.neutral > 0 || votes.bad > 0;



  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={canReset}/>
        {totalVotes > 0 ? (<VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/>) : <Notification/>}
      </div>
    </>
  )
}

