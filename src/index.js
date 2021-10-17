/** @format */

const {
  quicktype,
  InputData,
  JSONInput,
  jsonInputForTargetLanguage,
} = require("quicktype-core");
const fs = require("fs");
const axios = require("axios");
const chalk = require("chalk");

let initJson = {};

async function quicktypeJSONS(typeName, jsonString) {
  const jsonInput = jsonInputForTargetLanguage("typescript");

  await jsonInput.addSource({
    name: typeName,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  return await quicktype({
    inputData,
    lang: "typescript",
    rendererOptions: {
      "just-types": true,
    },
  });
}

function queryJson(url) {
  return new Promise((reslove, reject) => {
    axios
      .post(url)
      .then(function (res) {
        const r = res.data?.responseVo;
        initJson = r;
        reslove(r);
      })
      .catch(function (err) {
        console.log(err);
        reject(err);
      });
  });
}

/**
 *
 * @param {string} url
 */
async function generInteface(url) {
  try {
    await queryJson(url);
  } catch (error) {
    console.log(error);
  }

  try {
    const { lines } = await quicktypeJSONS("Book", JSON.stringify(initJson));
    const source = lines?.join("\n");
    fs.writeFile("type.d.ts", source, (err) => {
      if (err) throw err;
      console.log(
        chalk.keyword("orange")(
          "==>==>==>==>==> * * * * * Successful! * * * * * <==<==<==<==<=="
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
}
module.exports = generInteface;
