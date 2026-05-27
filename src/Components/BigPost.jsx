function BigPost(props) {

    const postData = props.postData

    return (
        <>
            <img src={postData.postImg} id="postImg" />
            <div>
                <img src={postData.accountImg} id="miniAccImg" />
                <h2>@{postData.accountName}</h2>
            </div>
            <p>{postData.desc}</p>

            <ul>
                <li>Likes: {postData.likes}</li>
                <li>Fecha: {postData.date.toString()}</li>
                <button>Comentar</button>
            </ul>

            <div>
                <p>{postData.comment}</p>
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