import SmallPost from './SmallPost.jsx'

function Account(props) {

    const account = props.Account;

    return (
         <>
            {account == null && <p>Cargando...</p>}
            {account != null &&<div>
                <h2>{account.name}</h2>
                <img src={account.img} id='accImg' />
                <p>{account.desc}</p>

                <ul>
                    <li>Cantidad de Publicaciones: {account.cantPosts}</li>
                    <li>Cantidad de Seguidores: {account.cantFollowers}</li>
                    <li>Cantidad de Seguidos: {account.cantFollows}</li>
                </ul>

                {/** Simulador de posts */}
                <SmallPost postImg={account.firstPostImg} accountImg={account.img} accountName={account.name} />

                {props.actualAccount && <button>Editar</button>} 
            </div>}
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