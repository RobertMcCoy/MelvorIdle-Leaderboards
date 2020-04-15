# Leaderboard API

This is currently designed to be deployed as an Azure Function. The `CharacterProcessor` contains the majority of the logic to new requests from users into table storage. The `index.js` file is responsible for validating new requests from users and ensuring there is no "funny business" in the data users are providing to us. This is a glorified check to make sure no skills are being sent up as >99, which is impossible in Melvor.

## Technologies

Expected that you are using an Azure Function to deploy this API. The `host.json` file and `function.js` file are the main drivers of the function, and they could be replaced with other infrastructure if you want. You will have to modify the processor to ensure it sends the data to the right place, though!

**It is also expected that you are using a table storage account to store user data.**

## Instructions

1. Open up the `config.template.js` file
2. Populate the `tableServiceConnectionString` export value with your Azure Storage Connection String (provided on the Access Keys page in Azure Storage)
3. Populate the `tableName` variable with your tablename if it differs from the one you are using in Table Storage
4. Populate the `accountName` variable with your Storage Account name (you should likely be using the account name listed in your connection string)
5. Rename this file to `config.js`
6. Open the index.html file in Chrome