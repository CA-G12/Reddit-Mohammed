const { updateImageQuery } = require('../../database/queries');

const handleFile = (req, res) => {
  const { filename } = req.file;
  const { id } = req.token;
  updateImageQuery(id, filename).then((path) => {
    res.json({
      massage: 'Your photo updated Successfully',
      path: path.rows[0].image,
    });
  });
};
module.exports = handleFile;
