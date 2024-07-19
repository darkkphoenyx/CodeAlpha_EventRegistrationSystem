import express, { Request, Response } from "express";
// import testRouter from "./routes/test.routes.js";
// import authRouter from "./routes/auth.routes.js";
import HttpStatus from 'http-status-codes'
import buildError from "./utils/build-errors.js";
import { NextFunction } from "express"

const PORT = 3000;
const app = express();
app.use(express.json());

// app.use("/api", [testRouter, authRouter]);

app.use(function METHOD_NOT_ALLOWED(req, res) {
  res.status(HttpStatus.METHOD_NOT_ALLOWED).json({
    error: {
      code: HttpStatus.METHOD_NOT_ALLOWED,
      message: HttpStatus.getStatusText(HttpStatus.METHOD_NOT_ALLOWED),
    },
  });
});

app.use((err:any, req:Request, res:Response, next: NextFunction) => {
  const error = buildError(err);
  res.status(error.code).json({ error });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
