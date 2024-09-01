 
 function Componet({link, title, description, img}){

    return <li>

        <img src={link} alt={img} />
        <h3> {title} </h3>
        <p> {description} </p>

    </li>
 }

 export default Componet
 