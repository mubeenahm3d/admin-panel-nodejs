const shopsFetchModel = require('../models/shopsFetch')

exports.fetch = async (req, res, next) => {
    try{
      const result = await shopsFetchModel.fetch(req.body);
      result[0].forEach(row => {
          if(row.dealer_id !== null) row.owner_type = "Dealer"
          else if(row.sub_dealer_id !== null ) row.owner_type = "Sub Dealer"
          else row.owner_type = "Plumber"
      })
      console.log("withOwnerType", result[0])
      res.send(result[0])
    } catch(err){
      res.send(err)
      next(err)
    }
  };
  