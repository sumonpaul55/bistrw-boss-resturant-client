import { useEffect, useState } from "react"

const useMenu = () => {
    const [manu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:5000/menu")
            .then(res => res.json())
            .then(data => {
                setMenu(data)
                setLoading(false)
            }
            )
    }, [])
    return [manu, loading]
}
export default useMenu