const insertModel = require("../models/insert");
const fetchModel = require("../models/fetch")
const deleteModel = require("../models/delete")

exports.insert = async (req, res, next) => {
  console.log('req.body', req.body)
  let data = {...req.body}
  data.values.image_path = "new_image"
  try{
    const result = await insertModel.insert(data);
    res.send({message: {title: `${result[0].affectedRows} row's inserted`, messageType: "success"}, result: result[0]})
  } catch(err){
    next(err)
  }
};

exports.fetch = async (req, res, next) => {
  try{
    const result = await fetchModel.fetch(req.body);
    console.log("result", result[0])
    res.send(result[0])
  } catch(err){
    res.send(err)
    next(err)
  }
};

exports.delete = async (req, res, next) => {
  try{
    const result = await deleteModel.delete(req.body);
    console.log("result", result[0])
    res.send({message: {title: `${result[0].affectedRows} row's deleted`, messageType: "success"}, result: result[0]})
  } catch(err){
    res.send(err)
    next(err)
  }
};

