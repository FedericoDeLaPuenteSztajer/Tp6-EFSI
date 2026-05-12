//

function Header(props){

    //

    return(
        <>
            <button onClick={()=>props.GoHome}>Ya!gram</button>
            <input>Buscar</input>
            <button>Nuevo Post</button>
        </>
    )
}

export default Header;
