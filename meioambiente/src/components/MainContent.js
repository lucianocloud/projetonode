import React from 'react';
import yourImage from '../assets/your-image.jpg';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const MainContent = () => {
  return (
    <main>
      <img src={yourImage} alt="Main Content" className="main-image" />
      <section className="environment-section">
        <h1>Importância da Preservação Ambiental</h1>
        <p>
          A preservação do meio ambiente é essencial para garantir a qualidade de vida das futuras gerações. 
          Devemos nos conscientizar sobre o impacto de nossas ações no planeta e adotar práticas sustentáveis.
        </p>
        <p>
          A poluição, o desmatamento e a mudança climática são alguns dos desafios mais críticos que enfrentamos. 
          Cada um de nós pode contribuir para a proteção do meio ambiente através de pequenas ações diárias, 
          como a reciclagem, a redução do consumo de plástico e o uso consciente dos recursos naturais.
        </p>
        <p>
          É responsabilidade de todos nós cuidar do planeta e garantir que ele permaneça habitável e saudável 
          para as próximas gerações.
        </p>
      </section>
      <section className="images-section">
        <h2>Imagens Relacionadas ao Meio Ambiente</h2>
        <div className="images-container">
          <img src={image1} alt="Environmental Image 1" className="flex-image" />
          <img src={image2} alt="Environmental Image 2" className="flex-image" />
          <img src={image3} alt="Environmental Image 3" className="flex-image" />
          <img src={image4} alt="Environmental Image 4" className="flex-image" />
        </div>
      </section>
    </main>
  );
};

export default MainContent;
