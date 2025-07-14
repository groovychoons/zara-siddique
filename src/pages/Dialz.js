import React from 'react';

const Dialz = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Dialz: Cardiff NLP Workshop</h1>
    <br />
      <section style={{ marginBottom: '2rem' }}>
        <iframe
          src="https://docs.google.com/presentation/d/1a1KmfAkNS-pOboQSF7-7VQYK72Uqn7-cEOwthfaoEvM/embed?start=false&loop=false&delayms=3000"
          frameBorder="0"
          width="960"
          height="569"
          allowFullScreen
          title="Dialz Presentation Slides"
        ></iframe>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Resources</h2>
        <ul>
            <li>
                <a href="https://colab.research.google.com/drive/1i9Fba5ss117Yf8cJFsaPvziGUha3HmG6?usp=sharing" target="_blank" rel="noopener noreferrer">
                Colab Notebook
                </a>
            </li>
          <li>
            <a href="https://github.com/cardiffnlp/dialz" target="_blank" rel="noopener noreferrer">
              Dialz GitHub Repository
            </a>
          </li>
          <li>
            <a href="https://cardiffnlp.github.io/dialz/" target="_blank" rel="noopener noreferrer">
              Dialz Documentation
            </a>
          </li>
          <li>
            <a href="https://arxiv.org/abs/2505.06262" target="_blank" rel="noopener noreferrer">
              Dialz Paper (arXiv)
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dialz;
