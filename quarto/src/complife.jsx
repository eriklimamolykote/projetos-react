import React from 'react';
import ReactDOM from 'react-dom';

class COMP_LIFE extends React.Component {

    constructor( props ) {

        super( props );
        this.state = { name: '' };

        this.UpdateName = this.UpdateName.bind( this );
        this.testclick = this.testclick.bind( this );

    }

    UpdateName( event ) {

        this.setState({ name: event.target.value } );

    }

    testclick( event ) {

        alert( "The name entered is: " + this.state.name );

    }

    componentDidMount() {

        console.log( 'Estado de montagem : chamando método componentDidMount' );

    }

    shouldComponentUpdate() {

        console.log( 'Estado de atualização: chamando método shouldComponentUpdate' );
        return true;

    }

    componentDidUpdate() {

        console.log( 'Estado de atualização: chamando método componentDidUpdate' );

    }

    componentWillUnmount() {

        console.log( 'Estado de desmontagem: chamando método componentWillUnmount' );

    }

    render() {

        return (

            <div>
                Digite seu nome:<input type="text" value={this.state.name} onChange={this.UpdateName} /><br/>
                <h2>{this.state.name}</h2>
                <input type="button" value="Clique aqui" onClick={this.testclick} />
            </div>    
        );

    }

}

export default COMP_LIFE;