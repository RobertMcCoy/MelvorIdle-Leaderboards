# Leaderboard Website

You can find a live version of this static website [here](https://melvorleaderboardsite.z20.web.core.windows.net/?id=21341)

This is ultimately where the user sees their data in comparison to other users.

This website requires you to have some way to retrieve the data that was stored by the API, and therefore it must follow the same schema.

## Technologies

This website is currently just being hosted out of an Azure Storage Account configured to run as a static website.

The data is provided by a direct HTTP request to the Azure Table Storage with an access key.

The table on the website is powered by the jQuery DataTables plugin.

## Instructions

1. Open up the `config.template.js` file
2. Populate the `tableAccessKey` with your Azure Storage Access key (you must make one yourself, it is recommended you give it read only access)
3. Populate the `tableName` variable with your tablename if it differs from the one that we created for the Azure Table earlier
4. Populate the `accountName` variable with your storage account name (you can find this in your connection string or derive it from your table URL's first subdomain)
5. Rename this file to `config.js`
6. Open the index.html file in Chrome