import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function DeleteVideoGame({rows, addData}) {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        addData(rows.filter( row => row.id != params.id))
        
        navigate('/')
    }, [])
    
    return(<></>)
}

export default DeleteVideoGame