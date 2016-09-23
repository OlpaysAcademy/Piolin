import React from 'react';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';

const Tweet = ({ tweet: { text, created_at, user: { name, profile_image_url } } }) =>
    <Card>
        <CardTitle avatar={profile_image_url} title={name} />
        <CardText>{text}</CardText>
    </Card>

export default Tweet;
