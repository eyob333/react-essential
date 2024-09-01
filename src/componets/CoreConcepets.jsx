import { CoreConcepts } from "../UserData";
import Componet from "./Componet";

export default function CoreConcept(){
    return <section id="core-concept">
            <div className="core-container">

                <h2>Core Concepts</h2>

                <div className='container'>

                {CoreConcepts.map(data => {

                    return (
                            <Componet

                            key={data.id}
                            
                            {...data}

                            />
                        )
                    })
                }

                </div>
            </div>
    </section>    
}