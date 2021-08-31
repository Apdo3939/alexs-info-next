import Head from 'next/head';
import Script from 'next/script';

function HomePage() {
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
            <section className="top" id="top">
                <div className="max-width">
                    <div className="top-content">
                        <div className="text-1">Temos a solução</div>
                        <div className="text-2">de acordo com a sua empresa</div>
                        <div className="text-3">Podemos ajudar a sua empresa!</div>
                        <a href="#contact">Entrar em Contato</a>
                    </div>
                </div>
            </section>
            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">Serviços</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code"></i>
                                <div className="text">
                                    All Code
                                </div>
                                <p>Este serviço é destinado para empresas que necessita de auxilio em sua inclusão num mundo
                                    digital mais moderno em todas as areas!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-laptop-code"></i>
                                <div className="text">
                                    Desktop
                                </div>
                                <p>Este serviço é destinado para empresas que necessita de auxilio em sua inclusão num mundo
                                    digital mais moderno na area somente relacionado a web desktop!</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-mobile-alt"></i>
                                <div className="text">
                                    Mobile
                                </div>
                                <p>Este serviço é destinado para empresas que necessita de auxilio em sua inclusão num mundo
                                    digital mais moderno na area somente relacionado a mobile!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Contato</h2>
                    <div className="contact-content">
                        <div className="column left">
                            <p>
                                Por favor preencher todo o formulário de acordo com suas necessidades da sua empresa!!!
                            </p>
                            <div className="icons">
                                <div className="row">
                                    <i className="fas fa-user"></i>
                                    <div className="info">
                                        <div className="head">Empresa</div>
                                        <div className="sub-title">Alex's Info</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="info">
                                        <div className="head">Endereço</div>
                                        <div className="sub-title">Rua da felicidade casa 100</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <i className="fas fa-envelope"></i>
                                    <div className="info">
                                        <div className="head">Email</div>
                                        <div className="sub-title">alexinfo@email-exemplo.com</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column right">
                            <div className="text">
                                Mensagem de contato
                            </div>
                            <form>
                                <div className="fields">
                                    <div className="field nome">
                                        <input type="text" placeholder="Digite o nome" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Digite o email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Digite o assunto" required />
                                </div>
                                <div className="field textarea">
                                    <textarea cols='30' rows="10" type="text" placeholder="Digite o conteúdo"
                                        required></textarea>
                                </div>
                                <div className="button-area">
                                    <button type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <span>Created by <a href="#">Alexandre Pereira</a> </span>
            </footer>

            <Script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js' strategy="beforeInteractive" />
            <Script src="custom.js" strategy='afterInteractive' />
        </>
    )
}

export default HomePage