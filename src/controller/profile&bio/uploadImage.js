const { updateImageQuery } = require('../../database/queries');

const handleFile = (req, res) => {
  const { fileUrl } = req;
  const { id } = req.token;
  updateImageQuery(id, fileUrl).then((path) => {
    res.json({
      massage: 'Your photo updated Successfully',
      path: path.rows[0].image,
    });
  });
};
module.exports = handleFile;
