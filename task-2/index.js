const fs = require("fs");
const lodash = require("lodash");
const Table = require("cli-table");

const data = fs.readFileSync("Train_details.csv", "utf8");

// instantiate
var table = new Table({
  head: [
    "Train_No",
    "Train_Name",
    "SEQ",
    "Station_Code",
    "Station_Name",
    "Arrival_Time",
    "Departure_Time",
    "Distance",
    "Source_Station",
    "Source_Station_Name",
    "Destination_Station",
    "Destination_Station_Name",
  ],
});

// table is an Array, so you can `push`, `unshift`, `splice` and friends
// table.push(["First value", "Second value"], ["First value", "Second value"]);

// console.log(table.toString());

const train_data = data
  .split("\n")
  .splice(1)
  .map((val) => {
    let [
      Train_No,
      Train_Name,
      SEQ,
      Station_Code,
      Station_Name,
      Arrival_Time,
      Departure_Time,
      Distance,
      Source_Station,
      Source_Station_Name,
      Destination_Station,
      Destination_Station_Name,
    ] = val.split(",");

    return {
      Train_No,
      Train_Name,
      SEQ,
      Station_Code,
      Station_Name,
      Arrival_Time,
      Departure_Time,
      Distance,
      Source_Station,
      Source_Station_Name,
      Destination_Station,
      Destination_Station_Name,
    };
  });

// console.log(train_data);

const groupedData = lodash.groupBy(train_data, "Train_No");
const trains = Object.keys(groupedData);

// console.log(groupedData[trains[0]][0]["Train_No"]);

const argument = process.argv;

