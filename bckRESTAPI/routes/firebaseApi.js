// @dev localhost:3000/firebaseApi
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const db = getFirestore();

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// @dev get Establishment
router.get('/getEstablishment', async (req, res, next) => {
  try {

    let {
      walletAddress,
      id_crew,
      id_establishment,
    } = req.query;


    let establishment = await getEstablishment(id_establishment);
    res.send(establishment);
  } catch (err) {
    res.status(500).send(err);
  }
});

async function getEstablishment(idEstablishment) {
  const establishmentRef = db.collection('_establishments').doc(idEstablishment);
  const doc = await establishmentRef.get();
  if (!doc.exists) {
    return error("NFT not found", 404);
  } else {
    return doc.data();
  }
}

module.exports = router;