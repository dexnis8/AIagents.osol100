/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { FaTable, FaThLarge, FaSun, FaMoon } from "react-icons/fa";
import "./App.css"; // Tailwind CSS should be configured

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const COIN_LIST = [
  "ai16z",
  "fartcoin",
  "grass",
  "goatseus-maximus",
  "io-net",
  "act-i-the-ai-prophecy",
  "zerebro",
  "nosana",
  "griffain",
  "tai",
  "ai-rig-complex",
  "eliza",
  "alchemist-ai",
  "memes-ai",
  "degen-spartan-ai",
  "dasha",
  "dolos-the-bully",
  "kween",
  "orbit",
  "fxn",
  "top-hat",
  "shoggoth",
  "agenttank",
  "deep-worm",
  "big-pharmai",
  "bongo-cat",
  "numogram",
  "ava-ai",
  "opus",
  "obot",
  "project89",
  "chaos-and-disorder",
  "meow",
  "koala-ai",
  "kitten-haimer",
  "pippin",
  "max",
  "aimonica-brands",
  "autonomous-virtual-beings",
  "forest",
  "solaris-ai",
  "synesis-one",
  "moe",
  "universal-basic-compute",
  "mizuki",
  "naitzsche",
  "slopfather",
  "the-lokie-cavbal",
  "tensor",
  "arok-vc",
  "aiwithdaddyissues",
  "bloomsperg-terminal",
  "omega",
  "thales-ai",
  "keke-terminal",
  "horny",
  "quasar",
  "ropirito",
  "kolin",
  "kwantxbt",
  "dither",
  "duck-ai",
  "centience",
  "iq6900",
  "darksun",
  "weird-medieval-memes",
  "yousim",
  "sensus",
  "ocada-ai",
  "singularry",
  "patchwork-naval",
  "kira",
  "kirakuru",
  "brot",
  "effective-accelerationism",
  "cheshire-grin",
  "limbo",
  "size",
  "neroboss",
  "gmika",
  "convo",
  "sqrfund",
  "ugly-dog",
  "gemxbt",
  "roastmaster9000",
  "nova-on-mars",
  "sendor",
  "flower-ai",
  "dojo-protocol",
  "internosaur",
  "devin",
  "lea-ai",
  "rex",
  "aletheia",
  "mona-arcane",
  "apicoin",
  "cyphomancer",
  "lucy-ai",
  "agent-rogue",
];
// const COIN_LIST = [
//   "FARTCOIN",
//   "GRASS",
//   "GOAT",
//   "ACT",
//   "ZEREBRO",
//   "NOS",
//   "GRIFFAIN",
//   "TAI",
//   "ARC",
//   "ELIZA",
//   "ALCH",
//   "MEMESAI",
//   "DEGENAI",
//   "VWAIFU",
//   "BULLY",
//   "KWEEN",
//   "GRIFT",
//   "FXN",
//   "HAT",
//   "SHOGGOTH",
//   "TANK",
//   "WORM",
//   "DRUGS",
//   "BONGO",
//   "GNON",
//   "AVA",
//   "OPUS",
//   "OBOT",
//   "PROJECT89",
//   "CHAOS",
//   "MEOW",
//   "KOKO",
//   "KHAI",
//   "PIPPIN",
//   "MAX",
//   "AIMONICA",
//   "AVB",
//   "FOREST",
//   "SOLARIS",
//   "SNS",
//   "MOE",
//   "UBC",
//   "MIZUKI",
//   "NAI",
//   "FATHA",
//   "CABAL",
//   "TNSR",
//   "AROK",
//   "SHEGEN",
//   "SPERG",
//   "OMEGA",
//   "THALES",
//   "KEKE",
//   "SHORNY",
//   "QUASAR",
//   "ROPIRITO",
//   "KOLIN",
//   "KWANT",
//   "DITH",
//   "DUCKAI",
//   "CENTS",
//   "IQ",
//   "BINARY",
//   "WMM",
//   "YOUSIM",
//   "SENSUS",
//   "OCADA",
//   "SINGULARRY",
//   "NAVAL",
//   "KIRA",
//   "KRA",
//   "BROT",
//   "E/ACC",
//   "GRIN",
//   "LIMBO",
//   "SIZE",
//   "NEROBOSS",
//   "GMIKA",
//   "CONVO",
//   "SQR",
//   "UGLYDOG",
//   "GEMXBT",
// ];
const App = () => {
  const [coins, setCoins] = useState([]);
  const [view, setView] = useState("table"); // 'table' or 'card'
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL, {
        params: {
          vs_currency: "usd",
          ids: COIN_LIST.join(","), // Fetch specific coins
          order: "market_cap_desc",
          sparkline: true,
        },
      })
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } min-h-screen`}
    >
      <div className="container mx-auto p-4">
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">COINS</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-500" />
              )}
            </button>
            <button
              className={`p-2 rounded-full ${
                view === "table"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setView("table")}
            >
              <FaTable />
            </button>
            <button
              className={`p-2 rounded-full ${
                view === "card"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700"
              }`}
              onClick={() => setView("card")}
            >
              <FaThLarge />
            </button>
          </div>
        </header>

        {view === "table" ? (
          <TableView coins={coins} />
        ) : (
          <CardView coins={coins} />
        )}
      </div>
    </div>
  );
};

