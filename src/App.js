import logo from './logo.svg';
import {Component} from 'react'
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {


  constructor(){
      super();
      this.state = {
          products : [],
          searchQuery : ''
      }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            this.setState(() => {
                return {
                    products : photos
                }
            },
            () => {
                console.log(this.state);
            }
            )
        })
  }

  onSearchChange = 
                (event) => {
                    const searchQuery = event.target.value.toLowerCase();
                    this.setState(
                        () => {
                            return { searchQuery}
                        },
                        () => {}

                    )
                }
   
  render(){
        
      const {products, searchQuery} = this.state;
      const {onSearchChange} = this;
      const filtered = products.filter(product => {
            return product.title.toLowerCase().includes(searchQuery);
      });

	  return (
	    <div className="App">
          <SearchBox
            className='product-search-box'
            placeholder='search title'
            onChangeHandler={onSearchChange}/>
          <CardList list={filtered}/>
	    </div>
	  );
  }


}

export default App;
