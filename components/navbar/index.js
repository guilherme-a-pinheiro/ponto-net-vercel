import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <S.Navbar>
        <S.Container>
          <Link href="/">
            <S.Logo>
              <Image src="images/pontonet.svg" alt="Pontonet" width="143" height="35" />
            </S.Logo>
          </Link>
          <ul>
            <li>
              <Link href="#">Teste de Velocidade</Link>
            </li>
            <li>
              <a href="#">Nossos Planos</a>
            </li>
            <li>
              <a href="#">Atendimento</a>
            </li>
            <li>
              <a href="#">Quem Somos</a>
            </li>
            <li>
              <a
                href="https://routerbox.pontonettelecom.com.br/app_login/"
                target="_blank"
                rel="noreferrer"
                style={{ color: '$primary1' }}
              >
                Área do cliente
              </a>
            </li>
          </ul>
        </S.Container>
      </S.Navbar>
    </>
  )
}