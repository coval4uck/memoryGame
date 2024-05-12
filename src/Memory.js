import { useSelector } from 'react-redux'
import './Memory.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import RulesWindow from './components/RulesWindow/RulesWindow'


const Memory = () => {
    const state = useSelector(store => store.memorySlice)
    console.log(state);
    return(

        <div className="Memory">
            <RulesWindow />
            <Header />
            <Main />
        </div>
    )
}

export default Memory