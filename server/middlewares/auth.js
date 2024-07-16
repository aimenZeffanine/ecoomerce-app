const auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) {
            return res.status(401).json({ error: 'No token, authorization denied' });
        }

        const verified = jwt.verify(token, 'secret');
        if (!verified) {
            return res.status(401).json({ error: 'Token is not valid' });
        }

        req.user = verified.id;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

module.exports = auth;