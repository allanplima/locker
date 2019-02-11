module.exports = {
        typeDefs: /* GraphQL */ `type Access {
  id: ID!
  userAssigned: User!
  roles: [String!]!
}

type AccessConnection {
  pageInfo: PageInfo!
  edges: [AccessEdge]!
  aggregate: AggregateAccess!
}

input AccessCreateInput {
  userAssigned: UserCreateOneWithoutAccessInput!
  roles: AccessCreaterolesInput
}

input AccessCreateManyWithoutUserAssignedInput {
  create: [AccessCreateWithoutUserAssignedInput!]
  connect: [AccessWhereUniqueInput!]
}

input AccessCreaterolesInput {
  set: [String!]
}

input AccessCreateWithoutUserAssignedInput {
  roles: AccessCreaterolesInput
}

type AccessEdge {
  node: Access!
  cursor: String!
}

enum AccessOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AccessPreviousValues {
  id: ID!
  roles: [String!]!
}

input AccessScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [AccessScalarWhereInput!]
  OR: [AccessScalarWhereInput!]
  NOT: [AccessScalarWhereInput!]
}

type AccessSubscriptionPayload {
  mutation: MutationType!
  node: Access
  updatedFields: [String!]
  previousValues: AccessPreviousValues
}

input AccessSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccessWhereInput
  AND: [AccessSubscriptionWhereInput!]
  OR: [AccessSubscriptionWhereInput!]
  NOT: [AccessSubscriptionWhereInput!]
}

input AccessUpdateInput {
  userAssigned: UserUpdateOneRequiredWithoutAccessInput
  roles: AccessUpdaterolesInput
}

input AccessUpdateManyDataInput {
  roles: AccessUpdaterolesInput
}

input AccessUpdateManyMutationInput {
  roles: AccessUpdaterolesInput
}

input AccessUpdateManyWithoutUserAssignedInput {
  create: [AccessCreateWithoutUserAssignedInput!]
  delete: [AccessWhereUniqueInput!]
  connect: [AccessWhereUniqueInput!]
  set: [AccessWhereUniqueInput!]
  disconnect: [AccessWhereUniqueInput!]
  update: [AccessUpdateWithWhereUniqueWithoutUserAssignedInput!]
  upsert: [AccessUpsertWithWhereUniqueWithoutUserAssignedInput!]
  deleteMany: [AccessScalarWhereInput!]
  updateMany: [AccessUpdateManyWithWhereNestedInput!]
}

input AccessUpdateManyWithWhereNestedInput {
  where: AccessScalarWhereInput!
  data: AccessUpdateManyDataInput!
}

input AccessUpdaterolesInput {
  set: [String!]
}

input AccessUpdateWithoutUserAssignedDataInput {
  roles: AccessUpdaterolesInput
}

input AccessUpdateWithWhereUniqueWithoutUserAssignedInput {
  where: AccessWhereUniqueInput!
  data: AccessUpdateWithoutUserAssignedDataInput!
}

input AccessUpsertWithWhereUniqueWithoutUserAssignedInput {
  where: AccessWhereUniqueInput!
  update: AccessUpdateWithoutUserAssignedDataInput!
  create: AccessCreateWithoutUserAssignedInput!
}

input AccessWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userAssigned: UserWhereInput
  AND: [AccessWhereInput!]
  OR: [AccessWhereInput!]
  NOT: [AccessWhereInput!]
}

input AccessWhereUniqueInput {
  id: ID
}

type AggregateAccess {
  count: Int!
}

type AggregateLog {
  count: Int!
}

type AggregateSession {
  count: Int!
}

type AggregateSettings {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Log {
  id: ID!
  operation: String!
  resource: String!
  createdAt: DateTime!
  user: User!
}

type LogConnection {
  pageInfo: PageInfo!
  edges: [LogEdge]!
  aggregate: AggregateLog!
}

input LogCreateInput {
  operation: String!
  resource: String!
  user: UserCreateOneWithoutLogsInput!
}

input LogCreateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  connect: [LogWhereUniqueInput!]
}

input LogCreateWithoutUserInput {
  operation: String!
  resource: String!
}

type LogEdge {
  node: Log!
  cursor: String!
}

enum LogOrderByInput {
  id_ASC
  id_DESC
  operation_ASC
  operation_DESC
  resource_ASC
  resource_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LogPreviousValues {
  id: ID!
  operation: String!
  resource: String!
  createdAt: DateTime!
}

input LogScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  operation: String
  operation_not: String
  operation_in: [String!]
  operation_not_in: [String!]
  operation_lt: String
  operation_lte: String
  operation_gt: String
  operation_gte: String
  operation_contains: String
  operation_not_contains: String
  operation_starts_with: String
  operation_not_starts_with: String
  operation_ends_with: String
  operation_not_ends_with: String
  resource: String
  resource_not: String
  resource_in: [String!]
  resource_not_in: [String!]
  resource_lt: String
  resource_lte: String
  resource_gt: String
  resource_gte: String
  resource_contains: String
  resource_not_contains: String
  resource_starts_with: String
  resource_not_starts_with: String
  resource_ends_with: String
  resource_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [LogScalarWhereInput!]
  OR: [LogScalarWhereInput!]
  NOT: [LogScalarWhereInput!]
}

type LogSubscriptionPayload {
  mutation: MutationType!
  node: Log
  updatedFields: [String!]
  previousValues: LogPreviousValues
}

input LogSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LogWhereInput
  AND: [LogSubscriptionWhereInput!]
  OR: [LogSubscriptionWhereInput!]
  NOT: [LogSubscriptionWhereInput!]
}

input LogUpdateInput {
  operation: String
  resource: String
  user: UserUpdateOneRequiredWithoutLogsInput
}

input LogUpdateManyDataInput {
  operation: String
  resource: String
}

input LogUpdateManyMutationInput {
  operation: String
  resource: String
}

input LogUpdateManyWithoutUserInput {
  create: [LogCreateWithoutUserInput!]
  delete: [LogWhereUniqueInput!]
  connect: [LogWhereUniqueInput!]
  set: [LogWhereUniqueInput!]
  disconnect: [LogWhereUniqueInput!]
  update: [LogUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [LogUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [LogScalarWhereInput!]
  updateMany: [LogUpdateManyWithWhereNestedInput!]
}

input LogUpdateManyWithWhereNestedInput {
  where: LogScalarWhereInput!
  data: LogUpdateManyDataInput!
}

input LogUpdateWithoutUserDataInput {
  operation: String
  resource: String
}

input LogUpdateWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  data: LogUpdateWithoutUserDataInput!
}

input LogUpsertWithWhereUniqueWithoutUserInput {
  where: LogWhereUniqueInput!
  update: LogUpdateWithoutUserDataInput!
  create: LogCreateWithoutUserInput!
}

input LogWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  operation: String
  operation_not: String
  operation_in: [String!]
  operation_not_in: [String!]
  operation_lt: String
  operation_lte: String
  operation_gt: String
  operation_gte: String
  operation_contains: String
  operation_not_contains: String
  operation_starts_with: String
  operation_not_starts_with: String
  operation_ends_with: String
  operation_not_ends_with: String
  resource: String
  resource_not: String
  resource_in: [String!]
  resource_not_in: [String!]
  resource_lt: String
  resource_lte: String
  resource_gt: String
  resource_gte: String
  resource_contains: String
  resource_not_contains: String
  resource_starts_with: String
  resource_not_starts_with: String
  resource_ends_with: String
  resource_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  user: UserWhereInput
  AND: [LogWhereInput!]
  OR: [LogWhereInput!]
  NOT: [LogWhereInput!]
}

input LogWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAccess(data: AccessCreateInput!): Access!
  updateAccess(data: AccessUpdateInput!, where: AccessWhereUniqueInput!): Access
  updateManyAccesses(data: AccessUpdateManyMutationInput!, where: AccessWhereInput): BatchPayload!
  upsertAccess(where: AccessWhereUniqueInput!, create: AccessCreateInput!, update: AccessUpdateInput!): Access!
  deleteAccess(where: AccessWhereUniqueInput!): Access
  deleteManyAccesses(where: AccessWhereInput): BatchPayload!
  createLog(data: LogCreateInput!): Log!
  updateLog(data: LogUpdateInput!, where: LogWhereUniqueInput!): Log
  updateManyLogs(data: LogUpdateManyMutationInput!, where: LogWhereInput): BatchPayload!
  upsertLog(where: LogWhereUniqueInput!, create: LogCreateInput!, update: LogUpdateInput!): Log!
  deleteLog(where: LogWhereUniqueInput!): Log
  deleteManyLogs(where: LogWhereInput): BatchPayload!
  createSession(data: SessionCreateInput!): Session!
  updateSession(data: SessionUpdateInput!, where: SessionWhereUniqueInput!): Session
  updateManySessions(data: SessionUpdateManyMutationInput!, where: SessionWhereInput): BatchPayload!
  upsertSession(where: SessionWhereUniqueInput!, create: SessionCreateInput!, update: SessionUpdateInput!): Session!
  deleteSession(where: SessionWhereUniqueInput!): Session
  deleteManySessions(where: SessionWhereInput): BatchPayload!
  createSettings(data: SettingsCreateInput!): Settings!
  updateManySettingses(data: SettingsUpdateManyMutationInput!, where: SettingsWhereInput): BatchPayload!
  deleteManySettingses(where: SettingsWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  access(where: AccessWhereUniqueInput!): Access
  accesses(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Access]!
  accessesConnection(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessConnection!
  log(where: LogWhereUniqueInput!): Log
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log]!
  logsConnection(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LogConnection!
  session(where: SessionWhereUniqueInput!): Session
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session]!
  sessionsConnection(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SessionConnection!
  settingses(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Settings]!
  settingsesConnection(where: SettingsWhereInput, orderBy: SettingsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SettingsConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Session {
  id: ID!
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
  createdAt: DateTime!
  updatedAt: DateTime!
  user: User
}

type SessionConnection {
  pageInfo: PageInfo!
  edges: [SessionEdge]!
  aggregate: AggregateSession!
}

input SessionCreateInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
  user: UserCreateOneWithoutSessionsInput
}

input SessionCreateManyWithoutUserInput {
  create: [SessionCreateWithoutUserInput!]
  connect: [SessionWhereUniqueInput!]
}

input SessionCreateWithoutUserInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
}

type SessionEdge {
  node: Session!
  cursor: String!
}

enum SessionOrderByInput {
  id_ASC
  id_DESC
  operatingSystemName_ASC
  operatingSystemName_DESC
  operatingSystemVersion_ASC
  operatingSystemVersion_DESC
  browserName_ASC
  browserName_DESC
  browserVersion_ASC
  browserVersion_DESC
  fingerprint_ASC
  fingerprint_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SessionPreviousValues {
  id: ID!
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input SessionScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  operatingSystemName: String
  operatingSystemName_not: String
  operatingSystemName_in: [String!]
  operatingSystemName_not_in: [String!]
  operatingSystemName_lt: String
  operatingSystemName_lte: String
  operatingSystemName_gt: String
  operatingSystemName_gte: String
  operatingSystemName_contains: String
  operatingSystemName_not_contains: String
  operatingSystemName_starts_with: String
  operatingSystemName_not_starts_with: String
  operatingSystemName_ends_with: String
  operatingSystemName_not_ends_with: String
  operatingSystemVersion: String
  operatingSystemVersion_not: String
  operatingSystemVersion_in: [String!]
  operatingSystemVersion_not_in: [String!]
  operatingSystemVersion_lt: String
  operatingSystemVersion_lte: String
  operatingSystemVersion_gt: String
  operatingSystemVersion_gte: String
  operatingSystemVersion_contains: String
  operatingSystemVersion_not_contains: String
  operatingSystemVersion_starts_with: String
  operatingSystemVersion_not_starts_with: String
  operatingSystemVersion_ends_with: String
  operatingSystemVersion_not_ends_with: String
  browserName: String
  browserName_not: String
  browserName_in: [String!]
  browserName_not_in: [String!]
  browserName_lt: String
  browserName_lte: String
  browserName_gt: String
  browserName_gte: String
  browserName_contains: String
  browserName_not_contains: String
  browserName_starts_with: String
  browserName_not_starts_with: String
  browserName_ends_with: String
  browserName_not_ends_with: String
  browserVersion: String
  browserVersion_not: String
  browserVersion_in: [String!]
  browserVersion_not_in: [String!]
  browserVersion_lt: String
  browserVersion_lte: String
  browserVersion_gt: String
  browserVersion_gte: String
  browserVersion_contains: String
  browserVersion_not_contains: String
  browserVersion_starts_with: String
  browserVersion_not_starts_with: String
  browserVersion_ends_with: String
  browserVersion_not_ends_with: String
  fingerprint: String
  fingerprint_not: String
  fingerprint_in: [String!]
  fingerprint_not_in: [String!]
  fingerprint_lt: String
  fingerprint_lte: String
  fingerprint_gt: String
  fingerprint_gte: String
  fingerprint_contains: String
  fingerprint_not_contains: String
  fingerprint_starts_with: String
  fingerprint_not_starts_with: String
  fingerprint_ends_with: String
  fingerprint_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [SessionScalarWhereInput!]
  OR: [SessionScalarWhereInput!]
  NOT: [SessionScalarWhereInput!]
}

type SessionSubscriptionPayload {
  mutation: MutationType!
  node: Session
  updatedFields: [String!]
  previousValues: SessionPreviousValues
}

input SessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SessionWhereInput
  AND: [SessionSubscriptionWhereInput!]
  OR: [SessionSubscriptionWhereInput!]
  NOT: [SessionSubscriptionWhereInput!]
}

input SessionUpdateInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
  user: UserUpdateOneWithoutSessionsInput
}

input SessionUpdateManyDataInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
}

input SessionUpdateManyMutationInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
}

input SessionUpdateManyWithoutUserInput {
  create: [SessionCreateWithoutUserInput!]
  delete: [SessionWhereUniqueInput!]
  connect: [SessionWhereUniqueInput!]
  set: [SessionWhereUniqueInput!]
  disconnect: [SessionWhereUniqueInput!]
  update: [SessionUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [SessionUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [SessionScalarWhereInput!]
  updateMany: [SessionUpdateManyWithWhereNestedInput!]
}

input SessionUpdateManyWithWhereNestedInput {
  where: SessionScalarWhereInput!
  data: SessionUpdateManyDataInput!
}

input SessionUpdateWithoutUserDataInput {
  operatingSystemName: String
  operatingSystemVersion: String
  browserName: String
  browserVersion: String
  fingerprint: String
}

input SessionUpdateWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput!
  data: SessionUpdateWithoutUserDataInput!
}

input SessionUpsertWithWhereUniqueWithoutUserInput {
  where: SessionWhereUniqueInput!
  update: SessionUpdateWithoutUserDataInput!
  create: SessionCreateWithoutUserInput!
}

input SessionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  operatingSystemName: String
  operatingSystemName_not: String
  operatingSystemName_in: [String!]
  operatingSystemName_not_in: [String!]
  operatingSystemName_lt: String
  operatingSystemName_lte: String
  operatingSystemName_gt: String
  operatingSystemName_gte: String
  operatingSystemName_contains: String
  operatingSystemName_not_contains: String
  operatingSystemName_starts_with: String
  operatingSystemName_not_starts_with: String
  operatingSystemName_ends_with: String
  operatingSystemName_not_ends_with: String
  operatingSystemVersion: String
  operatingSystemVersion_not: String
  operatingSystemVersion_in: [String!]
  operatingSystemVersion_not_in: [String!]
  operatingSystemVersion_lt: String
  operatingSystemVersion_lte: String
  operatingSystemVersion_gt: String
  operatingSystemVersion_gte: String
  operatingSystemVersion_contains: String
  operatingSystemVersion_not_contains: String
  operatingSystemVersion_starts_with: String
  operatingSystemVersion_not_starts_with: String
  operatingSystemVersion_ends_with: String
  operatingSystemVersion_not_ends_with: String
  browserName: String
  browserName_not: String
  browserName_in: [String!]
  browserName_not_in: [String!]
  browserName_lt: String
  browserName_lte: String
  browserName_gt: String
  browserName_gte: String
  browserName_contains: String
  browserName_not_contains: String
  browserName_starts_with: String
  browserName_not_starts_with: String
  browserName_ends_with: String
  browserName_not_ends_with: String
  browserVersion: String
  browserVersion_not: String
  browserVersion_in: [String!]
  browserVersion_not_in: [String!]
  browserVersion_lt: String
  browserVersion_lte: String
  browserVersion_gt: String
  browserVersion_gte: String
  browserVersion_contains: String
  browserVersion_not_contains: String
  browserVersion_starts_with: String
  browserVersion_not_starts_with: String
  browserVersion_ends_with: String
  browserVersion_not_ends_with: String
  fingerprint: String
  fingerprint_not: String
  fingerprint_in: [String!]
  fingerprint_not_in: [String!]
  fingerprint_lt: String
  fingerprint_lte: String
  fingerprint_gt: String
  fingerprint_gte: String
  fingerprint_contains: String
  fingerprint_not_contains: String
  fingerprint_starts_with: String
  fingerprint_not_starts_with: String
  fingerprint_ends_with: String
  fingerprint_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  user: UserWhereInput
  AND: [SessionWhereInput!]
  OR: [SessionWhereInput!]
  NOT: [SessionWhereInput!]
}

input SessionWhereUniqueInput {
  id: ID
}

type Settings {
  theme: ThemePicker
}

type SettingsConnection {
  pageInfo: PageInfo!
  edges: [SettingsEdge]!
  aggregate: AggregateSettings!
}

input SettingsCreateInput {
  theme: ThemePicker
}

input SettingsCreateOneInput {
  create: SettingsCreateInput
}

type SettingsEdge {
  node: Settings!
  cursor: String!
}

enum SettingsOrderByInput {
  theme_ASC
  theme_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SettingsPreviousValues {
  theme: ThemePicker
}

type SettingsSubscriptionPayload {
  mutation: MutationType!
  node: Settings
  updatedFields: [String!]
  previousValues: SettingsPreviousValues
}

input SettingsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SettingsWhereInput
  AND: [SettingsSubscriptionWhereInput!]
  OR: [SettingsSubscriptionWhereInput!]
  NOT: [SettingsSubscriptionWhereInput!]
}

input SettingsUpdateDataInput {
  theme: ThemePicker
}

input SettingsUpdateManyMutationInput {
  theme: ThemePicker
}

input SettingsUpdateOneInput {
  create: SettingsCreateInput
  update: SettingsUpdateDataInput
  upsert: SettingsUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input SettingsUpsertNestedInput {
  update: SettingsUpdateDataInput!
  create: SettingsCreateInput!
}

input SettingsWhereInput {
  theme: ThemePicker
  theme_not: ThemePicker
  theme_in: [ThemePicker!]
  theme_not_in: [ThemePicker!]
  AND: [SettingsWhereInput!]
  OR: [SettingsWhereInput!]
  NOT: [SettingsWhereInput!]
}

type Subscription {
  access(where: AccessSubscriptionWhereInput): AccessSubscriptionPayload
  log(where: LogSubscriptionWhereInput): LogSubscriptionPayload
  session(where: SessionSubscriptionWhereInput): SessionSubscriptionPayload
  settings(where: SettingsSubscriptionWhereInput): SettingsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

enum ThemePicker {
  DARK
  LIGHT
}

type User {
  id: ID!
  enabled: Boolean!
  hidden: Boolean!
  totp: Boolean
  emailVerified: Boolean!
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: [String!]!
  access(where: AccessWhereInput, orderBy: AccessOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Access!]
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: [String!]!
  requiredActions: [String!]!
  settings: Settings
  sessions(where: SessionWhereInput, orderBy: SessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Session!]
  logs(where: LogWhereInput, orderBy: LogOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Log!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreatedefaultReportsInput {
  set: [String!]
}

input UserCreateexpertisesInput {
  set: [String!]
}

input UserCreateInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: UserCreateexpertisesInput
  access: AccessCreateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserCreatedefaultReportsInput
  requiredActions: UserCreaterequiredActionsInput
  settings: SettingsCreateOneInput
  sessions: SessionCreateManyWithoutUserInput
  logs: LogCreateManyWithoutUserInput
}

input UserCreateOneWithoutAccessInput {
  create: UserCreateWithoutAccessInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  connect: UserWhereUniqueInput
}

input UserCreaterequiredActionsInput {
  set: [String!]
}

input UserCreateWithoutAccessInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: UserCreateexpertisesInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserCreatedefaultReportsInput
  requiredActions: UserCreaterequiredActionsInput
  settings: SettingsCreateOneInput
  sessions: SessionCreateManyWithoutUserInput
  logs: LogCreateManyWithoutUserInput
}

input UserCreateWithoutLogsInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: UserCreateexpertisesInput
  access: AccessCreateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserCreatedefaultReportsInput
  requiredActions: UserCreaterequiredActionsInput
  settings: SettingsCreateOneInput
  sessions: SessionCreateManyWithoutUserInput
}

input UserCreateWithoutSessionsInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: UserCreateexpertisesInput
  access: AccessCreateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserCreatedefaultReportsInput
  requiredActions: UserCreaterequiredActionsInput
  settings: SettingsCreateOneInput
  logs: LogCreateManyWithoutUserInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  enabled_ASC
  enabled_DESC
  hidden_ASC
  hidden_DESC
  totp_ASC
  totp_DESC
  emailVerified_ASC
  emailVerified_DESC
  password_ASC
  password_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  profilePicture_ASC
  profilePicture_DESC
  birthday_ASC
  birthday_DESC
  crm_ASC
  crm_DESC
  eCrm_ASC
  eCrm_DESC
  signaturePath_ASC
  signaturePath_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  enabled: Boolean!
  hidden: Boolean!
  totp: Boolean
  emailVerified: Boolean!
  password: String!
  firstName: String!
  lastName: String!
  email: String!
  profilePicture: String
  birthday: DateTime
  expertises: [String!]!
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: [String!]!
  requiredActions: [String!]!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdatedefaultReportsInput {
  set: [String!]
}

input UserUpdateexpertisesInput {
  set: [String!]
}

input UserUpdateInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  email: String
  profilePicture: String
  birthday: DateTime
  expertises: UserUpdateexpertisesInput
  access: AccessUpdateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserUpdatedefaultReportsInput
  requiredActions: UserUpdaterequiredActionsInput
  settings: SettingsUpdateOneInput
  sessions: SessionUpdateManyWithoutUserInput
  logs: LogUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  email: String
  profilePicture: String
  birthday: DateTime
  expertises: UserUpdateexpertisesInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserUpdatedefaultReportsInput
  requiredActions: UserUpdaterequiredActionsInput
}

input UserUpdateOneRequiredWithoutAccessInput {
  create: UserCreateWithoutAccessInput
  update: UserUpdateWithoutAccessDataInput
  upsert: UserUpsertWithoutAccessInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutLogsInput {
  create: UserCreateWithoutLogsInput
  update: UserUpdateWithoutLogsDataInput
  upsert: UserUpsertWithoutLogsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutSessionsInput {
  create: UserCreateWithoutSessionsInput
  update: UserUpdateWithoutSessionsDataInput
  upsert: UserUpsertWithoutSessionsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdaterequiredActionsInput {
  set: [String!]
}

input UserUpdateWithoutAccessDataInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  email: String
  profilePicture: String
  birthday: DateTime
  expertises: UserUpdateexpertisesInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserUpdatedefaultReportsInput
  requiredActions: UserUpdaterequiredActionsInput
  settings: SettingsUpdateOneInput
  sessions: SessionUpdateManyWithoutUserInput
  logs: LogUpdateManyWithoutUserInput
}

input UserUpdateWithoutLogsDataInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  email: String
  profilePicture: String
  birthday: DateTime
  expertises: UserUpdateexpertisesInput
  access: AccessUpdateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserUpdatedefaultReportsInput
  requiredActions: UserUpdaterequiredActionsInput
  settings: SettingsUpdateOneInput
  sessions: SessionUpdateManyWithoutUserInput
}

input UserUpdateWithoutSessionsDataInput {
  enabled: Boolean
  hidden: Boolean
  totp: Boolean
  emailVerified: Boolean
  password: String
  firstName: String
  lastName: String
  email: String
  profilePicture: String
  birthday: DateTime
  expertises: UserUpdateexpertisesInput
  access: AccessUpdateManyWithoutUserAssignedInput
  crm: String
  eCrm: String
  signaturePath: String
  defaultReports: UserUpdatedefaultReportsInput
  requiredActions: UserUpdaterequiredActionsInput
  settings: SettingsUpdateOneInput
  logs: LogUpdateManyWithoutUserInput
}

input UserUpsertWithoutAccessInput {
  update: UserUpdateWithoutAccessDataInput!
  create: UserCreateWithoutAccessInput!
}

input UserUpsertWithoutLogsInput {
  update: UserUpdateWithoutLogsDataInput!
  create: UserCreateWithoutLogsInput!
}

input UserUpsertWithoutSessionsInput {
  update: UserUpdateWithoutSessionsDataInput!
  create: UserCreateWithoutSessionsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  enabled: Boolean
  enabled_not: Boolean
  hidden: Boolean
  hidden_not: Boolean
  totp: Boolean
  totp_not: Boolean
  emailVerified: Boolean
  emailVerified_not: Boolean
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  profilePicture: String
  profilePicture_not: String
  profilePicture_in: [String!]
  profilePicture_not_in: [String!]
  profilePicture_lt: String
  profilePicture_lte: String
  profilePicture_gt: String
  profilePicture_gte: String
  profilePicture_contains: String
  profilePicture_not_contains: String
  profilePicture_starts_with: String
  profilePicture_not_starts_with: String
  profilePicture_ends_with: String
  profilePicture_not_ends_with: String
  birthday: DateTime
  birthday_not: DateTime
  birthday_in: [DateTime!]
  birthday_not_in: [DateTime!]
  birthday_lt: DateTime
  birthday_lte: DateTime
  birthday_gt: DateTime
  birthday_gte: DateTime
  access_every: AccessWhereInput
  access_some: AccessWhereInput
  access_none: AccessWhereInput
  crm: String
  crm_not: String
  crm_in: [String!]
  crm_not_in: [String!]
  crm_lt: String
  crm_lte: String
  crm_gt: String
  crm_gte: String
  crm_contains: String
  crm_not_contains: String
  crm_starts_with: String
  crm_not_starts_with: String
  crm_ends_with: String
  crm_not_ends_with: String
  eCrm: String
  eCrm_not: String
  eCrm_in: [String!]
  eCrm_not_in: [String!]
  eCrm_lt: String
  eCrm_lte: String
  eCrm_gt: String
  eCrm_gte: String
  eCrm_contains: String
  eCrm_not_contains: String
  eCrm_starts_with: String
  eCrm_not_starts_with: String
  eCrm_ends_with: String
  eCrm_not_ends_with: String
  signaturePath: String
  signaturePath_not: String
  signaturePath_in: [String!]
  signaturePath_not_in: [String!]
  signaturePath_lt: String
  signaturePath_lte: String
  signaturePath_gt: String
  signaturePath_gte: String
  signaturePath_contains: String
  signaturePath_not_contains: String
  signaturePath_starts_with: String
  signaturePath_not_starts_with: String
  signaturePath_ends_with: String
  signaturePath_not_ends_with: String
  settings: SettingsWhereInput
  sessions_every: SessionWhereInput
  sessions_some: SessionWhereInput
  sessions_none: SessionWhereInput
  logs_every: LogWhereInput
  logs_some: LogWhereInput
  logs_none: LogWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    