
// Para poder trabajar con el ciclo de vida del componente, importo los hooks useState y useEffect

import { useState, useEffect } from 'react';
import "./Home.css"
import { bringAllCharacters } from '../../services/apiCalls';
import { Counter } from '../../common/Counter/Counter';
import { Col, Container, Row } from 'react-bootstrap';

export const Home = () => {

    //1 - Primero se observa el valor de los hooks
    const [characters, setCharacters] = useState([])

    //3 - Después de la zona de renderizado se ejecutan los hooks useEffect y funciones

    // useEffect(()=>{
    //     //Este useEffect siempre se ejecutará nada más se monte el componente por primera vez


    // },[])

    // useEffect(()=>{
    //     //Este useEffect se ejecutará SIEMPRE que haya una actualización en el componente

    // })

    // useEffect(()=>{
    //         //Este useEffect se ejecutará cuando se desmonte el componente
    //     return () => {
    //         console.log("byee byeeee")
    //     }
    // })

    useEffect(()=>{
        //Este useEffect se ejecutará SIEMPRE que se actualize el hook de estado "characters"

        if(characters.length === 0){
            //Como al cargarse el componente la longitud de characters es 0... ejecuto la función que los traerá
            bringAllCharacters()
                .then(
                    result => {
                        console.log(result)
                        setCharacters(result.data.results)
                    }
                )
                .catch(error => console.log(error))
        }
        //Al tener una longitud superior a 0, no entraríamos en el condicional, por lo tanto no llamamos de nuevo a la API
    },[characters])



    //2 - El segundo paso es estudiar que hay dentro de la zona de renderizado
    return (
        <div className="homeDesign">

            {

                characters.length > 0 

                ? (<Container>
                    <Row>
                    {
                        characters.map(
                            character => {
                                return (
                                    <Col 
                                        sm={12} md={6} lg={4} xl={3} xxl={2}
                                        key={character.id}
                                    >
                                        {character.name}
                                    </Col>
                                )
                            }
                        )
                    }
                    {/* <Counter 
                        interval={5}
                        start={10}
                    />
                    <Counter 
                        interval={10}
                        start={100}
                    />
                    <Counter 
                        interval={100}
                        start={100000}
                    /> */}
                    </Row>
                </Container>)

                : (<div>Los datos estan viniendo de la API</div>)
            }
        </div>
    )
}