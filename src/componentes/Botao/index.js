import estilos from './Botao.module.css';
function Botao(props) {

    console.log(props);

    if (props.data.condicao === false)
        console.log("condicao == false")


    return (
        //passando o meu nome como propriedade
        <h1 className={estilos.botao}>
            Botão {props.data.nome}
            {props.data.condicao === true? <p>Condição verdadeira</p> : <p>Condição falsa</p>} {/*condição falsa */}
            {props.data.condicao === false? <p>Condição verdadeira</p> : <p>Condição falsa</p>} {/*condição verdadeira */}
            {props.data.nome === 'Dierlisson'? <p>Condição verdadeira</p> : <p>Condição falsa</p>}
            {props.data.nome}

            
        </h1>
    );
}

export default Botao;
