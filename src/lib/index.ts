import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

app.get("/users", async (_, res) => {
  const users = await prisma.user.findFirst();
  res.json(users);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
