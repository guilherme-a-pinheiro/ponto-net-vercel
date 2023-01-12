import React from 'react'
import * as S from './styles'
import Image from 'next/image'

export default function Infos() {
  return (
    <>
      <S.Info>
        <S.Main>
          <S.Content>
            <S.MainContent>
              <S.Left>
                <div>
                <S.H2Left>Lorem ipsum dolor sit amet consectetur adipisicing elit.</S.H2Left>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis facere ipsam blanditiis, accusamus odio nam possimus.</p>
                </div>
              </S.Left>
              <S.Right>
                <img src="images/medium_services_f841b814ab.png" alt="" />
              </S.Right>
            </S.MainContent>
          </S.Content>
        </S.Main>
      </S.Info>
    </>
  )
}