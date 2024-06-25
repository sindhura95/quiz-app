import React from 'react';
import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
        <img src={logoImg} alt=""/>
        <h1>React Quiz</h1>
    </header>
  )
}