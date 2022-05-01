import facebook from "../../res/social/facebook.svg";
import instagram from "../../res/social/instagram.svg";
import twitter from "../../res/social/twitter.svg";
import linkedin from "../../res/social/linkedin.svg";
import "./styles.css";

function ContactUs() {
  return (
    <div className="cc-container">
      <div className="cc-flex-container">
        <div className="cc-contact-details">
          <h1 className="cc-title">Onde estamos localizados?</h1>
          <p>
            Endereço: R. Leonardo Bezerra Cavalcante, 240 - Jaqueira, Recife -
            PE, 52060-030{" "}
          </p>
          <div>
            contato@CBikes.com.br <br />
            +55 (00) 000000000
          </div>
          <div className="cc-contact-social-media">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={instagram} alt="Instagram" />
            <img src={linkedin} alt="Linkedin" />
          </div>
        </div>
        <div className="cc-form">
          <form>
            <div className="cc-input-group">
              <label htmlFor="name" className="cc-label">
                Nome:{" "}
              </label>
              <input id="name" name="name" className="cc-input" type="text" />
            </div>
            <div className="cc-input-group">
              <label htmlFor="email" className="cc-label">
                Email:{" "}
              </label>
              <input
                id="email"
                name="email"
                className="cc-input"
                type="email"
              />
            </div>
            <div className="cc-input-group">
              <label htmlFor="subject" className="cc-label">
                Assunto:{" "}
              </label>
              <input
                id="subject"
                name="subject"
                className="cc-input"
                type="text"
              />
            </div>
            <div className="cc-textarea-group">
              <label htmlFor="message" className="cc-label">
                Deixe sua mensagem:{" "}
              </label>
              <div className="cc-textarea-container">
                <textarea
                  id="message"
                  name="message"
                  className="cc-input"
                  type="textarea"
                />
                <div>
                  <button type="submit" className="cc-button">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
