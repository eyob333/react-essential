import Header from './componets/Header'
import UserData, { CoreConcepts, EXAMPLES } from "./UserData.js"
import Componet from './componets/Componet'
import TabButton from './componets/TabButton.jsx'
import { useState} from 'react'



function App() {

  const [selectedTopic, setSelectedTopic] = useState(null)


  function handleClick(identifier){

    setSelectedTopic(identifier)

  }


  return <>


    <Header />
    
    <section id="core-concept">
      <div className="core-container">

        <h2>Core Concepts</h2>

        <div className='container'>

        {CoreConcepts.map(data => {

          return (
          <Componet

          key={data.id}
          title={data.title}
          description={data.description}
          link={data.link}
          img={data.image}

          />
            )
          })
        }

        </div>
      </div>
    </section>

    <section id='examples'>
      <h2> Exapmples </h2>

      <menu>
        <TabButton active={(selectedTopic == 'components') ? "active": null } onSelect={() => handleClick("components") }> componets </TabButton>
        <TabButton active={(selectedTopic === 'jsx') ? "active": null } onSelect={() => handleClick("jsx") }> jsx </TabButton>
        <TabButton active={(selectedTopic == 'props') ? "active": null } onSelect={() => handleClick("props") }> props </TabButton>
        <TabButton active={(selectedTopic == 'state') ? "active": null } onSelect={() => handleClick("state") }> state </TabButton>
      </menu>
        {!selectedTopic ? <h4 style={ {color: "#a18aba", textAlign: 'left', paddingLeft: '15px', cursor: "pointer"}}> select topic </h4>: 

          <div id='tab-content'>
            <h3> {EXAMPLES[selectedTopic].title } </h3>
            <p> {EXAMPLES[selectedTopic].description} </p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>

          </div>  }

    </section>

  </>

}

export default App