const TableView = ({ coins }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-white">
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              #
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Coin
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Price
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Market Cap
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              24h Change
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Total Volume
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Circulating Supply
            </th>
            <th className="border border-gray-300 dark:border-gray-700 px-4 py-2">
              Graph
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr
              key={coin?.id}
              className="hover:bg-gray-50 hover:text-white dark:hover:bg-gray-700"
            >
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                {index + 1}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 flex items-center">
                <img
                  src={coin?.image}
                  alt={coin?.name}
                  className="w-5 h-5 mr-2"
                />{" "}
                {coin?.name}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                ${coin?.current_price?.toLocaleString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                ${coin?.market_cap?.toLocaleString()}
              </td>
              <td
                className={`border border-gray-300 dark:border-gray-700 px-4 py-2 ${
                  coin?.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin?.price_change_percentage_24h?.toFixed(2)}%
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                ${coin?.total_volume?.toLocaleString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                {coin?.circulating_supply?.toLocaleString()}
              </td>
              <td className="border border-gray-300 dark:border-gray-700 px-4 py-2">
                <Line
                  data={{
                    labels: coin?.sparkline_in_7d.price?.map((_, i) => i),
                    datasets: [
                      {
                        data: coin?.sparkline_in_7d.price,
                        borderColor: "#3b82f6",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: { radius: 0 },
                    },
                    scales: {
                      x: { display: false },
                      y: { display: false },
                    },
                    plugins: {
                      legend: { display: false },
                    },
                  }}
                  height={50}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CardView = ({ coins }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 text-white gap-4">
      {coins?.map((coin) => (
        <div
          className="border border-gray-300 dark:border-gray-700 p-4 rounded-lg shadow-md bg-white dark:bg-gray-800"
          key={coin?.id}
        >
          <img
            src={coin?.image}
            alt={coin?.name}
            className="w-12 h-12 mx-auto"
          />
          <h2 className="text-lg font-semibold text-center mt-2">
            {coin?.name}
          </h2>
          <p className="text-center">
            Price: ${coin?.current_price?.toLocaleString()}
          </p>
          <p className="text-center">
            Market Cap: ${coin?.market_cap?.toLocaleString()}
          </p>
          <p
            className={`text-center ${
              coin?.price_change_percentage_24h > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            24h Change: {coin?.price_change_percentage_24h?.toFixed(2)}%
          </p>
          {/* <p className="text-center">
            Total Volume: ${coin?.total_volume.toLocaleString()}
          </p>
          <p className="text-center">
            Circulating Supply: {coin?.circulating_supply.toLocaleString()}
          </p> */}
          <Line
            data={{
              labels: coin?.sparkline_in_7d?.price.map((_, i) => i),
              datasets: [
                {
                  data: coin?.sparkline_in_7d?.price,
                  borderColor: "#3b82f6",
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                },
              ],
            }}
            options={{
              elements: {
                point: { radius: 0 },
              },
              scales: {
                x: { display: false },
                y: { display: false },
              },
              plugins: {
                legend: { display: false },
              },
            }}
            height={50}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
