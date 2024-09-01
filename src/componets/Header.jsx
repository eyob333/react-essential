

export default function Header(){

    const variants = ["core", "fundamental", "crucial"]
    const reactImg = "src/assets/react.svg"


    return (
    <>

        <header>
        <img src={reactImg}></img>
        <h1>REACT ESSENTIALS</h1>
        <p> {variants[Math.floor(Math.random() * 3)]} react concepts you will need if you are going to build!</p>
        </header>

        <main>
        <h2> time to get started! </h2>
        </main>
    </>    
    )
}