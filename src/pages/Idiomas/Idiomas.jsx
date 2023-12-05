
import { useEffect, useState } from "react"
import "./Idiomas.css"

export const Idiomas = () => {

    const [languages, setSlanguages] = useState(["chinese", "english", "spanish", "portuguese"])

    const [seleccionados, setSeleccionados] = useState({
        seleccion1: "",
        seleccion2: ""
    })

    const filtraLenguaje = (e) => {

        let all_languages = ["chinese", "english", "spanish", "portuguese"]

        let filtrado = all_languages.filter(
            (clave) => {
                if(e.target.name === seleccionados[e.target.name]){
                    return true
                }   
                return clave !== e.target.value
            }
        );

        setSeleccionados((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));


        setSlanguages(filtrado)
    }

    return (
        <div className="idiomasDesign">
            <select name="seleccion1" onChange={filtraLenguaje}>
                <option>{seleccionados.seleccion1 !== "" ? seleccionados.seleccion1 : "Selecciona el primer lenguaje"}</option>
                {
                    languages.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
            <select name="seleccion2" onChange={filtraLenguaje}>
            <option>{seleccionados.seleccion2 !== "" ? seleccionados.seleccion2 : "Selecciona el segundo lenguaje"}</option>
                {
                    languages.map((lenguaje) => {
                        return (
                            <option key={lenguaje} value={lenguaje}>{lenguaje}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}