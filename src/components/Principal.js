import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { novoUsuario } from '../store/actions/user'

const Principal = props => {

    return (
        <>
        <input onChange={props.novoUsuario}/> 
        <h1>{props.name}</h1>
        <h1>{props.idade}</h1>
        </>
    )
}

const mapStateToProps = state => (
    {
        name:state.user.name,
        idade:state.user.idade
    }
)

const mapDispatchToProps = dispatch => bindActionCreators({novoUsuario},dispatch);
  
export default connect(mapStateToProps,mapDispatchToProps)(Principal)