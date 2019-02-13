import React, { PureComponent } from 'react';
import MetaTags from 'react-meta-tags';
import { url } from '../share/settings';
import Moment from 'react-moment';
// import 'moment-timezone';

import Header from '../share/header';
import Footer from '../share/footer';

export default class DetailBlog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      infoBlog: [],
      titleWeb: '',
      slogan: '',
      descriptionWeb: '',
      beatsIcon: '',
      beatsPortada: '',
      urlWeb: '',
      show: false
    };
  }

  componentDidMount = () =>{
    this._getListBlog();
  }

  _getListBlog = () =>{
    fetch( `${url.link}/blog/${this.state.slug}`, {
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
        infoBlog: result,
        beatsPortada: result.portada,
        titleWeb: result.title,
        show: true
      }, ()=>{
        console.log(this.state.infoBlog)
        let word = this.state.infoBlog.text.replace(/<[^>]*>?/g, '');
        let splitWord = word.split(' ');
        let wordFinal = '';
        for (let i = 0; i < 10; i++) {
          if( splitWord.length > i){
            wordFinal = wordFinal + ' ' + splitWord[i]; 
          }
        }
        this.setState({
          descriptionWeb: wordFinal,
        })
        this._getHtml();
      })
    })
  }

  _getHtml = () =>{
    let div = document.getElementById('textContent');
    let inner = div.getElementsByTagName('p');
    for (let i = 0; i < inner.length; i++) {
      let image = inner[i].getElementsByTagName('img');
      if(image.length !== 0){
        let source = String(image[0].src);
        let urlActual : ''
        if(window.location.port !== null){
          urlActual = window.location.protocol +'//'+ window.location.hostname +':'+ window.location.port;
        }
        else{
          urlActual = window.location.protocol +'//'+ window.location.hostname;
        }
        source = source.replace(urlActual, url.link)

        image[0].src = source;
      }
      
    }
    
  }


  render() {
    return (
      <div className="w_100">
        <Header />
        <MetaTags>
          <title>{this.state.titleWeb + '- Beats música - Canciones personalizadas'}</title>
          <meta name="description" content={this.state.descriptionWeb} />
          <meta property="author" content={this.state.titleWeb} />
          <meta property="copyright" content={this.state.titleWeb} />

          <meta name="handheldFriendly" content="true" />
          <meta name="subject" content={this.state.titleWeb + ' - ' + this.state.slogan} />
          <meta name="language" content="Español" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="classification" content="business" />
          <meta name="url" content={this.state.urlWeb} />
          <meta name="identifier-URL" content={this.state.urlWeb} />
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          <meta name="rating" content="General" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={this.state.urlWeb} />
          <meta property="og:title" content={this.state.titleWeb} />
          <meta property="og:description" content={this.state.descriptionWeb} />
          <meta property="og:locale" content="es_PE" />
          <meta property="og:image" content={this.state.beatsPortada} />
          <meta property="og:image:url" content={this.state.beatsPortada} />
          <meta property="og:image:alt" content={this.state.titleWeb} />
          <meta property="og:site_name" content={this.state.titleWeb} />
          <meta property="fb:app_id" content="341860746216953" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@beats_musica" />
          <meta name="twitter:creator" content="@beats_musica" />
          <meta name="twitter:title" content={this.state.titleWeb} />
          <meta name="twitter:description" content={this.state.descriptionWeb} />
          <meta name="twitter:image" content={this.state.beatsPortada} />

        </MetaTags>
        <div className="w_100 section_top_center full_min_h beatsMovil spaceInBottom_normal spaceInVertical_small">
          <div className="wrappBussiness section_middle_center w_80">
            <div className="w_65_desktop w_100 whiteBackground section_middle_center">
              <div className="portadaBlog section_middle_center w_100">
                <img src={this.state.beatsPortada} alt="" className="w_100" />
              </div>
              <div className="w_90 section_middle_center blogDetail">
                <div className="w_100 font_bold fecha marginBottom_small"><Moment format="ll" date={this.state.infoBlog.published_date} /></div>
                <h1 className="font_medium pinkColor w_100 marginTop_tiny marginBottom_tiny">{this.state.titleWeb}</h1>
                <div id="textContent" className="font_small align_justify w_100" dangerouslySetInnerHTML={{__html: this.state.infoBlog.text}}></div>
                {/* {this.state.show ? this._addUrlimg.bind(this) : ''} */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
