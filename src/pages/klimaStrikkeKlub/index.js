import React          from 'react';
import Layout         from "../../components/layout/Layout";
import Section        from "../../components/general/Section";
import {themes}       from '../../abstracts/constants'
import {Link}         from "gatsby";
import {LinksSection} from "../../components/layout/LinksSection";
import Projects       from "./projects";


const Index = () => {
    return (
        <Layout theme={themes.climate} footer={false} logo={false} title={"KlimaStrikkeKlubben"} type={"climate"}>
            <Section>
                < h1> Klimastrikkeklubben
                    ! < /h1>
                <p>En sød beskrivelse </p>
                <br/>
                <h2>
                    Mål for klimastrikkeklub
                </h2>
                <p>
                    Klimastrikkeklubbens formål er at bidrage til at skabe rammerne for et godt liv inden for de
                    planetære grænser.
                </p>
                <p>
                    Klimestrikke-klubbens formål er at udvikle på projekter, teknologier og systemer, der kan skabe gode
                    liv inden for de planetære grænser.
                </p>
                <h3>Hvorfor er det et mål</h3>
                <p>Da de ambitiøse mål, FNs klimamål, Parisaftalen som med den nuværende udvikling ikke vil blive nået,
                    vi er imod 2-2.5 C (climate gap rapport)</p>
                <LinksSection>
                    <div className={'cardsContainer'}>
                        <Link to={'blog/'}>
                            Bloggen!
                        </Link>
                        <Link to={'goals/'}>
                            Målsætninger
                        </Link>
                        <Link to={'inspirations/'}>
                            Vores inspirationer
                        </Link>
                        <Link to={'projects/'}>
                            Projects
                        </Link>
                        <Link to={'values/'}>
                            Values
                        </Link>
                    </div>
                </LinksSection>
            </Section>
            <Section className={'bg-climateAlt'}>
                <h2><Link to={'/klimaStrikkeKlub/values'}>Værdier for klimastrikkeklub</Link></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum esse eum nam non rem sint
                    voluptates! Aliquam dolorum ea eos ex facilis labore maxime numquam quasi reprehenderit sequi.
                    Iste.</p>
                <ul>
                    <li>Have fokus på sociale og systemiske løsninger ikke have ensidigt fokus på teknologiske løsninger
                    </li>
                    <li>Fokus på tilstrækkelighed (Sufficiency)</li>
                    <ul>
                        <li>Fokus på sociale løsninger der tilfredsstiller & møder menneskers behov</li>
                    </ul>
                    <li>Mindre fokus på økonomisk bæredygtihed</li>
                    <ul>
                        <li>Fokus på sociale værdier og miljøbelastning</li>
                    </ul>
                    <li>Transparent viden og dokumentation</li>
                    <li>Open source &/ CC - alle kan frit bruge al teknologi/forslag udviklet i Klima-Strikkeklubben
                    </li>
                    <ul>
                        <li>Kommercielt brug af klima-strikkeklubbens projekter er tilladt så længe at det ikke
                            begrænser andres brug af projektet og der refereres til klima-strikkeklubbens arbejde.
                        </li>
                    </ul>

                </ul>
            </Section>
            <Section>
                <h2>
                    <Link to={'inspirations/'}>Klimastrikkeklubbens inspiration</Link>
                </h2>

                <ul>
                    <li>
                        <a href="src/pages/klimaStrikkeKlub/klimaStrikkeklub">DTU center for absolute sustainability</a>
                    </li>
                    <li>
                        Eksperimenter og dokumentation, særligt <a href="src/pages/klimaStrikkeKlub/klimaStrikkeklub">Low
                        Tech
                        Magazine af Kris De decker</a>
                    </li>
                    <li>
                        <a href="src/pages/klimaStrikkeKlub/klimaStrikkeklub">Donut Economics</a>
                    </li>
                    <li>
                        Ellen McArthur foundation
                    </li>
                    <li>
                        and so much more.
                    </li>
                </ul>
            </Section>
            <Section className={'bg-climateAlt'}>
                <h2>
                    <Link to={"projects/"}>Måder vi kan hjælpe på</Link>
                </h2>
                <p>
                    Der er mange måder..
                </p>
                <ul>
                    <li>Vise konkrete bud på andre måde at møde menneskers, samfunds og miljøets behov</li>
                    <ul>
                        <li>
                            Fx. projektet “Fremtidens cirkulære storskralds-områder”:
                        </li>
                        <ul>
                            <li>Hvilke problemer er der med storskralds-områder?</li>
                            <li>Hvordan kan storskralds områder konkret forbedres?</li>
                            <li>Hvilke klima besparelser vil det medføre?</li>
                            <li>Hvilke stakeholders kan/skal involveres?</li>
                            <li>Hvordan kan projektet realiseres, på hvilke niveauer?</li>
                        </ul>
                    </ul>
                    <li>
                        Være et hyggeligt socialt fællesskab der mødes om en fælles interesse for at gøre en forskel i
                        verden.
                    </li>
                    <li>Sparring og rum for skøre idéer.</li>
                </ul>
            </Section>
            <Section>
                <h2>
                    <Link to={'goals/'}>
                        Mål for vores og måske dine projekter
                    </Link>
                </h2>
                <p>De udviklede koncepter må ikke bidrage til at skabe en øget produktion og konsumering, medmindre at
                    konceptet erstatter (displace) en mere forurenene produktion og konsumering.
                </p>
                <h3>Andre delmål</h3>

            </Section>
        </Layout>
    )
        ;
};

export default Index;
