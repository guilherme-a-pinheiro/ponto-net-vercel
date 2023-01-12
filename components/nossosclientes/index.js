import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function NossosClientes() {
  return (
    <>
    <S.Main>
      <S.Content>
        <S.h4Content>Nossos clientes</S.h4Content>
        <S.PContent>Lorem ipsum dolor sit amet consectetur.</S.PContent>
        <S.Clientes>
          <S.Cliente>
            <img src="images/Moinho_Vermelho_0961b6c1f3.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/CASAS_MIX_dd681ff149.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/COLOR_CUP_27a1f0f754.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/SUPERMEL_5ec7e8d2eb.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/RAYS_ELEVADORES_9c4ed12934.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/POSTO_CANADA_3b5399d79b.jpg" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/POSTO_DUBAI_85fd56c3a4.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/POSTO_LONDRES_80d0e566e9.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/ARIANE_a15e3b82d9.png" alt="" />
          </S.Cliente>
          <S.Cliente>
            <img src="images/ANACONDA_1cc905270d.png" alt="" />
          </S.Cliente>
        </S.Clientes>
      </S.Content>
    </S.Main>
    </>
  )
}