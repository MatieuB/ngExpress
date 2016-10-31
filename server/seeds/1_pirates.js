exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('pirates').del()
        .then(function() {
            return Promise.all([
                // Inserts seed entries
                knex('pirates').insert(
                    [
                    {
                        name: 'Blackbeard',
                        poison: 'rum',
                        accessory: 'hand muskets',
                        img_url: "http://cdn.history.com/sites/2/2015/06/GettyImages-173400421-A.jpeg"
                    }, {
                        name: 'anne bonney',
                        poison: 'cocaine',
                        accessory: 'swords',
                        img_url: "http://67.media.tumblr.com/tumblr_lzdalaxyUx1qgh7y6o1_1280.jpg"
                    }, {
                        name: 'billy bones',
                        poison: 'black spot',
                        accessory: 'apple',
                        img_url: "http://vignette2.wikia.nocookie.net/muppet/images/3/3b/Blind_Pew.jpg/revision/latest?cb=20130715002721"
                    }])
            ]);
        });
};
