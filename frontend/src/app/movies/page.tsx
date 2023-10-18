import { Card } from "../components/Card";
import { MovieContent, MoviesContainer } from "./styled";
export default function Movies() {
  return (
    <MoviesContainer>
      <MovieContent>

        {biscoito.map(card => {
          return(
            <Card
            img={card.img} descricao={card.descricao} estreia={estreia} indicacao={indicacao} tema={tema} titulo={titulo} key={estreia}
            />
          )
        })}
        
            </MovieContent>
    </MoviesContainer>
  )
}