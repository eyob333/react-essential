import TabButton from "./TabButton";
import { EXAMPLES } from "../UserData";
import { useState } from "react";
import Tabs from "./Tabs";

export default function TabContent(){
    const [selectedTopic, setSelectedTopic] = useState(null)


    function handleClick(identifier){
  
      setSelectedTopic(identifier)
  
    }
    return <section id='examples'>
        <h3> Exapmples </h3>
        <Tabs buttons={<>
                <TabButton className={(selectedTopic == 'components') ? "active": null } onClick={() => handleClick("components") }> componets </TabButton>
                <TabButton className={(selectedTopic === 'jsx') ? "active": null } onClick={() => handleClick("jsx") }> jsx </TabButton>
                <TabButton className={(selectedTopic == 'props') ? "active": null } onClick={() => handleClick("props") }> props </TabButton>
                <TabButton className={(selectedTopic == 'state') ? "active": null } onClick={() => handleClick("state") }> state </TabButton>
            </>}>
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
        </Tabs>


    </section>
}