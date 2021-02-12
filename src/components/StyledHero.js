import Styled from 'styled-components'
import defaultImg from '../images/room-1.jpg'

const StyledHero = Styled.header`
min-height:60vh;
background:url(${props => props.img ? props.img : defaultImg}) center no-repeat;
display:flex;
align-items:center;
justify-content:center;
`;
export default StyledHero