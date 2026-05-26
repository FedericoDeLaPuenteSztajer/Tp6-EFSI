//

function SmallPost(props){

    return(
        <div className="smallPost">
            <img src={props.postImg} id="miniPostImg"/>
            <div>
                <img src={props.accountImg} id="miniAccImg"/>
                <p>@{props.accountName}</p>
            </div>
        </div>
    )
}

export default SmallPost;
