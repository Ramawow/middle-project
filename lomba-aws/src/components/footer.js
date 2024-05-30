import styled from 'styled-components'
import {
  Grid,
  Row,
  Column,
  Link as A
} from 'carbon-components-react'


const Section = styled.section`
  width: 100%;
  padding: 58px 0;
  background: #262626;
  color: #cccccc !important;
`
const Link = styled(A)`
  display: block;
  text-decoration: none !important;
  color: #cccccc !important;
`
function Footer() {
  return(
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={8} lg={3}>
            <h3>Media Sosial</h3>
          </Column>
          <Column sm={4} md={8} lg={4} style={{marginBottom:36}}>
            <Link href='https://www.instagram.com/ipmmbsputrayk' target='_blank'><p>Instagram</p></Link>
            <Link href='https://youtube.com/c/PRIPMMBSYOGYAKARTA' target='_blank'><p>Youtube</p></Link>
            <Link href='https://my.ipm.or.id/user/pripmppmmbsputraslemanyogyakarta' target='_blank'><p>My Ipm</p></Link>
          </Column>
          <Column sm={4} md={8} lg={5}>
            <p>
              Pondok Pesantren Modern Muhammadiyah Boarding School Yogyakarta <br />
              Jalan Piyungan KM.2, Marangan, Bokoharjo, Prambanan, Sleman, Daerah Istimewa Yogyakarta 55572
            </p>
          </Column>
        </Row>
      </Grid>
    </Section>
  )
}
export default Footer;