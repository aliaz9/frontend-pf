import React from 'react'
import styles from '../styles/Questions.module.css'

export default function Questions () {
  return (
        <div className={styles.containerQuestion}>

            <div className={styles.containerQuestionLeft}>

                <div className={styles.containerQuestionDescription}>
                    <div className={styles.questionSeparator}>
                        <hr />
                    </div>

                    <details>
                        <summary>
                            <div className={styles.question}>
                                <p>¿Mi compra tiene garantía?</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className={styles.questionDescription}>
                            Todos los productos de nuestra tienda tienen 12 meses de garantía. Puedes cambiar tu producto de forma directa dentro del tiempo de garantía.
                        </div>
                    </details>
                </div>

                <div className={styles.containerQuestionDescription}>
                    <div className={styles.questionSeparator}>
                        <hr />
                    </div>

                    <details>
                        <summary>
                            <div className={styles.question}>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className={styles.questionDescription}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                </div>

                <div className={styles.containerQuestionDescription}>
                    <div className={styles.questionSeparator}>
                        <hr />
                    </div>

                    <details>
                        <summary>
                            <div className={styles.question}>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className={styles.questionDescription}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                </div>

                <div className={styles.containerQuestionDescription}>
                    <div className={styles.questionSeparator}>
                        <hr />
                    </div>

                    <details>
                        <summary>
                            <div className={styles.question}>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className={styles.questionDescription}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                    <div className={styles.questionSeparator}>
                        <hr />
                    </div>
                </div>

            </div>

            <div className={styles.containerQuestionRight}>
                <h2>Preguntas Frecuentes</h2>
                <div className={styles.cardQuestion}>
                    <img src="/images/questions.png" alt="" />
                    <p>Estas son las preguntas que escuchamos con mas frecuencia.</p>
                </div>
            </div>
        </div>
  )
}
