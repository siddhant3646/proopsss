export function Child(props)
{
    console.log("Child_App_is_called.");
    console.log(props);
    return(
        <div>
            <p>My Friend's Details:</p>
            <ol>
                <li>SiddhantSinghFromChild</li>
                <li>{props.firstName}</li>
                <li>{props.lastName}</li>
                <li>{props.age}</li>
            </ol>
        </div>
    )
}