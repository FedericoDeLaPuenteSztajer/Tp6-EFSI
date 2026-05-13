//

function BigPost(props) {

    const postData = props.postData

    return (
        <>
            <img src={postData.postImg} />
            <h2>{postData.accountName}</h2>
            <p>{postData.desc}</p>

            <ul>
                <li>Likes: {postData.likes}</li>
                <li>Fecha: {postData.date}</li>
                <button>Comentar</button>
            </ul>

            <div>
                <p>{props.comment}</p>
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