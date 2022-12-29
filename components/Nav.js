import styles from '../styles/Home.module.css'

import { styled } from '@stitches/react';

export default function Nav() {

  const Button = styled('.navContent', {
    backgroundColor: 'red',
    color: '#000'
  })

  return (
    <main className={styles.main}>
    <nav className={styles.nav}>
      <a href="#">Imagem</a>

      <div className={styles.navContent}>
        <ul>
          <li><a href="#">Teste de Velocidade</a></li>
          <li><a href="#">Nossos Planos</a></li>
          <li><a href="#">Atendimentos</a></li>
          <li><a href="#">Quem somos</a></li>
          <li><a href="#" className={styles.navAreaDoCliente}>Área do cliente</a></li>
        </ul>
      </div>
    </nav>
  </main>
  )
}