if (argument.length === 3 || argument.length === 5) {
  switch (argument[2]) {
    // * Done
    case "1":
      console.log("1. Train info with longest route:");
      let max = 0;
      let subMax;
      let maxObj;
      for (let i = 0; i < trains.length; i++) {
        subMax = groupedData[trains[i]].reduce(
          (max, current) =>
            +current.Distance > +max ? +current.Distance : +max,
          groupedData[trains[i]][0].Distance
        );
        if (subMax > max) {
          max = subMax;
          maxObj = groupedData[trains[i]];
        }
      }

      for (let i = 0; i < maxObj.length; i++) {
        table.push([
          maxObj[i].Train_No,
          maxObj[i].Train_Name,
          maxObj[i].SEQ,
          maxObj[i].Station_Code,
          maxObj[i].Station_Name,
          maxObj[i].Arrival_Time,
          maxObj[i].Departure_Time,
          maxObj[i].Distance,
          maxObj[i].Source_Station,
          maxObj[i].Source_Station_Name,
          maxObj[i].Destination_Station,
          maxObj[i].Destination_Station_Name,
        ]);
      }
      console.log(table.toString());
      break;
    // * Done
    case "2":
      console.log("2. Train info with shortest route:");
      let min = 100000;
      let subMin;
      let minObj;
      for (let i = 0; i < trains.length; i++) {
        subMin = groupedData[trains[i]].reduce(
          (min, current) =>
            +current.Distance > +min ? +current.Distance : +min,
          groupedData[trains[i]][0].Distance
        );
        if (subMin < min) {
          min = subMin;
          minObj = groupedData[trains[i]];
        }
      }

      for (let i = 0; i < minObj.length; i++) {
        table.push([
          minObj[i].Train_No,
          minObj[i].Train_Name,
          minObj[i].SEQ,
          minObj[i].Station_Code,
          minObj[i].Station_Name,
          minObj[i].Arrival_Time,
          minObj[i].Departure_Time,
          minObj[i].Distance,
          minObj[i].Source_Station,
          minObj[i].Source_Station_Name,
          minObj[i].Destination_Station,
          minObj[i].Destination_Station_Name,
        ]);
      }
      console.log(table.toString());

      break;
    // * Done
    case "3":
      console.log(
        "3. Train info with which covers less no of station between starting and ending station:"
      );
      let minStation = 10000;
      let minStationObj;
      for (let i = 0; i < trains.length - 1; i++) {
        let tmp;
        tmp = +groupedData[trains[i]].length;
        if (tmp < minStation) {
          minStation = tmp;
          // minStationObj = groupedData[trains[i]];
        }
      }

      for (let i = 0; i < trains.length; i++) {
        if (+groupedData[trains[i]].length === minStation) {
          for (let j = 0; j < groupedData[trains[i]].length; j++) {
            table.push([
              groupedData[trains[i]][j]["Train_No"],
              groupedData[trains[i]][j]["Train_Name"],
              groupedData[trains[i]][j].SEQ,
              groupedData[trains[i]][j].Station_Code,
              groupedData[trains[i]][j].Station_Name,
              groupedData[trains[i]][j].Arrival_Time,
              groupedData[trains[i]][j].Departure_Time,
              groupedData[trains[i]][j].Distance,
              groupedData[trains[i]][j].Source_Station,
              groupedData[trains[i]][j].Source_Station_Name,
              groupedData[trains[i]][j].Destination_Station,
              groupedData[trains[i]][j].Destination_Station_Name,
            ]);
          }
        }
      }
      // console.log(tmpp)
      // console.log(minStation);
      console.log(table.toString());
      break;
    // * Done
    case "4":
      console.log(
        "4. Train info with which covers maximum no of station between starting and ending station:"
      );
      let maxStation = 0;
      let maxStationObj;
      for (let i = 0; i < trains.length; i++) {
        let tmp;
        tmp = +groupedData[trains[i]].length;
        if (tmp > maxStation) {
          maxStation = tmp;
          maxStationObj = groupedData[trains[i]];
        }
      }
      for (let i = 0; i < maxStationObj.length; i++) {
        table.push([
          maxStationObj[i].Train_No,
          maxStationObj[i].Train_Name,
          maxStationObj[i].SEQ,
          maxStationObj[i].Station_Code,
          maxStationObj[i].Station_Name,
          maxStationObj[i].Arrival_Time,
          maxStationObj[i].Departure_Time,
          maxStationObj[i].Distance,
          maxStationObj[i].Source_Station,
          maxStationObj[i].Source_Station_Name,
          maxStationObj[i].Destination_Station,
          maxStationObj[i].Destination_Station_Name,
        ]);
      }
      console.log(table.toString());
      // console.table(maxStationObj);

      break;
    // * Done
    case "5":
      console.log("5. No of trains and names of the training:");
      var table1 = new Table({
        head: ["Train_No", "Train_Name"],
      });
      for (let i = 0; i < trains.length; i++) {
        if (
          groupedData[trains[i]][0]["Train_No"] !== "" ||
          groupedData[trains[i]][0]["Train_Name" !== ""]
        ) {
          table1.push([
            groupedData[trains[i]][0]["Train_No"],
            groupedData[trains[i]][0]["Train_Name"],
          ]);
        }
      }
      console.log(table1.toString());
      break;
    // ! Pending
    case "6":
      console.log(
        "6. Get the name of pickup point and destination point and provide possible options to travel between:"
      );
      console.log(argument[3], argument[4]);

      for (let i = 0; i < trains.length; i++) {
        let t = [];
        for (let j = 0; j < groupedData[trains[i]].length; j++) {
          // if (
          //   groupedData[trains[i]][j].Station_Name === argument[3] ||
          //   groupedData[trains[i]][j].Station_Name === argument[4]
          // ) {
          //   t+=1;
          // }
          t.push(groupedData[trains[i]][j].Station_Name);
        }
        if (t.includes(argument[3]) && t.includes(argument[4])) {
          // console.log(groupedData[trains[i]]);
        }
      }

      break;
    default:
      console.log("Invalid argument...");
  }
} else {
  console.log("Invalid arguments.");
}
