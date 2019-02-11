"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Access",
    embedded: false
  },
  {
    name: "Log",
    embedded: false
  },
  {
    name: "Session",
    embedded: false
  },
  {
    name: "Settings",
    embedded: false
  },
  {
    name: "ThemePicker",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`,
  secret: `zyoenwmrzpylxltqobyx`
});
exports.prisma = new exports.Prisma();
