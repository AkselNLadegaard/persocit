import React from 'react';
import Layout from "../components/Layout";
import Section from "../components/Section";
import {Link} from "../../.cache/gatsby-browser-entry";

const TypographyPlayground = props => {
    return (
        <Layout>
            <Section>
                <h1>Typography playground, lets nail some styling!</h1>

                <h2>A ab animi aperiam, beatae enim eos esse fugiat fugit neque nisi qui quia repellendus vel voluptates
                    voluptatibus?</h2>

                <h3>Dignissimos quam ratione vel.</h3>

                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quia ullam voluptatibus?</h4>

                <h5>Architecto asperiores atque dolorum, eligendi exercitationem libero magni maxime possimus qui quod
                    sequi veniam vero.</h5>

                <h6>Distinctio, dolorem, nesciunt.</h6>
                <hr/>

                <p>
                    P element! <Link to={'/'}>Lorem ipsum dolor</Link> sit amet, consectetur adipisicing elit. Animi
                    autem laudantium libero minus nam <i>officia, velit veritatis?</i>

                    <hr/>
                    <i>ITALIC text both CpiTal 23128 <em>emphasized stuff at the end </em></i>
                    <br/>
                    <br/>
                    <blockquote>
                        This is really the nicest blockquote
                    </blockquote>
                    <br/>
                    <br/>
                    <em>
                        This is EMphasized text <strong>This is strong text insize EM phasized text</strong>
                    </em>
                    <br/><br/>
                    <strong>
                        This is Strong texte <em>this is EM phasized text insdie strong text</em>
                    </strong>
                    ipsum, magni minus molestiae molestias nam optio quia quo sapiente sed vel veritatis, voluptatibus?
                    Nobis, voluptatibus?
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam aliquid aspernatur,
                    atque consequatur debitis delectus
                    <br/><br/>
                    2x+4x<sup>3.14x</sup><sub>2.14e <sup>2 cat <sup>8 dog</sup></sup></sub>
                    <br/><br/>
                    ea eum expedita, ipsam officia
                    repellat rerum saepe vitae
                    voluptas voluptatibus voluptatum.
                </p>
                <hr/>
                <button>This is a stock button</button>
                <br/>
                <br/>

                <p>Paragraph text beforehand is essential to judge the rhythm and margins</p>
                <ul>
                    This is stock UL text. Theres a br before the UL opening tag.
                    <li>Item is here</li>
                    <li>This is another list item</li>
                    <li>Kapow kapow kapow</li>
                    <ol>
                        <li>Went out the back</li>
                        <li>Really did didn't it?</li>
                        <li>Flipper made their dolphin sounds</li>
                        <ul>
                            <li>Overseeing projects at home</li>
                            <li>Phil dunphys housing prolbems</li>
                            <li>The financial crisis</li>
                            <li>Stuff to talk about</li>
                        </ul>
                    </ol>
                </ul>
                <p>Paragraph text beforehand is essential to judge the rhythm and margins</p>
                <ol>
                    This is stock OL text
                    <li>An ordered list item</li>
                    <li>Another ordered list item</li>
                    <li>Woo woo woo</li>
                </ol>
            </Section>
        </Layout>
    );
};


export default TypographyPlayground;
