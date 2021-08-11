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

                <p>P element! <Link to={'/'}>Lorem ipsum dolor</Link> sit amet, consectetur adipisicing elit. Animi
                    autem laudantium libero minus nam
                    officia, velit veritatis?</p>
                <hr/>
                <button>This is a stock button</button>
                <br/>
                <br/>
                <ul>
                    This is stock UL text. Theres a br before the UL opening tag.
                    <li>Item is here</li>
                    <li>This is another list item</li>
                    <li>Kapow kapow kapow</li>
                </ul>

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
