import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import {Link} from 'react-router-dom'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'

import {
  DataStructured32,
  Image32,
  WatsonHealthCdArchive32
} from '@carbon/icons-react'

export function AboutUs() {
  return(
  <Section id='about'>
    <Grid>
      <Row>
        <Column sm={4} md={4} lg={5}>
        <Fade bottom>
          <h3>Tentang Kami</h3>
          <p style={{marginBottom:48}}>
            Ikatan Pelajar Muhammadiyah adalah organisasi otonom Muhammadiyah yang merupakan gerakan islam, dakwah amar ma'ruf nahi munkar di kalangan pelajar, Berakidah islam dan bersumber pada Al-Quran dan As-Sunnah.
          </p>
        </Fade>
        </Column>

        <Column sm={4} md={4} lg={{span:6,offset:1}}>
        <Fade bottom>
          <Tiles />
        </Fade>
        </Column>
      </Row>
    </Grid>
  </Section>
  )
}

const TileWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  position: relative;
`
const Tile = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 224px;
  padding: 0 16px;
  text-decoration: none !important;

  &:nth-of-type(1) {
    background: #c69401;
    color: #ffffff;
    transform: translateX(-48px);
    &:hover {
      background: #8b6801;
    }
  }
  &:nth-of-type(2) {
    background: #000000;
    color: #ffffff;
    &:hover {
      background: #292929;
    }
  }
  &:nth-of-type(3) {
    background: #f4f4f4;
    color: #4d4d4d;
    transform: translateY(24px);
    &:hover {
      background: #d7d7d7;
    }
  }
`
export const aboutList = [
  {
    title: 'Visi Misi',
    icon: <WatsonHealthCdArchive32 aria-label='visi misi'/>,
    slug: 'visi-misi'
  },
  {
    title: 'Struktur Organisasi',
    icon: <DataStructured32 aria-label='struktur organisasi'/>,
    slug: 'struktur-organisasi'
  },
  {
    title: 'Galeri',
    icon: <Image32 aria-label='galeri'/>,
    slug: 'galeri'
  },
]
function Tiles() {
  return(
    <TileWrapper>

    <span></span>
    {aboutList.map((value,i)=>(
      <Tile to={value.slug} key={i}>
      {value.icon}
      <p style={{marginTop:8}}>{value.title}</p>
      </Tile>
    ))}
    
    </TileWrapper>
  )
}