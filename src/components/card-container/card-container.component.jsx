import { Component } from 'react';

class CardContainer extends Component{

    render(){
        const { src, text } = this.props;

        return(
            <div className='card-container'>
                <img alt={text} src={src}/>
                <p>{text}</p>
            </div>
        )
    }
}
export default CardContainer;
