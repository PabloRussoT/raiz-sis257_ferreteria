PROYECTO FINAL FERRETERIA
Descripción del Negocio
Este sistema de gestión de ferretería está diseñado para simplificar la administración del negocio, permitiendo gestionar usuarios, clientes, productos, ventas, y los detalles de cada transacción de manera eficiente. Está enfocado en mantener un control adecuado del inventario y facilitar las ventas diarias de la ferretería.

Entidades y Campos Tentativos
1. Usuario
id_usuario: ID único del usuario (administrador).
nombre_usuario: Nombre del usuario.
email: Correo electrónico del usuario.
password: Contraseña para autenticación.
rol: Rol del usuario (ej. administrador, empleado).

2. Cliente
id_cliente: ID único del cliente.
nombre: Nombre del cliente.
apellido: Apellido del cliente.
telefono: Número de contacto del cliente.
email: Correo electrónico del cliente.
direccion: Dirección del cliente.

3. Producto
id_producto: ID único del producto.
nombre_producto: Nombre del producto.
descripcion: Descripción breve del producto.
precio: Precio unitario del producto.
stock: Cantidad disponible en inventario.
categoria: Categoría del producto (ej. herramientas, materiales de construcción).

4. Venta
id_venta: ID único de la venta.
fecha: Fecha de la transacción.
id_cliente: ID del cliente que realiza la compra.
total: Monto total de la venta.
id_usuario: ID del usuario que realiza la venta.

5. Detalle_Venta
id_detalle: ID único del detalle de la venta.
id_venta: ID de la venta asociada.
id_producto: ID del producto vendido.
cantidad: Cantidad de producto vendido.
precio_unitario: Precio unitario del producto en el momento de la venta.
subtotal: Subtotal por cada producto (cantidad * precio_unitario).
