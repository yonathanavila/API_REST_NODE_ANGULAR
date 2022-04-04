require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const admin = require("firebase-admin");
const serviceAccount = require(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    databaseeAuthVariableOverride: null
});

const { initializeApp, applicationDefault, cert } = require("firebase-admin/app");
const { getFirestorem, Timestamp, FieldValue } = require("firebase-admin/firestore");