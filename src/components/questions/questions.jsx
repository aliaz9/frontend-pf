import React from "react";
import './questions.css';


export default function Questions() {
    return ( 
        <div className="containerQuestion">
            
            <div className="containerQuestionLeft">

                <div className="containerQuestionDescription">
                    <div className="questionSeparator">
                        <hr />
                    </div>
                    
                    <details>
                        <summary>
                            <div className="question">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className="questionDescription">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                    {/* <div className="questionSeparator">
                        <hr />
                    </div> */}
                </div>

                <div className="containerQuestionDescription">
                    <div className="questionSeparator">
                        <hr />
                    </div>
                    
                    <details>
                        <summary>
                            <div className="question">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className="questionDescription">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                    {/* <div className="questionSeparator">
                        <hr />
                    </div> */}
                </div>

                <div className="containerQuestionDescription">
                    <div className="questionSeparator">
                        <hr />
                    </div>
                    
                    <details>
                        <summary>
                            <div className="question">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className="questionDescription">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                    {/* <div className="questionSeparator">
                        <hr />
                    </div> */}
                </div>

                <div className="containerQuestionDescription">
                    <div className="questionSeparator">
                        <hr />
                    </div>
                    
                    <details>
                        <summary>
                            <div className="question">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                <img src="/images/add.png" alt="" />
                            </div>
                        </summary>
                        <div className="questionDescription">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Velit placeat ab sed? Sapiente tempore minus obcaecati impedit ducimus ut iusto ipsam vel cumque odit,
                            voluptatibus ipsa numquam nostrum mollitia cupiditate!
                        </div>
                    </details>
                    <div className="questionSeparator">
                        <hr />
                    </div>
                </div>
                
            </div>
            
            <div className="containerQuestionRight">
                <h2>Preguntas Frecuentes</h2>
                <div className="cardQuestion">
                    <img src="/images/questions.png" alt="" />
                    <p>Estas son las preguntas que escuchamos con mas frecuencia.</p>
                </div>
            </div>
        </div>
    )
}
