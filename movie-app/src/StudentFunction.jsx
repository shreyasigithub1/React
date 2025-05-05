

 const StudentFunction =(props)=>{

    const { name, marks } = props;
        return (
            <>
                <h1>Name:{name}</h1>
                <h1>Marks:{marks}</h1>
                <hr/>
            </>
        )
    }

export default StudentFunction;