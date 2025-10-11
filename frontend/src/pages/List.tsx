import type { PagesProps } from "../types/Expense"

export const List = ({setCurrentPage} : PagesProps) => {
    return (
        <>
            <p>List</p>
            <button onClick={() => setCurrentPage("Welcome")}>Back</button>
        </>
    )
}