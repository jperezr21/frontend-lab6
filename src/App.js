import React from 'react';
import Navbar from './Navbar';
import Calendar from './Calendar';
import Footer from './Footer';
import './css/bootstrap.min.css';
import './css/small-business.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App container">
          <div className="row">
            <div className="col-lg-10">
              <h3>Calendario de actividades</h3>
              <Calendar />
            </div>
          </div>
          <footer className="Footer">
            <div className="row">
              <div className="col-lg-12">
                <Footer />
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
