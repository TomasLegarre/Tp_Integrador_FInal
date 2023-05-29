/* El modelo es una func q recibe 2 parametros (sequelize, dataTypes)*/

module.exports = function (sequelize, dataTypes) {
    /*                      2 parametros q son Obj Lit. el 1ero me tre un metodo q me permite insertar un modelo. el 2do me permite utilizar ESE objeto p/ traerme propiedades para yo crear mi MAPEO en las columnas. */
   

        /*apodo para requerirlo en el controlador  */
    let alias  = "Usuario" ; 

        /*mapeo exacto d/ cada una de mis columnas */
    let cols   = { 
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            nombre:{
                type: dataTypes.STRING,
            },
            email:{
                type: dataTypes.STRING,
            },
            contraseña:{
                type: dataTypes.STRING,
            },
            foto_perfil:{
                type: dataTypes.STRING,
            },
            fecha:{
                type: dataTypes.DATE,
            },
            dni:{
                type: dataTypes.INTEGER,
            }
    
        }  ; 
    
   
        /*Obj literal para configurar la tabla */
    let config = {
            tableName: 'usuarios',
            timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
            underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
        };
    
    const Usuario = sequelize.define(alias,cols,config); 

     /* Crear relacion */
     Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
         as: "productos",
         foreingKey: "usuarios_id"
        })
     };
    return Usuario;

    };


    
