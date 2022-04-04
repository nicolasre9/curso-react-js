


const MainContent = (props) => {

    //desestructuracion. se puede hacer sobre el parametro de la funcion directamentee
    const {titulo, text} = props;

    return (
        <main>
            <h2>{titulo}</h2>
            <p>{text}</p>
        </main>
    );
}

export default MainContent 