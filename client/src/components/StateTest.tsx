import { useState } from "react"

let nextId = 3

const StateTest = () => {
    const [count, setCount] = useState(0)
    const [arr, setArr] = useState([1, 2, 3])

    const onClick = () => {
        setCount(c => c + 1)
        setCount(c => c + 1)
        setCount(c => c + 1)
    }

    const onArrClick = () => {
        setArr([...arr, ++nextId])
    }

    const [form, setForm] = useState({
        firstName: 'Kevin',
        lastName: 'Estre'
    })

    return (
        <>
            <button onClick={onClick}>{count}</button>
            <ul onClick={onArrClick}>
                {arr.map(el => (
                    <li key={el}>{el}</li>
                ))}
            </ul>
            <form>
                <label>
                    Name:
                    <input value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} />
                </label>
                <label>
                    Surname:
                    <input value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} />
                </label>
            </form>
            <p>{form.firstName} {form.lastName}</p>
        </>
    )
}

export default StateTest