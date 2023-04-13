CREATE SCHEMA MercadoLibre;
USE MercadoLibre;
CREATE TABLE usuarios (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (200) NOT NULL,
    email VARCHAR (200) NOT NULL,
    contraseña VARCHAR (200) NOT NULL,
    foto_perfil VARCHAR (200) NOT NULL,
    fecha DATE NOT NULL,
    DNI INT(200) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
ALTER TABLE productos
MODIFY descripcion  VARCHAR (500) NOT NULL;

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR (200) NOT NULL,
descripcion VARCHAR (200) NOT NULL,
usuarios_id INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);
CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR (200) NOT NULL,
usuarios_id INT UNSIGNED,
productos_id INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_id) REFERENCES usuarios(id),
FOREIGN KEY (productos_id) REFERENCES productos(id)
);	


INSERT INTO usuarios (id, nombre, email, contraseña, foto_perfil, fecha, DNI, createdAt, updateAt) VALUES (1, 'Juan Perez','juanperez12@gmail.com', 'Pepito1203', 'Foto de Juan', '1998-10-05', 41267865, default, default);
INSERT INTO usuarios VALUES (2, 'Sofia Lopez', 'solopez@gmail.com', 'Racing2004', 'Foto de Sofia', '2004-11-30', 45237569, default, default);
INSERT INTO usuarios VALUES (3, 'Jose Legarre', 'josecito23@gmail.com', 'Firulais8902', 'Foto de Jose', '2000-04-04', 42409207, default, default);
INSERT INTO usuarios VALUES (4, 'Martin Yukelson', 'martinyukel23@gmail.com', 'Cuba2090', 'Foto de Martin', '1971-12-10', 22332789, default, default);
INSERT INTO usuarios VALUES (5, 'Lara Rojas', 'lararojas30@gmail.com', 'Rony67', 'Foto de Lara', '1962-01-30', 16009420, default, default);

INSERT INTO productos (id, nombre, descripcion, usuarios_id, createdAt, updateAt) VALUES (1, 'iPhone 13 Pro Max', 'El iPhone 13 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 1, default, default);
INSERT INTO productos VALUES (2, 'iPhone 14 Pro Max', 'El iPhone 14 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 4, default, default);
INSERT INTO productos VALUES (3, 'iPhone 13 Pro','El iPhone 13 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 3, default, default);
INSERT INTO productos VALUES (4, 'iPhone 14 Pro', 'El iPhone 14 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 2, default, default);
INSERT INTO productos VALUES (5, 'iPhone 12 Pro Max', 'El iPhone 12 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 5, default, default);
INSERT INTO productos VALUES (6, 'iPhone 12 Pro', 'El iPhone 12 Pro es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 2, default, default);
INSERT INTO productos VALUES (7, 'iPhone 13 Mini', 'El iPhone 13 Mini es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 2, default, default);
INSERT INTO productos VALUES (8, 'iPhone 14 Plus', 'El iPhone 14 Plus es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 4, default, default);
INSERT INTO productos VALUES(9, 'iPhone 11 Pro Max', 'El iPhone 11 Pro Max es el nuevo smartphone de Apple que llega con una pantalla OLED de 6,7 pulgadas con resolución 2778 x 1284 píxeles, procesador Apple A15 Bionic, 6 GB de RAM, 128 GB de almacenamiento interno, cámara triple de 12 MP + 12 MP + 12 MP, cámara frontal de 12 MP, batería de 3687 mAh, lector de huellas en pantalla, carga inalámbrica y resistencia al agua IP68.', 1, default, default);

INSERT INTO comentarios (id, comentario, usuarios_id, productos_id, createdAt, updateAt) VALUES (1, 'Muy buen celular', 1,1, default, default);
INSERT INTO comentarios VALUES (2, 'Muy buena calidad', 2,1, default, default);
INSERT INTO comentarios VALUES (3, 'Muy mala calidad', 3,1, default, default);
INSERT INTO comentarios VALUES (4, 'Pesimo servicio', 5,1, default, default);
INSERT INTO comentarios VALUES (5, 'Excelente calidad', 1, 2, default, default);
INSERT INTO comentarios VALUES (6, 'Horrible', 2, 2, default, default);
INSERT INTO comentarios VALUES(7, 'Se me rompio el primer dia', 2,2, default, default);
INSERT INTO comentarios VALUES(8, 'Demora mucho el envio', 3,2, default, default);
INSERT INTO comentarios VALUES(9, 'Hermoso!', 4,3, default, default);
INSERT INTO comentarios VALUES(10, 'Malisimo', 5, 3, default, default);
INSERT INTO comentarios VALUES(11, 'Malisimo', 3, 3, default, default);
INSERT INTO comentarios VALUES(12, 'Malisimo', 1, 3, default, default);
INSERT INTO comentarios VALUES(13, 'Malisimo', 4, 4, default, default);
INSERT INTO comentarios VALUES(14, 'Malisimo', 2, 4, default, default);
INSERT INTO comentarios VALUES(15, 'Malisimo', 1, 4, default, default);
INSERT INTO comentarios VALUES(16, 'Malisimo', 2, 4, default, default);
INSERT INTO comentarios VALUES(17, 'Malisimo', 2, 5, default, default);
INSERT INTO comentarios VALUES(18, 'Malisimo', 1, 5, default, default);
INSERT INTO comentarios VALUES(19, 'Malisimo', 3, 5, default, default);
INSERT INTO comentarios VALUES(20, 'Malisimo', 4, 5, default, default);
INSERT INTO comentarios VALUES(21, 'Malisimo', 3, 6, default, default);
INSERT INTO comentarios VALUES(22, 'Malisimo', 1, 6, default, default);
INSERT INTO comentarios VALUES(23, 'Malisimo', 5, 6, default, default);
INSERT INTO comentarios VALUES(24, 'Malisimo', 2, 6, default, default);
INSERT INTO comentarios VALUES(25, 'Malisimo', 3, 7, default, default);
INSERT INTO comentarios VALUES(26, 'Malisimo', 2, 7, default, default);
INSERT INTO comentarios VALUES(27, 'Malisimo', 4, 7, default, default);
INSERT INTO comentarios VALUES(28, 'Malisimo', 5, 7, default, default);
INSERT INTO comentarios VALUES(29, 'Malisimo', 4, 8, default, default);
INSERT INTO comentarios VALUES(30, 'Malisimo', 5, 8, default, default);
INSERT INTO comentarios VALUES(31, 'Malisimo', 1, 8, default, default);
INSERT INTO comentarios VALUES(32, 'Malisimo', 3, 8, default, default);
INSERT INTO comentarios VALUES(33, 'Malisimo', 3, 9, default, default);
INSERT INTO comentarios VALUES(34, 'Malisimo', 2, 9, default, default);
INSERT INTO comentarios VALUES(35, 'Malisimo', 1, 9, default, default);
INSERT INTO comentarios VALUES(36, 'Malisimo', 4, 9, default, default);
INSERT INTO comentarios VALUES(37, 'Malisimo', 3, 10, default, default);
INSERT INTO comentarios VALUES(38, 'Malisimo', 2, 10, default, default);
INSERT INTO comentarios VALUES(39, 'Malisimo', 1, 10, default, default);
INSERT INTO comentarios VALUES(40, 'Malisimo', 5, 10, default, default);