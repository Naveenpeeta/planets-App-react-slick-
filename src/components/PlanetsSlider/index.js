// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import {PlanetsAppContainer, Heading} from './styledCopmonents'

const PlanetsSlider = props => {
  const {planetsList} = props
  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(each => (
          <PlanetItem key={each.id} planetDetails={each} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}
export default PlanetsSlider
