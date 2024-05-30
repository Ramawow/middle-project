import {useEffect} from 'react'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'
import {Pagination} from '../parts/pagination'
import {dataGaleri} from '../adapter/data-galeri'

function Galeri() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <>
    <HeaderSecondary title="Galeri" />
    <Section>
      <Grid>
        <Row>
          
          {dataGaleri.map((image,i)=>(
            <Column sm={4} md={4} lg={4} style={{marginBottom:24}}>
              <img 
              src={image} 
              alt={`gambar ${i}`} 
              key={i}
              />
            </Column>
          ))}
          
        </Row>
      </Grid>
    </Section>
    <Pagination prev={1} next={2}/>
    </>
  )
}

export default Galeri;