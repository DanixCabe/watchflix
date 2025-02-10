import { useState } from "react"

export const useCounterPage = () => {
    const [countPage, setCountPage] = useState(2)

    const addCounter = (value) => {
        setCountPage((current) => current + value)
    }

    return {
        addCounter,
        countPage,
    }
}