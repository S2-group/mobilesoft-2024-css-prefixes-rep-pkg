import React from 'react';

import clsx from 'clsx';

import { NavDropdownSection, NavDropdownSectionProps } from '../NavDropdownSection';

import * as classes from './NavDropdown.module.scss';

export type NavDropdownProps = {
    sections: Array<NavDropdownSectionProps & { secondary?: boolean }>;
};

export const NavDropdown = ({ sections }: NavDropdownProps) => {
    const sectionsElm = sections.map((section, index) => (
        <NavDropdownSection
            key={index}
            classNames={{
                root: clsx(classes.section, section.secondary && classes.secondary),
                li: clsx(section.secondary && classes.secondaryListItem),
            }}
            {...section}
        />
    ));
    return <div className={classes.root}>{sectionsElm}</div>;
};
