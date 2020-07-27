import React from 'react';
import Api from './Api';
import { Redirect, Link } from "react-router-dom";

class List extends React.Component {
    state = {
        users: []
    };

    async componentDidMount() {
        const response = await Api.get();
        console.log(response.data);
        this.setState({ users: response.data });
    }

    handleClick(cpf) {
        console.log("Cpf", cpf);
        return <Redirect to={`/users/${cpf}`} />;
    }

    render() {
        return (
            <div>
                <h1>Lista de Usuários</h1>
                <table>
                    <tr>
                        <h1>Nome</h1>
                    </tr>
                    {this.state.users.map(user =>
                        (
                            <tr>
                                <Link  to={`/users/${user.cpf}`}>
                                {user.name}
                                </Link>
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }
}

export default List;