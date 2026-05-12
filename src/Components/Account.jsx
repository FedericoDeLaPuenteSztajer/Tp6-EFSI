import SmallPost from './SmallPost.jsx'

function Account(props) {

    const accout = props.Account;

    return (
        <>
            <div>
                <h2>{accout.name}</h2>
                <img src={account.img} />
                <p>{accout.desc}</p>

                <ul>
                    <li>Cantidad de Publicaciones: {accout.cantPosts}</li>
                    <li>Cantidad de Seguidores: {accout.cantFollowers}</li>
                    <li>Cantidad de Seguidos: {accout.cantFollows}</li>
                </ul>

                {/** Simulador de posts */}
                <SmallPost postImg={props.postImg} accountImg={account.img} accountName={accout.name} />

                {props.actualAccount && <button>Editar</button>}
            </div>
        </>
    )
}

export default Account;

/**
Requisitos:
- Nombre de usuario.
- Foto de perfil.
- Biografía breve.

- Cantidad de publicaciones.
- Cantidad de seguidores.
- Cantidad de seguidos.

- Publicaciones asociadas al perfil.
- Botón visual de editar perfil o configuración.
 */