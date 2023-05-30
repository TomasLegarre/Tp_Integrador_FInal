/* El modelo es una func q recibe 2 parametros (sequelize, dataTypes)*/

module.exports = function (sequelize, dataTypes) {
    /* 2 parametros q son Obj Lit. el 1ero me tre un metodo q me permite insertar un modelo. el 2do me permite utilizar ESE objeto p/ traerme propiedades para yo crear mi MAPEO en las columnas. */
     
     let alias  = "Comentario" ; 

        /*mapeo exacto d/ cada una de mis columnas */
    let cols   = { 
            id:{
                autoIncrement: true,
                primaryKey: true,
                type: dataTypes.INTEGER,
            },
            comentario:{
                type: dataTypes.STRING,
            },
            usuario_id:{
                type: dataTypes.INTEGER,
            },
            producto_id:{
                type: dataTypes.INTEGER,
            },
    
        }  ; 
    
   
        /*Obj literal para configurar la tabla */
    let config = {
            tableName: 'comentarios',
            timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
            underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
        };
    
    const Comentario = sequelize.define(alias,cols,config); /*se guarda un Obj lit en la var "Usuarios" */
/*                  seq es un parametro q es un Obj lit, q tiene un metodo principal (define) q ayuda a definir mi modelo con el alias,con el mapeo de las columnas y con la config. cuando crea ese modelo, dsp lo retorno para utilizarlo en el controlador de seq  */
    
        Comentario.associate = function(models) {
            // pertenece a //
            Comentario.belongsTo(models.Producto, {
                as : "producto",
                foreingKey : "producto_id" // usar siempre el fk de la tabla donde estoy parado, este caso es USAURIO y el unico id el el PK, por lo tanto utilizo ese
            }),
            Comentario.belongsTo(models.Usuario, {
                as : "usuario", 
                foreingKey : "usuario_id" // chequiar si esta bien el fk//
            })
        }

    return Comentario;

    };