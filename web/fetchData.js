var mainFunction = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", `https://${accountName}.table.core.windows.net/${tableName}?$select=RowKey,GoldCoins,BankValue,Woodcutting,Fishing,Firemaking,Cooking,Mining,Smithing,Attack,Strength,Defence,Hitpoints,Thieving,Farming,Ranged,Fletching,Crafting,Runecrafting,Magic,Prayer,Slayer,Herblore&${tableAccessKey}`, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.setRequestHeader('Accept', 'application/json;odata=nometadata');

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) {
            var table = document.getElementById('MainTableBody');

            JSON.parse(xhttp.response).value.forEach(element => {
                var newRow = table.insertRow();

                var iterator = 0;
                newRow.insertCell(iterator++).innerHTML = element.RowKey;
                newRow.insertCell(iterator++).innerHTML = getTotalLevel(element);
                newRow.insertCell(iterator++).innerHTML = decorateWithCommas(getTotalGold(element));
                newRow.insertCell(iterator++).innerHTML = element.Woodcutting;
                newRow.insertCell(iterator++).innerHTML = element.Fishing;
                newRow.insertCell(iterator++).innerHTML = element.Firemaking;
                newRow.insertCell(iterator++).innerHTML = element.Cooking;
                newRow.insertCell(iterator++).innerHTML = element.Mining;
                newRow.insertCell(iterator++).innerHTML = element.Smithing;
                newRow.insertCell(iterator++).innerHTML = element.Attack;
                newRow.insertCell(iterator++).innerHTML = element.Strength;
                newRow.insertCell(iterator++).innerHTML = element.Defence;
                newRow.insertCell(iterator++).innerHTML = element.Hitpoints;
                newRow.insertCell(iterator++).innerHTML = element.Thieving;
                newRow.insertCell(iterator++).innerHTML = element.Farming;
                newRow.insertCell(iterator++).innerHTML = element.Ranged;
                newRow.insertCell(iterator++).innerHTML = element.Fletching;
                newRow.insertCell(iterator++).innerHTML = element.Crafting;
                newRow.insertCell(iterator++).innerHTML = element.Runecrafting;
                newRow.insertCell(iterator++).innerHTML = element.Magic;
                newRow.insertCell(iterator++).innerHTML = element.Prayer;
                newRow.insertCell(iterator++).innerHTML = element.Slayer;
                newRow.insertCell(iterator++).innerHTML = element.Herblore;
                newRow.insertCell(iterator++).innerHTML = decorateWithCommas(element.GoldCoins || 0);
                newRow.insertCell(iterator++).innerHTML = decorateWithCommas(element.BankValue || 0);
            });

            $('#MainTable').DataTable({
                ordering: true,
                paging: false,
                order: [[ 1, "desc" ]]
            })
        }
    }

    xhttp.send();

    var decorateWithCommas = function (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    var getTotalGold = function (record) {
        return parseInt(record.GoldCoins || 0) + parseInt(record.BankValue || 0);
    }

    var getTotalLevel = function (record) {
        return record.Woodcutting +
            record.Fishing +
            record.Firemaking +
            record.Cooking +
            record.Mining +
            record.Smithing +
            record.Attack +
            record.Strength +
            record.Defence +
            record.Hitpoints +
            record.Thieving +
            record.Farming +
            record.Ranged +
            record.Fletching +
            record.Crafting +
            record.Runecrafting +
            record.Magic +
            record.Prayer +
            record.Slayer +
            record.Herblore;
    }
}