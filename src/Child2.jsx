export function Child2(props)
{
    return(   
        <>
        <p>My Car Details:</p>
        <ol type="A">
        <li>Brand of Car - {props.car.brand}</li>
        <li>Color of Car - {props.car.color}</li>
        <li>Speed of Car - {props.car.speed}</li>
        <li>Image of something - {props.image}</li>
        <li>Image from child prop {props.children}</li>
        </ol>

        </>
    )
}