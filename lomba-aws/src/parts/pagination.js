import styled from 'styled-components'
import {
  Grid,
  Row,
  Column,
  ClickableTile
} from 'carbon-components-react'
import {Link as A} from 'react-router-dom'
import {aboutList} from '../components/about us'

function getTileContent(i) {
  if(i===1) return aboutList[0]
  if(i===2) return aboutList[1]
  if(i===3) return aboutList[2]
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
` 
const Link = styled(A)`
  display: block;
  width: 100%;
  text-decoration: none;
`
export function Pagination(props) {
  const next = getTileContent(props.next)
  const prev = getTileContent(props.prev)

  return(
    <section style={{background:'#f4f4f4'}}>
      <Grid>
        <Row>
          <Column sm={4} md={{span:5,offset:3}} lg={{span:5,offset:7}}>
            <Wrapper>
            
            <Link to={`/${prev.slug}`}>
            <ClickableTile >
              {prev.icon}
              <p>{prev.title}</p>
            </ClickableTile>
            </Link>

            <Link to={`/${next.slug}`}>
            <ClickableTile>
              {next.icon}
              <p>{next.title}</p>
            </ClickableTile>
            </Link>

            </Wrapper>
          </Column>
        </Row>
      </Grid>
    </section>
  )
}