import React, { Component } from 'react';
import api from './api';

class CreditPoints extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount() {
    const response = await api.get('star%20wars');

    this.setState({ filmes: response.data });
  }

  render() {

    const { filmes } = this.state;

    return (
      <div>
        <h2>
          <strong>Pontos: 1000</strong>
        </h2>
      </div>
    );
  };
};



export default CreditPoints