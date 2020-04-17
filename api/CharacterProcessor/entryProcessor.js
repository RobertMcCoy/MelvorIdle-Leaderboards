const azure = require('azure-storage');
const config = require('../config');
const tableService = azure.createTableService(config.tableServiceConnectionString);

function Process(context, request) {
    try {
        tableService.createTableIfNotExists(config.tableName, (error, result, response) => {
            if (!error) {
                context.log.info("Request received for: " + JSON.stringify(request));
                var task = {
                    PartitionKey: { '_': 'character' },
                    RowKey: { '_': request.user },
                    Woodcutting: { '_': request.skills[0] },
                    Fishing: { '_': request.skills[1] },
                    Firemaking: { '_': request.skills[2] },
                    Cooking: { '_': request.skills[3] },
                    Mining: { '_': request.skills[4] },
                    Smithing: { '_': request.skills[5] },
                    Attack: { '_': request.skills[6] },
                    Strength: { '_': request.skills[7] },
                    Defence: { '_': request.skills[8] },
                    Hitpoints: { '_': request.skills[9] },
                    Thieving: { '_': request.skills[10] },
                    Farming: { '_': request.skills[11] },
                    Ranged: { '_': request.skills[12] },
                    Fletching: { '_': request.skills[13] },
                    Crafting: { '_': request.skills[14] },
                    Runecrafting: { '_': request.skills[15] },
                    Magic: { '_': request.skills[16] },
                    Prayer: { '_': request.skills[17] },
                    Slayer: { '_': request.skills[18] },
                    Herblore: { '_': request.skills[19] },
                    Milestones: { '_': JSON.stringify(request.mastery || null) },
                    GoldCoins: { '_': request.gold },
                    BankValue: { '_': request.bankValue }
                };

                tableService.insertOrReplaceEntity(config.tableName, task, (error, result, response) => {
                    if (!error) {
                        context.log.info(`[SUCCESS] Create character table entry for: ${request.username} - ${JSON.stringify(request.skills)}`);
                    }
                    else {
                        context.log.error(`[ERROR] Failed to create character table entry for: ${request.username}: ${JSON.stringify(result)}`);
                    }
                });
            }
            else {
                context.log.error(`[ERROR] Failed to verify/create Characters table existance.\r\n\t${error}`);
            }
        });
    }
    catch (exception) {
        context.log.error(`[ERROR] Exception in processing character.\r\n${exception}`);
    }
}

module.exports = { Process };