const Codebird = require('codebird');

const cb = new Codebird();
cb.setConsumerKey(
    'LdPCRJJ4tYyvg31S8610rcckt',
    'DgUJmsPHfnwcTtAE1ngoi04hIuCPyKMGuSrq0WMBrWjI4vzJ7q'
);

cb.setToken(
    '2876424203-TyRW0ZKOyb0kz7wx4JkoweBBLhe2zosrf1z9bXB',
    'eyBU52l3cfJuhOkK2hCD7K4Gnrz0us60dPtJiRxCTJbxG'
);

module.exports = {
  createTweet,
  getTimeline,
};

function createTweet(body) {
    cb.__call(
        "statuses_update",
        {"status": body},
        function (reply) {
            console.log(reply);
        }
    );
}

function getTimeline() {
    cb.__call(
        "statuses_homeTimeline",
        {},
        function (reply) {
            console.log(reply);
        }
    );
}
