const path = require('path');
const router = require('express').Router();


router.get('/notes', (req, res)=> {
    res.sendFile(path.join(_dirname, '../public/index.html'))
})

//Send to homepage if path issue
router.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '../public/index.html'))
})

module.exports = router;