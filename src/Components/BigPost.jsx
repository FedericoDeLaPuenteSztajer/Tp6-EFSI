function BigPost(props) {

    const postData = props.postData

    return (
        <>
            <img src={postData.postImg} id="postImg" />
            {/** Información redundante (Ya la dice en Account)
            <div>
                <img src={postData.accountImg} id="miniAccImg" />
                <h2>@{postData.accountName}</h2>
            </div>
            */}

            <div>
                <p>{postData.desc}</p>

                <ul>
                    <li>Likes: {postData.likes}</li>
                    <li>Fecha: {postData.date.toString()}</li>
                    
                </ul>
                
                <button>Comentar</button>

                <article>
                    <p>{postData.comment}</p>
                </article>
            </div>

        </>
    )
}

export default BigPost;

/** 
Requisitos:
- Imagen ampliada.
- Nombre de usuario.

- Descripción o caption.
- Cantidad de likes.
- Botones de interacción.
- Fecha o información adicional del posteo.

- Comentarios simulados.
*/