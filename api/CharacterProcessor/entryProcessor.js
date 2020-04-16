const azure = require('azure-storage');
const azureConnectionString = require('../config').tableServiceConnectionString;
const tableService = azure.createTableService(azureConnectionString);

function Process(context, skills, username, mastery) {
    try {
        tableService.createTableIfNotExists(tableName, (error, result, response) => {
            if (!error) {
                var task = {
                    PartitionKey: { '_': 'character' },
                    RowKey: { '_': username },
                    Woodcutting: { '_': skills[0] },
                    Fishing: { '_': skills[1] },
                    Firemaking: { '_': skills[2] },
                    Cooking: { '_': skills[3] },
                    Mining: { '_': skills[4] },
                    Smithing: { '_': skills[5] },
                    Attack: { '_': skills[6] },
                    Strength: { '_': skills[7] },
                    Defence: { '_': skills[8] },
                    Hitpoints: { '_': skills[9] },
                    Thieving: { '_': skills[10] },
                    Farming: { '_': skills[11] },
                    Ranged: { '_': skills[12] },
                    Fletching: { '_': skills[13] },
                    Crafting: { '_': skills[14] },
                    Runecrafting: { '_': skills[15] },
                    Magic: { '_': skills[16] },
                    Prayer: { '_': skills[17] },
                    Slayer: { '_': skills[18] },
                    Herblore: { '_': skills[19] },
                    Milestones: { '_': JSON.stringify(mastery || null) }
                };

                tableService.insertOrReplaceEntity(tableName, task, (error, result, response) => {
                    if (!error) {
                        context.log.info(`[SUCCESS] Create character table entry for: ${username}`);
                    }
                    else {
                        context.log.error(`[ERROR] Failed to create character table entry for: ${username}: ${JSON.stringify(result)}`);
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