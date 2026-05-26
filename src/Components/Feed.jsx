//

import SmallPost from "./SmallPost";

function Feed(props){

    const postsData= props.postsData;

    return(
        <>
            {(postsData).map(data => (
                <SmallPost onClick={()=>props.ViewPost(data.postImg, data.accountImg, data.accountName)} postImg={data.postImg} accountImg={data.accountImg} accountName={data.accountName}/>
            ))}
        </>
    )
}

export default Feed;
