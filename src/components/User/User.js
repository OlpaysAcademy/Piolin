import React from 'react';
import { Card, CardTitle, CardMedia } from 'react-toolbox/lib/card';

import style from './User.scss';

const User = ({ user: { name, profile_image_url, profile_background_image_url } }) =>
    <Card className={style.User}>
        <CardMedia className={style.Background} image={profile_background_image_url} />
        <CardTitle avatar={profile_image_url} title={name} />
    </Card>

export default User;
