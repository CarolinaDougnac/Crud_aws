import React from "react";

const ListaProdB = ({prodBs}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>cod_Barra</th>
                    <th>ID_marca</th>
                    <th>ID_tienda</th>
                    <th>ID_bodega</th>
                </tr>
            </thead>
            <tbody>
                {prodBs.map(prodB => (
                   <tr key={prodB.id_productoBasico}>
                       <th>{prodB.id_productoBasico}</th>
                       <th>{prodB.nombre}</th>
                       <th>{prodB.cod_barra}</th>
                       <th>{prodB.id_marca}</th>
                       <th>{prodB.id_tienda}</th>
                       <th>{prodB.id_bodega}</th>
                   </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ListaProdB;