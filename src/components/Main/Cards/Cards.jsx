
import { useSelector } from 'react-redux'
import Card from './Card/Card'
import './Cards.css'
import { useSetCard } from '../../../hooks/useSetCard'

const Cards = () => {
    const state = useSelector(store => store.memorySlice)
    useSetCard()
    return(
        <div className="Cards">
            {state.cardArray.map(item => <Card  key={item.id} {...item}/>)}
        </div>
    )
}

export default Cards