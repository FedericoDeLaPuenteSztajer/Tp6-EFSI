import SmallPost from './SmallPost.jsx'

function Account(props) {

    const account = props.Account;

    return (
         <>
            {account == null && <p>Cargando...</p>}
            {account != null &&<div className='Account'>
                <h2>{account.name}</h2>
                <img src={account.img} id='accImg' />
                <p>{account.desc}</p>

                {props.userAccount==account && <button>Editar</button>} 

                <ul>
                    <li>Cantidad de Publicaciones: {account.cantPosts}</li>
                    <li>Cantidad de Seguidores: {account.cantFollowers}</li>
                    <li>Cantidad de Seguidos: {account.cantFollows}</li>
                </ul>

                {/** Simulador de posts */}
                <SmallPost ViewPost={props.ViewPost} postImg={account.firstPostImg} accountImg={account.img} accountName={account.name} />
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