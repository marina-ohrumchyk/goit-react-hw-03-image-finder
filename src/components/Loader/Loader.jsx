import { TailSpin } from 'react-loader-spinner';
import { Component } from 'react';
import { Container } from 'components/App.styled';

export class Loader extends Component {
  render() {
    return <Container>
   <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />
    </Container>
  }
}

