import React, { useState } from 'react';
import { PartOne } from './PartOne';
import { PartTwo } from './PartTwo';
import { PartThree } from './PartThree';

export const HomePageMain = () => {
    const [content, setContent] = useState('');

    return (
        <>
            <PartOne />
            <PartTwo />
            <PartThree />
        </>
    );
};
