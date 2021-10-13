const Url = require('../models/urlModels');
const { nanoid } = require('nanoid');
const yup = require('yup');

// The shorten url will consist of 2 paths
// the redirect and the algorithm behind the url shorten

const redirect = async(req, res) => {
    // Automatically the database will gv the url an Id 
    // Using the id to trace out the url in the database
    const { id, alias } = req.params;
    try {
        const old_url = await Url.findOne({ alias });
        if (old_url) {
            return res.redirect(old_url.url);
        } else {
            return res.status(404).send('invalid url');
        };
    } catch (error) {
        return res.status(404).send('invalid url');
    };
};

const newUrlSchema = yup.object().shape({
    slug: yup.string().trim().matches(/^[\w\-]+$/i),
    url: yup.string().trim().url().required()
});
const wheel = async(req, res, next) => { //next is use to direct the routes to the next operation
    // This is updating the schema of the url

    //const redirect = async(req, res) => {
    //};
    let { alias, url } = req.body;
    try {
        // validation with newUrlSchema
        await newUrlSchema.validate({ alias, url });
        if (!alias) {
            alias = nanoid(5);
        } else {
            // checking if the url exist in the db
            const exist = await Url.findOne({ alias });
            if (existing) {
                throw new Error('url already existing');
            }
        };
        alias = alias.toLowerCase();
        const newShortUrl = { alias, url };
        const created = await Url.create(newShortUrl);
        res.json(created);
    } catch (error) {
        next(error);
    };
};

module.exports = { redirect, wheel }