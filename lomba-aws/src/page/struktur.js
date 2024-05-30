import {useEffect} from 'react'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem
} from 'carbon-components-react'
import {HeaderSecondary} from '../components/header'
import {Pagination} from '../parts/pagination'
import {dataStruktur as data} from '../adapter/data-struktur'

function Struktur() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <>
    <HeaderSecondary title="Struktur Organisasi" />
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={{span:6,offset:1}} lg={{span:8,offset:2}}>

            <h5>{data.periode}</h5>
            <UnorderedList style={{marginBottom:24}}>
              <ListItem><p>Ketua Umum: {data.ketua}</p></ListItem>
              <ListItem><p>Sekretaris Umum 1: {data.sekretaris1}</p></ListItem>
              <ListItem><p>Sekretaris Umum 2: {data.sekretaris2}</p></ListItem>
              <ListItem><p>Bendahara Umum 1: {data.bendahara1}</p></ListItem>
              <ListItem><p>Bendahara Umum 2: {data.bendahara2}</p></ListItem>
            </UnorderedList>
          
            <Accordion>
            {data.bidang.map((bidang,i)=>(
              <AccordionItem title={bidang.nama} key={i}>
                <UnorderedList>
                <ListItem><p>Ketua: {bidang.ketua}</p></ListItem>
                <ListItem><p>Sekretaris: {bidang.sekretaris}</p></ListItem>
                <ListItem><p>Bendahara: {bidang.bendahara}</p></ListItem>
                <ListItem><p>anggota:</p>
                  <UnorderedList nested>
                    {bidang.anggota.map((anggota,i)=>(
                    <ListItem key={i}><p>{anggota}</p></ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
                </UnorderedList>
              </AccordionItem>
            ))}
            </Accordion>

          </Column>
        </Row>
      </Grid>
    </Section>
    <Pagination prev={1} next={3}/>
    </>
  )
}

export default Struktur;