import type { PagesProps } from "../types/Expense"

export const Add = ({ setCurrentPage} : PagesProps) => {
    return (
        <>
            <p>Add</p>
            <button onClick={() => setCurrentPage("Welcome")}>Back</button>
        </>
    )
}