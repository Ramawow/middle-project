import {useState,useEffect} from 'react'
import styled from 'styled-components'
import headerImg from '../assets/image/banner.jpg'
import {ArrowDown16,ChevronRight16} from '@carbon/icons-react'
import {Button} from '../parts/button'
import {
  Grid,
  Row,
  Column
} from 'carbon-components-react'


const Container = styled.div`
  position: relative;
  width: 100%;
  height: ${window.innerHeight}px;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-position-y: ${({offset})=>offset}px;
  background-size: cover;
  ${p=>p.secondary && `
  height: ${window.innerHeight*0.65}px;
  overflow: hidden;
  `}
` 
const white = `color: #ffffff;`
const Display = styled.h1`
  font-weight: 600;
  margin-bottom: 8px;
  ${white}
`
const Desc = styled.p`
  margin-bottom: 16px;
  ${white}
`
function useParallax() {
  const [offset,setOffset] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll',()=>setOffset(()=>Math.round(window.pageYOffset/3)))
  },[])
  return offset;
}
export function Header() {
  const offset = useParallax();
  return(
    <Container offset={offset}>
      <Pattern />

      <Grid>
        <Row style={{paddingTop:`${window.innerHeight*0.38}px`}}>
          <Column sm={4} md={{span:6,offset:2}} lg={{span:9,offset:3}}>
            <Display>PR IPM MBS PUTRA</Display>
            <Desc>Pimpinan Ranting Ikatan Pelajar Muhammadiyah PPM MBS Putra Yogyakarta</Desc>
            <Button black
              renderIcon={ChevronRight16}
              iconDescription="Discover"
              kind="secondary" 
              href="#about"
            >Discover</Button>
          </Column>
        </Row>
      </Grid>

      <ScrollBtn />
    </Container>
  )
}

export function HeaderSecondary(props) {
  const offset = useParallax();
  return(
  <Container secondary offset={offset}>
    <Pattern />
    <Grid>
      <Row style={{paddingTop:`${window.innerHeight*0.65*0.38}px`}}>
        <Column sm={4} md={{span:6,offset:2}} lg={{span:9,offset:3}}>
          <Display>{props.title}</Display>
          <Desc>Pimpinan Ranting Ikatan Pelajar Muhammadiyah PPM MBS Putra Yogyakarta</Desc>
        </Column>
      </Row>
    </Grid>
  </Container>
  )
}

const PatternWrap = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`
const Line = styled.div`
  width: 1px;
  height: ${window.innerHeight}px;
  background: rgba(255,255,255,.3);
`
const Col = styled(Column)`
  padding: 0;
`
function Pattern() {
  return(
    <>
    <Col sm={0} md={8} lg={12}>
      <PatternWrap>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </PatternWrap>
    </Col>

    <Col sm={4} md={0} lg={0}>
      <PatternWrap>
        <Line></Line>
        <Line></Line>
      </PatternWrap>
    </Col>
    </>
  )
}

function ScrollBtn() {
  return(
    <>
    <Col sm={0} md={8}>
    <Scroll split={4}/>
    </Col>

    <Col sm={4} md={0} lg={0}>
    <Scroll split={2}/>
    </Col>
    </>
  )
}

const ScrollWrap = styled(PatternWrap)`
  justify-content: flex-end;
  align-items: flex-end;
  bottom: 0;
`
const ScrollButton = styled(Button)`
  height: 120px;
  width: ${p=>p.btnWidth};
  border-left: 8px solid #000000;
  transform: translateY(20px);
  cursor: default !important;
`
function Scroll(props) {
  const [winWidth,setWinWidth] = useState(window.innerWidth)
  window.addEventListener("resize",()=>setWinWidth(()=>window.innerWidth))
  const btnWidth = `${winWidth/props.split}px`

  return (
    <ScrollWrap>
      <ScrollButton grey disabled
        btnWidth={btnWidth}
        renderIcon={ArrowDown16}
        iconDescription="Scroll Down"
        kind="secondary" 
        size="xl"
        href="#"
      >Scroll Down</ScrollButton>
    </ScrollWrap>
  )
}