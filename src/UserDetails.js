import React from 'react';
import Api from './Api';

class UserDetails extends React.Component {
    state = {
        user: {}
    };

    async componentDidMount() {
        const response = await Api.get(this.props.match.params.document);
        console.log(response.data);
        this.setState({ user: response.data });
    }

    render() {
        return (
            <div>
                <h1>Detalhes do usuário</h1>
                <table>
                    <tr>
                        <td>Nome</td>
                        <td>CPF</td>
                        <td>RG</td>
                        <td>Nome da Mãe</td>
                        <td>Nome do Pai</td>
                        <td>Data de Nascimento</td>
                        <td>Data de Cadastro</td>
                    </tr>
                    <tr>
                        <td>{this.state.user.name}</td>
                        <td>{this.state.user.cpf}</td>
                        <td>{this.state.user.rg}</td>
                        <td>{this.state.user.mothersName}</td>
                        <td>{this.state.user.fathersName}</td>
                        <td>{this.state.user.birthDate}</td>
                        <td>{this.state.user.registrationDate}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default UserDetails;