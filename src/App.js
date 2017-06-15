import React from 'react';
import Calendar from './Calendar'
import './css/bootstrap.min.css';
import './css/small-business.css';
import Navbar from './Navbar';
import Footer from './Footer';

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
