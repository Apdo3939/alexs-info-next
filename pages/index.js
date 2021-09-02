import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';

function HomePage({ data }) {
    const [budget, setBudget] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [load, setLoad] = useState({
        formSave: false,
        type: '',
        message: ''
    });

    const onChangeInput = e => setBudget({ ...budget, [e.target.name]: e.target.value });

    const sendBudget = async e => {
        e.preventDefault();
        setLoad({ formSave: true });
        try {
            const res = await fetch('http://localhost:8081/contact', {
                method: 'POST',
                body: JSON.stringify(budget),
                headers: { 'Content-Type': 'application/json' }
            });
            const response = await res.json();
            if (response.error) {
                setLoad({
                    formSave: false,
                    type: 'error',
                    message: response.message
                });
            } else {
                setLoad({
                    formSave: false,
                    type: 'success',
                    message: response.message
                });
            }
        } catch (error) {
            setLoad({
                formSave: false,
                type: 'error',
                message: 'Erro: Orçamento não enviado. Tente mais tarde.'
            });
        }
    }

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
                <title>Alex's info</title>
            </Head>
            <nav className="navbar">
                <div className="max-width">
                    <div className="logo">
                        <a href="#top">Alex's Info</a>
                    </div>
                    <ul className="menu">
                        <li><a href="#top" className="menu-btn">Home</a></li>
                        <li><a href="#services" className="menu-btn">Serviços</a></li>
                        <li><a href="#contact" className="menu-btn">Contato</a></li>
                    </ul>
                    <div className="menu-btn">
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
            <section className="img-top top" id="top">
                <style>
                    {`.img-top{
                        background-image: url(`+ data.url + data.data.image_top + `);
                        background-repeat: no-repeat;
                        background-position: center;
                    }`}
                </style>
                <div className="max-width">
                    <div className="top-content">
                        <div className="text-1">{data.data.title_top_one}</div>
                        <div className="text-2">{data.data.title_top_two}</div>
                        <div className="text-3">{data.data.title_top_three}</div>
                        <a href="#contact">{data.data.btn_title_top}</a>
                    </div>
                </div>
            </section>
            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">{data.data.ser_title}</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className={data.data.ser_icon_one}></i>
                                <div className="text">
                                    {data.data.ser_title_one}
                                </div>
                                <p>{data.data.ser_desc_one}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className={data.data.ser_icon_two}></i>
                                <div className="text">
                                    {data.data.ser_title_two}
                                </div>
                                <p>{data.data.ser_desc_two}</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className={data.data.ser_icon_three}></i>
                                <div className="text">
                                    {data.data.ser_title_three}
                                </div>
                                <p>{data.data.ser_desc_three}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">{data.data.cont_title}</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <p>
                                {data.data.cont_desc}
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className={data.data.cont_icon_emp}></i>
                                    <div className="info">
                                        <div className="head">{data.data.cont_title_emp}</div>
                                        <div className="sub-title">{data.data.cont_name_emp}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className={data.data.cont_icon_end}></i>
                                    <div className="info">
                                        <div className="head">{data.data.cont_title_end}</div>
                                        <div className="sub-title">{data.data.cont_name_end}</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className={data.data.cont_icon_email}></i>
                                    <div className="info">
                                        <div className="head">{data.data.cont_title_email}</div>
                                        <div className="sub-title">{data.data.cont_name_email}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">
                                {data.data.cont_title_form}
                                {load.type === 'error' ? <span className='alert-danger'>{load.message}</span> : ''}
                                {load.type === 'success' ? <span className='alert-success'>{load.message}</span> : ''}
                            </div>

                            <form onSubmit={sendBudget}>
                                <div className="fields">
                                    <div className="field nome">
                                        <input
                                            type="text"
                                            name='name'
                                            onChange={onChangeInput}
                                            placeholder="Digite o nome"
                                            required />
                                    </div>
                                    <div className="field email">
                                        <input
                                            type="email"
                                            name='email'
                                            onChange={onChangeInput}
                                            placeholder="Digite o email"
                                            required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input
                                        type="text"
                                        name='subject'
                                        onChange={onChangeInput}
                                        placeholder="Digite o assunto"
                                        required />
                                </div>
                                <div className="field textarea">
                                    <textarea
                                        cols='30'
                                        rows="10"
                                        type="text"
                                        name='content'
                                        onChange={onChangeInput}
                                        placeholder="Digite o conteúdo"
                                        required></textarea>
                                </div>
                                <div className="button-area">
                                    {load.formSave ? 'Enviando...' : <button type="submit">Enviar</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>{data.data.footer_desc} <a href={data.data.footer_link}>{data.data.footer_name}</a> </span>
            </footer>

            <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' strategy="beforeInteractive" />
            <Script src="custom.js" strategy='afterInteractive' />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch(`http://localhost:8081`);
    const data = await response.json();
    return { props: { data } }
}

export default HomePage