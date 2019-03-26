import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../share/header';
import PlayList from '../home/playList';
import Footer from '../share/footer';
import LastedPost from '../blog/lasted';

import pico from '../../images/pico.svg';
import correo from '../../images/correo.svg';
import about from '../../images/about.png';
import logoBeats from '../../images/logo-beats.svg';
import beatsMobile from '../../images/beats-movil.png';
import priceImg from '../../images/beats_packs_center.png';

import { contentTypes } from '../share/settings';

import MetaTags from 'react-meta-tags';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortada: true,
      titleWeb: 'Beats música',
      slogan: 'Canciones personalizadas',
      descriptionWeb: 'Somos una Startup dedicada a la creación de canciones personalizadas.',
      beatsIcon: 'https://beats-logo.png',
      beatsPortada: 'https://beatsmusica.com/static/media/portada.a4759fd8.png',
      urlWeb: 'https://beatsmusica.com'
    };
  }
  showPortada = () => {
    this.setState({
      showPortada: true
    });
  };
  componentDidMount = () =>{
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="w_100">
        <MetaTags>
          <title>Beats música - Canciones personalizadas</title>
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
        <Header />
        
        <section
          className={
            'portadaHome section_bottom_center w_100 full_min_h ' +
            (this.state.showPortada ? 'showPortada' : null)
          }
        >
          <h2 className="w_80 w_100_desktop purpleColor spaceLetter font_biggest font_light marginBottom_small section_middle_center">
            VIVE <img src={pico} alt="Pico" className="img_medium img_small_mobile" /> MÚSICA
          </h2>
          <h3 className="w_80 w_60_desktop align_center purpleColor spaceLetter textHome">
            "Cuando el sentimiento que tienes es tan grande que no bastan las palabras utiliza el
            lenguaje de la música"
          </h3>
        </section>
        <section id="nosotros" className="about section_middle_center w_100 purpleBackground full_min_h">
          <img src={about} alt="About" className="person" />
          <div className="textAbout section_middle_center w_31_desktop w_80">
            <img src={logoBeats} alt="Logo2" className="img_big img_normal_mobile" />
            <p className="w_100 whiteColor align_center">
              Somos una Startup dedicada a la creación de canciones personalizadas. Tu historia será
              el inicio de este camino, tu historia será la protagonista de la mejor canción que
              vamos a componer juntos. Con Beats, tú lo decides todo, escoge el género musical que
              prefieras y comienza a vivir tu música de una manera diferente.
            </p>
          </div>
        </section>
        <div id="escuchalo" className="section_middle_center full_min_h w_100 playList">
          <PlayList />
        </div>

        <div className="section_middle_center w_100 purpleBackground full_min_h">
          <div className="w_80 section_middle_justify">
            <section className="w_48_desktop section_middle_center w_100">
              <img src={beatsMobile} alt="Beats Móvil" className="img_big_mobile w_100_desktop" />
            </section>
            <section className="w_100 w_49_desktop section_middle_center">
              <h2 className="whiteColor align_center w_100 section_middle_center font_big font_light">
                <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats Móvil
              </h2>
              <p className="whiteColor align_center w_100">
                Creamos y grabamos tu canción en versión acústica desde un dispositivo móvil y te la enviamos al whatsapp en un plazo máximo
                de 24 horas.
              </p>
              <Link to="/beatsmovil" className="button font_normal">
                A sólo S/. {parseFloat(contentTypes.movilBeats).toFixed(2)}
              </Link>
            </section>
          </div>
        </div>

        <div id="precios" className="prices full_min_h w_100 section_middle_center">
          <div className="w_70_desktop section_middle_justify w_70">
            <section className="w_30_desktop w_100 section_middle_center whiteColor">
              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Beats Acústicos
              </h3>
              <span className="font_small">(versión acústica en estudio)</span>
              <div className="w_100 align_center marginTop_tiny font_big">
                S/. {contentTypes.kitSoAcoustic}
              </div>

              <h2 className="marginVertical_normal font_big_mobile degradado sectionTitle font_light">
                Kit Solista
              </h2>

              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Todo Beats
              </h3>
              <span className="font_small">(banda completa en estudio)</span>
              <div className="w_100 align_center marginTop_tiny font_big">
                S/. {contentTypes.kitSoTodBeats}
              </div>
            </section>
            <div className="w_100 section_middle_center w_17_desktop">
              <img src={priceImg} alt="PriceImage" className="w_100 img_medium_mobile" />
            </div>
            <section className="w_30_desktop w_100 section_middle_center whiteColor">
              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Beats Acústicos
              </h3>
              <span className="font_small">(versión acústica en estudio)</span>
              <div className="w_100 align_center marginTop_tiny font_big">
                S/. {contentTypes.kitDuAcoustic}
              </div>

              <h2 className="marginVertical_normal font_big_mobile purpleBackground sectionTitle font_light">
                Kit a Dúo
              </h2>

              <h3 className="w_100 align_center marginBottom_tiny font_medium font_light">
                Todo Beats
              </h3>
              <span className="font_small">(banda completa en estudio)</span>
              <div className="w_100 align_center marginTop_tiny font_big">
                S/. {contentTypes.kitDuTodBeats}
              </div>
            </section>
          </div>
        </div>

        <div className="preciosCorporativos section_middle_center full_min_h">
          <div className="wrappBussiness section_middle_center">
            <h2 className="whiteColor font_light font_big section_middle_center w_60 marginBottom_biggest w_80">
              <img src={pico} alt="Pico" className="img_normal img_small_mobile" /> Beats para Empresas
            </h2>
            <p className="whiteColor font_small w_50_desktop w_80 align_center">
              La música es la mejor manera para generar engagement con tu marca. Una canción personalizada es la herramienta que necesitas para atraer más clientes a tu negocio.
            </p>
            <div className="section_middle_center w_60">
              <Link to="/corporativo" className="button font_small align_center">
                Consulta nuestros precios&nbsp;corporativos aquí
              </Link>
            </div>
          </div>
        </div>

        <div className="w_100 playList section_middle_center spaceInBottom_gigant spaceInTop_big">
          <h2 className="whiteColor font_big font_light marginBottom_small marginHorizontal_small align_center marginTop_big">
            ¿Estás listo para empezar?
          </h2>
          <div className="section_middle_center w_100 marginBottom_big">
            <Link to="/pedido" className="button font_small">
              Pide tu canción
            </Link>
          </div>
        </div>
        <div id="blog" className="section_middle_center w_100 purpleBackground full_min_h">
          <h2 className="whiteColor font_big w_100 font_light marginBottom_small marginHorizontal_small align_center marginTop_big">
            Life is Beats, My Blog is yours!
          </h2>
          <p className="w_80 w_50_desktop whiteColor font_small marginVertical_small align_center">Bienvenidos al blog oficial de Beats. Aquí te conectarás con ideas novedosas, detalles especiales creados para ti, y diferentes tendencias alrededor del mundo. Comienza a descubrir todo lo que nuestro blog ha preparado para ti.</p>

          <LastedPost />
          
        </div>
        <div className="w_100 section_middle_center purpleBackground spaceInVertical_big">
          <p className="whiteColor w_80 align_center marginBottom_big marginTop_small font_big font_medium_mobile">
            Para más información puedes escribirnos aquí:
          </p>
          <a href="mailto:contacto@beatsmusica.com" className="w_80">
            <img src={correo} alt="Correo" />
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}
