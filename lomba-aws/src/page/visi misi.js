import {useEffect} from 'react'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
  UnorderedList,
  ListItem
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'
import {Pagination} from '../parts/pagination'


function VisiMisi() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const data = {
    visi: 'Terwujudnya pelajar muslim yang berilmu, berakhlak mulia, dan terampil dalam rangka menegakkan dan menjunjung tinggi nilai-nilai islam sehinggaterwujud masyarakat islam yang sebenar-benarnya',
    misi: [
      'Memperjuangkan nilai-nilai Islam sebagai Rahmatan Lil Alamin',
      'Meningkatkan kapasitas kepemimpinan pelajar muslim melalui kaderisasi, pendampingan, dan advoaksi',
      'Meningkatkan kesadaran pelajar tentang ilmu pengetahuan, keterampilan, dan teknologi',
      'Mengembangkan potensi pelajar muslim guna membentuk masyarakat muslim yang sebenar-benarnya'
    ]
  }

  return(
    <>
    <HeaderSecondary title="Visi Misi" />
    <Section>
      <Grid>
        <Row style={{marginBottom:48}}>
          <Column sm={4} md={3} lg={3}>
            <h3>Visi</h3>
          </Column>
          <Column sm={4} md={5} lg={6}>
            <p>
            {data.visi}
            </p>
          </Column>
        </Row>

        <Row style={{marginBottom:48}}>
          <Column sm={4} md={3} lg={3}>
          <h3>Misi</h3>
          </Column>
          <Column sm={4} md={3} lg={6}>
            <UnorderedList>
            {data.misi.map((value,i)=>(
            <ListItem key={i}><p>{value}</p></ListItem>
            ))}
            </UnorderedList>
          </Column>
        </Row>
      </Grid>
    </Section>
    <Pagination prev={2} next={3}/>
    </>
  )
}

export default VisiMisi;