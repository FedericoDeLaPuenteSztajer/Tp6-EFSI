//

function SmallPost(props){

    return(
        <>
            <img src={props.postImg}/>
            <div>
                <img src={props.accountImg}/>
                <p>{props.accountName}</p>
            </div>
        </>
    )
}

export default SmallPost;
