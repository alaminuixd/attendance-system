import express from "express";
import morgan from "morgan";
import cors from "cors";
export const middleware = [morgan("dev"), cors(), express.json()];
