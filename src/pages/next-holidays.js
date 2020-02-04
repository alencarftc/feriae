import React from 'react';
import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import NextHolidays from '../components/next-holidays'

const NextHolidaysPage = () => (
    <Layout>
        <SEO title="Próximos Feriados" />
        <NextHolidays></NextHolidays>
    </Layout>
);
export default NextHolidaysPage;