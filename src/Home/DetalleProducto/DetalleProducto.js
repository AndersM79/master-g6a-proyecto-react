import React from 'react'; 

class DetalleProducto extends React.Component {

    constructor(props){
        super(props);
        this.state =  {
                nombre: null,
                descripcion: null,
                price: 0,
                isActive: false,
                category: null
        }
    }

    componentDidMount(){
        fetch('https://ecomerce-master.herokuapp.com/api/v1/item/'+ this.props.idItem)
        .then(response => response.json())
        .then(data => this.setState({
            nombre: data.product_name,
            descripcion: data.description,
            price: data.price,
            isActive: !data.isActive,
            category: data.category
        }))
    }

    render() {
        return (
            <div>
                <h3>Detalle Producto</h3>
                <div>
                    <h4>{this.state.nombre}</h4>
                    <p>{this.state.descripcion}</p>
                    <p>${this.state.price}.00</p>
                    <p>{this.state.category}</p>
                    <image src={this.state.image}></image>
                    { this.state.isActive ? <button>Comprar</button> : <p>Agotado</p>}
                </div>
            </div>
        )
    }
}

export default DetalleProducto;