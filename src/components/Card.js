import { StyledCard } from "./styles/Card.Styled"

export default function Card({item: {id, title, body, image } }) {
    return (

//to row-reverse on odd/even numbers will need to pass prop to StyledCard//


<section id='card'>
            <StyledCard id="card-one" layout={id % 2 === 0 && 'row-reverse'}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div> 

            <div>
                <img src={`${image}`} alt="" />
            </div>
            </StyledCard>

</section>


    
    )
}