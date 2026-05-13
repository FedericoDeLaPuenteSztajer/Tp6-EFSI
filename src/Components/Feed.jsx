//

import SmallPost from "./SmallPost";

function Feed(props){

    const postsData= props.postsData;

    return(
        <>
            {(postsData).forEach(data => {
                <SmallPost onClick={()=>props.ViewPost()} postImg={data.postImg} accountImg={data.accountImg} accountName={data.accountName}/>
            })}
        </>
    )
}

export default Feed;
