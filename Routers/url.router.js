import express from 'express';
import { deployUrl, shortUrl } from '../Controllers/url.controller.js';

const router= express.Router();

router.post("/getLongurl", deployUrl);
router.post("/createShorturl", shortUrl);

export default router;