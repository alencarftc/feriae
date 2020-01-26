import React from 'react';
import Layout from "../components/layout/layout"
import SEO from '../components/seo'
import IsHoliday from '../components/is-holiday';

const IsTomorrowAHoliday = () => {
    return (
        <Layout>
            <SEO title="Amanhã é feriado?" />
            <IsHoliday></IsHoliday>
        </Layout>
    );
};
export default IsTomorrowAHoliday;
