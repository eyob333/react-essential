import TabButton from "./TabButton";
import { EXAMPLES } from "../UserData";
import { useState } from "react";


export default function TabContent(){
    const [selectedTopic, setSelectedTopic] = useState(null)


    function handleClick(identifier){
  
      setSelectedTopic(identifier)
  
    }
    return <section id='examples'>
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
}