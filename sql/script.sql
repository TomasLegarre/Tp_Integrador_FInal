CREATE SCHEMA MercadoLibre;

USE MercadoLibre;


CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (200) NOT NULL,
email VARCHAR (200) NOT NULL,
contrasenia VARCHAR (200) NOT NULL,
foto_perfil VARCHAR (200) NOT NULL,
fecha DATE NOT NULL,
DNI INT(200) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (200) NOT NULL,
descripcion VARCHAR (500) NOT NULL,
imagen VARCHAR (200) NOT NULL,
usuario_id INT UNSIGNED,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR (200) NOT NULL,
usuario_id INT UNSIGNED,
producto_id INT UNSIGNED,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
update_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);	


INSERT INTO usuarios (id, nombre, email, contrasenia, foto_perfil, fecha, DNI, created_at, update_at) VALUES (default, 'Juan Perez','juanperez12@gmail.com', 'Pepito1203', '/images/users/default-image.png', '1998-10-05', 41267865, default, default);
INSERT INTO usuarios VALUES (default, 'Sofia Lopez', 'solopez@gmail.com', 'Racing2004', 'Foto de Sofia', '2004-11-30', 45237569, default, default);
INSERT INTO usuarios VALUES (default, 'Jose Legarre', 'josecito23@gmail.com', 'Firulais8902', 'Foto de Jose', '2000-04-04', 42409207, default, default);
INSERT INTO usuarios VALUES (default, 'Martin Yukelson', 'martinyukel23@gmail.com', 'Cuba2090', 'Foto de Martin', '1971-12-10', 22332789, default, default);
INSERT INTO usuarios VALUES (default, 'Lara Rojas', 'lararojas30@gmail.com', 'Rony67', 'Foto de Lara', '1962-01-30', 16009420, default, default);

INSERT INTO productos (id, nombre, descripcion, imagen, usuario_id, created_at, update_at) VALUES (default, 'iPhone 13 Pro Max', 'El iPhone 13 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 1, default, default);
INSERT INTO productos VALUES (default, 'iPhone 14 Pro Max', 'El iPhone 14 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', '/images/products/img-samsung-galaxy-s10.jpg', 4, default, default);
INSERT INTO productos VALUES (default, 'iPhone 13 Pro','El iPhone 13 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 3, default, default);
INSERT INTO productos VALUES (default, 'iPhone 14 Pro', 'El iPhone 14 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 2, default, default);
INSERT INTO productos VALUES (default, 'iPhone 12 Pro Max', 'El iPhone 12 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 5, default, default);
INSERT INTO productos VALUES (default, 'iPhone 12 Pro', 'El iPhone 12 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 2, default, default);
INSERT INTO productos VALUES (default, 'iPhone 13 Mini', 'El iPhone 13 Mini es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 2, default, default);
INSERT INTO productos VALUES (default, 'iPhone 14 Plus', 'El iPhone 14 Plus es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 4, default, default);
INSERT INTO productos VALUES(default, 'iPhone 11 Pro Max', 'El iPhone 11 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 1, default, default);
INSERT INTO productos VALUES(default, 'iPhone 15 Pro Max', 'El iPhone 11 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.','/images/products/img-samsung-galaxy-s10.jpg', 1, default, default);


INSERT INTO comentarios (id, comentario, usuario_id, producto_id, created_at, update_at) VALUES (default, 'Muy buen celular', 1,1, default, default);
INSERT INTO comentarios VALUES (default, 'Muy buena calidad', 2,1, default, default);
INSERT INTO comentarios VALUES (default, 'Muy mala calidad', 3,1, default, default);
INSERT INTO comentarios VALUES (default, 'Pesimo servicio', 5,1, default, default);
INSERT INTO comentarios VALUES (default, 'Excelente calidad', 1, 2, default, default);
INSERT INTO comentarios VALUES (default, 'Horrible', 2, 2, default, default);
INSERT INTO comentarios VALUES(default, 'Se me rompio el primer dia', 2,2, default, default);
INSERT INTO comentarios VALUES(default, 'Demora mucho el envio', 3,2, default, default);
INSERT INTO comentarios VALUES(default, 'Hermoso!', 4,3, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 5, 3, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 3, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 3, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 4, 4, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 4, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 4, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 4, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 5, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 5, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 5, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 4, 5, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 6, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 6, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 5, 6, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 6, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 7, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 7, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 4, 7, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 5, 7, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 4, 8, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 5, 8, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 8, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 8, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 4, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 3, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 2, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 1, 9, default, default);
INSERT INTO comentarios VALUES(default, 'Malisimo', 5, 9, default, default);
