import React from 'react';
import Layout from "../components/Layout";
import {Link} from "gatsby";
import Section from "../components/Section";

const About = () => {
    return (
        <Layout>
            <Section>
                <h1>This is the about page</h1>
                <p>This page describes the purpose of the page</p>
                <Link to={'/'}>Back to the front page</Link>
            </Section>
        </Layout>
    );
};

export default About;
