import React from 'react';
import SEO from '../../components/seo';
import './home.scss';
import IsHoliday from '../../components/is-holiday';

const HomePage = () => (
    <div>
        <SEO title="Home" />
        <IsHoliday></IsHoliday>
    </div>
)
export default HomePage