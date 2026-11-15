import React from 'react';
import styles from './Intro.module.css';

const Intro: React.FC = () => (
  <section id="intro" className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.textBlock}>
        <p className={styles.greeting}>Привет, я</p>
        <h1 className={styles.name}>Имя Фамилия</h1>
        <p className={styles.role}>Fullstack Developer</p>
        <p className={styles.description}>
          Здесь будет краткое «обо мне»: фокус на разработке веб-сервисов — от API и базы данных
          до интерфейсов. Пока это текст-заглушка.
        </p>
      </div>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>
          <span className={styles.avatarInitials}>FS</span>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
