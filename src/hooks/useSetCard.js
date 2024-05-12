import { useDispatch } from "react-redux";
import { setCard } from "../redux-toolkit/slices/memorySlice";
import { useEffect } from "react";


export const useSetCard = () =>{
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(setCard())
    },[dispatch])
}