import {
  Grid,
  Row,
  Column,
} from 'carbon-components-react'
import {Section} from '../parts/section'
import Fade from 'react-reveal/Fade'

export function Location() {
  return(
    <Section top={0}>
      <Grid>
        <Row>
          <Column sm={4} md={0} lg={0}>
            <Fade bottom>
            <h3>Lokasi</h3>
            </Fade>
          </Column>
          <Column sm={4} md={5} lg={6}>
            <Fade bottom>
            <div style={{width:"100%"}}>
            <iframe
              title='lokasi mbs' 
              width="100%" 
              height="500" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jalan%20Piyungan%20KM.%202,%20Marangan,%20Bokoharjo,%20Prambanan,%20Majasem,%20Bokoharjo,%20Kec.%20Prambanan,%20Kabupaten%20Sleman,%20Daerah%20Istimewa%20Yogyakarta%2055572+(Muhammadiyah%20Boarding%20School%20Yogyakarta)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              </iframe>
            </div>
            </Fade>
          </Column>
          <Column sm={0} md={3} lg={6}>
            <Fade bottom>
            <h3>Lokasi</h3>
            </Fade>
          </Column>
        </Row>
      </Grid>
    </Section>
  )
} 