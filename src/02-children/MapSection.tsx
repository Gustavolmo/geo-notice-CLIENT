import { useState } from "react";

function MapSection({ setCurrentChatId }: any) {
  const savedSelection = localStorage.getItem('savedSelection')
  const [currentSelection, setCurrentSelection] = useState(savedSelection || 'centralen')

  return (
    <section className="map-section">
      <div className="map-section__images">
        <h3>Centralen</h3>
        <img
          onClick={() => {
            setCurrentChatId('centralen', 'Centralen')
            setCurrentSelection('centralen')
          }}
          className={currentSelection === 'centralen' ? '' : 'image-faded'}
          src="https://www.visitstockholm.com/media/images/8dcf0499d2d741e7a0587fcd94d85875.width-1280.jpg"
          alt="Center"
        />
        <h3>Gamla Stan</h3>
        <img
          onClick={() => {
            setCurrentChatId('gamlastan', 'Gamla Stan')
            setCurrentSelection('gamlastan')
        }}
          className={currentSelection === 'gamlastan' ? '' : 'image-faded'}
          src="https://blog.radissonblu.com/wp-content/uploads/2013/12/Gamla-Stan-square.jpg"
          alt="Gamla Stan"
        />
        <h3>Söder</h3>
        <img
          onClick={() => {
            setCurrentChatId('soder', 'Söder')
            setCurrentSelection('soder')
          }}
          className={currentSelection === 'soder' ? '' : 'image-faded'}
          src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/6e/d7/ad.jpg"
          alt="Söder"
        />
      </div>
    </section>
  );
}

export default MapSection;
