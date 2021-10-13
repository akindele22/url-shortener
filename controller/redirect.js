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
module.exports = { redirect }