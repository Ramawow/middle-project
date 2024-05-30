import {useEffect} from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import {Section} from '../parts/section'
import {
  Grid,
  Row,
  Column
} from 'carbon-components-react'
import {dataEvents} from '../adapter/data-events'

function getContent(pathname) {
  const slug = pathname.split('/').pop()
  const data = dataEvents

  const content = data.find(val=>val.slug === slug)
  return content;
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
  p,img {
    margin-top: 16px;
  }
`
function EventPage() {
  const {pathname} = useLocation()
  const {title,image,content} = getContent(pathname)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return(
    <Section>
      <Grid>
        <Row>
          <Column sm={4} md={8} lg={5}>
          <h3>{title}</h3>
          </Column>
          <Column sm={4} md={8} lg={7}>
            <img src={image} alt={title}/>
            <Wrapper dangerouslySetInnerHTML={{ __html: content }}></Wrapper>
          </Column>
        </Row>
      </Grid>
    </Section>
  )
}

export default EventPage;