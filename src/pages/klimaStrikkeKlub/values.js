import React    from 'react';
import Layout   from "../../components/layout/Layout";
import {themes} from '../../abstracts/constants'
import Section  from "../../components/general/Section";

const Values = () => {
    return (
        <Layout theme={themes.whiteAlt} title={'Klimastrikkeklubben'}>
            <Section>
                <h1>Klimastrikkeklubbens værderi</h1>
            </Section>
        </Layout>
    );
};

export default Values;
