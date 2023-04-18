const ComponentB = (props) => {
    console.log(props);
    return (
        <div>
           <p>B</p>
           {
            props.lastName
           }
        </div>
    )
}
export default ComponentB;