**- Cómo organizaron el proyecto**: Dedique un branch dev-js al diseño de componentes y código funcional y luego otro dev-css para el diseño visual (Y manejo de errores que complicaban la visualización).

**- Qué componentes crearon**: Account, BigPost, Feed, Header, SmallPost. 

**- Qué responsabilidad tiene cada componente**: Account (Visualización de la cuenta del usuario o del post que se vea), BigPost (Visualización de post clickeado), Feed (Generación de post pequeños recomendados), Header (Boton de Home (Ya!gram), busqueda no funcional de posts y boton no funcional para crear posts), SmallPost (Post pequeño clickleable). 

**- Por qué decidieron componentizar de esa manera**: Porque me parecio una forma responsable de distribuir las tareas --> Una feed con muchos SmallPost que se pueden clickear y llaman a un useEffect pasado desde app que abre un BigPost con su info / Una barra lateral izquierda con la información de la cuenta que cambia en relación al post que se ve o muestra al usuario de la cuenta. / Un header mayormente visual pero que permite reiniciar el feed así como volver a ver la cuenta del usuario.

**- Cómo se comunican los componentes mediante props**:App pasa a Account la data de la cuenta y la informacion y useEffect del post fijado, a Feed la info de varios posts pequeños y un useEffect para cargar el BigPost y cambiar la cuenta y a BigPost unicamente la información. 

**- Qué hooks utilizaron y para qué**: useState para manipular datos en tiempo real y distribuirlos para los componentes y useEffect para cargar información en tiempo real sin recargar la página.

**- Qué diseño de Figma utilizaron como referencia**: https://www.figma.com/design/XrrfQdWlIeU2xNIwmKiRy5/%C4%B0nstagram-Modern-Web-Design--Community-?node-id=0-1&p=f&t=OlZD7BJMjQuVn6vL-0

**- Cómo resolvieron la visualización individual de publicaciones**: Con un useEffect generado al clickear un post pequeño carga el componente BigPost que anula la visualización del feed y si no existe un post de este estilo (Si no se esta viendo ninguno individualmente) se ve el feed únicamente (Y la barra lateral que siempre permanece).

**-  Cómo simularon el perfil de usuario logueado**: Cuando el usuario inicia sesion (Con el botón indicado por la página, aunque por un bug hay que también tocar el botón de Home o Ya!gram) se crea un usuario que se asigna a un useState y no se vuelve a modificar. Si el usuario esta en el feed ve su usuario mientras que si ve un post, ve el del autor del post y luego vuelve cuando se retorna a Feed.

**-  Qué datos decidieron mostrar en el perfil**: Nombre, foto, editar (Bóton que solo puede usar si es miembro de la cuenta), publicaciones, followers y follows y su post fijado.

**-  Qué estados utilizaron para seleccionar publicaciones o manejar la vista individual**: (Cuando dice estados entiendo que habla de useState) feedPosts con la escasa información de los post pequeños y viewingPost que contiene la información completa del post seleccionado.
