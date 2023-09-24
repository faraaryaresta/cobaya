import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      

      <div className="about">
          <h1 className="text-center title-sec pt-5">About Us</h1>
          <div className="container py-5">
            <div className="row">
              <div className="col-md-5 text-center">
                  <img src={logo}
                  alt="laundry"
                  className="img img-fluid"/>
              </div>
              <div className="col-md-7">
                <p className='aboutschools'>
                  Di Era Modern ini, kami melihat bahwa banyak orang tua yang harus bekerja atau melakukan aktifitas yang penting sehingga banyak diantara mereka yang kekurangan waktu dan tenaga untuk merawat anak mereka.<br/><br/>
                  Melihat kebutuhan seperti ini maka, DayCare terpanggil untuk memenuhi gap yang ada untuk merawat anak-anak tersebut dan mendirikan pusat penitipan anak yang memiliki fasilitas yang memadai serta sarana pembelajaran bagi anak-anak agar mereka dapat memiliki pengetahuan yang baik dalam hal yang menyangkut SQ, EQ dan IQ.<br/><br/>
                  DayCare bukan sekedar tempat penitipan anak biasa, kami memiliki komitmen untuk mendidik setiap anak dalam karakter serta melatih kemandirian mereka. Kami terus mengupayakan hal-hal yang memberi kontribusi positif bagi setiap anak yang dipercayakan kepada kami sesuai dengan prinsip core value kami : Love, Fun, Care.<br/><br/>
                  DayCare juga mengutamakan komunikasi yang baik dengan setiap orang tua mengenai perkembangan anak didik kami, Kami sangat menyadari bahwa perkembangan/pertumbuhan yang baik dan positif akan sangat membantu mereka dalam mereka memasuki jenjang berikutnya dalam PreSchool maupun Kindergarten.
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
