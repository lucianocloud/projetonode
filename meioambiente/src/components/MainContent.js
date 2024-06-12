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
      <section className="additional-content">
        <h2>Ações para Preservar o Meio Ambiente</h2>
        <p>
          Existem várias ações que podemos adotar para ajudar a preservar o meio ambiente. Aqui estão algumas delas:
        </p>
        <ul>
          <li><strong>Reduzir, Reutilizar, Reciclar:</strong> A prática dos 3Rs ajuda a diminuir a quantidade de lixo que produzimos.</li>
          <li><strong>Economizar Água:</strong> Usar a água de forma consciente e evitar desperdícios é crucial.</li>
          <li><strong>Conservar Energia:</strong> Desligar aparelhos eletrônicos quando não estiverem em uso e optar por fontes de energia renováveis.</li>
          <li><strong>Utilizar Transportes Sustentáveis:</strong> Optar por caminhar, andar de bicicleta ou usar transporte público em vez de carros particulares.</li>
          <li><strong>Plantar Árvores:</strong> As árvores ajudam a melhorar a qualidade do ar e a regular o clima.</li>
        </ul>
        <p>
          Ao adotar essas práticas, estamos contribuindo para um futuro mais sustentável e saudável para todos.
        </p>
      </section>
    </main>
  );
};

export default MainContent;
