import styled from 'styled-components'
import {
  Header,
  HeaderContainer,
  SideNav,
  SideNavItems,
  HeaderMenuItem,
  HeaderSideNavItems,
  SkipToContent,
  HeaderMenuButton,
  HeaderName,
  HeaderNavigation
} from 'carbon-components-react'
import {Link} from '../parts/link'
import {Launch16} from '@carbon/icons-react'

const NavItem = styled(HeaderMenuItem)`
  color: #4d4d4d !important;
`
function NavItems() {
  const textColor = {
    color: '#4d4d4d',
    '&:hover': {
    color: '#ffffff'
    }
  }
  return(
    <>
    <NavItem>
    <Link 
    to='/' 
    style={textColor}>
    Home
    </Link>
    </NavItem>
    
    <NavItem>
    <Link 
    to='/e-magazine' 
    style={textColor}>
    E-Magazine
    </Link>
    </NavItem>
    
    <NavItem 
    href="https://www.mbs.sch.id" 
    target='_blank'
    style={textColor}
    >
    Web MBS <Launch16 aria-label='open'/>
    </NavItem>
    </>
  )
}
const navStyle = {
  background: 'rgba(255,255,255,.4)',
  color: '#4d4d4d',
  borderBottom: '1px solid #f4f4f4',
  backdropFilter: 'blur(20px)'
}
function Navbar() {
  return(
    <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="" style={navStyle}>
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />

        <HeaderName href="#" prefix=" "> </HeaderName>
        <HeaderNavigation>
          <NavItems />
        </HeaderNavigation>

        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <NavItems />
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>

      </Header>
    )}
  />
  )
}
export default Navbar;