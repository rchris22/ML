import React, { Component,} from 'react';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <Container>
      <h1>Mobile Legends Characters</h1>

        <h2>Alucard</h2>
        <p></p>
        <Image src={require('../assets/alucard.jpg')} alt="hero-image"/>

        <h2>Cyclops</h2>
        <p></p>
        <Image src={require('../assets/cyclops.jpg')} alt="hero-image"/>

        <h2>Eudora</h2>
        <p></p>
        <Image src={require('../assets/Eudora.jpg')} alt="hero-image"/>

        <h2>Fanny</h2>
        <p></p>
        <Image src={require('../assets/fanny.jpg')} alt="hero-image"/>

        <h2>Gatotkacha</h2>
        <p></p>
        <Image src={require('../assets/gatotkacha.jpg')} alt="hero-image"/>

        <h2>Gord</h2>
        <p></p>
        <Image src={require('../assets/gord.jpg')} alt="hero-image"/>

        <h2>Haybusa</h2>
        <p></p>
        <Image src={require('../assets/hayabusa.jpg')} alt="hero-image"/>

        <h2>Kagura</h2>
        <p></p>
        <Image src={require('../assets/kagura.jpg')} alt="hero-image"/>

        <h2>Karina</h2>
        <p></p>
        <Image src={require('../assets/Karina.jpg')} alt="hero-image"/>

        <h2>Karrie</h2>
        <p></p>
        <Image src={require('../assets/karrie.jpg')} alt="hero-image"/>

        <h2>Lolita</h2>
        <p></p>
        <Image src={require('../assets/lolita.jpg')} alt="hero-image"/>

        <h2>Lyla</h2>
        <p></p>
        <Image src={require('../assets/lyla.jpg')} alt="hero-image"/>

        <h2>Minotaur</h2>
        <p></p>
        <Image src={require('../assets/minotaur.jpg')} alt="hero-image"/>

        <h2>Natalia</h2>
        <p></p>
        <Image src={require('../assets/Natalia.jpg')} alt="hero-image"/>

        <h2>Ruby</h2>
        <p></p>
        <Image src={require('../assets/ruby.jpg')} alt="hero-image"/>

        <h2>Saber</h2>
        <p></p>
        <Image src={require('../assets/saber.jpg')} alt="hero-image"/>

        <h2>Sun</h2>
        <p></p>
        <Image src={require('../assets/sun.jpg')} alt="hero-image"/>

        <h2>Zilong</h2>
        <p></p>
        <Image src={require('../assets/zilong.jpg')} alt="hero-image"/>

      </Container>
    );
  }
}
