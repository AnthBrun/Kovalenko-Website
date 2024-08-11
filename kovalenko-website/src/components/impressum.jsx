import React, { Component } from 'react';

class Impressum extends Component {
    state = {  }
    render() {
        return <div className='impressum-container'><h1>Impressum</h1>
            <p>Angaben gemäß § 5 TMG</p>
            <p>Sascha Haase <br />
                Ramser Weg 5 <br />
                34474 Diemelstadt-Wrexen <br />
            </p>
            <p><strong>Kontakt:</strong><br />
                Telefon: 01234-789456 <br />
                Fax: 1234-56789 <br />
                E-Mail: <a href='mailto:edd-k@hotmail.de'>edd-k@hotmail.de</a>
            </p>
            <p><strong>Registereintrag: </strong> <br />
                Eintragung im Registergericht: Musterstadt <br />
                Registernummer: 12345 <br />
            </p>
            <p><strong>Umsatzsteuer-ID: </strong>
                Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: Musterustid. <br />
                <strong>Wirtschafts-ID: </strong>
                Musterwirtschaftsid <br />
            </p>
            <p><strong>Aufsichtsbehörde: </strong>
                Musteraufsicht Musterstadt
            </p><br />
            <div className="Haftungsausschluss">
                <p><strong>Haftungsausschluss: </strong><br /><br /><strong>Haftung für Inhalte</strong><br />
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    <br /><br /><strong>Urheberrecht</strong><br />
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Veitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Guch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>
        </div>
         ;
    }
}

export default Impressum;
