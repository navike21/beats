import React, { Component } from 'react';
import { url } from '../share/settings';
import { Link } from 'react-router-dom';

export default class LastedPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoBlog: [],
      count: 0
    };
  }

  componentDidMount = () =>{
    this._getListBlog()
  }

  _getListBlog = () =>{
    fetch( `${url.link}/blog/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: `JWT ${token}`
      },
    })
    .then(result => result.json())
    .then(result =>{
      this.setState({
        infoBlog: result.results
      })
      console.log(this.state.infoBlog)
    })
  }
  
  render() {
    return (
      <div className="section_top_justify w_85 w_65_desktop marginTop_big lastBlog">
        {this.state.infoBlog.map((item, index) =>{
          let word = item.text.replace(/<[^>]*>?/g, '');
          let splitWord = word.split(' ');
          let wordFinal = '';
          for (let i = 0; i < 50; i++) {
            if( splitWord.length > i){
              wordFinal = wordFinal + ' ' + splitWord[i]; 
            }
          }

          wordFinal = wordFinal + '...';

          return(
            index < 3 
            ? <div key={index} className={index === 0 ? 'itemBlogLast w_100 w_95_desktop' : 'itemBlogLast w_100'}>
                <div className="section_middle_center w_100 imagePortada">
                  <img src={item.portada} alt={item.title} className="w_100" />
                </div>
                <h2 className="whiteColor font_normal marginVertical_small">{item.title}</h2>
                {index === 0 
                  ? <div className="marginBottom_big whiteColor align_justify font_small" dangerouslySetInnerHTML={{__html: wordFinal}}></div>
                  : ''
                }
                <Link to={"/blog/" +item.slug} className="button font_small align_center marginBottom_small">
                  Lee el artículo
                </Link>
              </div> 
            : ''
          )
        })}
      </div>
    );
  }
}
