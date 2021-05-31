import { Router } from 'express';

import signatureRoutes from './SignatureRoutes';
import userRoutes from './UserRoutes';

const router = Router();

router.use('/signatures', signatureRoutes);
router.use('/users', userRoutes);

export default router;
