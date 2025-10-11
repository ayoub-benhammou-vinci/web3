import { useContext } from "react"
import { PageContext } from "../App"

export const List = () => {
    const { setCurrentPage } = useContext(PageContext);
    
    return (
        <>
            <p>List</p>
            <button onClick={() => setCurrentPage("Welcome")}>Back</button>
        </>
    )
}