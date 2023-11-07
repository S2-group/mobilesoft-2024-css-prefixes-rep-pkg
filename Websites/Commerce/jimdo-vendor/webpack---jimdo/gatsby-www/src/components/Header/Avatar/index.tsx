import React from 'react';

import clsx from 'clsx';

import Down from '@icons/Down.svg';
import UserDashboard from '@icons/userDashboard.svg';

import fallbackImage from '../../../../icon.png';
import { Link } from '../../Link';

import * as classes from './index.module.scss';

type AvatarProps = {
    user: { picture?: string; name?: string; email?: string };
    avatar: { altProfile: string; altFallback: string };
};
export type AvatarPropsOptionalUser = Partial<AvatarProps> & Omit<AvatarProps, 'user'>;

type AvatarDesktopProps = {
    dataAvatar: AvatarProps;
    dataDropdown: { dashboard: DropDownData; logOut: DropDownData };
};

type AvatarMobileProps = {
    data: AvatarPropsOptionalUser;
};

type DropDownData = {
    link: string;
    label: string;
};

type AvatarDropdownMenuProps = {
    data: { dashboard: DropDownData; logOut: DropDownData };
    id: string;
};

const AvatarDropdownMenu = ({ data, id }: AvatarDropdownMenuProps) => (
    <div className={classes.dropdown} id={id}>
        <div className={classes.dashboardWrapper}>
            <UserDashboard />
            <Link
                className={classes.dashboard}
                data-tracking="usericon-to-dashboard"
                href={data.dashboard.link}
                noArrow={true}
            >
                {data.dashboard.label}
            </Link>
        </div>

        <a href={data.logOut.link} className={clsx(classes.logOut)} data-tracking="usericon-logout">
            {data.logOut.label}
        </a>
    </div>
);

export const MobileAvatar = ({ data: { user, avatar } }: AvatarMobileProps) => {
    if (!user) {
        return <></>;
    }
    return (
        <div className={classes.wrapper}>
            {user.picture ? (
                <img src={user.picture} alt={avatar.altProfile} />
            ) : (
                <img src={fallbackImage} alt={avatar.altFallback} />
            )}
            {user.name ? <span>{user.name}</span> : <span>{user.email}</span>}
        </div>
    );
};

export const DesktopAvatar = ({
    dataAvatar: { user, avatar },
    dataDropdown,
}: AvatarDesktopProps) => {
    const DROPDOWN_MENU_ID = 'dropdown-user-menu';
    return (
        <div className={classes.wrapper}>
            <button className={clsx(classes.btn, 'pm')} aria-controls={DROPDOWN_MENU_ID}>
                {user.picture ? (
                    <img src={user.picture} alt={avatar.altProfile} />
                ) : (
                    <img src={fallbackImage} alt={avatar.altFallback} />
                )}
                <span className={classes.user}>{user.name ? user.name : user.email}</span>
                <Down />
            </button>
            <AvatarDropdownMenu data={dataDropdown} id={DROPDOWN_MENU_ID} />
        </div>
    );
};
