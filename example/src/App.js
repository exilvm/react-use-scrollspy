
import React, { useRef } from 'react';
import useScrollSpy from 'react-use-scrollspy';
import './App.css';

const App = () => {
  const sectionRefs = [useRef(null), useRef(null), useRef(null)];
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -80,
  });
  const activeNav = (i) => {return (activeSection === i ? 'active' : '')};
  return (
    <>
      <nav>
        <span
          className={activeNav(0)}
        >
          Section 1
        </span>
        <span
          className={activeNav(1)}
        >
          Section 2
        </span>
        <span
          className={activeNav(2)}
        >
          Section 3
        </span>
      </nav>
      <section className="app-section" style={{backgroundColor: 'red'}} ref={sectionRefs[0]}>
        <h1>Section 1</h1>
      </section>
      <section className="app-section" style={{backgroundColor: 'blue'}} ref={sectionRefs[1]}>
        <h1>Section 2</h1>
      </section>
      <section className="app-section" style={{backgroundColor: 'green'}} ref={sectionRefs[2]}>
        <h1>Section 3</h1>
      </section>
    </>
  );
}

export default App;
