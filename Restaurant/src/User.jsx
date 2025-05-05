//Functional Component

const User = (props) => {
    const { name, location } = props;
    return (
        <>
            <h1>User --</h1>
            <h1>Name:{name}</h1>
            <h2>Location:{location}</h2>
        </>
    )
}

export default User;