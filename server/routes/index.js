import express from 'express';
import userRoutes from './user.routes.js';
import bookRoutes from './books.routes.js';
// import postRoutes from './post.routes.js';
// import reactionRoutes from './reaction.routes.js';
// import commentRoutes from './comment.routes.js';
// import connectionRoutes from './connection.routes.js';
// import messageRoutes from './message.routes.js';
// import chatRoutes from './chat.routes.js';
const router = express.Router();


router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users",userRoutes );
router.use("/books",bookRoutes );
// router.use("/posts",postRoutes );

export default router;

