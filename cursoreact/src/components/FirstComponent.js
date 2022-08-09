import AnotherComponent from "./AnotherComponent";

function FirstComponent() {

    // Algum comentário
    const name = "Erik"
    return (
        <div className="firstComponent">
            {/* Comentário no JSX */}
            <p>Primeiro Componente</p>
            { 2 + 2 }
            <p>Nome: { name }</p>
            <AnotherComponent />
        </div>
    );
}

export default FirstComponent