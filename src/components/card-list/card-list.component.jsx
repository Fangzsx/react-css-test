import { Component } from 'react';
import CardContainer from '../card-container/card-container.component'
import './card-list.styles.css';

class CardList extends Component{

    render(){
        const { list } = this.props;
        console.log(this.props);

        return (
            <div className='card-list'>
                {
                    list.map(item => {
                        return (
                            <CardContainer src={item.thumbnailUrl} text={item.title}/>
                        )
                    })
                }
            </div>

        )
    }
}

export default CardList;
