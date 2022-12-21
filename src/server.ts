import express from "express";
import { SwaggerTheme } from "swagger-themes";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

app.use(express.json());

const theme = new SwaggerTheme("v3");
const optionsV1 = theme.getDefaultConfig("dark");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile, optionsV1));

app.use(router);

app.listen(3333, () => console.log("Hello world!"));
