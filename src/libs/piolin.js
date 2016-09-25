const Codebird = require('codebird');
const _ = require('lodash');

const codebird = new Codebird();
codebird.setConsumerKey('GcOg7a7vSFHsm0m0SH7gbMEuT', 'na805NIBCLUMXRisGASqxePej0kTtDdrkkT0C7pfNjfe3O3dAu');
codebird.setToken('309698696-IJR3pYPz63hzZO1Sbl028xN8Ev5pdI6NP6jpPo9y', 'Hnv7q6QWHt9FyJB5sg71MYQfhfTqdHtw3dpv4nTfKvbNl');

const pickUserProps = user => _.pick(user, ['name', 'profile_image_url', 'profile_background_image_url']);
const pickTweetProps = tweet => _.pick(tweet, ['created_at', 'text', 'user']);

module.exports = {
    timeline: user_id => {
        return codebird.__call(
            'statuses_homeTimeline',
            {
                user_id
            }
        ).then(response => response.reply.map(pickTweetProps).map(t => { t.user = pickUserProps(t.user); return t; }));
    },
    followers: user_id => {
        return codebird.__call(
            'followers_list',
            {
                user_id
            }
        ).then(response => response.reply.users.map(pickUserProps))
    },
    following: user_id => {
        return codebird.__call(
            'friends_list',
            {
                user_id
            }
        ).then(response => response.reply.users.map(pickUserProps));
    }
};