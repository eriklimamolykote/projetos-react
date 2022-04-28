import React from 'react';
import ReactDOM from 'react-dom';

let classfor1 = 'h1tag';

const h1Style = {

    color: 'red'

};

function Hello( props ) {

    return <h1 style={ h1Style }>{ props.msg }</h1>;

}

const Hello_comp = <Hello msg = "Olá do Erik" />;

export default Hello_comp;