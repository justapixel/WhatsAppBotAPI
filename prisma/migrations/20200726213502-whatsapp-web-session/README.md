# Migration `20200726213502-whatsapp-web-session`

This migration has been generated by Rhuan Oliveira at 7/26/2020, 9:35:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Session" (
"id" SERIAL,
"WABrowserId" text  NOT NULL ,
"WASecretBundle" text  NOT NULL ,
"WAToken1" text  NOT NULL ,
"WAToken2" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200726213502-whatsapp-web-session
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,21 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Session {
+  id Int @id @default(autoincrement())
+  WABrowserId String
+  WASecretBundle String
+  WAToken1 String
+  WAToken2 String
+  createdAt       DateTime @default(now())
+  updatedAt       DateTime @updatedAt
+}
```


