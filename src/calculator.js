import { useMemo, useState } from "react"

function Calculator() {

    const [dimensions, setDimensions] = useState({height: 0, weight: 0})
    const calculation = () => {
        return (447.593 + (9.247 * dimensions.weight) + (3.098 * dimensions.height))
    }
    const result = useMemo(() => {return calculation()}, [dimensions])

    const handleChange = (event) => {

        let name = event.target.name
        let value = event.target.value
        setDimensions({...dimensions, [name]: value})

        //  setDimensions(event.target.name == "height" ? {height: event.target.value, weight: dimensions.weight} :
        //  {height: dimensions.height, weight: event.target.value})
    }


    return (
        <div>
            <form>
                <label htmlFor= "height">Height</label> 
                <input type = "range" min = "1" max = "100" name = "height" onChange={(event) => handleChange(event)}/> <br/><br/>
                <label htmlFor = "weigth">weigth</label>
                <input type = "range" min = "1" max = "100" name = "weight" onChange={(event) => handleChange(event)}/><br/><br/>
                <label>Result</label>
                <div>{result}</div>
            </form>


        </div>
    )
}

export default Calculator