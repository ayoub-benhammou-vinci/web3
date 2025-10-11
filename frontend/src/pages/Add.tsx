import { useContext } from "react"
import { PageContext } from "../App"

export const Add = () => {
    const { setCurrentPage } = useContext(PageContext);
    return (
        <>
            <p>Add</p>
            <button onClick={() => setCurrentPage("Welcome")}>Back</button>
        </>
    )
}