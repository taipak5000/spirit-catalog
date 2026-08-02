// spirit-tree-data.js
//
// All Sky: Children of the Light spirits with an unlockable spirit tree,
// extracted from the community-maintained SkyGame-Data project
// (https://github.com/Silverfeelin/SkyGame-Data, npm package skygame-data,
// used as the data source for sky-planner.com / SkyGame-Planner).
//
// For spirits that have had a returning-spirit event ("re-visit" / 蜀崎ｨｪ),
// the tree shown here is the tree from their MOST RECENT re-visit
// (treeSource: "revisit", revisitDate/revisitName record which visit),
// not the original season/first-appearance tree. Spirits that have never
// returned use their original tree (treeSource: "original").
//
// Node cost fields (only present keys are non-zero):
//   c = candles / h = hearts / sc = season candles / sh = season hearts /
//   ac = ascended candles / ec = event currency
//
// Each spirit has both name (English) and nameJa (Japanese, null if not
// yet confirmed). nameJa was filled in by cross-referencing this project's
// own wings/index.html (SEASON_SPIRITS, REALM_SPIRITS -- both were verified
// and wings' SEASON_SPIRITS was corrected in the process, see wings repo
// commit) plus targeted web research for a few one-off names.
//
// KNOWN LIMITATIONS (as of generation time):
// - Item names (itemName) are in ENGLISH only. Spirit names (nameJa) are
//   filled in for Season (169), Regular (37), Elder (6), and 1 of 4 Special
//   spirits -- 182/216 total. Still missing: 30 Guide-type spirits (NPC
//   guides, not tracked by wings since they give no wings) and 3 "Nesting
//   Challenges" special spirits. Item-level Japanese translation (2,343
//   node entries) has not been attempted yet -- separate follow-up task.
// - 45 spirits were skipped (no unlockable tree at all -- mostly seasonal
//   "Guide" NPCs and internal placeholder/staff entries). See
//   spirit-trees-skipped.json for the full list with reasons.
// - 	reeRevisions (in-season/patch tree revisions, a DIFFERENT mechanism
//   from re-visits) are NOT applied here -- only spirit.tree (original) or
//   specialVisitSpirit.tree (re-visit) are used, per the request that this
//   data be based on original vs. re-visit trees specifically.
// - Regular/Elder spirits with tiered (friendship-level) trees are marked
//   isTiered:true and each node also has tier/row/col position fields.
const SPIRIT_TREE_DATA = [
    {
        "guid":  "os6ryCdFZ5",
        "name":  "Nesting Challenges: Workshop",
        "type":  "Special",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/01/Nesting-Challenge-Board-Workshop.png",
        "treeGuid":  "Yc5dSRrZE0",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "UJtxLkK39R",
                          "cost":  {

                                   },
                          "itemGuid":  "hJxfPYZKM7",
                          "itemName":  "Challenge 1"
                      },
                      {
                          "guid":  "Rq2DE_fJqO",
                          "cost":  {

                                   },
                          "itemGuid":  "qqbIr5W31x",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "UUQiz3cPRI",
                          "cost":  {

                                   },
                          "itemGuid":  "8tjPKLsl7Z",
                          "itemName":  "Challenge 2"
                      },
                      {
                          "guid":  "AfIYz1nvzK",
                          "cost":  {

                                   },
                          "itemGuid":  "85zc_xHu8n",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "mEh-hTexTK",
                          "cost":  {

                                   },
                          "itemGuid":  "S_cbFik2cQ",
                          "itemName":  "Challenge 3"
                      },
                      {
                          "guid":  "1FPF_gcA7k",
                          "cost":  {

                                   },
                          "itemGuid":  "GVB1FbKhtN",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "t8aiIz9-KN",
                          "cost":  {
                                       "ac":  66
                                   },
                          "itemGuid":  "tzVn96kQyS",
                          "itemName":  "Music Player"
                      },
                      {
                          "guid":  "1i5uAlV6Y0",
                          "cost":  {

                                   },
                          "itemGuid":  "SZi2c1Z73f",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "mO3bkhpinm",
                          "cost":  {

                                   },
                          "itemGuid":  "FrHTa_0dl7",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "6_S-lNQOAP",
                          "cost":  {

                                   },
                          "itemGuid":  "mGY5Ce6Reu",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "Gp-hW_NCv_",
        "name":  "Nesting Challenges: Nest",
        "type":  "Special",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/22/Nesting-Challenge-Board-Nest.png",
        "treeGuid":  "UA_U-mZwhe",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "FxLsYH5-sj",
                          "cost":  {

                                   },
                          "itemGuid":  "PEMOoFtoIK",
                          "itemName":  "Challenge 1"
                      },
                      {
                          "guid":  "fBvMBX6sxp",
                          "cost":  {

                                   },
                          "itemGuid":  "uEjA_bH_Io",
                          "itemName":  "Challenge 2"
                      },
                      {
                          "guid":  "ZohKMAAexT",
                          "cost":  {

                                   },
                          "itemGuid":  "VPA1-3F6iZ",
                          "itemName":  "Challenge 3"
                      },
                      {
                          "guid":  "Y7zkzHTLC3",
                          "cost":  {

                                   },
                          "itemGuid":  "Mzi6O4xZ18",
                          "itemName":  "Random Trail Spell"
                      },
                      {
                          "guid":  "pEQAUO4mL8",
                          "cost":  {
                                       "ac":  99
                                   },
                          "itemGuid":  "E5HeUxh-fB",
                          "itemName":  "Stone Figurine"
                      },
                      {
                          "guid":  "GVcunZKZUs",
                          "cost":  {

                                   },
                          "itemGuid":  "pYs2ZF-Vxp",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "aE8l5laync",
                          "cost":  {

                                   },
                          "itemGuid":  "MxZROIvMJW",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "NM5-XriIuX",
                          "cost":  {

                                   },
                          "itemGuid":  "G5J5-91o0F",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "IhAh5oTvF8",
        "name":  "Nesting Challenges: Friends",
        "type":  "Special",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/19/Nesting-Challenge-Board-Friends.png",
        "treeGuid":  "WcLojlCmmy",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "wnVzmDgiBH",
                          "cost":  {

                                   },
                          "itemGuid":  "QxloMkZPyI",
                          "itemName":  "Challenge 1"
                      },
                      {
                          "guid":  "FRQl2ExRbx",
                          "cost":  {

                                   },
                          "itemGuid":  "5F3tWMAuYf",
                          "itemName":  "Challenge 2"
                      },
                      {
                          "guid":  "zaeR6GL1pJ",
                          "cost":  {

                                   },
                          "itemGuid":  "lGxM8gktDn",
                          "itemName":  "Challenge 3"
                      },
                      {
                          "guid":  "8yvnlkQPoc",
                          "cost":  {

                                   },
                          "itemGuid":  "Cm4FjOfNtk",
                          "itemName":  "Random Trail Spell"
                      },
                      {
                          "guid":  "MclnRUSAe9",
                          "cost":  {
                                       "ac":  33
                                   },
                          "itemGuid":  "JdmH42mAXr",
                          "itemName":  "Instrument Stand"
                      },
                      {
                          "guid":  "R0TYkYtzhp",
                          "cost":  {

                                   },
                          "itemGuid":  "sRFHhxjyCr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "HmpCchvvdb",
                          "cost":  {

                                   },
                          "itemGuid":  "MrfjjubtvZ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "CctI7FAS-w",
                          "cost":  {

                                   },
                          "itemGuid":  "jOATmxRMop",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "ulvP8R6C6a",
        "name":  "Butterfly Charmer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Butterfly Fields",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/59/Prairie-Spirit-Butterfly-Charmer.png",
        "treeGuid":  "V0j-dhLEIw",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "4uNOt6mgV6",
                          "cost":  {

                                   },
                          "itemGuid":  "mCySIT_2dL",
                          "itemName":  "Butterfly"
                      },
                      {
                          "guid":  "ZA_i29cDwE",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "KRH68Chubv",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "fpWljtvV7Y",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "1jZ8Qe_xa_",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "WTyIkMrPBD",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "FEH01aG-AU",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "IzqFBMy34e",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "cVsVWobkgR",
                          "itemName":  "Butterfly"
                      },
                      {
                          "guid":  "Zzv0Ek4rpz",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "1qBmwSZFkz",
                          "itemName":  "Butterfly Charmer Outfit"
                      },
                      {
                          "guid":  "VKG0YbZS0F",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Ijg-IuoyS6",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "DIEftMNgWY",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "9Qof4yL166",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "AlvoIsuOiW",
                          "cost":  {
                                       "h":  9
                                   },
                          "itemGuid":  "9YJ5i3uu4Z",
                          "itemName":  "Butterfly Charmer Cape 2"
                      },
                      {
                          "guid":  "DVxfMEiGas",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "pnigGjpTJH",
                          "itemName":  "Butterfly"
                      },
                      {
                          "guid":  "UGrHACWCSu",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "eZMt8EziXY",
                          "itemName":  "Butterfly Charmer Cape"
                      },
                      {
                          "guid":  "pAnqdaM8Sm",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "UerEKNAbKh",
                          "itemName":  "Butterfly"
                      }
                  ],
        "nameJa":  "蝶々使い"
    },
    {
        "guid":  "WFjSczlPTV",
        "name":  "Applauding Bellmaker",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/40/Prairie-Spirit-Applauding-Bellmaker.png",
        "treeGuid":  "hQKUIRG3JQ",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "rnOFxvQ8yB",
                          "cost":  {

                                   },
                          "itemGuid":  "yU982A7Cgz",
                          "itemName":  "Clap"
                      },
                      {
                          "guid":  "WMZn5UBB9x",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "2NPXnIYbvm",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "6xWZy3lCDI",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "AuD34CrWXr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "WkkskpjCIj",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "vBPsXlkzd-",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "DDjTUW0891",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "LoLnYkCW63",
                          "itemName":  "Clap"
                      },
                      {
                          "guid":  "1jiHTw9GOG",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "_pDOkbPeGR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4Lck1JAv0m",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "fhE3mbrVkd",
                          "itemName":  "Clap"
                      },
                      {
                          "guid":  "AQ62eYtv1p",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "PffQbv7Rw5",
                          "itemName":  "Applauding Bellmaker Hair"
                      },
                      {
                          "guid":  "t1G4gGFHdi",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "t0pk8Z0cui",
                          "itemName":  "Clap"
                      }
                  ],
        "nameJa":  "賞賛する鐘の造り手"
    },
    {
        "guid":  "48jm5EQzfU",
        "name":  "Waving Bellmaker",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/48/Prairie-Spirit-Waving-Bellmaker.png",
        "treeGuid":  "9HHikEqkYY",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "wuxyhkhW4K",
                          "cost":  {

                                   },
                          "itemGuid":  "xbObJc9i-R",
                          "itemName":  "Wave"
                      },
                      {
                          "guid":  "nviKQuBBfO",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "4Y_Zxqd4Qf",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "VSeVmyRBLt",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "aLhHdfg2-U",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "nyFe8ivmiB",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "VEDYfcgraX",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "dQnts3-ifF",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "Tqp9IA1cb_",
                          "itemName":  "Wave"
                      },
                      {
                          "guid":  "UDaegoBxDA",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "MSoLae0Z0M",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "7DH91bAiZ8",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "kU0OvflFtz",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "CujuppEzCv",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "oTkurOebWq",
                          "itemName":  "Wave"
                      },
                      {
                          "guid":  "hAPHwbFmPg",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "iISpJu1abW",
                          "itemName":  "Wave"
                      },
                      {
                          "guid":  "0xGkjL3wSv",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "UMv2RWtO9g",
                          "itemName":  "Waving Bellmaker Mask"
                      },
                      {
                          "guid":  "O581uYTh_T",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "VyCFJt_BeY",
                          "itemName":  "Wave"
                      },
                      {
                          "guid":  "u0PPjJdCOF",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "-N-LV3VirV",
                          "itemName":  "Waving Bellmaker Hair"
                      },
                      {
                          "guid":  "MUyRHh-s2b",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "VRZyKNt7QI",
                          "itemName":  "Wave"
                      }
                  ],
        "nameJa":  "手を振る鐘の造り手"
    },
    {
        "guid":  "R4ILdPamhd",
        "name":  "Slumbering Shipwright",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/15/Prairie-Spirit-Slumbering-Shipwright.png",
        "treeGuid":  "HOyyuoXAP9",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "Y25JKDR8q0",
                          "cost":  {

                                   },
                          "itemGuid":  "-tpjP_IITi",
                          "itemName":  "Yawn"
                      },
                      {
                          "guid":  "ir1ehWXQnk",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "njuf0aikXa",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "cpBrH-FySQ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "2Tq3S0Mp9W",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "0q4ReYAZs6",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "093sl7ljOJ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "oz2lkK6PDZ",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "1XGQKgE4NF",
                          "itemName":  "Yawn"
                      },
                      {
                          "guid":  "_1IsdA5dmk",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7fqEbZC--E",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "bWTeFDOp5K",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "wyhPTBmWXl",
                          "itemName":  "Yawn"
                      },
                      {
                          "guid":  "JTXJKrrgI1",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "ISKgSOaoko",
                          "itemName":  "Slumbering Shipwright Hair"
                      },
                      {
                          "guid":  "HRSvzK_IL-",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "f3IKpWrXWd",
                          "itemName":  "Yawn"
                      }
                  ],
        "nameJa":  "寝不足の造舟師"
    },
    {
        "guid":  "K3CIxcDSjq",
        "name":  "Laughing Light Catcher",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/de/Prairie-Spirit-Laughing-Light-Catcher.png",
        "treeGuid":  "Es47LhZ5hx",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "bQCdZEnHLj",
                          "cost":  {

                                   },
                          "itemGuid":  "hpAJ_E_MaE",
                          "itemName":  "Laugh"
                      },
                      {
                          "guid":  "-nwjGcrU68",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "E5ZVduWLBC",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "0PsaZTxh9P",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "ZelHA88rWA",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "AGdpXxpP7M",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "jI_AP_ipB6",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "u2ghyDdQtY",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "18rVAyXlim",
                          "itemName":  "Laugh"
                      },
                      {
                          "guid":  "YLT_OAnr11",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "XEoOJENom1",
                          "itemName":  "Laughing Light Catcher Hair"
                      },
                      {
                          "guid":  "65OcW-3x7c",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "xUzhvncppN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YEC27dN1VU",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "QgWjpddbV_",
                          "itemName":  "Laugh"
                      },
                      {
                          "guid":  "YeKvefYscp",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "biKOov4qJQ",
                          "itemName":  "Harp"
                      },
                      {
                          "guid":  "EItymn8qgx",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "Ozy3lpnc37",
                          "itemName":  "Laugh"
                      }
                  ],
        "nameJa":  "笑う光採取者"
    },
    {
        "guid":  "KM1xzU9v5P",
        "name":  "Bird Whisperer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Bird Nest",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/75/Prairie-Spirit-Bird-Whisperer.png",
        "treeGuid":  "anlwK70JVL",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "VOhxITfbm_",
                          "cost":  {

                                   },
                          "itemGuid":  "FGr955bSRr",
                          "itemName":  "Bird Call"
                      },
                      {
                          "guid":  "Gxi1ZxNEcM",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "4zhoIWIhMI",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "H2LJoq4HlZ",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "MiSak0huh-",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "QP2TB1lcU-",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "2VosX6_BOp",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4Wsd0hVTfl",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "0_BW6Cnzkn",
                          "itemName":  "Bird Whisperer Hair"
                      },
                      {
                          "guid":  "KytTHdPnRy",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "cscDfdL_rJ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "EdklOvTzK2",
                          "cost":  {
                                       "h":  1
                                   },
                          "itemGuid":  "EhvbJDQHCw",
                          "itemName":  "Bounding About"
                      }
                  ],
        "nameJa":  "鳥の語り部"
    },
    {
        "guid":  "MyLI80npmW",
        "name":  "Exhausted Dock Worker",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Cave",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3c/Prairie-Spirit-Exhausted-Dock-Worker.png",
        "treeGuid":  "ALHvJCosOd",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "RMoSSq_rSG",
                          "cost":  {

                                   },
                          "itemGuid":  "gmpO51jsXq",
                          "itemName":  "Wipe Brow"
                      },
                      {
                          "guid":  "RAQgAcpdB9",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "8lHyqj6lEi",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "ByeOQ8xIjR",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "kdjjfJUVo0",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "SoogSReZVO",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "1K-jbnXT59",
                          "itemName":  "Wipe Brow"
                      },
                      {
                          "guid":  "kogoV4pjhn",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "oiByEKIl0h",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "JrPSEa-otV",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "1AvXszxZaV",
                          "itemName":  "Exhausted Dock Worker Face Accessory"
                      },
                      {
                          "guid":  "AYj1QLBUf8",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Zlx6n-UKQ9",
                          "itemName":  "Wipe Brow"
                      },
                      {
                          "guid":  "zmMKnIo-y3",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "hDORoNTXyF",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "CA6aGHfLGW",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "Z2rsK4f5ny",
                          "itemName":  "Wipe Brow"
                      }
                  ],
        "nameJa":  "疲弊した荷積み人"
    },
    {
        "guid":  "gtbbZnpLbt",
        "name":  "Ceremonial Worshiper",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Prairie Heights",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/32/Prairie-Spirit-Ceremonial-Worshiper.png",
        "treeGuid":  "NU6qrcE5Ju",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  5,
        "nodes":  [
                      {
                          "guid":  "MImCpY6QaA",
                          "cost":  {

                                   },
                          "itemGuid":  "JSp5Simw5V",
                          "itemName":  "Teamwork"
                      },
                      {
                          "guid":  "cijZ0soCyh",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "nYnRDefjmx",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "UQ1PmDx-Pj",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "cV_ktRlr7B",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "EXtjDH3dpU",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "NzFqc9KTnM",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "BhBeG-RKZm",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "w0kI8MA68k",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  "式典の礼拝者"
    },
    {
        "guid":  "iu6tmCPpex",
        "name":  "Prairie Elder",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/39/Elder-Spirit-Prairie.png",
        "treeGuid":  "eUgsBX5PrB",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "6dVXKBi60V",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "x_pH3kjLjO",
                          "itemName":  "Prairie Elder Hair"
                      },
                      {
                          "guid":  "jetfYJJq_T",
                          "cost":  {
                                       "ac":  75
                                   },
                          "itemGuid":  "tM_21JOpuH",
                          "itemName":  "Prairie Elder Ultimate Face Accessory"
                      }
                  ],
        "nameJa":  "草原の長老"
    },
    {
        "guid":  "TqswdiTmEC",
        "name":  "Frightened Refugee",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Outer Bailey",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/49/Wasteland-Spirit-Frightened-Refugee.png",
        "treeGuid":  "2tMrFxgXJy",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "dXj9dEGxGF",
                          "cost":  {

                                   },
                          "itemGuid":  "K06bmAYI6z",
                          "itemName":  "Duck"
                      },
                      {
                          "guid":  "HoR5G5K1wx",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "vAvSXNIzGU",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "a0TFu6c-zb",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "rpcAA2zHTE",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "A7gOcYmtTu",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "BS37ROkjpR",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "YAifFrirgn",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "4AbpTT27m7",
                          "itemName":  "Duck"
                      },
                      {
                          "guid":  "9s2hp7O1nc",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "AMKnOI16lX",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "nXr-VaCOXg",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "k1JghrvRyd",
                          "itemName":  "Contrabass"
                      },
                      {
                          "guid":  "YmBGpYCWdW",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "RIlfA805ts",
                          "itemName":  "Duck"
                      },
                      {
                          "guid":  "S8f4ih7Zch",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "LY0kFk4zt9",
                          "itemName":  "Frightened Refugee Hair"
                      },
                      {
                          "guid":  "F5eHyv-7lG",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "4LkrX4-CoT",
                          "itemName":  "Duck"
                      }
                  ],
        "nameJa":  "怯える難民"
    },
    {
        "guid":  "k8nqBtLJ0R",
        "name":  "Fainting Warrior",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Outer Bailey",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/07/Wasteland-Spirit-Fainting-Warrior.png",
        "treeGuid":  "7peV6o1G9r",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "CdzqIK7HYf",
                          "cost":  {

                                   },
                          "itemGuid":  "-Dh2r4O_z1",
                          "itemName":  "Faint"
                      },
                      {
                          "guid":  "GOF_EvqTiE",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "YO8FQh93mG",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "jAtEQpgga-",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "AA61MCzDqt",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "YAAHB3Bufa",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "JMOpYiNp9P",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "vqZACNP55h",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "8bW-ZgD3YH",
                          "itemName":  "Faint"
                      },
                      {
                          "guid":  "qPEV3Gitb0",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "03vS7eTAul",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "77-Iz-PEDz",
                          "cost":  {
                                       "h":  15
                                   },
                          "itemGuid":  "Gk83uBgUnZ",
                          "itemName":  "Fainting Warrior Mask"
                      },
                      {
                          "guid":  "nChYNJgFOC",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "qCjtnFMijN",
                          "itemName":  "Faint"
                      },
                      {
                          "guid":  "JU_tvCKm4a",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "_oYTtTvbrv",
                          "itemName":  "Fainting Warrior Hair"
                      },
                      {
                          "guid":  "5ikKV3ndyi",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "zKMOiu2THu",
                          "itemName":  "Faint"
                      }
                  ],
        "nameJa":  "昏倒する戦士"
    },
    {
        "guid":  "_4VyRWxD3V",
        "name":  "Courageous Soldier",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Graveyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6b/Wasteland-Spirit-Courageous-Soldier.png",
        "treeGuid":  "3W0wLUVJL6",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "GZpqRE7Qt9",
                          "cost":  {

                                   },
                          "itemGuid":  "dCMS94p34P",
                          "itemName":  "Courageous Stance"
                      },
                      {
                          "guid":  "83k5UV6qtK",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "tuTiMOIa-h",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "NYmodXofjd",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "lzH-No9PzQ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Ek6eyjy4X_",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "r64dmcDcBa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "3azYEgKFCg",
                          "cost":  {
                                       "h":  15
                                   },
                          "itemGuid":  "3lA6dG5lJz",
                          "itemName":  "Courageous Soldier Cape"
                      },
                      {
                          "guid":  "m2Xq8DCicP",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "btPY0Ht6nP",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "PfiFflwCcw",
                          "cost":  {
                                       "h":  45
                                   },
                          "itemGuid":  "ggrTorky-R",
                          "itemName":  "Courageous Soldier Cape 2"
                      },
                      {
                          "guid":  "nuIKpueg-5",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "rpeD6YvMwV",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "iSuhxK5gq4",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "l1nLKz7suC",
                          "itemName":  "Courageous Soldier Hair"
                      }
                  ],
        "nameJa":  "勇敢な戦士"
    },
    {
        "guid":  "trJkBr3myf",
        "name":  "Stealthy Survivor",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Graveyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/37/Wasteland-Spirit-Stealthy-Survivor.png",
        "treeGuid":  "dcgTVFAm6m",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "oyQABzBGuU",
                          "cost":  {

                                   },
                          "itemGuid":  "ztAW0vBZfY",
                          "itemName":  "Sneaky Stance"
                      },
                      {
                          "guid":  "ZAO5AI4fnU",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "q2xUgGYeb-",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "gCRw4xT8d-",
                          "cost":  {
                                       "ac":  4
                                   },
                          "itemGuid":  "8-CbdFl8xl",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "_0BLE59p6x",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "fTI4TnonST",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "GOVH34pGdE",
                          "cost":  {
                                       "h":  50
                                   },
                          "itemGuid":  "NDJlGR97m-",
                          "itemName":  "Stealthy Survivor Cape"
                      },
                      {
                          "guid":  "t5CbEZT0xD",
                          "cost":  {
                                       "ac":  12
                                   },
                          "itemGuid":  "Q4T-saGcNA",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "kP266fAZ2m",
                          "cost":  {
                                       "h":  150
                                   },
                          "itemGuid":  "ya7BleEI6V",
                          "itemName":  "Stealthy Survivor Cape 2"
                      },
                      {
                          "guid":  "Wf7a6OmkyD",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "rlVToyfvFm",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Xz2nPje1Jl",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "DGzYI5od5x",
                          "itemName":  "Stealthy Survivor Hair"
                      }
                  ],
        "nameJa":  "隠れ潜む生存者"
    },
    {
        "guid":  "6GO0ISasq7",
        "name":  "Saluting Captain",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Crab Fields",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8c/Wasteland-Spirit-Saluting-Captain.png",
        "treeGuid":  "_WJq0WK8Ds",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "PoOWkpwfYx",
                          "cost":  {

                                   },
                          "itemGuid":  "g8qrVY5moU",
                          "itemName":  "Salute"
                      },
                      {
                          "guid":  "HffpdtFzoC",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "8FY4y-a61K",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "IQSPmVZtDv",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "6t4fJL9LTh",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "MZyBQ0ZD2z",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "VWVAuVACdC",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "TGSDhc-GEj",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "JWB_UaI-Wf",
                          "itemName":  "Salute"
                      },
                      {
                          "guid":  "eFfuLN0aAT",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "_8XDAcR55X",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "FopPXZvEDc",
                          "cost":  {
                                       "h":  20
                                   },
                          "itemGuid":  "0SP9P2WzZ9",
                          "itemName":  "Fireworks Staff"
                      },
                      {
                          "guid":  "ly8KHx3QI2",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "wtDnbvhyij",
                          "itemName":  "Salute"
                      },
                      {
                          "guid":  "xnBPcQjKC9",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "S793LWvPuI",
                          "itemName":  "Saluting Captain Hair"
                      },
                      {
                          "guid":  "bmjrU_wR4A",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "m9AevsoO_k",
                          "itemName":  "Salute"
                      }
                  ],
        "nameJa":  "敬礼する隊長"
    },
    {
        "guid":  "nwpDbbbWcw",
        "name":  "Lookout Scout",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Wasteland Battlefield",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/09/Wasteland-Spirit-Lookout-Scout.png",
        "treeGuid":  "oU4Uu2zMzG",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "Zc_avVFlQx",
                          "cost":  {

                                   },
                          "itemGuid":  "VY2WGYV8Vx",
                          "itemName":  "Look Around"
                      },
                      {
                          "guid":  "mv30bXTshX",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "hKfTBq2oSn",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "MTHZAQir7m",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "3FItanGlZS",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "v2il8tUEZD",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "K9WDCyOMgB",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "hW_81merrR",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GD9Ocr5cDG",
                          "itemName":  "Look Around"
                      },
                      {
                          "guid":  "qdTUeXWYH6",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "NhxNQdDRM7",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "TbPKS-RDtp",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "Ud5Scw26Il",
                          "itemName":  "Lookout Scout Face Accessory"
                      },
                      {
                          "guid":  "NHsCQioxXS",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "RtxeObjJ-x",
                          "itemName":  "Look Around"
                      },
                      {
                          "guid":  "gMKh7rWi3c",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "Zu6MhpSM7W",
                          "itemName":  "Horn"
                      },
                      {
                          "guid":  "RQ573VDk7I",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "dH24Ov55wg",
                          "itemName":  "Look Around"
                      }
                  ],
        "nameJa":  "警戒する斥候"
    },
    {
        "guid":  "JQR4EGE6io",
        "name":  "Wasteland Elder",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bc/Elder-Spirit-Wasteland.png",
        "treeGuid":  "VMIKm__4n_",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  1,
        "nodes":  [
                      {
                          "guid":  "6COu8N6od3",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "SSrCZW8Cf-",
                          "itemName":  "Wasteland Elder Hair"
                      }
                  ],
        "nameJa":  "捨てられた地の長老"
    },
    {
        "guid":  "LwcCtbnGuF",
        "name":  "Shivering Trailblazer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Forest Courtyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/98/Forest-Spirit-Shivering-Trailblazer.png",
        "treeGuid":  "qV_AsI1GHV",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "29JfYP1U6x",
                          "cost":  {

                                   },
                          "itemGuid":  "cg1HspRoFt",
                          "itemName":  "Shiver"
                      },
                      {
                          "guid":  "WLYD-ygmwh",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "WpdRkPONF4",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "zO2jWtrk6k",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "KGyA9HZ8dq",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "bKuBaI4YFN",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "hMiHemXD6P",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "m0yhQ_q4yh",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "zHkQGblG-B",
                          "itemName":  "Shiver"
                      },
                      {
                          "guid":  "JgiCKzK6Ag",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "uWSi7DgD7X",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "dN7NolZTig",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "5oWTpEPXWn",
                          "itemName":  "Shivering Trailblazer Hair"
                      },
                      {
                          "guid":  "WMSklKbMFB",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "WKFJkGzYdl",
                          "itemName":  "Shiver"
                      },
                      {
                          "guid":  "bQj9bFjWMP",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "Y2XIZBa7Ir",
                          "itemName":  "Shivering Trailblazer Outfit"
                      },
                      {
                          "guid":  "1I_g1oTguf",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "CjN1GNyRo5",
                          "itemName":  "Shiver"
                      }
                  ],
        "nameJa":  "凍える先駆者"
    },
    {
        "guid":  "xbGBFC0rnu",
        "name":  "Blushing Prospector",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f5/Forest-Spirit-Blushing-Prospector.png",
        "treeGuid":  "LMcXyV8-2j",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "88eWC8NaHK",
                          "cost":  {

                                   },
                          "itemGuid":  "EMWqfLlCv8",
                          "itemName":  "Shy"
                      },
                      {
                          "guid":  "eH3_w15Ede",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "Fq08gENJPx",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "S9004KydCF",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "io5TEFueP2",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Ls3RiS7Q9P",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "KrfWibGe29",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "_XRZ3feGLR",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "msoi-2PV03",
                          "itemName":  "Shy"
                      },
                      {
                          "guid":  "l28H-KUE-0",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "pjFW21Z5XW",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "aPxdxJNzC9",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "HGGTj_QBip",
                          "itemName":  "Drum"
                      },
                      {
                          "guid":  "qY74NM6AV4",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "jHWFCcLqlj",
                          "itemName":  "Shy"
                      },
                      {
                          "guid":  "aZKQYaxEXL",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "aKz1gRuXma",
                          "itemName":  "Blushing Prospector Hair"
                      },
                      {
                          "guid":  "si3rDZcZNl",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "MPG42915f5",
                          "itemName":  "Shy"
                      }
                  ],
        "nameJa":  "恥じらう探鉱者"
    },
    {
        "guid":  "p-WdkJpGB5",
        "name":  "Hide\u0027n\u0027Seek Pioneer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/4f/Forest-Spirit-Hide-n-Seek-Pioneer.png",
        "treeGuid":  "R7ffBM1PMH",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "4Qtw5zIpON",
                          "cost":  {

                                   },
                          "itemGuid":  "iGgNmgUF3h",
                          "itemName":  "Hide and Seek"
                      },
                      {
                          "guid":  "9jwt3nE2BP",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "ujMcX760lx",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "BwHbyV4VF-",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "Dfl2Wu-YzY",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "skupwYNQVC",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ErF247yM89",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "8GzeaAmHYN",
                          "cost":  {
                                       "h":  20
                                   },
                          "itemGuid":  "gLeirt4C--",
                          "itemName":  "Hide\u0027n\u0027Seek Pioneer Mask"
                      },
                      {
                          "guid":  "QmL66vjNwR",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "EzJWXIGt7T",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "QhTuLgOY6d",
                          "cost":  {
                                       "h":  15
                                   },
                          "itemGuid":  "bwJ7i7NrlR",
                          "itemName":  "Hide\u0027n\u0027Seek Pioneer Outfit"
                      },
                      {
                          "guid":  "jTuXvsrf86",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "BPGFkqpaP7",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "qtNkM_w1l4",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "LqipUD_Mmh",
                          "itemName":  "Hide\u0027n\u0027Seek Pioneer Hair"
                      }
                  ],
        "nameJa":  "かくれんぼ提唱者"
    },
    {
        "guid":  "waSFuoNQsR",
        "name":  "Pouty Porter",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3f/Forest-Spirit-Pouty-Porter.png",
        "treeGuid":  "u_KTXvnqG5",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "KsjglEe6SI",
                          "cost":  {

                                   },
                          "itemGuid":  "tNluEK79s-",
                          "itemName":  "Angry"
                      },
                      {
                          "guid":  "tM4s9rsVmm",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "3-kP196rlM",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "oTw9T7OrxI",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "dqLly-GV_Z",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "IT525RIZ2t",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "2a7fbwYNNH",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "91OIQtv9gX",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "FnCfXeMPEq",
                          "itemName":  "Angry"
                      },
                      {
                          "guid":  "_km-B2hJqM",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ISO8L5AHUz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "LfRpvod0Bv",
                          "cost":  {
                                       "h":  20
                                   },
                          "itemGuid":  "7Mh9pQzRHj",
                          "itemName":  "Pouty Porter Cape"
                      },
                      {
                          "guid":  "PUYKmrkj8C",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "bD_9EMf-5h",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "qofPlvL4EF",
                          "cost":  {
                                       "h":  60
                                   },
                          "itemGuid":  "gwRIgeL-d2",
                          "itemName":  "Pouty Porter Cape 2"
                      },
                      {
                          "guid":  "Q2nSJ0lskK",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "JEKMfn1NPZ",
                          "itemName":  "Angry"
                      },
                      {
                          "guid":  "zFlVSqnOb1",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "UX_lsf-RuX",
                          "itemName":  "Pouty Porter Hair"
                      },
                      {
                          "guid":  "sPIem5HJjb",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "YkzYpoa9me",
                          "itemName":  "Angry"
                      }
                  ],
        "nameJa":  "怒れる運び人"
    },
    {
        "guid":  "L_0YoE4O8Z",
        "name":  "Dismayed Hunter",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/66/Forest-Spirit-Dismayed-Hunter.png",
        "treeGuid":  "f34xxhWuw1",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "vFmHI2l-5v",
                          "cost":  {

                                   },
                          "itemGuid":  "3sNvbNBB2y",
                          "itemName":  "Shocked"
                      },
                      {
                          "guid":  "-rtgCDDkZN",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "a6lcKDO9tF",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "ry_mDuX9vO",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "spruafydlq",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rRGknPc5UD",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "drZSoeYUnQ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "XrFX8rf6sW",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "yxgVQg3Amb",
                          "itemName":  "Shocked"
                      },
                      {
                          "guid":  "2d7fWycKI3",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GdWibuAPwK",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ZpwX4fgJpu",
                          "cost":  {
                                       "h":  30
                                   },
                          "itemGuid":  "PIu602lYaG",
                          "itemName":  "Dismayed Hunter Cape"
                      },
                      {
                          "guid":  "zzbM07ENnR",
                          "cost":  {
                                       "ac":  9
                                   },
                          "itemGuid":  "czac1httCU",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "zkolC1j5nQ",
                          "cost":  {
                                       "h":  90
                                   },
                          "itemGuid":  "mo8clKxyAN",
                          "itemName":  "Dismayed Hunter Cape 2"
                      },
                      {
                          "guid":  "DBzXV9zGwT",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "E1IE_GD9iG",
                          "itemName":  "Shocked"
                      },
                      {
                          "guid":  "yfsTIiv3VE",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "KZh9gbVJU2",
                          "itemName":  "Dismayed Hunter Hair"
                      },
                      {
                          "guid":  "zQPzuBYkdy",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "n8IVtB9J3F",
                          "itemName":  "Shocked"
                      }
                  ],
        "nameJa":  "うろたえる狩人"
    },
    {
        "guid":  "puj9z07ew0",
        "name":  "Apologetic Lumberjack",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/28/Forest-Spirit-Apologetic-Lumberjack.png",
        "treeGuid":  "8mHCSAJMJt",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "2aPjMjZxVC",
                          "cost":  {

                                   },
                          "itemGuid":  "ubqUcBPT43",
                          "itemName":  "Apologize"
                      },
                      {
                          "guid":  "fsdWGhH8tz",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "wqF-XW5nbd",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "apT4eVoD6P",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "VqqKTWMSnf",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Y7doxMWXsp",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "uMXNa6YXQk",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Fp8VwusbKd",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "Ns5iP8sS2u",
                          "itemName":  "Apologize"
                      },
                      {
                          "guid":  "z_iXzSrwRR",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "pVr7TjghGa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "BiATn6zyFs",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "tOREuHRkdm",
                          "itemName":  "Apologetic Lumberjack Face Accessory"
                      },
                      {
                          "guid":  "ZJg_C-rzBB",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SFlHbJLINX",
                          "itemName":  "Apologize"
                      },
                      {
                          "guid":  "GSVLKzvD7X",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "VizeW9_N4M",
                          "itemName":  "Apologetic Lumberjack Hair"
                      },
                      {
                          "guid":  "v8GheIjFmX",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "2WUjYDii5w",
                          "itemName":  "Apologize"
                      }
                  ],
        "nameJa":  "反省する木こり"
    },
    {
        "guid":  "gF3qSnQNxx",
        "name":  "Tearful Light Miner",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/4a/Forest-Spirit-Tearful-Light-Miner.png",
        "treeGuid":  "et4Q9BpF6x",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "OHiyG0ecDH",
                          "cost":  {

                                   },
                          "itemGuid":  "r1Q1s66rrI",
                          "itemName":  "Crying"
                      },
                      {
                          "guid":  "TbkPiKZo4_",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "Dm6zio2uNp",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "yQOX1hmure",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "DK3PP0plU_",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "dfSZzwoSgN",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "yNjUr_3id0",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "rkewOU-tX9",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "dnUcxxj6St",
                          "itemName":  "Crying"
                      },
                      {
                          "guid":  "iTM_GSyQfc",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "AnYIsLUUqe",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "tZFvQCrjRa",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "T5Nr5oi-js",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "zo9tD44vxG",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "HT_3LQCGNi",
                          "itemName":  "Crying"
                      },
                      {
                          "guid":  "6YcR1IjGwv",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "tKnWsI12Hi",
                          "itemName":  "Crying"
                      },
                      {
                          "guid":  "gxKDvQ1Y7Y",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "9AzVZZ7Too",
                          "itemName":  "Crying"
                      },
                      {
                          "guid":  "mER3wV9EJJ",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "7ypZrcAvXa",
                          "itemName":  "Tearful Light Miner Hair"
                      },
                      {
                          "guid":  "oySGWpXIX6",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SuEWxrvIA6",
                          "itemName":  "Crying"
                      }
                  ],
        "nameJa":  "涙ぐむ光坑夫"
    },
    {
        "guid":  "R_zBE7HaWV",
        "name":  "Whale Whisperer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3b/Forest-Spirit-Whale-Whisperer.png",
        "treeGuid":  "Mker9XnSXM",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "T8jA7xBoO6",
                          "cost":  {

                                   },
                          "itemGuid":  "70FpYsoCa7",
                          "itemName":  "Whale Call"
                      },
                      {
                          "guid":  "myXCfF0XVh",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "w6Sae7jydQ",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "n1ztbedKM8",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "3VB1YU3K41",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "aokWeO9wk-",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7eYkFK4whN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "oaxy0v254Z",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "I5c5IPkoWK",
                          "itemName":  "Boundaries"
                      },
                      {
                          "guid":  "cLeuHg3orc",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "lEnCLpRBOe",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  "鯨の語り部"
    },
    {
        "guid":  "aj2x9H8ECy",
        "name":  "Forest Elder",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0c/Elder-Spirit-Forest.png",
        "treeGuid":  "TVSuWzpcpt",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "ncEK0wS3c6",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "T0wsTbmzvv",
                          "itemName":  "Forest Elder Hair"
                      },
                      {
                          "guid":  "jqNuraptWZ",
                          "cost":  {
                                       "ac":  250
                                   },
                          "itemGuid":  "ay0lwFyush",
                          "itemName":  "Forest Elder Ultimate Face Accessory"
                      }
                  ],
        "nameJa":  "雨林の長老"
    },
    {
        "guid":  "qSs575DZ6P",
        "name":  "Pointing Candlemaker",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Dawn Circle",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/54/Isle-Spirit-Pointing-Candlemaker.png",
        "treeGuid":  "UJAYu7Uazn",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "TvTVj7KrE3",
                          "cost":  {

                                   },
                          "itemGuid":  "kvjLVjWmZ9",
                          "itemName":  "Point"
                      },
                      {
                          "guid":  "0Aq6RVbbi0",
                          "cost":  {

                                   },
                          "itemGuid":  "X6dudcTAFc",
                          "itemName":  "Pointing Candlemaker Hair"
                      },
                      {
                          "guid":  "iY3gPOTOnR",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "NWIQpbYHLo",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "HhVhpLmBX9",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "CddPMyDNH_",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "SBmqWHSLqe",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "GAEC5m-uk9",
                          "itemName":  "Point"
                      },
                      {
                          "guid":  "UXd_XSAZUA",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "um3PQEl09a",
                          "itemName":  "Pointing Candlemaker Outfit"
                      },
                      {
                          "guid":  "tYUfY38N9Z",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "BXigzQaKYN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "rnRb03S7QQ",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "c9GTqnZ2-q",
                          "itemName":  "Point"
                      },
                      {
                          "guid":  "zd4yUax_05",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "didoncX18g",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "5f7WrCxpBV",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "FEF2-KzQfp",
                          "itemName":  "Point"
                      }
                  ],
        "nameJa":  "指差すキャンドル職人"
    },
    {
        "guid":  "Tw-J4oXgie",
        "name":  "Ushering Stargazer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Dawn Circle",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a4/Isle-Spirit-Ushering-Stargazer.png",
        "treeGuid":  "iO5Y6DGiiW",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "la5LuzVr3o",
                          "cost":  {

                                   },
                          "itemGuid":  "qbTj75q8dk",
                          "itemName":  "Come"
                      },
                      {
                          "guid":  "LRY_ZoQvcH",
                          "cost":  {

                                   },
                          "itemGuid":  "e4wyPtwoPO",
                          "itemName":  "Ushering Stargazer Hair"
                      },
                      {
                          "guid":  "xW4oId07rV",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "1ZLo5PaJfy",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "ABCPRbgpUn",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "ARnRv7zWqf",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "E0tgmyebwC",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "C5uj1dP42Q",
                          "itemName":  "Come"
                      },
                      {
                          "guid":  "Hqh9aiwPyR",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "Vz2Gpg4FSQ",
                          "itemName":  "Ushering Stargazer Outfit"
                      },
                      {
                          "guid":  "cxpWOsHdBb",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "miD4u_Gk8Q",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "_W6CCiwycv",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "NFNgmugp6o",
                          "itemName":  "Come"
                      },
                      {
                          "guid":  "3W0aBg2-2w",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "lTCCMZCXIt",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "AU-eEDYWrf",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "9MxRR5To8o",
                          "itemName":  "Come"
                      }
                  ],
        "nameJa":  "先導する星読み"
    },
    {
        "guid":  "bmYjIuJ6Qf",
        "name":  "Rejecting Voyager",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Temple of the Isle Entrance",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9a/Isle-Spirit-Rejecting-Voyager.png",
        "treeGuid":  "45994RiYac",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "eUTopR_CDA",
                          "cost":  {

                                   },
                          "itemGuid":  "Dhhtyjsi1E",
                          "itemName":  "No Thanks"
                      },
                      {
                          "guid":  "uBTtfXIo3R",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "9IQCApYVrD",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "iH03zPw5Ta",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "e9M_zvbglZ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "6Isyvk2UTx",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "sDTtepJoYG",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "s_GoDx3lJ0",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "eAWuSSOshD",
                          "itemName":  "No Thanks"
                      },
                      {
                          "guid":  "9q18dSQYOe",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "fR9CRzzD25",
                          "itemName":  "Rejecting Voyager Face Accessory"
                      },
                      {
                          "guid":  "nxnUPYsEYd",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "910IbnbJI5",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "lbex7lFbo2",
                          "cost":  {
                                       "c":  2
                                   },
                          "itemGuid":  "JXgUCqaMMt",
                          "itemName":  "No Thanks"
                      },
                      {
                          "guid":  "fyeV_UEQqv",
                          "cost":  {
                                       "h":  1
                                   },
                          "itemGuid":  "g95lk3pzSR",
                          "itemName":  "Rejecting Voyager Hair"
                      },
                      {
                          "guid":  "u1aVWXNu4t",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "I101mvqSaI",
                          "itemName":  "No Thanks"
                      }
                  ],
        "nameJa":  "固辞する航行者"
    },
    {
        "guid":  "l8tl0mHCWH",
        "name":  "Isle Elder",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7a/Elder-Spirit-Isle.png",
        "treeGuid":  "9_S8rQmBlX",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "4eQ9GIhhcJ",
                          "cost":  {
                                       "ac":  4
                                   },
                          "itemGuid":  "7FqA0RC1D4",
                          "itemName":  "Isle Elder Hair"
                      },
                      {
                          "guid":  "f_N0Z_WSAi",
                          "cost":  {
                                       "ac":  125
                                   },
                          "itemGuid":  "md88nKjoJF",
                          "itemName":  "Isle Elder Ultimate Face Accessory"
                      }
                  ],
        "nameJa":  "孤島の長老"
    },
    {
        "guid":  "4KCKJxR56G",
        "name":  "Confident Sightseer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Frozen Lake",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/4f/Valley-Spirit-Confident-Sightseer.png",
        "treeGuid":  "DJhTrzv4Yb",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "QXUQtHaV4V",
                          "cost":  {

                                   },
                          "itemGuid":  "HdmcYW9N-f",
                          "itemName":  "Confident Stance"
                      },
                      {
                          "guid":  "xXqMi5LBPL",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "vcs3OK_8Oz",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "p_OMWdbdrm",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "FiXRRuADmW",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Q31yYUNdLE",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ZFuuJjBIWl",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "qo2cq8yfAd",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "N9G6m1vBZh",
                          "itemName":  "Confident Sightseer Outfit"
                      },
                      {
                          "guid":  "L7PNevwfb2",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "GsvyOgjALq",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "qFmCOCrKGp",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "sNTC_fhMeO",
                          "itemName":  "Confident Sightseer Hair"
                      }
                  ],
        "nameJa":  "自信に満ちた観光客"
    },
    {
        "guid":  "yUp189PWVS",
        "name":  "Handstanding Thrillseeker",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Citadel",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Valley-Spirit-Handstanding-Thrillseeker.png",
        "treeGuid":  "J49-S6yLbL",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "c_m1Wyxrwd",
                          "cost":  {

                                   },
                          "itemGuid":  "iGODc_qPpd",
                          "itemName":  "Handstand"
                      },
                      {
                          "guid":  "nKWBdttHP9",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "qgfaAr8yDB",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "HuN5LCmyup",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "6Lnm6rCWUG",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "No5R3SM2Ti",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "B5tnHt0REg",
                          "itemName":  "Handstand"
                      },
                      {
                          "guid":  "XXJclypUf4",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "3hSu2b92wb",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "k_T-qM2G5R",
                          "cost":  {
                                       "h":  40
                                   },
                          "itemGuid":  "RvpMLaVQSd",
                          "itemName":  "Handstanding Thrillseeker Cape"
                      },
                      {
                          "guid":  "FUFUsqfiZb",
                          "cost":  {
                                       "ac":  9
                                   },
                          "itemGuid":  "7OqhuAzGBC",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Tn-mAwsbJp",
                          "cost":  {
                                       "h":  120
                                   },
                          "itemGuid":  "vscrkSHo4p",
                          "itemName":  "Handstanding Thrillseeker Cape 2"
                      },
                      {
                          "guid":  "NujCnw47u5",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "4jvgh1uZDr",
                          "itemName":  "Handstand"
                      },
                      {
                          "guid":  "_nShwueLTL",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "TdzAMY6qRC",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "RIr1AciD9a",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SK5gSmxvBt",
                          "itemName":  "Handstand"
                      }
                  ],
        "nameJa":  "逆立ちする怖いもの知らず"
    },
    {
        "guid":  "CfXORyMFx4",
        "name":  "Manta Whisperer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Citadel",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/00/Valley-Spirit-Manta-Whisperer.png",
        "treeGuid":  "XRXDlNt2KM",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "fUhhICR_SG",
                          "cost":  {

                                   },
                          "itemGuid":  "XyTNAnvs9N",
                          "itemName":  "Manta Call"
                      },
                      {
                          "guid":  "NB44ktOjko",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "YSZMv-rKxL",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "8tTyxMS77Y",
                          "cost":  {
                                       "ac":  1
                                   },
                          "itemGuid":  "YYedQero8G",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "fVyQsRwE8e",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Z37JHFdFQY",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "_N58WgWgjx",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "-ax0YjoCqc",
                          "itemName":  "Aperture"
                      },
                      {
                          "guid":  "i7YkDXbska",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "LxsTTzy8DJ",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  "マンタの語り部"
    },
    {
        "guid":  "H5iKZChQIK",
        "name":  "Backflipping Champion",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Citadel",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/35/Valley-Spirit-Backflipping-Champion.png",
        "treeGuid":  "wnFJK6iIdP",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "SiSq-1YcL1",
                          "cost":  {

                                   },
                          "itemGuid":  "S3qCWOry5Q",
                          "itemName":  "Backflip"
                      },
                      {
                          "guid":  "nPTdUKSZmz",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "q_UHBw0hde",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "RxXnC63bsn",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "QooyrTgJZK",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "uxbCIyCisO",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "9W9dsdNrYP",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "v2SC6Q5wuu",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "VaWHh_2B2X",
                          "itemName":  "Backflip"
                      },
                      {
                          "guid":  "bq5WRWB6dP",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "PhDZBeh2VK",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "L-_HIxzV3U",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "7VBgFCqs5x",
                          "itemName":  "Backflipping Champion Face Accessory"
                      },
                      {
                          "guid":  "QTE7xeT9xh",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "NFnTgjfTst",
                          "itemName":  "Backflip"
                      },
                      {
                          "guid":  "RjKyznGG3D",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "NPM3TvV95I",
                          "itemName":  "Backflipping Champion Hair"
                      },
                      {
                          "guid":  "-1vAzgI6Bo",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "XDvPc5hCdm",
                          "itemName":  "Backflip"
                      }
                  ],
        "nameJa":  "宙返りをする優勝者"
    },
    {
        "guid":  "IIt-zYJC2N",
        "name":  "Cheerful Spectator",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bc/Valley-Spirit-Cheerful-Spectator.png",
        "treeGuid":  "mHTyXPh-yi",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "Kak3sj4SiH",
                          "cost":  {

                                   },
                          "itemGuid":  "tL1K-hP5z-",
                          "itemName":  "Cheer"
                      },
                      {
                          "guid":  "a4Jot2Cc24",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "fJX56-5efD",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "1_la9OZ3T4",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "JV9h2D6_iD",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "UoRXY-q5HZ",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "EnIrr0mkWO",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Nhye3KrN7m",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "cAgxbrsMjj",
                          "itemName":  "Cheer"
                      },
                      {
                          "guid":  "39u42Vtm9Y",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7gBIRWQMqo",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "3YD1I7Q2NY",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "o8VUub-4vw",
                          "itemName":  "Piano"
                      },
                      {
                          "guid":  "5C5Os6jguA",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "ADRONECYYY",
                          "itemName":  "Cheer"
                      },
                      {
                          "guid":  "O9WmdPbNY4",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "RtX7BAaov2",
                          "itemName":  "Cheerful Spectator Hair"
                      },
                      {
                          "guid":  "5ZT3L-5z6P",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "4xvMNOz0ZB",
                          "itemName":  "Cheer"
                      }
                  ],
        "nameJa":  "応援する観客"
    },
    {
        "guid":  "fRtK3WFMm1",
        "name":  "Bowing Medalist",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b0/Valley-Spirit-Bowing-Medalist.png",
        "treeGuid":  "_aHaMwt5OW",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "U09Vg1Bo4G",
                          "cost":  {

                                   },
                          "itemGuid":  "SPPN_qj2ia",
                          "itemName":  "Bow"
                      },
                      {
                          "guid":  "M-czyi1tI8",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "XGq2R47AQP",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "utWjSVT0mr",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "wK07Svwcme",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "V7rMyz20_V",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "eckewft_jb",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "1sDRY-EOfJ",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "QPVqC_FiAv",
                          "itemName":  "Bow"
                      },
                      {
                          "guid":  "y7UP-ueb3W",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "YD8aCpubnd",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ntIye0Ivqe",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "HpwvctsUt0",
                          "itemName":  "Bowing Medalist Face Accessory"
                      },
                      {
                          "guid":  "pg1DLGtwSe",
                          "cost":  {
                                       "c":  4
                                   },
                          "itemGuid":  "ApqdPyaCIR",
                          "itemName":  "Bow"
                      },
                      {
                          "guid":  "bxcXHiYYHy",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "wNv_ZY93TS",
                          "itemName":  "Bowing Medalist Hair"
                      },
                      {
                          "guid":  "JVVdtMtych",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "7RooNO25P9",
                          "itemName":  "Bow"
                      }
                  ],
        "nameJa":  "お辞儀をするメダリスト"
    },
    {
        "guid":  "CQJO8mQ0do",
        "name":  "Proud Victor",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/06/Valley-Spirit-Proud-Victor.png",
        "treeGuid":  "kTUUniUQiN",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "u5yiirWvsH",
                          "cost":  {

                                   },
                          "itemGuid":  "6Gz1udO5fI",
                          "itemName":  "Proud Stance"
                      },
                      {
                          "guid":  "j7iUKGbnoi",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "iiOkKg45h6",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "p6V5_Oemdh",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "lTJvCpqk1x",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "zKsuqmndkA",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ARsOLtcDLz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "PCxl8mSIet",
                          "cost":  {
                                       "h":  30
                                   },
                          "itemGuid":  "92GkXR2RZh",
                          "itemName":  "Proud Victor Mask"
                      },
                      {
                          "guid":  "NTA4mGCwBj",
                          "cost":  {
                                       "ac":  9
                                   },
                          "itemGuid":  "RnDoRx7ilh",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "z9zBHq4DTD",
                          "cost":  {
                                       "h":  30
                                   },
                          "itemGuid":  "4iqOdYFTuk",
                          "itemName":  "Proud Victor Cape 2"
                      },
                      {
                          "guid":  "5k89do9E8E",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "O--c413sH6",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "MbEmIIrY5m",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "o104MA8jIE",
                          "itemName":  "Proud Victor Cape"
                      }
                  ],
        "nameJa":  "誇り高き勝者"
    },
    {
        "guid":  "NgLbFXaB4z",
        "name":  "Valley Elders",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9b/Elder-Spirits-Valley.png",
        "treeGuid":  "EZP7ISiCn5",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "lxz9_FA5lW",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "tnhmHAHeo4",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "IAXvSy1zSG",
                          "cost":  {
                                       "ac":  6
                                   },
                          "itemGuid":  "AjiVTxnCly",
                          "itemName":  "Valley Elder Hair 2"
                      },
                      {
                          "guid":  "5jxMyDhBtf",
                          "cost":  {
                                       "ac":  150
                                   },
                          "itemGuid":  "oOmRXIzleH",
                          "itemName":  "Valley Ultimate Mask B"
                      },
                      {
                          "guid":  "-fyqgqgPHx",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "fap0foDD3-",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "PVXjRO0TDh",
                          "cost":  {
                                       "ac":  5
                                   },
                          "itemGuid":  "YdtLj5dJE7",
                          "itemName":  "Valley Elder Hair 1"
                      },
                      {
                          "guid":  "0FImNOUHCt",
                          "cost":  {
                                       "ac":  150
                                   },
                          "itemGuid":  "VK3b1RyEwA",
                          "itemName":  "Valley Ultimate Mask A"
                      }
                  ],
        "nameJa":  "峡谷の長老"
    },
    {
        "guid":  "Im7m8syitV",
        "name":  "Levitating Adept",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Vault Second Floor",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8f/Vault-Spirit-Levitating-Adept.png",
        "treeGuid":  "das41f_Q-7",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "7VjqIMArcP",
                          "cost":  {

                                   },
                          "itemGuid":  "vVUB_cGhZd",
                          "itemName":  "Telekinesis"
                      },
                      {
                          "guid":  "CPS5oF5KcY",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "KW8r7-br2I",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "RXXWCBhBBY",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "J3zEc7Reur",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "X39aIbreMr",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "9Bu1oUi8FF",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "zdltoWFOaL",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "9_H47RAVw-",
                          "itemName":  "Telekinesis"
                      },
                      {
                          "guid":  "byzlaZQ4vb",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "svDjH2d-e5",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "8oNTPBwVFm",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "CKVi0baUvl",
                          "itemName":  "Levitating Adept Face Accessory"
                      },
                      {
                          "guid":  "7Qnuq3tvD8",
                          "cost":  {
                                       "c":  7
                                   },
                          "itemGuid":  "yfJsC8H6F4",
                          "itemName":  "Telekinesis"
                      },
                      {
                          "guid":  "58xq6L0f9S",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "feolA3Sbwy",
                          "itemName":  "Levitating Adept Hair"
                      },
                      {
                          "guid":  "m3Hteyrcof",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "l6TWStE9Xr",
                          "itemName":  "Telekinesis"
                      }
                  ],
        "nameJa":  "念動力の使い手"
    },
    {
        "guid":  "Gi75RcvXd0",
        "name":  "Meditating Monastic",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Upper Vault",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/11/Vault-Spirit-Meditating-Monastic.png",
        "treeGuid":  "MzxOaKTjwc",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "oDypNKciuf",
                          "cost":  {

                                   },
                          "itemGuid":  "c1A0Bf98bJ",
                          "itemName":  "Float"
                      },
                      {
                          "guid":  "mWYCAelmmO",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "Vbl_un6xzP",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "lqGE-tETvr",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "gsduxoZUwm",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Ipr1-rSKrP",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "L5uWPBlT0O",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "e9KZg9bq0h",
                          "cost":  {
                                       "c":  7
                                   },
                          "itemGuid":  "of7E6FbO6S",
                          "itemName":  "Float"
                      },
                      {
                          "guid":  "jg8AciMyvo",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "m_mcgzu_Wk",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "DREitrZm16",
                          "cost":  {
                                       "h":  30
                                   },
                          "itemGuid":  "EdxE5UGZsa",
                          "itemName":  "Meditating Monastic Table Prop"
                      },
                      {
                          "guid":  "tP7zEEseeb",
                          "cost":  {
                                       "c":  10
                                   },
                          "itemGuid":  "1icJGw6P2x",
                          "itemName":  "Float"
                      },
                      {
                          "guid":  "nJx_sgAgZh",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "tBRghYOFon",
                          "itemName":  "Meditating Monastic Hair"
                      },
                      {
                          "guid":  "s9JejhTZVh",
                          "cost":  {
                                       "c":  10
                                   },
                          "itemGuid":  "hu9E5_AnJh",
                          "itemName":  "Float"
                      }
                  ],
        "nameJa":  "瞑想する修道士"
    },
    {
        "guid":  "HeJISF946a",
        "name":  "Memory Whisperer",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Upper Vault",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/34/Vault-Spirit-Memory-Whisperer.png",
        "treeGuid":  "Vv98PNmcao",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "HrhoyxoLVs",
                          "cost":  {

                                   },
                          "itemGuid":  "I1fk2fnGDK",
                          "itemName":  "Cosmic Manta Call"
                      },
                      {
                          "guid":  "GTKnGXUhTY",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "3AsQwFFxdG",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "5k0wGiIStV",
                          "cost":  {
                                       "ac":  4
                                   },
                          "itemGuid":  "KPg6xkOZ6M",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "EVH7QMnzJg",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "5T5eE9N4zZ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "jIHiW6Vo4g",
                          "cost":  {
                                       "h":  50
                                   },
                          "itemGuid":  "ec8jU3Gerw",
                          "itemName":  "Memory Whisperer Cape"
                      },
                      {
                          "guid":  "SCM86SAi3g",
                          "cost":  {
                                       "ac":  12
                                   },
                          "itemGuid":  "0W2hMqYmmo",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "0oV5oVv4oZ",
                          "cost":  {
                                       "h":  150
                                   },
                          "itemGuid":  "fRVPpavon7",
                          "itemName":  "Memory Whisperer Cape 2"
                      },
                      {
                          "guid":  "R6t0lBsWwM",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "VfU1MhzBJY",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "iF1sgGpjVE",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "wXOGyF57AN",
                          "itemName":  "Memory Whisperer Outfit"
                      }
                  ],
        "nameJa":  "記憶の語り部"
    },
    {
        "guid":  "1OGD_H3a7X",
        "name":  "Polite Scholar",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Lower Vault",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/61/Vault-Spirit-Polite-Scholar.png",
        "treeGuid":  "Z1PFz0tm12",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "9IwUGyaG5-",
                          "cost":  {

                                   },
                          "itemGuid":  "8QnR-XHmJg",
                          "itemName":  "Polite Stance"
                      },
                      {
                          "guid":  "-hpQUYeMjk",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "HjG7tXdZsG",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "JB0wn9XVLr",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "A6BetnYLiG",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "YpejVyVx4k",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "MRn4GtOKCz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6d_qIn00ju",
                          "cost":  {
                                       "h":  15
                                   },
                          "itemGuid":  "DTMwTb6_mu",
                          "itemName":  "Polite Scholar Hair"
                      },
                      {
                          "guid":  "IWrt37XnSp",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "u3KgRMaHiR",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "T0PF9rJm3Y",
                          "cost":  {
                                       "h":  2
                                   },
                          "itemGuid":  "3T-ZS6ZooQ",
                          "itemName":  "Polite Scholar Outfit"
                      }
                  ],
        "nameJa":  "敬けんな賢人"
    },
    {
        "guid":  "_8CvQjUnQg",
        "name":  "Praying Acolyte",
        "type":  "Regular",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "Vault Rest",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/89/Vault-Spirit-Praying-Acolyte.png",
        "treeGuid":  "5sAVyZ3QBX",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "ItpocgQi8H",
                          "cost":  {

                                   },
                          "itemGuid":  "EN-zwdMKW0",
                          "itemName":  "Pray"
                      },
                      {
                          "guid":  "_Oqos-1eh6",
                          "cost":  {
                                       "c":  1
                                   },
                          "itemGuid":  "2aDtgu-fY8",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "9nXdc8aWqZ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "K91m7VZ7Tg",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "nRqRD2P7KS",
                          "cost":  {
                                       "ac":  3
                                   },
                          "itemGuid":  "sVrq8c1PUm",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "yxfYETqem8",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "47u5kXt3wr",
                          "itemName":  "Pray"
                      },
                      {
                          "guid":  "5X13lR92ox",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Vv6kjY36w5",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "XPJFRfV5y5",
                          "cost":  {
                                       "h":  25
                                   },
                          "itemGuid":  "WwlWwMfCen",
                          "itemName":  "Praying Acolyte Cape"
                      },
                      {
                          "guid":  "uGUw8yHc88",
                          "cost":  {
                                       "ac":  9
                                   },
                          "itemGuid":  "DkdobTs2WM",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "tZJt1qDhNU",
                          "cost":  {
                                       "h":  75
                                   },
                          "itemGuid":  "DyXPylwH7w",
                          "itemName":  "Praying Acolyte Cape 2"
                      },
                      {
                          "guid":  "tThb_YDAl1",
                          "cost":  {
                                       "c":  7
                                   },
                          "itemGuid":  "ZHkYvZFLjE",
                          "itemName":  "Pray"
                      },
                      {
                          "guid":  "ECfXI2TTxQ",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "exlIascN2K",
                          "itemName":  "Praying Acolyte Hair"
                      },
                      {
                          "guid":  "ShOKs12xl8",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "3kiNK4eee-",
                          "itemName":  "Pray"
                      }
                  ],
        "nameJa":  "祈る侍者"
    },
    {
        "guid":  "NLbS2a-y2u",
        "name":  "Vault Elder",
        "type":  "Elder",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  "The Passage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/63/Elder-Spirit-Vault.png",
        "treeGuid":  "ntRHO7rHJt",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  1,
        "nodes":  [
                      {
                          "guid":  "cr2m1Ibgsl",
                          "cost":  {
                                       "ac":  5
                                   },
                          "itemGuid":  "RIkdOtUAeN",
                          "itemName":  "Vault Elder Hair"
                      }
                  ],
        "nameJa":  "書庫の長老"
    },
    {
        "guid":  "WFqMqmjVv9",
        "name":  "Abyss Guide",
        "type":  "Guide",
        "season":  "Season of Abyss",
        "seasonOrderIndex":  0,
        "area":  "Treasure Reef",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e0/SOAbyss-Abyss-Guide.png",
        "treeGuid":  "xz8rpLZQmm",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "xns82LP3Gt",
                          "cost":  {

                                   },
                          "itemGuid":  "q_hFj239P3",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "pqRQRiMp67",
                          "cost":  {

                                   },
                          "itemGuid":  "Ya2cCEllDX",
                          "itemName":  "Abyss Ultimate Pendant"
                      },
                      {
                          "guid":  "TOO3VxqYRZ",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "rfwNbdvXQz",
                          "itemName":  "Abyss Ultimate Face Accessory"
                      },
                      {
                          "guid":  "MSoJcvKCKg",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "8Oy0j-LGR_",
                          "itemName":  "Abyss Ultimate Cape"
                      },
                      {
                          "guid":  "_3YV2lzNDS",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "zYUN2fkYOQ",
                          "itemName":  "Abyss Ultimate Mask"
                      },
                      {
                          "guid":  "TeAhpF5l2v",
                          "cost":  {

                                   },
                          "itemGuid":  "WmIBNGUBOM",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "ZzEAcE0gLh",
                          "cost":  {

                                   },
                          "itemGuid":  "UDBLLL_RkX",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "eDkxmL9TKF",
                          "cost":  {

                                   },
                          "itemGuid":  "0p1PuMa1qF",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "PZfpILbiTu",
                          "cost":  {

                                   },
                          "itemGuid":  "emplzik5B0",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "Km3r0EnaFQ",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "P2xV7cdviC",
                          "itemName":  "Abyss Guide Mask"
                      },
                      {
                          "guid":  "e9NqD94Wf-",
                          "cost":  {

                                   },
                          "itemGuid":  "BxgvIhtAAa",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rhGOSjJ-nB",
                          "cost":  {

                                   },
                          "itemGuid":  "4UDGOyQjbU",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "amT_A5iWDG",
                          "cost":  {

                                   },
                          "itemGuid":  "UjRuSPnN7Y",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "IrEYl3nQiT",
                          "cost":  {

                                   },
                          "itemGuid":  "6U8e52uY26",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "D1l-W0GLwh",
                          "cost":  {

                                   },
                          "itemGuid":  "6xObJRMVCx",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "4gwH1Tn9he",
        "name":  "Anxious Angler",
        "type":  "Season",
        "season":  "Season of Abyss",
        "seasonOrderIndex":  1,
        "area":  "Treasure Reef",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5f/Abyss-Spirit-Anxious-Angler.png",
        "treeGuid":  "R2WmeZDMqd",
        "treeSource":  "revisit",
        "revisitDate":  "2025-08-18",
        "revisitName":  "Special Visit #10",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "WsJjGE_da0",
                          "cost":  {

                                   },
                          "itemGuid":  "sk_cUbT6vx",
                          "itemName":  "Anxious"
                      },
                      {
                          "guid":  "kLaBdog9Gv",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "BrdpWDCx5c",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4d1A9y8r4J",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "2vqdDGadG5",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "soiTRGlSo1",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "aXl9NeM1su",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "bv8F_D8UV6",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "kuS7q4u7Ua",
                          "itemName":  "Anxious"
                      },
                      {
                          "guid":  "jQyyD2GWGL",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "xFJMNfae6Y",
                          "itemName":  "Anxious Angler Mask"
                      },
                      {
                          "guid":  "L5Cgddxe9A",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "1HGapVTSXR",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "y9KvhW00kq",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "xCPJYG39hD",
                          "itemName":  "Anxious Angler Outfit"
                      },
                      {
                          "guid":  "A8ZaRauozx",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "Q0E7lpa192",
                          "itemName":  "Anxious Angler Cape"
                      },
                      {
                          "guid":  "yo4C5KStWN",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "rv2ivbgqBM",
                          "itemName":  "Anxious"
                      },
                      {
                          "guid":  "TtM_--yR1L",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "Qqsui-W6Gr",
                          "itemName":  "Anxious Angler Hair"
                      },
                      {
                          "guid":  "B3DLBAsmev",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "3ixBHha-wW",
                          "itemName":  "Anxious"
                      }
                  ],
        "nameJa":  "繊細な漁師"
    },
    {
        "guid":  "aVOtIknTMO",
        "name":  "Ceasing Commodore",
        "type":  "Season",
        "season":  "Season of Abyss",
        "seasonOrderIndex":  2,
        "area":  "Treasure Reef",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/99/Abyss-Spirit-Ceasing-Commodore.png",
        "treeGuid":  "63I7854lB-",
        "treeSource":  "revisit",
        "revisitDate":  "2024-03-04",
        "revisitName":  "Special Visit #5",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "BkKELtjaxF",
                          "cost":  {

                                   },
                          "itemGuid":  "Ei9pBqI3yK",
                          "itemName":  "Calm Down"
                      },
                      {
                          "guid":  "1XHkKL4Bkq",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "RVcOixT4ox",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "6bKHj9WLDk",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "1UjXVxWRSA",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "w-Ta7kdatk",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "hFsueN5kVb",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "yhrNgJpdXA",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "aDDMg7WuIc",
                          "itemName":  "Calm Down"
                      },
                      {
                          "guid":  "lCOwXBBIQm",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "3QYgeQvXXu",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "SU98m8IQE2",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "_qGl7VRl35",
                          "itemName":  "Ceasing Commodore Cape"
                      },
                      {
                          "guid":  "kDmq7slWfV",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "aoo9OjQKpZ",
                          "itemName":  "Ceasing Commodore Mask"
                      },
                      {
                          "guid":  "TnPJ6BRogS",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "TKVZD91Ur_",
                          "itemName":  "Calm Down"
                      },
                      {
                          "guid":  "_CqXlQmb6y",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "WwuCeXn8wy",
                          "itemName":  "Ceasing Commodore Hair"
                      },
                      {
                          "guid":  "9g4hY1pqo8",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "FETTumn6J-",
                          "itemName":  "Calm Down"
                      }
                  ],
        "nameJa":  "動じない提督"
    },
    {
        "guid":  "zVs_gAo_wy",
        "name":  "Bumbling Boatswain",
        "type":  "Season",
        "season":  "Season of Abyss",
        "seasonOrderIndex":  3,
        "area":  "Treasure Reef",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0c/Abyss-Spirit-Bumbling-Boatswain.png",
        "treeGuid":  "eodAzj6E3z",
        "treeSource":  "revisit",
        "revisitDate":  "2025-08-18",
        "revisitName":  "Special Visit #10",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "pVBm48V0So",
                          "cost":  {

                                   },
                          "itemGuid":  "VHBoJkhQ24",
                          "itemName":  "Ouch"
                      },
                      {
                          "guid":  "c_7sjkmC_W",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "YTE_Ziy6i8",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "DadhNO7KOn",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "xK_nid1lFo",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "9DuG_-ldJc",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "PaCqy_R04T",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "rpiLem_-wa",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "qrYCS8SmH6",
                          "itemName":  "Ouch"
                      },
                      {
                          "guid":  "dst69eXq6p",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "_FVDOa59ap",
                          "itemName":  "Without a Paddle"
                      },
                      {
                          "guid":  "lTQoGcB54y",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "idLhAGPRnT",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "dxjyDmW--y",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "nv2UT24TMx",
                          "itemName":  "Bumbling Boatswain Cape"
                      },
                      {
                          "guid":  "BTfeLQnMz4",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "rBTLwfPTsK",
                          "itemName":  "Bumbling Boatswain Hat"
                      },
                      {
                          "guid":  "gyjW5DhDr7",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "-ccudc7_7b",
                          "itemName":  "Ouch"
                      },
                      {
                          "guid":  "RoLy5a6css",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "XOzWZOzj71",
                          "itemName":  "Bumbling Boatswain Mask"
                      },
                      {
                          "guid":  "az0Zlf_vu0",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "ACcdP5GR4g",
                          "itemName":  "Ouch"
                      }
                  ],
        "nameJa":  "おっちょこちょいな水夫長"
    },
    {
        "guid":  "gTIay-wjmN",
        "name":  "Cackling Cannoneer",
        "type":  "Season",
        "season":  "Season of Abyss",
        "seasonOrderIndex":  4,
        "area":  "Treasure Reef",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/48/Abyss-Spirit-Cackling-Cannoneer.png",
        "treeGuid":  "-dB5Tod28p",
        "treeSource":  "revisit",
        "revisitDate":  "2023-08-07",
        "revisitName":  "Special Visit #4",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "tqaWjBRyj4",
                          "cost":  {

                                   },
                          "itemGuid":  "d_Qmk0N-T9",
                          "itemName":  "Evil Laugh"
                      },
                      {
                          "guid":  "ipWgIyhfvJ",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "kZRarc4FE0",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "xNo8MO2xNn",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "VVjIxRu0sP",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "k3N5JYOOD0",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "A0ldX-rd76",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "SoZuEOSC2w",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "heGFa0OjPp",
                          "itemName":  "Evil Laugh"
                      },
                      {
                          "guid":  "yAQp1Zq8Gp",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "OuUFDFFKlQ",
                          "itemName":  "Cackling Cannoneer Hair"
                      },
                      {
                          "guid":  "5XT98pJaH-",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "BZEJEX6j57",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "-4nIup0gl4",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "a4LXqflNKy",
                          "itemName":  "Sowing Mischief"
                      },
                      {
                          "guid":  "qZDDZzyVsl",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "J4wT0OrTrf",
                          "itemName":  "Cackling Cannoneer Cape"
                      },
                      {
                          "guid":  "901JKY2WYT",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "Vc0XWt8AUm",
                          "itemName":  "Evil Laugh"
                      },
                      {
                          "guid":  "lTD1SdkFnL",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "1qIdoVpmEe",
                          "itemName":  "Cackling Cannoneer Mask"
                      },
                      {
                          "guid":  "Gw-_rKjg-0",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "0iyXmNvh_C",
                          "itemName":  "Evil Laugh"
                      }
                  ],
        "nameJa":  "豪快に笑う砲手"
    },
    {
        "guid":  "cpwvdVEzKN",
        "name":  "Assembly Guide",
        "type":  "Guide",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  0,
        "area":  "The Treehouse",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/63/Assembly-Guide-Spirit.png",
        "treeGuid":  "FvRPGlaPpW",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  22,
        "nodes":  [
                      {
                          "guid":  "dBH2AWEdO9",
                          "cost":  {

                                   },
                          "itemGuid":  "srvkkR75YW",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "fYkmpZNwi6",
                          "cost":  {

                                   },
                          "itemGuid":  "Hfu-dI_t7e",
                          "itemName":  "Assembly Ultimate Pendant"
                      },
                      {
                          "guid":  "rYnGpAsHAN",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "bOx0bcbPix",
                          "itemName":  "Assembly Ultimate Mask"
                      },
                      {
                          "guid":  "A4Dkmob6-c",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "_qNmWZx0rp",
                          "itemName":  "Assembly Ultimate Hair"
                      },
                      {
                          "guid":  "lekFrRUyKi",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "B59f4_ru60",
                          "itemName":  "Assembly Ultimate Bugle"
                      },
                      {
                          "guid":  "Ji2B6vFsuJ",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "ZdKPdWs2xL",
                          "itemName":  "Assembly Ultimate Cape"
                      },
                      {
                          "guid":  "MmSP3pMVsf",
                          "cost":  {

                                   },
                          "itemGuid":  "tppcnxBORd",
                          "itemName":  "High Five"
                      },
                      {
                          "guid":  "5k-OCX0qb0",
                          "cost":  {

                                   },
                          "itemGuid":  "lT9zT9m0fm",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "o-kNUz8Zos",
                          "cost":  {

                                   },
                          "itemGuid":  "zvNA-aFO_N",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "dRS0xEgAnc",
                          "cost":  {

                                   },
                          "itemGuid":  "WT4sxsdjxU",
                          "itemName":  "Hug"
                      },
                      {
                          "guid":  "InspZWtIlI",
                          "cost":  {

                                   },
                          "itemGuid":  "W1uCIbviNd",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "vEsaLxhWmE",
                          "cost":  {

                                   },
                          "itemGuid":  "kUyRgMkRv4",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "cbHbX3Ei9B",
                          "cost":  {

                                   },
                          "itemGuid":  "fp3sCcGPDT",
                          "itemName":  "Double-Five"
                      },
                      {
                          "guid":  "JMrcrQ3-lU",
                          "cost":  {

                                   },
                          "itemGuid":  "iJ4O7SASJW",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "ANiCuPzBh9",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "3R6A1mzG6f",
                          "itemName":  "Assembly Bookcase"
                      },
                      {
                          "guid":  "P2yh773_w5",
                          "cost":  {
                                       "h":  24
                                   },
                          "itemGuid":  "laiUQayJhD",
                          "itemName":  "Assembly Tent"
                      },
                      {
                          "guid":  "89NgpQUrsx",
                          "cost":  {

                                   },
                          "itemGuid":  "eN9vWXxnX-",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "PCqN50fMRq",
                          "cost":  {
                                       "h":  12
                                   },
                          "itemGuid":  "PPtPoGemsA",
                          "itemName":  "Assembly Brazier"
                      },
                      {
                          "guid":  "iux67QpUTH",
                          "cost":  {
                                       "c":  8
                                   },
                          "itemGuid":  "J8C4DuO7Du",
                          "itemName":  "Assembly Jar"
                      },
                      {
                          "guid":  "vsgFsnH6Q2",
                          "cost":  {

                                   },
                          "itemGuid":  "KO47yNy6pk",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ggKjjBGZky",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "BUJZPtO4HN",
                          "itemName":  "Assembly Pillow"
                      },
                      {
                          "guid":  "KVqudTeVQ7",
                          "cost":  {

                                   },
                          "itemGuid":  "sQkVBP30nf",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "94UEgV7ic1",
        "name":  "Baffled Botanist",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  1,
        "area":  "Forest Courtyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/81/Assembly-Spirit-Baffled-Botanist.png",
        "treeGuid":  "aXqXgWbDvC",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "hpx6Eutowo",
                          "cost":  {

                                   },
                          "itemGuid":  "PKx3NYE71T",
                          "itemName":  "Facepalm"
                      },
                      {
                          "guid":  "D-vr8xTiUU",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "nBeir7F8rm",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "kqSGBDCMyB",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "LW2LPPSW5_",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "zmFf5srQgj",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "HaPceioA9j",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "X3hvZ_6RA-",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "turlkU87QA",
                          "itemName":  "Facepalm"
                      },
                      {
                          "guid":  "YRMhp-i7l9",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "mDc9qQKCBy",
                          "itemName":  "Baffled Botanist Hair"
                      },
                      {
                          "guid":  "OAgX8bZScC",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Z68GLvFuLv",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "dooxqvR0Ak",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "KZMXQVnjyb",
                          "itemName":  "Baffled Botanist Prop"
                      },
                      {
                          "guid":  "qlJuUUl8FD",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "yqN3H8SyIs",
                          "itemName":  "Facepalm"
                      },
                      {
                          "guid":  "M9lOPMur5v",
                          "cost":  {
                                       "c":  24
                                   },
                          "itemGuid":  "JQSXDCKUPE",
                          "itemName":  "Baffled Botanist Mask"
                      },
                      {
                          "guid":  "YGOKF1SLZD",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "rsYXcsOjgR",
                          "itemName":  "Facepalm"
                      }
                  ],
        "nameJa":  "とまどう植物学者"
    },
    {
        "guid":  "RG-Z1xwway",
        "name":  "Scolding Student",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  2,
        "area":  "Forest Courtyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Assembly-Spirit-Scolding-Student.png",
        "treeGuid":  "5W0EyIvjwK",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "Ig6dQGp7ll",
                          "cost":  {

                                   },
                          "itemGuid":  "GDEPmZva_3",
                          "itemName":  "Scold"
                      },
                      {
                          "guid":  "Y_j-M-8SrY",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Iw7f-6mtyr",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "7dRDY4U-jD",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "UAne9toSKx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "6tbbXIZ_jC",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "nVt5lNwIVK",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "fIUtVAnKNK",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "Y0xKlLOykh",
                          "itemName":  "Scold"
                      },
                      {
                          "guid":  "u1N0obm4FA",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "LtEVJrA6l0",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "t3yJc32fyo",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "mF5qoEBPBj",
                          "itemName":  "Scolding Student Cape"
                      },
                      {
                          "guid":  "XmSpwwxXj3",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "6NGF44qiL6",
                          "itemName":  "Scolding Student Hair"
                      },
                      {
                          "guid":  "gCKGrt2u_b",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "YDHt4GuNvK",
                          "itemName":  "Scold"
                      },
                      {
                          "guid":  "lskv4vjP3G",
                          "cost":  {
                                       "c":  24
                                   },
                          "itemGuid":  "WKIqwWYgD9",
                          "itemName":  "Scolding Student Mask"
                      },
                      {
                          "guid":  "p-p_dJ8l1n",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "sEIwClFXji",
                          "itemName":  "Scold"
                      }
                  ],
        "nameJa":  "したり顔の生徒"
    },
    {
        "guid":  "lE8DJQLcg5",
        "name":  "Scaredy Cadet",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  3,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0c/Assembly-Spirit-Scaredy-Cadet.png",
        "treeGuid":  "AV5iA4CpX8",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "sdUh2zVo9-",
                          "cost":  {

                                   },
                          "itemGuid":  "KyJwYhzGVj",
                          "itemName":  "Eww"
                      },
                      {
                          "guid":  "HP_nB8HsT7",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "-LT5Xt5vpH",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "RwWnytQNwg",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "Q__8vMZJrq",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "FYrOhT3zAR",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "fCfPXR_Dlv",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "WcaUx8Bqb8",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "UUOmL9cnbz",
                          "itemName":  "Eww"
                      },
                      {
                          "guid":  "TivaP-uRSB",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "gEKj_Dz9vX",
                          "itemName":  "Keeping Myself Together"
                      },
                      {
                          "guid":  "94WMh6rPgV",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "kurDiTSM-m",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "y5KEhEIhqJ",
                          "cost":  {
                                       "c":  55
                                   },
                          "itemGuid":  "1tF2KjdUWO",
                          "itemName":  "Scaredy Cadet Hammock"
                      },
                      {
                          "guid":  "p_omO5ubzZ",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "g8AB_9bQIK",
                          "itemName":  "Scaredy Cadet Hair"
                      },
                      {
                          "guid":  "Uan9z_8T-y",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "3HxtK5BEns",
                          "itemName":  "Eww"
                      },
                      {
                          "guid":  "4JAIsJqB25",
                          "cost":  {
                                       "c":  24
                                   },
                          "itemGuid":  "-02LBs9S2V",
                          "itemName":  "Scaredy Cadet Mask"
                      },
                      {
                          "guid":  "l16ujFClP-",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "owZSOBEp_z",
                          "itemName":  "Eww"
                      }
                  ],
        "nameJa":  "臆病な見習い士官"
    },
    {
        "guid":  "H30afxXKT1",
        "name":  "Marching Adventurer",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  4,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/dd/Assembly-Spirit-Marching-Adventurer.png",
        "treeGuid":  "iPF1nRScD0",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "kUri2mFw0I",
                          "cost":  {

                                   },
                          "itemGuid":  "dNoANrAQV0",
                          "itemName":  "Marching"
                      },
                      {
                          "guid":  "H2ordxQVtI",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "uG2bC9p_bN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "yEj1z9FY-b",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "RIEAODPW5E",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "L114E8aodw",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "3ay5Vg6AUH",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "Kl2IWOyh9S",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "owG_KD9opY",
                          "itemName":  "Marching"
                      },
                      {
                          "guid":  "QdZ37M7Ukj",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "InfpXXK1sw",
                          "itemName":  "Marching Adventurer Hair"
                      },
                      {
                          "guid":  "HR9qobAfIk",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "NvsMJBJx9a",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "c76unGNyaL",
                          "cost":  {
                                       "c":  55
                                   },
                          "itemGuid":  "deXq8qb84g",
                          "itemName":  "Marching Adventurer Tiki Torch"
                      },
                      {
                          "guid":  "c4iOCMrwpA",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "dLKdIkOcZ0",
                          "itemName":  "Marching"
                      },
                      {
                          "guid":  "73Zv6w30RW",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "NJXnW8a4Rq",
                          "itemName":  "Marching Adventurer Mask"
                      },
                      {
                          "guid":  "wZO2mDEv8_",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "0xqk-p9fsY",
                          "itemName":  "Marching"
                      }
                  ],
        "nameJa":  "行進する冒険家"
    },
    {
        "guid":  "NGSlfCM_wu",
        "name":  "Chuckling Scout",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  5,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b8/Assembly-Spirit-Chuckling-Scout.png",
        "treeGuid":  "-YtGR0BNa2",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "J-bl2zx3RV",
                          "cost":  {

                                   },
                          "itemGuid":  "iSTnFoyozE",
                          "itemName":  "Chuckle"
                      },
                      {
                          "guid":  "feB8vYQ7ie",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "5g7KTy0iPz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "wsHzKfqKxH",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "TvvR0_zlpM",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "1UHG89DxB4",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "qv1U79CflM",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "0WKyweb34p",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "HPP2RAku32",
                          "itemName":  "Chuckle"
                      },
                      {
                          "guid":  "Zv8GqqGGE8",
                          "cost":  {
                                       "c":  46
                                   },
                          "itemGuid":  "VToGfUfrj1",
                          "itemName":  "Chuckling Scout Outfit"
                      },
                      {
                          "guid":  "AIK_IYhApk",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "nT4XKf2gDI",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ClcTqNNZc0",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "osxMEOwG_r",
                          "itemName":  "Chuckling Scout Prop"
                      },
                      {
                          "guid":  "LM-z2OTYc3",
                          "cost":  {
                                       "c":  32
                                   },
                          "itemGuid":  "_k3jPMWKOY",
                          "itemName":  "Chuckling Scout Shoes"
                      },
                      {
                          "guid":  "L8cam9GTmg",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "81N0_-C6mq",
                          "itemName":  "Chuckle"
                      },
                      {
                          "guid":  "blPB-LHrla",
                          "cost":  {
                                       "c":  36
                                   },
                          "itemGuid":  "6QmWZYs5KC",
                          "itemName":  "Chuckling Scout Mask"
                      },
                      {
                          "guid":  "kSoV7ky0Qt",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "ymKZH8BJwt",
                          "itemName":  "Chuckle"
                      }
                  ],
        "nameJa":  "含み笑いのスカウト"
    },
    {
        "guid":  "MZZ5RA0AMG",
        "name":  "Daydream Forester",
        "type":  "Season",
        "season":  "Season of Assembly",
        "seasonOrderIndex":  6,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/dc/Assembly-Spirit-Daydream-Forester.png",
        "treeGuid":  "-gdOXDH9z7",
        "treeSource":  "revisit",
        "revisitDate":  "2026-02-27",
        "revisitName":  "Special Visit #12",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "0vZERa0V2K",
                          "cost":  {

                                   },
                          "itemGuid":  "AuugJTG-Nl",
                          "itemName":  "Bubbles"
                      },
                      {
                          "guid":  "gFSRL8z8O9",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "H65ejfWOVQ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "en9wGTElEN",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "5MLDnJJq2U",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "_PWVMkNz4H",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "T58FOcLa6Q",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "9spiYUkceE",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "LBmnlOT0UP",
                          "itemName":  "Bubbles"
                      },
                      {
                          "guid":  "vdODOqIoTr",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "2DIgMTKaK6",
                          "itemName":  "Forest Walk"
                      },
                      {
                          "guid":  "ol_6jIAK2A",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "N8AXviDTdQ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "kOrbCs_7Bd",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "Pn_wGqjtoX",
                          "itemName":  "Daydream Forester Hair"
                      },
                      {
                          "guid":  "IQqv1TTVjJ",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "Ujm1hPDpWr",
                          "itemName":  "Bubbles"
                      },
                      {
                          "guid":  "uJF36JZhXJ",
                          "cost":  {
                                       "c":  24
                                   },
                          "itemGuid":  "qoLywJXaJA",
                          "itemName":  "Daydream Forester Mask"
                      },
                      {
                          "guid":  "Aom0KgpWkp",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "nT-zyxTRzs",
                          "itemName":  "Bubbles"
                      }
                  ],
        "nameJa":  "夢見がちな森の民"
    },
    {
        "guid":  "OaAUJHNIjE",
        "name":  "AURORA Guide",
        "type":  "Guide",
        "season":  "Season of AURORA",
        "seasonOrderIndex":  0,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/62/SoAurora-Seasonal-guide.png",
        "treeGuid":  "P1nzgnNVFT",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  27,
        "nodes":  [
                      {
                          "guid":  "NlJnO3uHyG",
                          "cost":  {

                                   },
                          "itemGuid":  "YXvxchiY37",
                          "itemName":  "AURORA Warp"
                      },
                      {
                          "guid":  "uvjAFdghAX",
                          "cost":  {

                                   },
                          "itemGuid":  "JCRIpETL35",
                          "itemName":  "AURORA Ultimate Pendant"
                      },
                      {
                          "guid":  "pDWQme751I",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "Gon7mR-WVa",
                          "itemName":  "AURORA Ultimate Hair"
                      },
                      {
                          "guid":  "caXDPylsfl",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "kr95Zsf1Cs",
                          "itemName":  "AURORA Ultimate Outfit"
                      },
                      {
                          "guid":  "VmydFPHMOG",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "Gp3p9OdxMA",
                          "itemName":  "AURORA Ultimate Cape"
                      },
                      {
                          "guid":  "Y88dgRuvKn",
                          "cost":  {

                                   },
                          "itemGuid":  "0vCi-aJZlj",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "qGCGoowulK",
                          "cost":  {

                                   },
                          "itemGuid":  "iZ1lQxrYIi",
                          "itemName":  "Silent Clap"
                      },
                      {
                          "guid":  "veie6FnVuN",
                          "cost":  {

                                   },
                          "itemGuid":  "hwdDrpL-K5",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "gHejaClz1U",
                          "cost":  {

                                   },
                          "itemGuid":  "uEYrMRIKMS",
                          "itemName":  "Conduct"
                      },
                      {
                          "guid":  "f32HNPZ1IR",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "WaJAeLkow7",
                          "itemName":  "Conduct"
                      },
                      {
                          "guid":  "eMCH9as63S",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "KhbsMGJgui",
                          "itemName":  "Conduct"
                      },
                      {
                          "guid":  "36Q_ELFpNX",
                          "cost":  {

                                   },
                          "itemGuid":  "GL-0kVxHfU",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "ID_BPAMeyd",
                          "cost":  {

                                   },
                          "itemGuid":  "uSlZPzJdDo",
                          "itemName":  "Skipping"
                      },
                      {
                          "guid":  "OIIjkpk_yW",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "AR3AyfDRZu",
                          "itemName":  "Skipping"
                      },
                      {
                          "guid":  "W0uc6SOBOe",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "qKwEFLirdj",
                          "itemName":  "Skipping"
                      },
                      {
                          "guid":  "MayY839V9U",
                          "cost":  {

                                   },
                          "itemGuid":  "KJ846bsf8j",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "P8HDax8m7Q",
                          "cost":  {

                                   },
                          "itemGuid":  "a1zSVQ8GlN",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "DCm3ZMc7rZ",
                          "cost":  {
                                       "c":  200
                                   },
                          "itemGuid":  "pugHKsR-io",
                          "itemName":  "Cure for Me Outfit"
                      },
                      {
                          "guid":  "q4ec0pxmQD",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "-66QzAlj3l",
                          "itemName":  "Cure for Me Mask"
                      },
                      {
                          "guid":  "U8tAk12n_V",
                          "cost":  {
                                       "c":  20
                                   },
                          "itemGuid":  "xed4G-_mSE",
                          "itemName":  "Queendom"
                      },
                      {
                          "guid":  "U59X95fCiO",
                          "cost":  {
                                       "c":  20
                                   },
                          "itemGuid":  "uVFQgZBbyy",
                          "itemName":  "Through the Eyes of a Child"
                      },
                      {
                          "guid":  "shfLcrv-Ob",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "IJUeE1lOwt",
                          "itemName":  "Skipping"
                      },
                      {
                          "guid":  "_7_oCjYRa0",
                          "cost":  {

                                   },
                          "itemGuid":  "QmFZUU1klg",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Zph3RIk7Su",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "VdWQyivAwr",
                          "itemName":  "Conduct"
                      },
                      {
                          "guid":  "XgfMGuxq0E",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "3cRBKxvpUY",
                          "itemName":  "Silent Clap"
                      },
                      {
                          "guid":  "rkBcVFRxvv",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "RNEBgyMjrV",
                          "itemName":  "Silent Clap"
                      },
                      {
                          "guid":  "x-UTXoKjbT",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "7L0kmOL8-h",
                          "itemName":  "Silent Clap"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "20Xw7fuZWr",
        "name":  "Running Wayfarer",
        "type":  "Season",
        "season":  "Season of AURORA",
        "seasonOrderIndex":  1,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/65/Aurora-Spirit-Running-Wayfairer.png",
        "treeGuid":  "qLJqS-BAYp",
        "treeSource":  "revisit",
        "revisitDate":  "2025-06-09",
        "revisitName":  "Special Visit #9",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "15X_X0AHKc",
                          "cost":  {
                                       "c":  0
                                   },
                          "itemGuid":  "X_lxvfKdkA",
                          "itemName":  "Waving Light"
                      },
                      {
                          "guid":  "5BQGw5Xrbw",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "PgvQKPZzVg",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Sm8pFPZ91r",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "dx_HwGc9ct",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "KoH7zO5Oa7",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "oXIqufDIiz",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "OsHmOQ5Zhn",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "D0ERFYJm23",
                          "itemName":  "Waving Light"
                      },
                      {
                          "guid":  "nz2KWC-Rjr",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "VKeEo_F_7G",
                          "itemName":  "Running Wayfarer Hair"
                      },
                      {
                          "guid":  "IoBUHFqxGf",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "PxtlZtZmrj",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "gE2-61omNu",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "Xor6jAu_Ns",
                          "itemName":  "Running Wayfarer Cape"
                      },
                      {
                          "guid":  "pe_weqFSOo",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "u3nAG8YXCu",
                          "itemName":  "Runaway"
                      },
                      {
                          "guid":  "9b1slWYLae",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "fW2OOpU5J-",
                          "itemName":  "Waving Light"
                      },
                      {
                          "guid":  "k6lJbkSkZB",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "638hblC6bQ",
                          "itemName":  "Running Wayfarer Mask"
                      },
                      {
                          "guid":  "RkZQBh_Dvw",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "JzE9JvMkF_",
                          "itemName":  "Waving Light"
                      }
                  ],
        "nameJa":  "駆けゆく旅人"
    },
    {
        "guid":  "g_lZ76kjbS",
        "name":  "Mindful Miner",
        "type":  "Season",
        "season":  "Season of AURORA",
        "seasonOrderIndex":  2,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ab/Aurora-Spirit-Mindful-Miner.png",
        "treeGuid":  "s_XB6-sfnp",
        "treeSource":  "revisit",
        "revisitDate":  "2025-06-09",
        "revisitName":  "Special Visit #9",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "kUOCWi4zBD",
                          "cost":  {

                                   },
                          "itemGuid":  "CQGQ8vhjlp",
                          "itemName":  "Raise the Roof"
                      },
                      {
                          "guid":  "IIYWtvBsbm",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "I2TAMXFx5T",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "pKOiPucTct",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "jz9O2oiEgl",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "tIhXf2QYHX",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "jDAMWqFYuW",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "THA_yA8uzE",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "ZHoxzFOP4e",
                          "itemName":  "Raise the Roof"
                      },
                      {
                          "guid":  "rHGruQYUPC",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "VqtNIgq8G0",
                          "itemName":  "Mindful Miner Hair"
                      },
                      {
                          "guid":  "x50M2zVBo5",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "srhC02hNn2",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "mhX82SDFsS",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "BCBI4KXEMD",
                          "itemName":  "Mindful Miner Cape"
                      },
                      {
                          "guid":  "BHTjpdO64p",
                          "cost":  {
                                       "c":  55
                                   },
                          "itemGuid":  "xr-9fu2xP9",
                          "itemName":  "Mindful Miner Outfit"
                      },
                      {
                          "guid":  "i8VBIV8uBh",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "MOA-pspnfr",
                          "itemName":  "Raise the Roof"
                      },
                      {
                          "guid":  "ljaQYkNBXA",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "VqZUTcuqCB",
                          "itemName":  "Mindful Miner Mask"
                      },
                      {
                          "guid":  "EtZsPJtPkU",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "wgHUFR0hL_",
                          "itemName":  "Raise the Roof"
                      }
                  ],
        "nameJa":  "覚醒の採掘者"
    },
    {
        "guid":  "XvcpNrqatq",
        "name":  "Warrior of Love",
        "type":  "Season",
        "season":  "Season of AURORA",
        "seasonOrderIndex":  3,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a3/Aurora-Spirit-Warrior-of-Love.png",
        "treeGuid":  "qHdFiOJvXx",
        "treeSource":  "revisit",
        "revisitDate":  "2025-06-09",
        "revisitName":  "Special Visit #9",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "zdYZogArmw",
                          "cost":  {

                                   },
                          "itemGuid":  "flYQ-k3_cR",
                          "itemName":  "Twirl"
                      },
                      {
                          "guid":  "FIULC_h36U",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "iFrJQHkU4B",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Wys0Un9zpZ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "fY8DFreOrh",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "F-5yxU1ke1",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "9hI5xbtfL4",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "keylitHA1z",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "N_a1zpGl8Q",
                          "itemName":  "Twirl"
                      },
                      {
                          "guid":  "l1tlxcxOcD",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "ndKNh6XHP4",
                          "itemName":  "Warrior of Love Hair"
                      },
                      {
                          "guid":  "30ibpe-ebS",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "69BDyxdPLG",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "v0gdDdApLn",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "rozdAD65kd",
                          "itemName":  "Warrior of Love Cape"
                      },
                      {
                          "guid":  "hMMpVuB8S_",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "l29ByRmu3Z",
                          "itemName":  "Warrior"
                      },
                      {
                          "guid":  "zbdlC8OcvX",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "5QhZXNJtkv",
                          "itemName":  "Twirl"
                      },
                      {
                          "guid":  "5-3Ul0gsAZ",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "hXFmvmGkGK",
                          "itemName":  "Warrior of Love Mask"
                      },
                      {
                          "guid":  "n_xfgs9Gxv",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "84y87tOlc7",
                          "itemName":  "Twirl"
                      }
                  ],
        "nameJa":  "慈愛の戦士"
    },
    {
        "guid":  "95RfXrjMx1",
        "name":  "Seed of Hope",
        "type":  "Season",
        "season":  "Season of AURORA",
        "seasonOrderIndex":  4,
        "area":  "The Coliseum",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c4/Aurora-Spirit-Seed-of-Hope.png",
        "treeGuid":  "h6-c8COSHy",
        "treeSource":  "revisit",
        "revisitDate":  "2025-06-09",
        "revisitName":  "Special Visit #9",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "nU0Anlo5ka",
                          "cost":  {

                                   },
                          "itemGuid":  "LCZ4mS88Ml",
                          "itemName":  "Rhythmic Clap"
                      },
                      {
                          "guid":  "Ds8hPbyKNe",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "RT5gD1R0Ff",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "lDoemQReug",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "FflyUb6DoI",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "epyIqPp-eU",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "bc5x356qyN",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "WEc8AbD6p1",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "9cv6EvVG5z",
                          "itemName":  "Rhythmic Clap"
                      },
                      {
                          "guid":  "LbQhQ9LOCC",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "-RfQBaoydI",
                          "itemName":  "Seed of Hope Hair"
                      },
                      {
                          "guid":  "Gq4gwUG1lp",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "bvvQWvbRMe",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "NfMecXCjo4",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "d18Zpgi-f_",
                          "itemName":  "Seed of Hope Cape"
                      },
                      {
                          "guid":  "e6Nq7BTeII",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "HG2o6PBbZx",
                          "itemName":  "The Seed"
                      },
                      {
                          "guid":  "gXduSuzoHf",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "5qPaiJyODI",
                          "itemName":  "Rhythmic Clap"
                      },
                      {
                          "guid":  "f_TdyyE-Ye",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "tWcl7ReMPu",
                          "itemName":  "Seed of Hope Mask"
                      },
                      {
                          "guid":  "S7NCtL6LfY",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "Xp7ou1f01j",
                          "itemName":  "Rhythmic Clap"
                      }
                  ],
        "nameJa":  "希望の君"
    },
    {
        "guid":  "5rr1zr2_j5",
        "name":  "Belonging Guide",
        "type":  "Guide",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  0,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/68/Belonging-Guide-Spirit.png",
        "treeGuid":  "KEuVAhun2o",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "xG-_J9ehcK",
                          "cost":  {

                                   },
                          "itemGuid":  "CmonO-Vfc4",
                          "itemName":  "Belonging Ultimate Pendant"
                      },
                      {
                          "guid":  "gfUmbkQi_h",
                          "cost":  {
                                       "sh":  6
                                   },
                          "itemGuid":  "LtrFT8BOI9",
                          "itemName":  "Belonging Ultimate Fireplace"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "5u3TXZON81",
        "name":  "Confetti Cousin",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  1,
        "area":  "Butterfly Fields",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/06/Belonging-Spirit-Confetti-Cousin.png",
        "treeGuid":  "Fqwmr7P65R",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "GRu4BRtjHZ",
                          "cost":  {

                                   },
                          "itemGuid":  "EdkgJhVl7F",
                          "itemName":  "Confetti"
                      },
                      {
                          "guid":  "Xl5g8XcvUL",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "6XXpBOqRQg",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "Fd3kZ4L0tQ",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "0nUupQHHcx",
                          "itemName":  "Confetti"
                      },
                      {
                          "guid":  "401aTkTgvR",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "86vG43eb7E",
                          "itemName":  "Confetti Cousin Cape"
                      },
                      {
                          "guid":  "IhyZQjEm3D",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "prawwGcU-k",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "T9B-3b5MG9",
                          "cost":  {

                                   },
                          "itemGuid":  "4NjsRif40c",
                          "itemName":  "Confetti Cousin Hair"
                      },
                      {
                          "guid":  "ssYWbOmlXA",
                          "cost":  {

                                   },
                          "itemGuid":  "u2qrLrrl7v",
                          "itemName":  "Confetti"
                      },
                      {
                          "guid":  "7yDgE-ZaYf",
                          "cost":  {

                                   },
                          "itemGuid":  "3Nz4lttfEb",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "TH780LUx4f",
                          "cost":  {

                                   },
                          "itemGuid":  "_KkFXT0brp",
                          "itemName":  "Confetti"
                      }
                  ],
        "nameJa":  "音と舞う幼子"
    },
    {
        "guid":  "f3AD39Q2Il",
        "name":  "Boogie Kid",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  2,
        "area":  "Dawn Overlook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3c/Belonging-Spirit-Boogie-Kid.png",
        "treeGuid":  "IeFmlorSVS",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "z5oUNmiK-N",
                          "cost":  {

                                   },
                          "itemGuid":  "o46E_Adz2z",
                          "itemName":  "Boogie Dance"
                      },
                      {
                          "guid":  "69VvLUz4az",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "e6O-OC9gqr",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "z_v6qgPR-x",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "AnOX8p-Z5f",
                          "itemName":  "Boogie Dance"
                      },
                      {
                          "guid":  "lWnQ_33zmQ",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "yoEqaQiYU-",
                          "itemName":  "Boogie Kid Mask"
                      },
                      {
                          "guid":  "_mpkWYtO84",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "C0sPzUPUwR",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "8c7SnHGPeG",
                          "cost":  {

                                   },
                          "itemGuid":  "qrP9vZPLlk",
                          "itemName":  "Boogie Kid Outfit"
                      },
                      {
                          "guid":  "k5UjX79gyS",
                          "cost":  {

                                   },
                          "itemGuid":  "ThC1rC0jC4",
                          "itemName":  "Boogie Dance"
                      },
                      {
                          "guid":  "qYYEFBTKLx",
                          "cost":  {

                                   },
                          "itemGuid":  "WDRmw94dkS",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "JjSEFfzBLZ",
                          "cost":  {

                                   },
                          "itemGuid":  "jn9V5Dc56I",
                          "itemName":  "Boogie Dance"
                      }
                  ],
        "nameJa":  "紙ふぶき好きのいとこ"
    },
    {
        "guid":  "CcOE42N9Mc",
        "name":  "Sparkler Parent",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  3,
        "area":  "Temple of the Valley",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f6/Belonging-Spirit-Sparkler-Parent.png",
        "treeGuid":  "sM-gGfmBb9",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "OLZ0CipXv0",
                          "cost":  {

                                   },
                          "itemGuid":  "eEwMzjwfoS",
                          "itemName":  "Sparkler"
                      },
                      {
                          "guid":  "kBkp5IqaXk",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "Sn97dM5q4N",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "n1W1_wDEcM",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "l663HjIDEd",
                          "itemName":  "Sparkler"
                      },
                      {
                          "guid":  "Z5In13pomZ",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "hySf4FUV-w",
                          "itemName":  "Sparkler Parent Hair"
                      },
                      {
                          "guid":  "tbFTIK-vr6",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "vbf2ST93iK",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "tlWgsJW0AM",
                          "cost":  {

                                   },
                          "itemGuid":  "M97mhUyiZZ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "XF3SDO8EES",
                          "cost":  {

                                   },
                          "itemGuid":  "X81UhfMlB2",
                          "itemName":  "Sparkler"
                      },
                      {
                          "guid":  "eq4_50nXIl",
                          "cost":  {

                                   },
                          "itemGuid":  "5i57DI6cGK",
                          "itemName":  "Sparkler Parent Mask"
                      },
                      {
                          "guid":  "y2flrfDfix",
                          "cost":  {

                                   },
                          "itemGuid":  "sSgceH7emy",
                          "itemName":  "Sparkler"
                      }
                  ],
        "nameJa":  "ぽんぽんする若者"
    },
    {
        "guid":  "7EzWoLR1w4",
        "name":  "Wise Grandparent",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  4,
        "area":  "Vault Archive",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2e/Belonging-Spirit-Wise-Grandpa.png",
        "treeGuid":  "zNWw5D3we3",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "N5kAA32DUp",
                          "cost":  {

                                   },
                          "itemGuid":  "N_FirAVIZf",
                          "itemName":  "Wise Stance"
                      },
                      {
                          "guid":  "kwaU0hDNZC",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "IH3RuM1Ze3",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "7eU8F9lL3f",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "lLKKdQz_He",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "CFPfzac1Mh",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "huLyzyJN5_",
                          "itemName":  "Wise Grandparent Mask"
                      },
                      {
                          "guid":  "808YhgszBA",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "YF_dvs5rGr",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "SEuLgg0aEP",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "F2_k73blau",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "wjkkWx7CrG",
                          "cost":  {

                                   },
                          "itemGuid":  "WCPTi8XYZy",
                          "itemName":  "Wise Grandparent Cape"
                      },
                      {
                          "guid":  "_xPiLiudmh",
                          "cost":  {

                                   },
                          "itemGuid":  "bBWdMDYc1G",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "NxieVrPs3B",
                          "cost":  {

                                   },
                          "itemGuid":  "r1pKcM3jiU",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "abKWRkSjrN",
                          "cost":  {

                                   },
                          "itemGuid":  "eXcIcaFA0k",
                          "itemName":  "Support From Above"
                      }
                  ],
        "nameJa":  "煌きを放つ親"
    },
    {
        "guid":  "LO75aDy9Zc",
        "name":  "Pleaful Parent",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  5,
        "area":  "The Graveyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6c/Belonging-Spirit-Pleaful-Parent.png",
        "treeGuid":  "wDOnrwqC2i",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "nz1968HiKq",
                          "cost":  {

                                   },
                          "itemGuid":  "CtEU0Osb2E",
                          "itemName":  "Don\u0027t Go!"
                      },
                      {
                          "guid":  "UABHUtl23_",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "7UiHJRDHqW",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "xvqTS7rmPG",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "sTSrAZzgqU",
                          "itemName":  "Don\u0027t Go!"
                      },
                      {
                          "guid":  "V35ap9LXqW",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "qOLmnCFyh6",
                          "itemName":  "Pleaful Parent Mask"
                      },
                      {
                          "guid":  "XXXQ2V2m7A",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "N6IzrxN7yL",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "dBbAq3LJ7i",
                          "cost":  {

                                   },
                          "itemGuid":  "mH0YjUsODC",
                          "itemName":  "Pleaful Parent Cape"
                      },
                      {
                          "guid":  "JQ4uCPBD_L",
                          "cost":  {

                                   },
                          "itemGuid":  "D5hLl-_xZd",
                          "itemName":  "Don\u0027t Go!"
                      },
                      {
                          "guid":  "nR9kma-b3o",
                          "cost":  {

                                   },
                          "itemGuid":  "Zvi-5bPtxs",
                          "itemName":  "Guitar"
                      },
                      {
                          "guid":  "z5t_61gCHV",
                          "cost":  {

                                   },
                          "itemGuid":  "oqndH_vtJJ",
                          "itemName":  "Don\u0027t Go!"
                      }
                  ],
        "nameJa":  "訴えかける親"
    },
    {
        "guid":  "gcEV41jg3U",
        "name":  "Hairtousle Teen",
        "type":  "Season",
        "season":  "Season of Belonging",
        "seasonOrderIndex":  6,
        "area":  "Forest Cavern",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9f/Belonging-Spirit-Hairtousle-Teen.png",
        "treeGuid":  "pDzxAL2j5O",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "EkBbVkJtl8",
                          "cost":  {

                                   },
                          "itemGuid":  "YUAzM6p_2j",
                          "itemName":  "Hair Tousle"
                      },
                      {
                          "guid":  "YVdlQYd3v2",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "guVzYkoOF-",
                          "itemName":  "Small Blessing"
                      },
                      {
                          "guid":  "uiCemHTGW-",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "7Ul11Zqefz",
                          "itemName":  "Wavy Hair"
                      },
                      {
                          "guid":  "bYxyqWvP4L",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "n2TnJPoi1J",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "FYRpaqm5wL",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "Ph__M3uulY",
                          "itemName":  "Ukulele"
                      },
                      {
                          "guid":  "OMYTdeq3GD",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "r_JERY8CWa",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "pO0LK5m0cx",
                          "cost":  {

                                   },
                          "itemGuid":  "HnQU571BtR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "cDyVWlDa3V",
                          "cost":  {

                                   },
                          "itemGuid":  "bBQbGQh1PU",
                          "itemName":  "Hairtousle Teen Earmuffs"
                      },
                      {
                          "guid":  "Xdu_tkydHQ",
                          "cost":  {

                                   },
                          "itemGuid":  "0f9auBppfc",
                          "itemName":  "Hair Tousle"
                      },
                      {
                          "guid":  "6ZTmTtOOjY",
                          "cost":  {

                                   },
                          "itemGuid":  "GL1iz0Ybx0",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "祖たる賢者"
    },
    {
        "guid":  "hbXkkZbBsk",
        "name":  "Blue Bird Guide",
        "type":  "Guide",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  0,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6f/Blue-Bird-Ultimate-Guide.png",
        "treeGuid":  "9ZMGsZeH1U",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  21,
        "nodes":  [
                      {
                          "guid":  "RzXXb9widZ",
                          "cost":  {

                                   },
                          "itemGuid":  "Azfq9QXE-j",
                          "itemName":  "Warp"
                      },
                      {
                          "guid":  "PSa1InvuFy",
                          "cost":  {

                                   },
                          "itemGuid":  "21ko7YfZ3q",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "2f5veSfmbE",
                          "cost":  {

                                   },
                          "itemGuid":  "n1YjbdbEKs",
                          "itemName":  "Blue Bird Ultimate Pendant"
                      },
                      {
                          "guid":  "Up0rwUsuH1",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "CU-pHFpqYK",
                          "itemName":  "Blue Bird Ultimate Face Accessory"
                      },
                      {
                          "guid":  "Xsro0z3Ycn",
                          "cost":  {
                                       "sh":  3
                                   },
                          "itemGuid":  "1J4OD5kzBS",
                          "itemName":  "Blue Bird Ultimate Cape"
                      },
                      {
                          "guid":  "gggE-xUgSU",
                          "cost":  {

                                   },
                          "itemGuid":  "oYKrCXABfE",
                          "itemName":  "Cough"
                      },
                      {
                          "guid":  "EPGcRKpLYm",
                          "cost":  {

                                   },
                          "itemGuid":  "XXqa96GPb-",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "7jP7rLV8w3",
                          "cost":  {

                                   },
                          "itemGuid":  "DNkorof1de",
                          "itemName":  "Cough"
                      },
                      {
                          "guid":  "JkIfAwP9AB",
                          "cost":  {

                                   },
                          "itemGuid":  "dTUONORhoP",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "mILDBQvsnr",
                          "cost":  {

                                   },
                          "itemGuid":  "N6tMLLZzXC",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "poibN1xWhx",
                          "cost":  {

                                   },
                          "itemGuid":  "gNld1YAW4D",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "oJ6rjbbfGa",
                          "cost":  {

                                   },
                          "itemGuid":  "yrnH1iDS2g",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "REgNC3sJAq",
                          "cost":  {
                                       "h":  18
                                   },
                          "itemGuid":  "nEc3TKQJST",
                          "itemName":  "Perch Tree"
                      },
                      {
                          "guid":  "xRKncXxnCs",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "Mra78XxrKT",
                          "itemName":  "Blue Bird Call"
                      },
                      {
                          "guid":  "NCVjZVkwSo",
                          "cost":  {

                                   },
                          "itemGuid":  "00xVeEcFGx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "MGtepwSaTg",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "UNzV5t0pyZ",
                          "itemName":  "Despondent Stance"
                      },
                      {
                          "guid":  "IA6zkzUKRC",
                          "cost":  {

                                   },
                          "itemGuid":  "tzmOxWzueh",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "T7L-qU_idA",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "aJaAlY6zrA",
                          "itemName":  "Cough"
                      },
                      {
                          "guid":  "4ZLWhKCEEl",
                          "cost":  {

                                   },
                          "itemGuid":  "05wSj1dyAK",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "FZkpaBqCMz",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "WNhK6M9xLz",
                          "itemName":  "Cough"
                      },
                      {
                          "guid":  "MH3rLTidMd",
                          "cost":  {

                                   },
                          "itemGuid":  "sJRgP2oxK6",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "2iDZqeJXTf",
        "name":  "Divining Wise Grandparent",
        "type":  "Season",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  1,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f0/Divining-Wise-Grandparent-cutout.png",
        "treeGuid":  "me0kc6RN7J",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "yjs2ofd4bI",
                          "cost":  {
                                       "sc":  7
                                   },
                          "itemGuid":  "Q8M5MBesrg",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "n_8oPLCcBa",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "qxwmznFHHM",
                          "itemName":  "Divining Wise Grandparent Face Accessory"
                      },
                      {
                          "guid":  "6ylcDH-MD9",
                          "cost":  {
                                       "sc":  17
                                   },
                          "itemGuid":  "I-rUFLg3Pw",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "FJmfEfg1kx",
                          "cost":  {
                                       "sc":  21
                                   },
                          "itemGuid":  "QYuVU2xHNS",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "-l-5jd-hM5",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "Aw_3GSiLa7",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "Mbonsi4SnU",
                          "cost":  {

                                   },
                          "itemGuid":  "mwv4iZI57S",
                          "itemName":  "Divining Wise Grandparent Cape"
                      },
                      {
                          "guid":  "7UjA7bBurs",
                          "cost":  {

                                   },
                          "itemGuid":  "uyp1S0R84F",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "Nw9BvypNzY",
                          "cost":  {

                                   },
                          "itemGuid":  "EK-PkJjmMc",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "MzWQZRAvBM",
                          "cost":  {

                                   },
                          "itemGuid":  "z-cVuy2m9r",
                          "itemName":  "Black dye"
                      }
                  ],
        "nameJa":  "神聖な祖たる賢者"
    },
    {
        "guid":  "faWKshu5Vh",
        "name":  "Costumed Confetti Cousin",
        "type":  "Season",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  2,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/08/Costumed-Confetti-Cousin-cutout.png",
        "treeGuid":  "GEOf9iPZiz",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "Mab8ePYPvs",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "N24k9N2Gmf",
                          "itemName":  "Costumed Confetti Cousin Hair Accessory"
                      },
                      {
                          "guid":  "v7B9lZEmCU",
                          "cost":  {
                                       "sc":  15
                                   },
                          "itemGuid":  "2fwMDk111z",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "A12gQ1Q838",
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "2EzQ_6OCya",
                          "itemName":  "Red dye"
                      },
                      {
                          "guid":  "FKHNAIVdRV",
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "-TK0TelIb9",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Ym79XmZP3K",
                          "cost":  {
                                       "sc":  25
                                   },
                          "itemGuid":  "8yAJpgKLul",
                          "itemName":  "Costumed Confetti Cousin Hair"
                      },
                      {
                          "guid":  "xffPvlICNq",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "Vr7Cavl77v",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "lXcCoygwCq",
                          "cost":  {

                                   },
                          "itemGuid":  "eTv1whe7nR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6F_zRB0FK8",
                          "cost":  {

                                   },
                          "itemGuid":  "spmOgfDwRz",
                          "itemName":  "Costumed Confetti Cousin Outfit"
                      },
                      {
                          "guid":  "omVb8JldQf",
                          "cost":  {

                                   },
                          "itemGuid":  "c3mLerIGJy",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "eOCCVjNnLJ",
                          "cost":  {

                                   },
                          "itemGuid":  "X3zSbw13Jz",
                          "itemName":  "Costumed Confetti Cousin Mask"
                      },
                      {
                          "guid":  "itqIA_aXtS",
                          "cost":  {

                                   },
                          "itemGuid":  "yW_xOlLGU1",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "衣装をまとう紙ふぶき好きのいとこ"
    },
    {
        "guid":  "RMOKUIDWOs",
        "name":  "Royal Hairtousle Teen",
        "type":  "Season",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  3,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0b/Royal-Hairtousle-Teen-cutout.png",
        "treeGuid":  "DU7kdfkbq7",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "qdSLwtMlKg",
                          "cost":  {

                                   },
                          "itemGuid":  "Qk-darPsou",
                          "itemName":  "Surprised"
                      },
                      {
                          "guid":  "z2F-sddWqE",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "SnVfV2fgUG",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "5i1_NI9jLY",
                          "cost":  {
                                       "sc":  17
                                   },
                          "itemGuid":  "MIre6Wnkcn",
                          "itemName":  "Surprised"
                      },
                      {
                          "guid":  "YlBpNbBRCQ",
                          "cost":  {
                                       "sc":  25
                                   },
                          "itemGuid":  "xl3Nl-6YVw",
                          "itemName":  "Royal Hairtousle Teen Outfit"
                      },
                      {
                          "guid":  "Qq9Nu4VzQV",
                          "cost":  {
                                       "sc":  29
                                   },
                          "itemGuid":  "D3HRcYFN7a",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "NAIGOeokZr",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "UaAhqOyHyS",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "hJEaYjUBR5",
                          "cost":  {

                                   },
                          "itemGuid":  "2TMMbZolax",
                          "itemName":  "Royal Hairtousle Teen Cape"
                      },
                      {
                          "guid":  "nsK-p63_lz",
                          "cost":  {

                                   },
                          "itemGuid":  "5PCd14quir",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "9TuY5BF8ZL",
                          "cost":  {

                                   },
                          "itemGuid":  "JZ4T0A_0AZ",
                          "itemName":  "Surprised"
                      },
                      {
                          "guid":  "9ByajEr0dH",
                          "cost":  {

                                   },
                          "itemGuid":  "v5NKOAkwza",
                          "itemName":  "Royal Hairtousle Teen Head Accessory"
                      },
                      {
                          "guid":  "fIp9G6-_FH",
                          "cost":  {

                                   },
                          "itemGuid":  "5-d4e8ylL6",
                          "itemName":  "Surprised"
                      }
                  ],
        "nameJa":  "高貴なぽんぽんする若者"
    },
    {
        "guid":  "hcQtoG_IlW",
        "name":  "Nostalgic Sparkler Parent",
        "type":  "Season",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  4,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/23/Nostalgic-Sparkler-Parent-cutout.png",
        "treeGuid":  "O7hDEtXXLQ",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "r_3ANSlteU",
                          "cost":  {
                                       "sc":  9
                                   },
                          "itemGuid":  "zXZeh30s1F",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "DRwS0lAUdF",
                          "cost":  {
                                       "sc":  13
                                   },
                          "itemGuid":  "fmxCPA2WVA",
                          "itemName":  "Purple dye"
                      },
                      {
                          "guid":  "y4LG9IP6BK",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "WgzS6URIO1",
                          "itemName":  "Nostalgic Sparkler Parent Cape"
                      },
                      {
                          "guid":  "B-PvGqyBmo",
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "L0Ix6Q4DHF",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "0rQ7rPKsEB",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "apiF_W6Duk",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "oj48zOSC42",
                          "cost":  {

                                   },
                          "itemGuid":  "XkSxLM7W2w",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "13Xs8kOSYd",
                          "cost":  {

                                   },
                          "itemGuid":  "4qo34EHkRs",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "SYJw8iG5Uc",
                          "cost":  {

                                   },
                          "itemGuid":  "8LkxJrYAze",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "7Xeo9Kz8uE",
                          "cost":  {

                                   },
                          "itemGuid":  "hdAJF5iB97",
                          "itemName":  "Nostalgic Sparkler Parent Hair Accessory"
                      }
                  ],
        "nameJa":  "懐かしむ煌きを放つ親"
    },
    {
        "guid":  "jWCKf1cR1l",
        "name":  "Woodcutting Pleaful Parent",
        "type":  "Season",
        "season":  "Season of the Blue Bird",
        "seasonOrderIndex":  5,
        "area":  "Blue Bird theater",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ef/Woodcutting-Pleaful-Parent-cutout.png",
        "treeGuid":  "qLiBf_BpI4",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "nc8Qjghjoy",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "Eg3nsg1MSx",
                          "itemName":  "Blue Bird of Happiness"
                      },
                      {
                          "guid":  "huKKqyGdor",
                          "cost":  {
                                       "sc":  15
                                   },
                          "itemGuid":  "8yaHnHfAAN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "kyqxkqyf7U",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "56uOoCqwSk",
                          "itemName":  "Green dye"
                      },
                      {
                          "guid":  "_7vTBFWWbG",
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "_VSI11ASYa",
                          "itemName":  "Woodcutting Pleaful Parent Outfit"
                      },
                      {
                          "guid":  "9mUFnhds0X",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "FyVcqmGqTI",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "L4zIeSoUn4",
                          "cost":  {

                                   },
                          "itemGuid":  "p6DqiViZ_f",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "CW4lgqfEuA",
                          "cost":  {

                                   },
                          "itemGuid":  "MqieaFMT3R",
                          "itemName":  "Green dye"
                      },
                      {
                          "guid":  "sfV2W-XNf2",
                          "cost":  {

                                   },
                          "itemGuid":  "Op96xou0CN",
                          "itemName":  "Woodcutting Pleaful Parent Shoes"
                      },
                      {
                          "guid":  "VoM4exZ98P",
                          "cost":  {

                                   },
                          "itemGuid":  "9MXMleNkJV",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "木こりの訴えかける親"
    },
    {
        "guid":  "JGWXCmBmxi",
        "name":  "Carnival Guide",
        "type":  "Guide",
        "season":  "Season of Carnival",
        "seasonOrderIndex":  0,
        "area":  "Wandering Carnival",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/05/Carnival-Ultimate-Guide-cutout.png",
        "treeGuid":  "vBTjT3BmeP",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  17,
        "nodes":  [
                      {
                          "guid":  "ZQJXf88hyx",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "8BR4UCzOaB",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "kybez3XHgY",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "f8A7rOODB8",
                          "itemName":  "Wandering Carnival Warp"
                      },
                      {
                          "guid":  "lNLHILtVQX",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "rn-mrR3YeT",
                          "itemName":  "Carnival Ultimate Pendant"
                      },
                      {
                          "guid":  "7328exK2tY",
                          "tier":  0,
                          "row":  1,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "NQkQftFUgs",
                          "itemName":  "Carnival Ultimate Hair"
                      },
                      {
                          "guid":  "ZAjT74eH3m",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "WUasrZnveA",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "W2QSmuvsWN",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "9_k0CQ1YsG",
                          "itemName":  "Challenge Ball Dispenser"
                      },
                      {
                          "guid":  "RtqRuRH6fZ",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "zZUdfICRQ2",
                          "itemName":  "Carnival Ultimate Cape"
                      },
                      {
                          "guid":  "XQLqNFLZBI",
                          "tier":  1,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "2Vy0pNifOU",
                          "itemName":  "Challenge Target"
                      },
                      {
                          "guid":  "z-3oriexOa",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "57EO-fkbji",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "XisVC7P2Hn",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "Arp_S5eGTr",
                          "itemName":  "Challenge Token"
                      },
                      {
                          "guid":  "mGvgBL8hpn",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "cq-IJWqb7_",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "im6M6dRWq2",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "O4xqaYqznq",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "nsPdlfkx6d",
                          "tier":  3,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "MyKYmUPlXn",
                          "itemName":  "Challenge Bounce Pad"
                      },
                      {
                          "guid":  "Dql3b9ZXLY",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "zgRZHjhJ7s",
                          "itemName":  "Challenge Platform"
                      },
                      {
                          "guid":  "askYc-YXUN",
                          "tier":  4,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Q_lEEUIZr4",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "HyEQTfK7EW",
                          "tier":  4,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "c":  26
                                   },
                          "itemGuid":  "3P_JhPsOhm",
                          "itemName":  "Carnival Rhythm Bird Plush"
                      },
                      {
                          "guid":  "-r5lQ3ZugZ",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Jp6_7kTLS2",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "-tFOmsGdoa",
        "name":  "Carnival Juggler",
        "type":  "Season",
        "season":  "Season of Carnival",
        "seasonOrderIndex":  1,
        "area":  "Wandering Carnival",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/de/Carnival-Juggler-Spirit-cutout.png",
        "treeGuid":  "7PdRlqapa0",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "GBgQPyA-H8",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "OXPSCck3ZR",
                          "itemName":  "Ball Spin Trick"
                      },
                      {
                          "guid":  "4b7FEEFQ5L",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "8zdN52xHaw",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "kHQdxaX6Q7",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "2mFJXr3Qfd",
                          "itemName":  "Accompany Carnival Juggler"
                      },
                      {
                          "guid":  "70oacTGQNy",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "2ynBk5EnIF",
                          "itemName":  "Carnival Juggler Mask"
                      },
                      {
                          "guid":  "ylqNHGHbQ6",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  7
                                   },
                          "itemGuid":  "j5u50Fb1sw",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "UZlFV2fjpN",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "wqNy2PZ1cD",
                          "itemName":  "Ball Spin Trick"
                      },
                      {
                          "guid":  "-Qbi6bt8kX",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "yVEsX1alCQ",
                          "itemName":  "Ball Spin Trick"
                      },
                      {
                          "guid":  "7qmmAj3Y38",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "B4E5JO4cFS",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "pO8QuDZgl5",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "EYqeibpIHJ",
                          "itemName":  "Carnival Juggler Neck Accessory"
                      },
                      {
                          "guid":  "o0yLYlBDq7",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "My9W1ATm8Q",
                          "itemName":  "Carnival Juggler Outfit"
                      },
                      {
                          "guid":  "rX6BUQ1g7H",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "nNBevHb2gY",
                          "itemName":  "Ball Spin Trick"
                      },
                      {
                          "guid":  "JSSGmDIdXl",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "__vRcyZcZQ",
                          "itemName":  "Black dye"
                      },
                      {
                          "guid":  "IKGd-Mi9iv",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "9VIDt9BW52",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "カーニバルの曲芸師"
    },
    {
        "guid":  "PHK8kWbPjy",
        "name":  "Carnival Athletic Dancer",
        "type":  "Season",
        "season":  "Season of Carnival",
        "seasonOrderIndex":  2,
        "area":  "Wandering Carnival",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6a/Carnival-Athletic-Dancer-Spirit-cutout.png",
        "treeGuid":  "MJ_0dbbk3P",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "K0S48xik2S",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "okqH0w4T5G",
                          "itemName":  "Break Dance"
                      },
                      {
                          "guid":  "0_KLKqzV6b",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "Vuhu25PVVG",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Lsy30Kv5V9",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "iVDX5ifhO9",
                          "itemName":  "Accompany Carnival Athletic Dancer"
                      },
                      {
                          "guid":  "UhGXXgioR8",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "C7uJNuyqfU",
                          "itemName":  "Carnival Athletic Dancer Mask"
                      },
                      {
                          "guid":  "2Q1P81R8Rt",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  7
                                   },
                          "itemGuid":  "rSQCYZzXud",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "KsD_l_s9f8",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "yJ50uKqu6a",
                          "itemName":  "Break Dance"
                      },
                      {
                          "guid":  "RtvTbAXIpp",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "vV3rwZx_Q8",
                          "itemName":  "Break Dance"
                      },
                      {
                          "guid":  "_T8EMvA7Bc",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "gY0PT3KyNh",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "cWaYzrJKgT",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "kiVKAerKu7",
                          "itemName":  "Carnival Athletic Dancer Cape"
                      },
                      {
                          "guid":  "ZpPOIE3GzM",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "dJjHeZwUgR",
                          "itemName":  "Carnival Athletic Dancer Outfit"
                      },
                      {
                          "guid":  "C_n1m3qfL7",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "2FR6P6So5N",
                          "itemName":  "Break Dance"
                      },
                      {
                          "guid":  "1OtzQ9hLyr",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "aAsWD_5Fxj",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "カーニバルの旋舞家"
    },
    {
        "guid":  "Ygn2Cf0DJL",
        "name":  "Carnival Puzzle Director",
        "type":  "Season",
        "season":  "Season of Carnival",
        "seasonOrderIndex":  3,
        "area":  "Wandering Carnival",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bc/Carnival-Puzzle-Director-Spirit-cutout.png",
        "treeGuid":  "pdkcSLvzdU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "Ly2aIHieyC",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "DQ23RxuC0p",
                          "itemName":  "Take Notes"
                      },
                      {
                          "guid":  "eKvMLEttxW",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "K0t4FNyq3i",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "-iZbGEnmt-",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "wHwE1p58uB",
                          "itemName":  "Accompany Carnival Puzzle Director"
                      },
                      {
                          "guid":  "5PCT6UTPLN",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "zuyEeW2H9k",
                          "itemName":  "Music Sheet 46"
                      },
                      {
                          "guid":  "wjNgeGEqQp",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  7
                                   },
                          "itemGuid":  "ihhnJdKjn7",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "r9BxVDHPG-",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "RXEbaCi3SP",
                          "itemName":  "Take Notes"
                      },
                      {
                          "guid":  "QvNkzI_EpY",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "KMcLyS2quw",
                          "itemName":  "Take Notes"
                      },
                      {
                          "guid":  "Kj7M1cCihe",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "W1p0AC52kJ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Ygsp5WHlAl",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "gEYmO-_f9i",
                          "itemName":  "Carnival Puzzle Director Outfit"
                      },
                      {
                          "guid":  "fpLYw7GYu6",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "8njNqN93Tz",
                          "itemName":  "Carnival Puzzle Director Hair Accessory"
                      },
                      {
                          "guid":  "6NjuVh1BBF",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "fMU5ZETUM9",
                          "itemName":  "Take Notes"
                      },
                      {
                          "guid":  "fUijpYjsJG",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Lh-GtlP5L-",
                          "itemName":  "Carnival Puzzle Director Hair"
                      },
                      {
                          "guid":  "3gCHHGkiJw",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "GfrCHEHW_q",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "カーニバルの旅役者"
    },
    {
        "guid":  "BuejYIbW1r",
        "name":  "Carnival Stunt Actor",
        "type":  "Season",
        "season":  "Season of Carnival",
        "seasonOrderIndex":  4,
        "area":  "Wandering Carnival",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/43/Carnival-Stunt-Actor-Spirit-cutout.png",
        "treeGuid":  "X9HCSZXJOs",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "-_PzIMzppy",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "w0GLasntkr",
                          "itemName":  "Approve"
                      },
                      {
                          "guid":  "Ynnf3Ln5AU",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "N4aaq1aZdB",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "FN6V7yDZBS",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Tsq_eSyWh3",
                          "itemName":  "Accompany Carnival Stunt Actor"
                      },
                      {
                          "guid":  "-H7OpPLboW",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "e5a4mhF1IX",
                          "itemName":  "Carnival Stunt Actor Cape"
                      },
                      {
                          "guid":  "RlUsPEBewo",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  7
                                   },
                          "itemGuid":  "sa81AN1Hq8",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6g94ULL0P-",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "DfNbFUPfoz",
                          "itemName":  "Approve"
                      },
                      {
                          "guid":  "LCsiuE8ktj",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "ayxO3RrFH0",
                          "itemName":  "Approve"
                      },
                      {
                          "guid":  "W_0I4DSv-4",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "3GoMNCb11B",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "xwUwBvX_CZ",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "q5MIPBUDu6",
                          "itemName":  "Carnival Stunt Actor Outfit"
                      },
                      {
                          "guid":  "RXwnGQ3oVv",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "eJXt3-aUsV",
                          "itemName":  "Carnival Stunt Actor Hair"
                      },
                      {
                          "guid":  "fwlhQvBqyx",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "zxrGobTeu6",
                          "itemName":  "Approve"
                      },
                      {
                          "guid":  "jttR7EfxcD",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BEFoomKp1-",
                          "itemName":  "Carnival Stunt Actor Hair Accessory"
                      },
                      {
                          "guid":  "Q4ymklncQy",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "3NDawh9p6X",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "カーニバルの謎解き座長"
    },
    {
        "guid":  "qLy-B0hLER",
        "name":  "Vase with Fifteen Sunflowers",
        "type":  "Guide",
        "season":  "Dear Van Gogh",
        "seasonOrderIndex":  0,
        "area":  "Starry Gallery",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/0f/Dear-Van-Gogh-Ultimate-guide.png",
        "treeGuid":  "NkSfCh1o4W",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  19,
        "nodes":  [
                      {
                          "guid":  "1VyEZLTMej",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "FSFieG0auQ",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "aBG5R-Wjpu",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "_GHnVtEpOA",
                          "itemName":  "Dear Van Gogh Ultimate Pendant"
                      },
                      {
                          "guid":  "rTMkyo8ps7",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "ROMpZZAmoj",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "Hzwq3gNp4n",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "QtIKu1yrWz",
                          "itemName":  "Bulb Field Painting Prop"
                      },
                      {
                          "guid":  "ucBnU6hQc5",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "2cm-8PvvzE",
                          "itemName":  "Dear Van Gogh Ultimate Hair"
                      },
                      {
                          "guid":  "h4ekoTqcZt",
                          "tier":  1,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "qOfG2a7-e0",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "ZJGMr3g6so",
                          "tier":  1,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "79IJJygQsw",
                          "itemName":  "Self-Portrait with Grey Felt Hat"
                      },
                      {
                          "guid":  "en_VEKZitX",
                          "tier":  1,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "mfoVfazSNx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "0Maj2kuS97",
                          "tier":  1,
                          "row":  2,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "xSiJ9g0eum",
                          "itemName":  "Bedroom in Arles Painting Prop"
                      },
                      {
                          "guid":  "33dXqWBULr",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "cyHa3tGo0U",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "AVxM3nbZ37",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "WEh6XDpC2I",
                          "itemName":  "Almond Blossoms Painting Prop"
                      },
                      {
                          "guid":  "Qh9AhzqiqW",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "LEMuAPds0I",
                          "itemName":  "Dear Van Gogh Ultimate Cape"
                      },
                      {
                          "guid":  "FnIHKbjcox",
                          "tier":  2,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "_e_B0Ow2pM",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "9VsN6myvwL",
                          "tier":  2,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "-DKvcVY8de",
                          "itemName":  "Wheatfield with Crows Painting Prop"
                      },
                      {
                          "guid":  "rV1VNPET-F",
                          "tier":  2,
                          "row":  2,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Z2IzvWRyeV",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "tVXCCDv6Ll",
                          "tier":  2,
                          "row":  2,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "1wQzUDtFrC",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "36N6H1B5Wk",
                          "tier":  3,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "ltxvv3j5NL",
                          "itemName":  "Starry Night Painting Prop"
                      },
                      {
                          "guid":  "x5N0ozZYJr",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "te5dxg40i2",
                          "itemName":  "Dear Van Gogh Ultimate Teaset"
                      },
                      {
                          "guid":  "m_CWBnno1c",
                          "tier":  3,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "jIgAsmOXcH",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "j3glWGK1kn",
        "name":  "Artistic Memory",
        "type":  "Season",
        "season":  "Dear Van Gogh",
        "seasonOrderIndex":  1,
        "area":  "Starry Gallery",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/16/Artistic-Memory-Shop.png",
        "treeGuid":  "OXuwdIBV4J",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "r5elV1ifiV",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "IjN5w1MEU2",
                          "itemName":  "Draw"
                      },
                      {
                          "guid":  "emRApU6qez",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "D11xEIctcT",
                          "itemName":  "Sunflower Painting"
                      },
                      {
                          "guid":  "izD2zr-6RM",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "ncPCXfReMI",
                          "itemName":  "Accompany Artistic Memory"
                      },
                      {
                          "guid":  "qPlYZM7Bb0",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "1Nw-82lc8Y",
                          "itemName":  "Artistic Memory Hair Accessory"
                      },
                      {
                          "guid":  "CdgjxPQh9X",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "y40oNdUUlF",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6idzxiNKyy",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "HTMRNwkdKN",
                          "itemName":  "Draw"
                      },
                      {
                          "guid":  "pWIHX5Eo_C",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "nwHl-4WbFM",
                          "itemName":  "Draw"
                      },
                      {
                          "guid":  "ktxx-J5veo",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "2B2TyIS_Qd",
                          "itemName":  "Vase with Sunflowers"
                      },
                      {
                          "guid":  "8umzOnbZfa",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "Isgs7VLR2k",
                          "itemName":  "Yellow Dye"
                      },
                      {
                          "guid":  "-hU4QPO6cV",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "kW-Rm5SKd-",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "v1uX0D6_qH",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "mouMQOhC6Q",
                          "itemName":  "Draw"
                      },
                      {
                          "guid":  "WLsuK641k9",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "1g5d2r6nNZ",
                          "itemName":  "Artistic Memory Cape"
                      },
                      {
                          "guid":  "vE6eICrPQl",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "kvTAfbjBgH",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "芸術の思い出"
    },
    {
        "guid":  "JxVaydV4Kb",
        "name":  "Dutch Memory",
        "type":  "Season",
        "season":  "Dear Van Gogh",
        "seasonOrderIndex":  2,
        "area":  "Starry Gallery",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/59/Dutch-Memory-Shop.png",
        "treeGuid":  "6g_ZUxPUqN",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "dW3gzzF4By",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Jk4N1kJ8Z1",
                          "itemName":  "Frustration"
                      },
                      {
                          "guid":  "ory0TGRAmy",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "FNpsPGjBxG",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "iwggK8u_g4",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BcT4k9rDrD",
                          "itemName":  "Accompany Dutch Memory"
                      },
                      {
                          "guid":  "6Gt07Q28M5",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "n9g_apvXj1",
                          "itemName":  "Vase with Blue Flowers"
                      },
                      {
                          "guid":  "BA6W0KDR88",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "br4g7KU3Ji",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Fs2TSGD5w7",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "ehNH1rI8bO",
                          "itemName":  "Frustration"
                      },
                      {
                          "guid":  "ueEfk_mQ-6",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "UBj8qfNclH",
                          "itemName":  "Frustration"
                      },
                      {
                          "guid":  "r-aSAXFJjN",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "sUZM_ToguJ",
                          "itemName":  "White Dye"
                      },
                      {
                          "guid":  "4kQ8hoDcq3",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "q8EsW2_NSv",
                          "itemName":  "Dutch Memory Hair"
                      },
                      {
                          "guid":  "O5yFcCXTdw",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "2HdZgHTgIZ",
                          "itemName":  "Dutch Memory Cape"
                      },
                      {
                          "guid":  "sS6y8eE-Ml",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "fQ0U9OkddQ",
                          "itemName":  "Frustration"
                      },
                      {
                          "guid":  "q8OX-dnLWV",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "SqV6jxQbnM",
                          "itemName":  "Dutch Memory Outfit"
                      },
                      {
                          "guid":  "qlJbDraCrb",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "N_8t1f1Ye1",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "オランダの思い出"
    },
    {
        "guid":  "N5pIIk2DCi",
        "name":  "Joyful Memory",
        "type":  "Season",
        "season":  "Dear Van Gogh",
        "seasonOrderIndex":  3,
        "area":  "Starry Gallery",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c5/Joyful-Memory-Shop.png",
        "treeGuid":  "m-fafoGSY1",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "TQTxOfeops",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "ZT7qjTz3iF",
                          "itemName":  "Slow Walk"
                      },
                      {
                          "guid":  "EScujYnM3h",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "uMssFAmBnv",
                          "itemName":  "The Yellow House Painting"
                      },
                      {
                          "guid":  "JbUR1eaADW",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "EBAmsQLj1E",
                          "itemName":  "Accompany Joyful Memory"
                      },
                      {
                          "guid":  "7_5m23tfw4",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "fvoqm5Br_9",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "CPFbev46mr",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Y8I4r3-m9I",
                          "itemName":  "Slow Walk"
                      },
                      {
                          "guid":  "4IybQBIxK4",
                          "tier":  1,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "rfUuNEtFPe",
                          "itemName":  "Joyful Memory Hair Accessory"
                      },
                      {
                          "guid":  "Fx9pWIP6re",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "V8way5r0je",
                          "itemName":  "Slow Walk"
                      },
                      {
                          "guid":  "-8gANlhJXC",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "awbPVRa_Fw",
                          "itemName":  "Joyful Memory Hair"
                      },
                      {
                          "guid":  "yUY8kBLjab",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "YaWk638J97",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "a4IAuNHOIW",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "DMaDfY9Ddl",
                          "itemName":  "Joyful Memory Cape"
                      },
                      {
                          "guid":  "wlE6WQEuYi",
                          "tier":  3,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "kk7a5glFHD",
                          "itemName":  "Black Dye"
                      },
                      {
                          "guid":  "RwOveKHZV0",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "DXnG53ur7e",
                          "itemName":  "Slow Walk"
                      },
                      {
                          "guid":  "jhdbFcGjVP",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "JjSSyKQPEY",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "喜びの思い出"
    },
    {
        "guid":  "ZngKNBX8dc",
        "name":  "Rustic Memory",
        "type":  "Season",
        "season":  "Dear Van Gogh",
        "seasonOrderIndex":  4,
        "area":  "Starry Gallery",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7a/Rustic-Memory-Shop.png",
        "treeGuid":  "NFDx2eSIZ1",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "2jbxgHyW-3",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "KksA7AcGkr",
                          "itemName":  "Bask"
                      },
                      {
                          "guid":  "Q70f27I4mL",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "T9jzszI0hV",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "52BaOiWMI6",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "r5Wb1z2P-8",
                          "itemName":  "Accompany Rustic Memory"
                      },
                      {
                          "guid":  "wqQy4M9j2u",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "biyNrvTRa6",
                          "itemName":  "Windmill Painting"
                      },
                      {
                          "guid":  "WO9gVRcY0M",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "lqByBRP4v5",
                          "itemName":  "Red Dye"
                      },
                      {
                          "guid":  "wb7Kcfv_N2",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Q9OYCcyrBz",
                          "itemName":  "Bask"
                      },
                      {
                          "guid":  "eMw9z0ATyM",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "qZKbIGjGBK",
                          "itemName":  "Bask"
                      },
                      {
                          "guid":  "Hw5YPRVPOx",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "AAl-2aJtUw",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ySeCJvmAFx",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "NeLwhNn3KZ",
                          "itemName":  "Rustic Memory Shoes"
                      },
                      {
                          "guid":  "7IniHsguSy",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "xsuo6-58kt",
                          "itemName":  "Rustic Memory Hair Accessory"
                      },
                      {
                          "guid":  "OucUvzSogX",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "AAX9QrJjxP",
                          "itemName":  "Bask"
                      },
                      {
                          "guid":  "xlk2Lqs_qo",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "8STJebiuKW",
                          "itemName":  "Rustic Memory Cape"
                      },
                      {
                          "guid":  "bUhVuo17QD",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "rWMp_LAHlT",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "素朴な思い出"
    },
    {
        "guid":  "sj6YhQZQvM",
        "name":  "Dreams Guide",
        "type":  "Guide",
        "season":  "Season of Dreams",
        "seasonOrderIndex":  0,
        "area":  "Village of Dreams",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9b/Dreams-Guide-Spirit.png",
        "treeGuid":  "f74U1Fp5Nk",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  14,
        "nodes":  [
                      {
                          "guid":  "E6A7ecGOwR",
                          "cost":  {

                                   },
                          "itemGuid":  "IEocuR75Kz",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "8NYvtjWILo",
                          "cost":  {

                                   },
                          "itemGuid":  "-w8MPNCSjY",
                          "itemName":  "Dreams Ultimate Pendant"
                      },
                      {
                          "guid":  "oqHi3BKS0C",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "HgkvwqNp19",
                          "itemName":  "Dreams Ultimate Mask"
                      },
                      {
                          "guid":  "p_rZs-XFkt",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "w1EkwcgG88",
                          "itemName":  "Dreams Ultimate Cape"
                      },
                      {
                          "guid":  "kha7LQ60kq",
                          "cost":  {

                                   },
                          "itemGuid":  "Ee2bEKMr-j",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "9607gdxyoA",
                          "cost":  {

                                   },
                          "itemGuid":  "AxqrNrIvYZ",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "qJ7EVbW4Oh",
                          "cost":  {

                                   },
                          "itemGuid":  "lgkuCpwOmm",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "XXsfA90gZ7",
                          "cost":  {

                                   },
                          "itemGuid":  "fLXHdJRrG8",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "KX8s8DF-_r",
                          "cost":  {

                                   },
                          "itemGuid":  "A1_575s2B4",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "o-xV7unZpv",
                          "cost":  {

                                   },
                          "itemGuid":  "taODWkgTDL",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "kHy8lsNHmD",
                          "cost":  {

                                   },
                          "itemGuid":  "vJybn8Qhwm",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Xlgqb91xS9",
                          "cost":  {

                                   },
                          "itemGuid":  "2W13vwHJMg",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "yl3Pzw6gkd",
                          "cost":  {

                                   },
                          "itemGuid":  "tgubkIn9Nz",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Ph4Q_VSk5W",
                          "cost":  {

                                   },
                          "itemGuid":  "fK9D1Hmks2",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "KhFZE8z0-I",
        "name":  "Bearhug Hermit",
        "type":  "Season",
        "season":  "Season of Dreams",
        "seasonOrderIndex":  1,
        "area":  "Village of Dreams",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/31/Dreams-Spirit-Bearhug-Hermit.png",
        "treeGuid":  "Ng3zGFAGql",
        "treeSource":  "revisit",
        "revisitDate":  "2025-11-17",
        "revisitName":  "Special Visit #11",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "MYGxrRz1dX",
                          "cost":  {

                                   },
                          "itemGuid":  "sw2YxczeGz",
                          "itemName":  "Bearhug"
                      },
                      {
                          "guid":  "YcnP_W3Y-8",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GiLR6EGa0G",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "2W5vFqZh_-",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "exzDzoamyL",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "MpZ-cDufXE",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "knUa1Ri-X1",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "KFMz9HPM7O",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Ml3Snz_cos",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "U7rVlTLgzT",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "C1z7gdAqFH",
                          "itemName":  "Bearhug Hermit Hair"
                      },
                      {
                          "guid":  "z_vOcKI327",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "n4sSWlUIbO",
                          "itemName":  "Bearhug Hermit Outfit"
                      },
                      {
                          "guid":  "HquaKixBk7",
                          "cost":  {
                                       "h":  8
                                   },
                          "itemGuid":  "YzY-N81J1l",
                          "itemName":  "Bearhug"
                      },
                      {
                          "guid":  "HXOqjx-eAI",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "xI0_ep59HH",
                          "itemName":  "Bearhug Hermit Horns"
                      },
                      {
                          "guid":  "pwOQisOIDM",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "s_79maNypQ",
                          "itemName":  "Forgotten Dance"
                      }
                  ],
        "nameJa":  "舞い踊る表現者"
    },
    {
        "guid":  "7tMB-HjDin",
        "name":  "Dancing Performer",
        "type":  "Season",
        "season":  "Season of Dreams",
        "seasonOrderIndex":  2,
        "area":  "Village of Dreams",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9a/Dreams-Spirit-Dancing-Performer.png",
        "treeGuid":  "zUy1Dlkzbl",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "6i1ljkdw6g",
                          "cost":  {

                                   },
                          "itemGuid":  "mK02s3A4Sy",
                          "itemName":  "Show Dance"
                      },
                      {
                          "guid":  "4jPhG-WDu-",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "ycMWhJR5iE",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Nc1QICgbHC",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "IWzRV-xeez",
                          "itemName":  "Show Dance"
                      },
                      {
                          "guid":  "7KoJNQ-it8",
                          "cost":  {
                                       "sc":  21
                                   },
                          "itemGuid":  "k_zF2v-lqe",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ZRRggYwn2E",
                          "cost":  {
                                       "sc":  27
                                   },
                          "itemGuid":  "hmWCBGAmfU",
                          "itemName":  "Dancing Performer Cape"
                      },
                      {
                          "guid":  "Uc6FJxwFeC",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "hyoIaD__sx",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "rFjHbixUoX",
                          "cost":  {

                                   },
                          "itemGuid":  "xpq4O_F_Md",
                          "itemName":  "Lute"
                      },
                      {
                          "guid":  "CSYMItHyJ7",
                          "cost":  {

                                   },
                          "itemGuid":  "4Hk-52OgPb",
                          "itemName":  "Dancing Performer Mask"
                      },
                      {
                          "guid":  "vZOevdyudj",
                          "cost":  {

                                   },
                          "itemGuid":  "kabDjVwtC9",
                          "itemName":  "Show Dance"
                      },
                      {
                          "guid":  "87X64LZyO4",
                          "cost":  {

                                   },
                          "itemGuid":  "fasyzIliRV",
                          "itemName":  "Dancing Performer Hair"
                      },
                      {
                          "guid":  "RtqFpi_hFX",
                          "cost":  {

                                   },
                          "itemGuid":  "VR8uQXAzzZ",
                          "itemName":  "Show Dance"
                      }
                  ],
        "nameJa":  "旋舞の師匠"
    },
    {
        "guid":  "Jd8rEzWHVg",
        "name":  "Peeking Postman",
        "type":  "Season",
        "season":  "Season of Dreams",
        "seasonOrderIndex":  3,
        "area":  "Village of Dreams",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8a/Dreams-Spirit-Peeking-Postman.png",
        "treeGuid":  "gqf9paZVEy",
        "treeSource":  "revisit",
        "revisitDate":  "2025-11-17",
        "revisitName":  "Special Visit #11",
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "rfwstakJR_",
                          "cost":  {

                                   },
                          "itemGuid":  "hV3bFwgh_u",
                          "itemName":  "Peek"
                      },
                      {
                          "guid":  "YwRt2zAKCs",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "P0s-2sxeCo",
                          "itemName":  "Springing Step"
                      },
                      {
                          "guid":  "Gf22A_pZB9",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "TApO1CbBoB",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Wd8K6up0IY",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "FDooabvqY9",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "UzN0AQng7w",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "yDYmiGTiTN",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "HMr0akz1K5",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "ehhr3uxVaH",
                          "itemName":  "Peek"
                      },
                      {
                          "guid":  "R5Oken06JZ",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "hPlYrRFFLa",
                          "itemName":  "Peeking Postman Cape"
                      },
                      {
                          "guid":  "TXUHpVg352",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "t-tF3kbiyu",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "O6-JWDv9cJ",
                          "cost":  {
                                       "c":  36
                                   },
                          "itemGuid":  "3CcVwVPJm-",
                          "itemName":  "Peeking Postman Shoes"
                      },
                      {
                          "guid":  "nNwdOB_phS",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "xFj09irsLt",
                          "itemName":  "Peeking Postman Outfit"
                      },
                      {
                          "guid":  "ezf5fSB927",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "0S9JrVZK6v",
                          "itemName":  "Peek"
                      },
                      {
                          "guid":  "CEDxQDFuH4",
                          "cost":  {
                                       "c":  54
                                   },
                          "itemGuid":  "Htee_duioI",
                          "itemName":  "Peeking Postman Mask"
                      },
                      {
                          "guid":  "ihSF0FVHCr",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "iNGMlJTDL0",
                          "itemName":  "Peek"
                      }
                  ],
        "nameJa":  "そっと覗く郵便屋"
    },
    {
        "guid":  "Ej3SZgZ2WL",
        "name":  "Spinning Mentor",
        "type":  "Season",
        "season":  "Season of Dreams",
        "seasonOrderIndex":  4,
        "area":  "Village of Dreams",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2b/Dreams-Spirit-Spinning-Mentor.png",
        "treeGuid":  "duRfvp3IvK",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "3OmVOrRC43",
                          "cost":  {

                                   },
                          "itemGuid":  "NOJ5yfbV_j",
                          "itemName":  "Spin Trick"
                      },
                      {
                          "guid":  "oRsSn4tuWY",
                          "cost":  {
                                       "sc":  13
                                   },
                          "itemGuid":  "J9R4HX-ZHf",
                          "itemName":  "Spinning Mentor Hair"
                      },
                      {
                          "guid":  "uxG32HFoPi",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "CCeCnDEyRM",
                          "itemName":  "Spin Trick"
                      },
                      {
                          "guid":  "-MWLVfdTk0",
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "V5TIjYorQs",
                          "itemName":  "Spinning Mentor Mask"
                      },
                      {
                          "guid":  "C-anmQdPdK",
                          "cost":  {
                                       "sc":  29
                                   },
                          "itemGuid":  "YV9IWJyX3u",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "R1LiU1LWUD",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "88bStTJrBZ",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "-Wj2i0Ymvt",
                          "cost":  {

                                   },
                          "itemGuid":  "oyvK6kO527",
                          "itemName":  "Spinning Mentor Cape"
                      },
                      {
                          "guid":  "OJf5oAWfnQ",
                          "cost":  {

                                   },
                          "itemGuid":  "wisiiK9diZ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "l9kBP_Rwmg",
                          "cost":  {

                                   },
                          "itemGuid":  "SUGO6FwRX8",
                          "itemName":  "Spin Trick"
                      },
                      {
                          "guid":  "IdhxAwjyiU",
                          "cost":  {

                                   },
                          "itemGuid":  "PdvK8FPKcD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "UBfuaB2HAh",
                          "cost":  {

                                   },
                          "itemGuid":  "tp172HbBKC",
                          "itemName":  "Spin Trick"
                      }
                  ],
        "nameJa":  "ハグ好きの隠者"
    },
    {
        "guid":  "iCVOo-FNbd",
        "name":  "Duets Guide",
        "type":  "Guide",
        "season":  "Season of Duets",
        "seasonOrderIndex":  0,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/eb/Duets-Ultimate-Guide.png",
        "treeGuid":  "voApj8nmhQ",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "RTwKtxkvqi",
                          "cost":  {

                                   },
                          "itemGuid":  "DtfPuD-xSP",
                          "itemName":  "Concert Hall Warp"
                      },
                      {
                          "guid":  "2fswREyaxJ",
                          "cost":  {

                                   },
                          "itemGuid":  "g5if_hfGQ-",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "iby7lIaFPB",
                          "cost":  {

                                   },
                          "itemGuid":  "3iG8im9Sgu",
                          "itemName":  "Duets Ultimate Pendant"
                      },
                      {
                          "guid":  "NEO0V_QhWq",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "i9it79Bnon",
                          "itemName":  "Duets Ultimate Prop"
                      },
                      {
                          "guid":  "w2j-Z-vruS",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "bOUW5LY8PU",
                          "itemName":  "Duets Ultimate Cape"
                      },
                      {
                          "guid":  "qUqOUDuxMR",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "O9jSph-v7e",
                          "itemName":  "Duets Ultimate Instrument"
                      },
                      {
                          "guid":  "EaE3N7kN0v",
                          "cost":  {

                                   },
                          "itemGuid":  "25PSOB8TyZ",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "BdgMwWpdUv",
                          "cost":  {

                                   },
                          "itemGuid":  "kSUpmc7BGK",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "R4Y_Q3RES_",
                          "cost":  {

                                   },
                          "itemGuid":  "a2jmBtI7SB",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "XtmRITBo-6",
                          "cost":  {

                                   },
                          "itemGuid":  "pronMA7m25",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "mQ2jU8yZwP",
                          "cost":  {

                                   },
                          "itemGuid":  "kvggIFZaT3",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ooAEpXb7Bn",
                          "cost":  {
                                       "h":  8
                                   },
                          "itemGuid":  "itrEoHB72a",
                          "itemName":  "Duet Bow"
                      },
                      {
                          "guid":  "uiFFvOV26K",
                          "cost":  {

                                   },
                          "itemGuid":  "xGUAqqh4hK",
                          "itemName":  "Duet Bow"
                      },
                      {
                          "guid":  "GpBPsEWVPr",
                          "cost":  {

                                   },
                          "itemGuid":  "mEvAN9gteG",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "zLUfSW4pVU",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "diBkeTRe1G",
                          "itemName":  "Duets Mask"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "o4ZuAa_Q8u",
        "name":  "The Cellist\u0027s Beginnings",
        "type":  "Season",
        "season":  "Season of Duets",
        "seasonOrderIndex":  2,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b7/The-Cellists-Beginnings-Shop.png",
        "treeGuid":  "UUTbaINneC",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "klGk-HXhP6",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "krE8-lSgNh",
                          "itemName":  "The Cellist\u0027s Beginnings Hair"
                      },
                      {
                          "guid":  "pc8GNxOJAo",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "l7wweQZZee",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "wP5zZExgrT",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "WTVL4L3IT-",
                          "itemName":  "The Cellist\u0027s Beginnings Outfit"
                      },
                      {
                          "guid":  "gE2SbLCs4s",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "GzKcUk-Tzw",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "XTZO3NaezV",
                          "cost":  {

                                   },
                          "itemGuid":  "UWuovba0QU",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "SSIHPlhLCN",
                          "cost":  {

                                   },
                          "itemGuid":  "GNR4Or83IO",
                          "itemName":  "The Cellist\u0027s Beginnings Poster"
                      },
                      {
                          "guid":  "ni_Zpp_oim",
                          "cost":  {

                                   },
                          "itemGuid":  "aSFIx_KYoy",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "駆けだしのチェリスト"
    },
    {
        "guid":  "Jt8plqOdgg",
        "name":  "The Pianist\u0027s Beginnings",
        "type":  "Season",
        "season":  "Season of Duets",
        "seasonOrderIndex":  1,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3a/The-Pianists-Beginnings-Shop.png",
        "treeGuid":  "FKLImPk5vB",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "MhQW8_5oJe",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "-F-7JGkkRf",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "lGaitqwff7",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "I1B2G8p1uQ",
                          "itemName":  "The Pianist\u0027s Beginnings Hair"
                      },
                      {
                          "guid":  "2AI3FARJ7P",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "bswnrIV7vC",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "R8PbOBnUxy",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "S9kEMk3Zii",
                          "itemName":  "The Pianist\u0027s Beginnings Rug"
                      },
                      {
                          "guid":  "93HuF0OnrW",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "9LGf7mpwgd",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "TKzZHv9B7d",
                          "cost":  {

                                   },
                          "itemGuid":  "Q3WniYqjbN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ZlfQi_6Y2e",
                          "cost":  {

                                   },
                          "itemGuid":  "tMT9whKoLk",
                          "itemName":  "The Pianist\u0027s Beginnings Outfit"
                      },
                      {
                          "guid":  "6TGMPUcKG8",
                          "cost":  {

                                   },
                          "itemGuid":  "2RVqVbz8OP",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YfQDDuTkmt",
                          "cost":  {

                                   },
                          "itemGuid":  "pLAgUoGFQ8",
                          "itemName":  "The Pianist\u0027s Beginnings Poster"
                      }
                  ],
        "nameJa":  "駆けだしのピアニスト"
    },
    {
        "guid":  "6Vsnbtp_Y3",
        "name":  "The Musician\u0027s Legacy",
        "type":  "Season",
        "season":  "Season of Duets",
        "seasonOrderIndex":  3,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ed/The-Musicians-Legacy-Shop.png",
        "treeGuid":  "1ZlSRiEeW5",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "pFyvw9hJcB",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "KG-rMox4G2",
                          "itemName":  "Old Friends"
                      },
                      {
                          "guid":  "Wl9yd-cPrn",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "0Aeu5lQMJO",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "mIC1PGTfH5",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "hnvn7nWtrl",
                          "itemName":  "The Musicians\u0027 Legacy Cello"
                      },
                      {
                          "guid":  "aj5_tFeGeX",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "0GzAe_7zrk",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "5NI0hRi9iv",
                          "cost":  {

                                   },
                          "itemGuid":  "1JHImKQbo_",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "T7uQx2v8zc",
                          "cost":  {

                                   },
                          "itemGuid":  "WuZeLoUATs",
                          "itemName":  "The Musicians\u0027 Legacy Piano"
                      },
                      {
                          "guid":  "I2eU0keULV",
                          "cost":  {

                                   },
                          "itemGuid":  "g8yG9W1k84",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "音楽家たちの遺産"
    },
    {
        "guid":  "md2oP_oAWb",
        "name":  "The Cellist\u0027s Flourishing",
        "type":  "Season",
        "season":  "Season of Duets",
        "seasonOrderIndex":  5,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ea/The-Cellists-Flourishing-Shop.png",
        "treeGuid":  "ntlyxbsjrU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "OrlAJ5Mft8",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "FSiRt_Wh_m",
                          "itemName":  "The Cellist\u0027s Flourishing Rug"
                      },
                      {
                          "guid":  "lePw35T9ls",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "SK5VqRoQrW",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "rOQplr6ASS",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "NN66BKlRfk",
                          "itemName":  "The Cellist\u0027s Flourishing Cape"
                      },
                      {
                          "guid":  "bd7XbTPj-7",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "Xvbx2xCXIY",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "7Cb8KFGeuj",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "InE35_ELM1",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "FXKexB3fi7",
                          "cost":  {

                                   },
                          "itemGuid":  "tPukMxWUyv",
                          "itemName":  "The Cellist\u0027s Flourishing Outfit"
                      },
                      {
                          "guid":  "E8UygAUwbI",
                          "cost":  {

                                   },
                          "itemGuid":  "vFTLFT1J7q",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ep5h3HoDuw",
                          "cost":  {

                                   },
                          "itemGuid":  "a_Fa3yhrQg",
                          "itemName":  "The Cellist\u0027s Flourishing Poster"
                      },
                      {
                          "guid":  "ApzfWYIqEh",
                          "cost":  {

                                   },
                          "itemGuid":  "P1uShTqTqE",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "栄光のチェリスト"
    },
    {
        "guid":  "xINN19ZdXU",
        "name":  "The Pianist\u0027s Flourishing",
        "type":  "Season",
        "season":  "Season of Duets",
        "seasonOrderIndex":  4,
        "area":  "Concert Hall",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9b/The-Pianists-Flourishing-Shop.png",
        "treeGuid":  "vMFAj297uU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "1zy7qpbEoA",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "5C_ntpgIZ8",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "gOpZ9MH8vw",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "x-R9MDgnUQ",
                          "itemName":  "The Pianist\u0027s Flourishing Shoes"
                      },
                      {
                          "guid":  "M8wvoqlBap",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "9RkQ1ZoElh",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "fKR-PgI0hh",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "yftX04x1e4",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "gHX-7TcZRj",
                          "cost":  {

                                   },
                          "itemGuid":  "svs-TcEdo-",
                          "itemName":  "The Pianist\u0027s Flourishing Outfit"
                      },
                      {
                          "guid":  "DVOSRGpEd-",
                          "cost":  {

                                   },
                          "itemGuid":  "UhrrppaxfR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "qy8Rj_7ays",
                          "cost":  {

                                   },
                          "itemGuid":  "RCByalU9Om",
                          "itemName":  "The Pianist\u0027s Flourishing Poster"
                      }
                  ],
        "nameJa":  "栄光のピアニスト"
    },
    {
        "guid":  "kavln3oyNl",
        "name":  "Compassionate Cellist",
        "type":  "Special",
        "season":  null,
        "seasonOrderIndex":  null,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a7/Duets-Spirit-Compassionate-Cellist.png",
        "treeGuid":  "4uhy67a14a",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  4,
        "nodes":  [
                      {
                          "guid":  "JbSDLaN0Xu",
                          "cost":  {

                                   },
                          "itemGuid":  "zojvgAwKBB",
                          "itemName":  "Shared Memory Spell"
                      },
                      {
                          "guid":  "3OG2FPAiik",
                          "cost":  {

                                   },
                          "itemGuid":  "xFNf_ULNXD",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "9g-p0fPjOg",
                          "cost":  {
                                       "c":  200
                                   },
                          "itemGuid":  "Q393hmCmPi",
                          "itemName":  "Duets Cello"
                      },
                      {
                          "guid":  "5Zp6CYDD9F",
                          "cost":  {
                                       "c":  85
                                   },
                          "itemGuid":  "J_UEHvMcbs",
                          "itemName":  "Compassionate Cellist Face Accessory"
                      }
                  ],
        "nameJa":  "思いやり深いチェリスト"
    },
    {
        "guid":  "ZomY9nil8V",
        "name":  "Enchantment Guide",
        "type":  "Guide",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  0,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f0/Enchantment-Guide-Spirit.png",
        "treeGuid":  "MBr5qVDM3P",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "kt2WO262jv",
                          "cost":  {

                                   },
                          "itemGuid":  "TX3Mc_wTaK",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "OBuEW9srW5",
                          "cost":  {

                                   },
                          "itemGuid":  "l47AxvwiAp",
                          "itemName":  "Enchantment Ultimate Pendant"
                      },
                      {
                          "guid":  "GfsdlwRU-0",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "FlOSNmw_38",
                          "itemName":  "Enchantment Ultimate Hair Tassels"
                      },
                      {
                          "guid":  "VYrv1UraQ5",
                          "cost":  {
                                       "sh":  4
                                   },
                          "itemGuid":  "EUVtYtLoeB",
                          "itemName":  "Enchantment Ultimate Hair"
                      },
                      {
                          "guid":  "i4einymP9d",
                          "cost":  {

                                   },
                          "itemGuid":  "xetNt922-X",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "sA7W195hE6",
                          "cost":  {

                                   },
                          "itemGuid":  "jE6TSih_f4",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "mSMV14JZfv",
                          "cost":  {

                                   },
                          "itemGuid":  "5BkWZkgMA_",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "bOKaKtMaPp",
                          "cost":  {

                                   },
                          "itemGuid":  "uXMhRXIsiE",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "9rVgySJtBZ",
                          "cost":  {

                                   },
                          "itemGuid":  "TyFTGUX8JI",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "LUnfQiC8MS",
                          "cost":  {

                                   },
                          "itemGuid":  "qLtGw28-YW",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "G-CMBzQhxa",
                          "cost":  {

                                   },
                          "itemGuid":  "lX0TVFI7XL",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "kwk_A2dPiL",
                          "cost":  {

                                   },
                          "itemGuid":  "y_5OcOYKYk",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "HEMQuTSu3l",
                          "cost":  {

                                   },
                          "itemGuid":  "j7JuYf11ng",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rZ8hz4NdEI",
                          "cost":  {

                                   },
                          "itemGuid":  "efLb_Kt_om",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "dF7uQHfL_a",
                          "cost":  {

                                   },
                          "itemGuid":  "bGP2yknqSS",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "HphxLKhDBZ",
        "name":  "Nodding Muralist",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  1,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8e/Enchantment-Spirit-Nodding-Muralist.png",
        "treeGuid":  "AhcLwz3Pxj",
        "treeSource":  "revisit",
        "revisitDate":  "2024-03-04",
        "revisitName":  "Special Visit #5",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "VkCve9uVAS",
                          "cost":  {

                                   },
                          "itemGuid":  "WhcCC138s8",
                          "itemName":  "Nod"
                      },
                      {
                          "guid":  "reGOXfU8aZ",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "H1vYsFTrFX",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "faeJLdk3KX",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "V-zZ-UK9VJ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "j4_wre60hD",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "9Epic8uUqZ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "gD0H2BPu24",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "rYq-RTnkiN",
                          "itemName":  "Nod"
                      },
                      {
                          "guid":  "SFYjN4kDyC",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "hAnvfbKn_u",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "QUcB4hxfNe",
                          "cost":  {
                                       "c":  34
                                   },
                          "itemGuid":  "0HHq0_mt50",
                          "itemName":  "Nodding Muralist Hair"
                      },
                      {
                          "guid":  "0M_l6cQSrW",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "sbkNjwrgIc",
                          "itemName":  "Nod"
                      },
                      {
                          "guid":  "xe8U6BjJZN",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "GyXhQOu4fZ",
                          "itemName":  "Nodding Muralist Mask"
                      },
                      {
                          "guid":  "mo0oIJS1a_",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "D72h3-WjJD",
                          "itemName":  "Nod"
                      }
                  ],
        "nameJa":  "うなずく壁画師"
    },
    {
        "guid":  "kQiNS82DDY",
        "name":  "Indifferent Alchemist",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  2,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/26/Enchantment-Spirit-Indifferent-Alchemist.png",
        "treeGuid":  "nzUD7-NDgi",
        "treeSource":  "revisit",
        "revisitDate":  "2024-03-04",
        "revisitName":  "Special Visit #5",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "r8R5tQ541i",
                          "cost":  {

                                   },
                          "itemGuid":  "gFaU0Zm95W",
                          "itemName":  "Shrug"
                      },
                      {
                          "guid":  "VvKaxiwGqU",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "eTV8WChk9X",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "WwkVk3lL54",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "bAcsvpqSwD",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "oooPIH1nd8",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "YeiJvAzm58",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "eoPgfATIGk",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "8qHEcZWhOt",
                          "itemName":  "Shrug"
                      },
                      {
                          "guid":  "3Sb5my-oqj",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "vbQP5KFpu1",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "oOrGmAupd3",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "ipSfkZ8Rql",
                          "itemName":  "Indifferent Alchemist Cape"
                      },
                      {
                          "guid":  "YmDyOSHV1G",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "ad7KAaSuU8",
                          "itemName":  "Indifferent Alchemist Hair"
                      },
                      {
                          "guid":  "Yqu5lrKau1",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "HD8j6J2ysy",
                          "itemName":  "Shrug"
                      },
                      {
                          "guid":  "IAL8W8rNyI",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "JR7mtV1Ukg",
                          "itemName":  "Indifferent Alchemist Mask"
                      },
                      {
                          "guid":  "pDhOss9S9C",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "5bwnWkR0DG",
                          "itemName":  "Shrug"
                      }
                  ],
        "nameJa":  "無頓着な錬金術師"
    },
    {
        "guid":  "OaysgoHcZI",
        "name":  "Crab Walker",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  3,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/54/Enchantment-Spirit-Crab-Walker.png",
        "treeGuid":  "_IpcZ_U6zY",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "P3b21yQSwC",
                          "cost":  {

                                   },
                          "itemGuid":  "4cZR63EJEP",
                          "itemName":  "Crab Walk"
                      },
                      {
                          "guid":  "9dv2rIFzKb",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "TyRibJeEa5",
                          "itemName":  "Crab Walker Hair"
                      },
                      {
                          "guid":  "bk4eC5fVgo",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "lw-A9eS1gx",
                          "itemName":  "Crab Walk"
                      },
                      {
                          "guid":  "Ci0-1t5e7c",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "xOifrwunmm",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "qNEeyE2CUm",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "u0wTYjUD5l",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "GfwStEOCfE",
                          "cost":  {

                                   },
                          "itemGuid":  "FyM7E9zFoH",
                          "itemName":  "Crab Walker Cape"
                      },
                      {
                          "guid":  "EM_evwr3qq",
                          "cost":  {

                                   },
                          "itemGuid":  "48_BopWKQ5",
                          "itemName":  "Crab Walk"
                      },
                      {
                          "guid":  "f6w8GBTG_R",
                          "cost":  {

                                   },
                          "itemGuid":  "q1ZDkQme8T",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "j_BbjuH4jC",
                          "cost":  {

                                   },
                          "itemGuid":  "PcsXYI_YLj",
                          "itemName":  "Crab Walk"
                      }
                  ],
        "nameJa":  "蟹歩きの名人"
    },
    {
        "guid":  "UJVa4nb2nn",
        "name":  "Scarecrow Farmer",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  4,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a1/Enchantment-Spirit-Scarecrow-Farmer.png",
        "treeGuid":  "jRTuid-Y21",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "jztFaDx20s",
                          "cost":  {

                                   },
                          "itemGuid":  "3difltLJOc",
                          "itemName":  "Boo"
                      },
                      {
                          "guid":  "eD3uA0eVYo",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "ki7gyniwOJ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "x8aTfMU2sg",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "ixFFdCm9cG",
                          "itemName":  "Boo"
                      },
                      {
                          "guid":  "A3ZfdpXZ8V",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "PxvVMovhCo",
                          "itemName":  "Scarecrow Farmer Hair"
                      },
                      {
                          "guid":  "B1QIX_uEsx",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "9N_fvcEh5f",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "6dnCVPPH6a",
                          "cost":  {

                                   },
                          "itemGuid":  "wRsxoaUmkd",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "hlDXEMyH66",
                          "cost":  {

                                   },
                          "itemGuid":  "sNJx3GgOLF",
                          "itemName":  "Boo"
                      },
                      {
                          "guid":  "f6k36cK2bc",
                          "cost":  {

                                   },
                          "itemGuid":  "r1UK3P6AGy",
                          "itemName":  "Scarecrow Farmer Mask"
                      },
                      {
                          "guid":  "RqxWnCwc7i",
                          "cost":  {

                                   },
                          "itemGuid":  "DGC8JcQK5y",
                          "itemName":  "Boo"
                      }
                  ],
        "nameJa":  "こけおどしの農家"
    },
    {
        "guid":  "Be41CnHkEI",
        "name":  "Snoozing Carpenter",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  5,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c4/Enchantment-Spirit-Snoozing-Carpenter.png",
        "treeGuid":  "jJoNEIUqgP",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "YkM_tSjB34",
                          "cost":  {

                                   },
                          "itemGuid":  "RzstnkbQ8d",
                          "itemName":  "Doze"
                      },
                      {
                          "guid":  "Wb9KsxWM-q",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "6Iufn25pjn",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "603riE2ihF",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "xfv-AbRiCY",
                          "itemName":  "Doze"
                      },
                      {
                          "guid":  "wRfaa5HvsN",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "9KhfuEDkFe",
                          "itemName":  "Snoozing Carpenter Cape"
                      },
                      {
                          "guid":  "7zIJAKhy-D",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "IBEr4ORQcY",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "IoNPVwy87h",
                          "cost":  {

                                   },
                          "itemGuid":  "l8RClua3lo",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ywMRcyoldu",
                          "cost":  {

                                   },
                          "itemGuid":  "IL31Z--01u",
                          "itemName":  "Doze"
                      },
                      {
                          "guid":  "OQMnD3sSDy",
                          "cost":  {

                                   },
                          "itemGuid":  "1pSVV2aJ5S",
                          "itemName":  "Snoozing Carpenter Hair"
                      },
                      {
                          "guid":  "98OouYU5YG",
                          "cost":  {

                                   },
                          "itemGuid":  "o9Wt1MLcrz",
                          "itemName":  "Doze"
                      }
                  ],
        "nameJa":  "居眠りする大工"
    },
    {
        "guid":  "hgjklF3nQI",
        "name":  "Playfighting Herbalist",
        "type":  "Season",
        "season":  "Season of Enchantment",
        "seasonOrderIndex":  6,
        "area":  "Forgotten Ark",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/11/Enchantment-Spirit-Playfighting-Herbalist.png",
        "treeGuid":  "CJRxYWXojv",
        "treeSource":  "revisit",
        "revisitDate":  "2026-06-18",
        "revisitName":  "TS Error",
        "isTiered":  false,
        "nodeCount":  14,
        "nodes":  [
                      {
                          "guid":  "A6WEpsNOqn",
                          "cost":  {

                                   },
                          "itemGuid":  "aBFJssIm0e",
                          "itemName":  "Play Fight"
                      },
                      {
                          "guid":  "RCsi7aHeOp",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "L3L_RHjeJ2",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "rg03wwL-nZ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "nmX_OnaWdY",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "2XL4R1KcQo",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "VD-eWqartt",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "86oc0mGlb8",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "6rWMw26PJt",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "J10SQ5em0w",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "G6L9jA7zsg",
                          "itemName":  "Drifting Over Sand"
                      },
                      {
                          "guid":  "DgAJjNkKNj",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "EOIKe7Ya--",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "k4-sMKK5_E",
                          "cost":  {
                                       "c":  20
                                   },
                          "itemGuid":  "X7b5yfYXA_",
                          "itemName":  "Playfighting Herbalist Prop"
                      },
                      {
                          "guid":  "6p-SEiVak2",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "RBXxOaKIyg",
                          "itemName":  "Playfighting Herbalist Cape"
                      },
                      {
                          "guid":  "G-xRkChQ1A",
                          "cost":  {
                                       "h":  8
                                   },
                          "itemGuid":  "XH9iJLNF4F",
                          "itemName":  "Play Fight"
                      },
                      {
                          "guid":  "IJlo8MvkH2",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "U3YshimiUo",
                          "itemName":  "Play Fight"
                      },
                      {
                          "guid":  "4XFb4Qvt45",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "8vNIpRiWxo",
                          "itemName":  "Playfighting Herbalist Hair"
                      },
                      {
                          "guid":  "sgVc9PbiKG",
                          "cost":  {
                                       "h":  10
                                   },
                          "itemGuid":  "PkKzcwatL6",
                          "itemName":  "Play Fight"
                      },
                      {
                          "guid":  "rOLHJjfv8u",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "y37rCd0HV4",
                          "itemName":  "Playfighting Herbalist Mask"
                      }
                  ],
        "nameJa":  "けんかごっこ好きの植物採集者"
    },
    {
        "guid":  "FF8u1g9XI_",
        "name":  "Flight Guide",
        "type":  "Guide",
        "season":  "Season of Flight",
        "seasonOrderIndex":  0,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/54/Flight_Guide.png",
        "treeGuid":  "23Vo9a04Sm",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "Tviv_8P0R_",
                          "cost":  {

                                   },
                          "itemGuid":  "TI-CpaXFhK",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "Cfh5asERB6",
                          "cost":  {

                                   },
                          "itemGuid":  "4Yk3OcGKKp",
                          "itemName":  "Flight Ultimate Pendant"
                      },
                      {
                          "guid":  "Bdht1YgRfV",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "cbWKMsAh7H",
                          "itemName":  "Flight Ultimate Hair Accessory"
                      },
                      {
                          "guid":  "UhutWl8JrX",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "SxX0bNDJaR",
                          "itemName":  "Flight Ultimate Outfit"
                      },
                      {
                          "guid":  "xeBmep90uk",
                          "cost":  {

                                   },
                          "itemGuid":  "Bg_bDXCpyl",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "63GCJMVztT",
                          "cost":  {

                                   },
                          "itemGuid":  "k1p3Ab7Pe4",
                          "itemName":  "High Five"
                      },
                      {
                          "guid":  "YFjy8-tGGr",
                          "cost":  {

                                   },
                          "itemGuid":  "WrBllT55vV",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "I3wSB4AyZZ",
                          "cost":  {

                                   },
                          "itemGuid":  "W51TEfrNbi",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "etq8-uDGAY",
                          "cost":  {

                                   },
                          "itemGuid":  "17es70sy2v",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "0NMdkeZ2Hx",
                          "cost":  {

                                   },
                          "itemGuid":  "HUGmcCBr9V",
                          "itemName":  "Hug"
                      },
                      {
                          "guid":  "XOKcuqYBRG",
                          "cost":  {

                                   },
                          "itemGuid":  "7ygaxVUmTQ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rX9fOUx5ws",
                          "cost":  {

                                   },
                          "itemGuid":  "gDGKJGZyxB",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "NWL6gQ70GI",
                          "cost":  {

                                   },
                          "itemGuid":  "FeoKFHiu3V",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "EXpaa_f_dl",
                          "cost":  {

                                   },
                          "itemGuid":  "H2o2kLXB1t",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "3m-H14O9J9",
                          "cost":  {

                                   },
                          "itemGuid":  "4cAnXifY1a",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "9Wl9kwxoFk",
        "name":  "Lively Navigator",
        "type":  "Season",
        "season":  "Season of Flight",
        "seasonOrderIndex":  1,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9a/Flight-Spirit-Lively-Navigator.png",
        "treeGuid":  "8XT3GDeonb",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "C04G6KylaW",
                          "cost":  {

                                   },
                          "itemGuid":  "mugeVvl6Vc",
                          "itemName":  "Navigate"
                      },
                      {
                          "guid":  "fzoVHZjkGH",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "-UA09DYaKh",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "U4Y6tO1WK9",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "DeouBCkpib",
                          "itemName":  "Lively Navigator Hair Accessory"
                      },
                      {
                          "guid":  "qQUzLeVX3E",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "kkRo6gnuo9",
                          "itemName":  "Navigate"
                      },
                      {
                          "guid":  "vT9GL0PvY9",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "zB6NpyvK6q",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "DqLTBlmwI8",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "ygAEEh8bZ5",
                          "itemName":  "Everything Around Us"
                      },
                      {
                          "guid":  "Vj9DhauQwu",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "aiuFUiqZnB",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "GBslC4E8wD",
                          "cost":  {

                                   },
                          "itemGuid":  "qDekV1a6yP",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "dCZKp8jzMY",
                          "cost":  {

                                   },
                          "itemGuid":  "UjA8CZwZ9i",
                          "itemName":  "Lively Navigator Cape"
                      },
                      {
                          "guid":  "Sn2IA2SFk4",
                          "cost":  {

                                   },
                          "itemGuid":  "VC9yqYv8O9",
                          "itemName":  "Navigate"
                      },
                      {
                          "guid":  "JxydMFtc5M",
                          "cost":  {

                                   },
                          "itemGuid":  "cOMtRe-wEZ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "wFSqFnjmNd",
                          "cost":  {

                                   },
                          "itemGuid":  "QiLz0mb3x4",
                          "itemName":  "Lively Navigator Hair"
                      },
                      {
                          "guid":  "DqCHV7GmZe",
                          "cost":  {

                                   },
                          "itemGuid":  "H6h0oeRVom",
                          "itemName":  "Navigate"
                      }
                  ],
        "nameJa":  "快活な誘導手"
    },
    {
        "guid":  "VQadeqBPEO",
        "name":  "Light Whisperer",
        "type":  "Season",
        "season":  "Season of Flight",
        "seasonOrderIndex":  2,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/db/Flight-Spirit-Light-Whisperer.png",
        "treeGuid":  "DHbvqLtLCU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "zI5GRFCBhX",
                          "cost":  {

                                   },
                          "itemGuid":  "YiLDQF0uDU",
                          "itemName":  "Baby Manta Call"
                      },
                      {
                          "guid":  "Ca5GmG1gRO",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "Ld2u4cjPes",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "a97pF-R6P4",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "k_dtQhg8Ii",
                          "itemName":  "Light Whisperer Hair"
                      },
                      {
                          "guid":  "NjMaGUmUkT",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "5D_d1xwmfQ",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "PVA3IKW-Ht",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "Y7j3ljNdYp",
                          "itemName":  "Light Whisperer Outfit"
                      },
                      {
                          "guid":  "TAOZsz5xmL",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "CJLgEjb1TE",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "7_vYFsPIdA",
                          "cost":  {

                                   },
                          "itemGuid":  "LPkTfhyyNP",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "W-of53JJ4N",
                          "cost":  {

                                   },
                          "itemGuid":  "1IwU-ZZu1g",
                          "itemName":  "Light Whisperer Cape"
                      },
                      {
                          "guid":  "sWWWTAsjSI",
                          "cost":  {

                                   },
                          "itemGuid":  "T_syKqfzht",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "F5xibdFbUx",
                          "cost":  {

                                   },
                          "itemGuid":  "Dt5aDX9Osc",
                          "itemName":  "Light Whisperer Hat"
                      }
                  ],
        "nameJa":  "光の語り部"
    },
    {
        "guid":  "_7-rIO21Ea",
        "name":  "Tinkering Chimesmith",
        "type":  "Season",
        "season":  "Season of Flight",
        "seasonOrderIndex":  3,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/51/Flight-Spirit-Tinkering-Chimesmith.png",
        "treeGuid":  "66idlQe3mK",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "wcUvdoaglf",
                          "cost":  {

                                   },
                          "itemGuid":  "Jgp0s63dVZ",
                          "itemName":  "Tinker Stance"
                      },
                      {
                          "guid":  "8YT3kpt0_o",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "DquDtwH3Jy",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "tNdpB4sYP6",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "dkLuIrNJyl",
                          "itemName":  "Tinkering Chimesmith Hair Accessory"
                      },
                      {
                          "guid":  "Wc3l175uTU",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "EaKDVLQYcH",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "fuDY_v2LTA",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "ARYCvmatxR",
                          "itemName":  "Tinkering Chimesmith Hair"
                      },
                      {
                          "guid":  "jTzKe4ceZY",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "NhS59J9jxl",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "fT3Wh5Qyc7",
                          "cost":  {

                                   },
                          "itemGuid":  "mL4hbLcaT_",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "3nGh3vjL0d",
                          "cost":  {

                                   },
                          "itemGuid":  "t3hOiGsS79",
                          "itemName":  "Kalimba"
                      },
                      {
                          "guid":  "xpwmZwCyL2",
                          "cost":  {

                                   },
                          "itemGuid":  "S4y9T9zWU1",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "IRJY2laZdP",
                          "cost":  {

                                   },
                          "itemGuid":  "5Z5JqDkAtl",
                          "itemName":  "Tinkering Chimesmith Outfit"
                      }
                  ],
        "nameJa":  "工夫好きの風鈴職人"
    },
    {
        "guid":  "hovmkrquOR",
        "name":  "Talented Builder",
        "type":  "Season",
        "season":  "Season of Flight",
        "seasonOrderIndex":  4,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ac/Flight-Spirit-Talented-Builder.png",
        "treeGuid":  "4Zj4C2RUj1",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "et9DvsI31i",
                          "cost":  {

                                   },
                          "itemGuid":  "b_qHNPnLGc",
                          "itemName":  "Voilﾃ"
                      },
                      {
                          "guid":  "GF20e2yheu",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "x-oGRq6rNu",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Ir4ybgGnol",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "RcLkR7XRbn",
                          "itemName":  "Talented Builder Neckpiece"
                      },
                      {
                          "guid":  "nI80jh5ze6",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "AlBQo1ngBi",
                          "itemName":  "Voilﾃ"
                      },
                      {
                          "guid":  "BN7VKDpf5J",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "W8zu7vGKUU",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "1T613tldvB",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "cZfBtj_CYb",
                          "itemName":  "Talented Builder Hair"
                      },
                      {
                          "guid":  "PTe9XdknuO",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "LZEuZ8aSr1",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "_CF_coi6UC",
                          "cost":  {

                                   },
                          "itemGuid":  "_2q2mdk_1h",
                          "itemName":  "Color Trail"
                      },
                      {
                          "guid":  "XvkJinBEZi",
                          "cost":  {

                                   },
                          "itemGuid":  "g-vZeE8cmg",
                          "itemName":  "Talented Builder Outfit"
                      },
                      {
                          "guid":  "9df-JFKZ1O",
                          "cost":  {

                                   },
                          "itemGuid":  "0bY0v6h4ci",
                          "itemName":  "Voilﾃ"
                      },
                      {
                          "guid":  "YUWotnJRgW",
                          "cost":  {

                                   },
                          "itemGuid":  "YPTs9XT_4y",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "erLWe3NZhv",
                          "cost":  {

                                   },
                          "itemGuid":  "sTi8F25qWL",
                          "itemName":  "Flying Among the Stars"
                      },
                      {
                          "guid":  "B4KRSbRDO7",
                          "cost":  {

                                   },
                          "itemGuid":  "zRFUMdaCAK",
                          "itemName":  "Voilﾃ"
                      }
                  ],
        "nameJa":  "腕利きの工匠"
    },
    {
        "guid":  "jM6IlC8yk8",
        "name":  "Gratitude Guide",
        "type":  "Guide",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  0,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/82/Gratitude-Guide-Spirit.png",
        "treeGuid":  "e_dcWfqWdl",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "jav8BsPwoS",
                          "cost":  {

                                   },
                          "itemGuid":  "-InWbdW4EP",
                          "itemName":  "Gratitude Ultimate Pendant"
                      },
                      {
                          "guid":  "UlZx8WcHeb",
                          "cost":  {

                                   },
                          "itemGuid":  "kHq2VDev2Y",
                          "itemName":  "Gratitude Ultimate Deer Mask"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "0yGgX4Yk3c",
        "name":  "Sassy Drifter",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  1,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5d/Gratitude-Spirit-Sassy-Drifter.png",
        "treeGuid":  "emS7DU5ndh",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  5,
        "nodes":  [
                      {
                          "guid":  "v8X3R8lQih",
                          "cost":  {

                                   },
                          "itemGuid":  "SadZcfujh7",
                          "itemName":  "Sassy Stance"
                      },
                      {
                          "guid":  "uRmcplmzik",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "VIQ3DJwLpu",
                          "itemName":  "Sassy Drifter Hair"
                      },
                      {
                          "guid":  "P_oUy4RHzb",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "Bo8Xc6gcCn",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "juCGyjvHdK",
                          "cost":  {

                                   },
                          "itemGuid":  "xROh6OVPnJ",
                          "itemName":  "Sassy Drifter Mask"
                      },
                      {
                          "guid":  "lVYQ_MKTtd",
                          "cost":  {

                                   },
                          "itemGuid":  "ifJ-lyNM8J",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "おませな漂流者"
    },
    {
        "guid":  "Q-N8n-0b8O",
        "name":  "Stretching Guru",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  2,
        "area":  "Prairie Cave",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/46/Gratitude-Spirit-Stretching-Guru.png",
        "treeGuid":  "s4j4vrnNCR",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "jlY1bt_XXs",
                          "cost":  {

                                   },
                          "itemGuid":  "bXiNLPtQyh",
                          "itemName":  "Yoga"
                      },
                      {
                          "guid":  "jxeHcPYjY0",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "L5rpNhBlkt",
                          "itemName":  "Stretching Guru Hair"
                      },
                      {
                          "guid":  "99OwzHVdWh",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "j6B0Gx5Bra",
                          "itemName":  "Yoga"
                      },
                      {
                          "guid":  "dC_YiXQfL7",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "mhaC8geOXk",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "B-xElanoJo",
                          "cost":  {

                                   },
                          "itemGuid":  "k9UvQv3vi0",
                          "itemName":  "Stretching Guru Cape"
                      },
                      {
                          "guid":  "o2aN4CcJdc",
                          "cost":  {

                                   },
                          "itemGuid":  "JuLs_5VIyb",
                          "itemName":  "Yoga"
                      },
                      {
                          "guid":  "-pGSJXDwp4",
                          "cost":  {

                                   },
                          "itemGuid":  "FK3tNWjyTF",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ae_loq-a2P",
                          "cost":  {

                                   },
                          "itemGuid":  "hFbdz8Wvye",
                          "itemName":  "Yoga"
                      }
                  ],
        "nameJa":  "屈伸する導師"
    },
    {
        "guid":  "lmydkMDQeP",
        "name":  "Provoking Performer",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  3,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/25/Gratitude-Spirit-Provoking-Performer.png",
        "treeGuid":  "KcxP_uWRx_",
        "treeSource":  "revisit",
        "revisitDate":  "2023-04-13",
        "revisitName":  "TS Error",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "O8QA3nIMbC",
                          "cost":  {

                                   },
                          "itemGuid":  "YnKXRCy5y9",
                          "itemName":  "Kabuki"
                      },
                      {
                          "guid":  "vRo8L9GdZ_",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Yg9fTjQQAK",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "5x6WqBXVIf",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SEpK8eiz2W",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "RcxHMJcuAK",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "Foy_7SpHIY",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "nuNlzT_sDu",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "oTQGUs9w8K",
                          "itemName":  "Kabuki"
                      },
                      {
                          "guid":  "qJF6NgROpf",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "usBrZiK7JN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "a2oeDGD78w",
                          "cost":  {
                                       "c":  34
                                   },
                          "itemGuid":  "HzMNk4W-bM",
                          "itemName":  "Provoking Performer Hair"
                      },
                      {
                          "guid":  "wPDLW-eV1K",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "wSjNwu664c",
                          "itemName":  "Provoking Performer Mask"
                      },
                      {
                          "guid":  "wSusMbjv5A",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "znqKbunN1C",
                          "itemName":  "Kabuki"
                      },
                      {
                          "guid":  "sOnWNvfLdO",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "kWs-MLO3ZE",
                          "itemName":  "Wide Stance"
                      },
                      {
                          "guid":  "rgiQqZO6aU",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "LPnwWeKlf0",
                          "itemName":  "Kabuki"
                      }
                  ],
        "nameJa":  "挑戦的な表現者"
    },
    {
        "guid":  "JROKFatVLC",
        "name":  "Leaping Dancer",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  4,
        "area":  "Frozen Lake",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ae/Gratitude-Spirit-Leaping-Dancer.png",
        "treeGuid":  "cCYK6HibTp",
        "treeSource":  "revisit",
        "revisitDate":  "2023-07-03",
        "revisitName":  "Special Visit #3",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "UMIJMK6KSN",
                          "cost":  {

                                   },
                          "itemGuid":  "2EjYbZlJwr",
                          "itemName":  "Leap"
                      },
                      {
                          "guid":  "xXlRRtVGcA",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "g5MvmNr1oa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "InMyCGaRqj",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "gMt6VYu2uG",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ra1NSznMhv",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "6AIXGyi9jl",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "QP3T0EO4pV",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "QVo-MuF4gw",
                          "itemName":  "Leap"
                      },
                      {
                          "guid":  "JuntDWw171",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "upDiBXJC_V",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "UAgz76Y_gL",
                          "cost":  {
                                       "c":  54
                                   },
                          "itemGuid":  "RX-66s3KFD",
                          "itemName":  "Leaping Dancer Mask"
                      },
                      {
                          "guid":  "1R20RgAdO1",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "Q4z_OukNlE",
                          "itemName":  "Leap"
                      },
                      {
                          "guid":  "CckgWQWh6g",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "eL5WjOsMrx",
                          "itemName":  "Small Bell"
                      },
                      {
                          "guid":  "GZf2kQJvkU",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "Q5LhJRWFiF",
                          "itemName":  "Leap"
                      }
                  ],
        "nameJa":  "飛び跳ねる舞踏家"
    },
    {
        "guid":  "eToUA1mSjz",
        "name":  "Saluting Protector",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  5,
        "area":  "The Graveyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/82/Gratitude-Spirit-Saluting-Protector.png",
        "treeGuid":  "m25FwXu6kO",
        "treeSource":  "revisit",
        "revisitDate":  "2024-12-09",
        "revisitName":  "Saluting Protector Revisit",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "3PnrLNCFyL",
                          "cost":  {

                                   },
                          "itemGuid":  "zRlUm_oL2p",
                          "itemName":  "Acknowledge"
                      },
                      {
                          "guid":  "57DfqdDRwz",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7Jr0a40jVD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "JQE_RyU6E1",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "ffOE0uszzI",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "5ff-iI3fLx",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "ou4hoCwWmt",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "RICiCVL-3k",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "dor3unMei7",
                          "itemName":  "Acknowledge"
                      },
                      {
                          "guid":  "nNQ1XJmGVS",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "QTfwfRnYwz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YweEy7UaxW",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "XOhMscNvdq",
                          "itemName":  "Saluting Protector Mask"
                      },
                      {
                          "guid":  "giFFloPSVX",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "7WktQVTwtR",
                          "itemName":  "Saluting Protector Cape"
                      },
                      {
                          "guid":  "v1kj3DLt2x",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "K82EgKZAwe",
                          "itemName":  "Acknowledge"
                      },
                      {
                          "guid":  "o6dm1idkZ_",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "_hk1ya3nj0",
                          "itemName":  "Waltzing in the Rain"
                      },
                      {
                          "guid":  "8DwtAb37xO",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "tUzGovgVRK",
                          "itemName":  "Acknowledge"
                      }
                  ],
        "nameJa":  "敬礼する守護者"
    },
    {
        "guid":  "KZaVtTUdlR",
        "name":  "Greeting Shaman",
        "type":  "Season",
        "season":  "Season of Gratitude",
        "seasonOrderIndex":  6,
        "area":  "Upper Vault",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3e/Gratitude-Spirit-Greeting-Shaman.png",
        "treeGuid":  "iznzX-F_eT",
        "treeSource":  "revisit",
        "revisitDate":  "2023-07-03",
        "revisitName":  "Special Visit #3",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "Fxq3bK7lhC",
                          "cost":  {

                                   },
                          "itemGuid":  "NpbuKXMxKS",
                          "itemName":  "Kung Fu"
                      },
                      {
                          "guid":  "U4cbOtklI7",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "2EXRXNdvSH",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "D0RKE9Quh1",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "tCd_6CN6Fb",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "wM81bqkYeL",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "y7P0HNe1o0",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "eO83EnQPZf",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "j3BNKt3Qmi",
                          "itemName":  "Kung Fu"
                      },
                      {
                          "guid":  "kz_Uu8Kf4o",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ThuqWhRFev",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "uASylhVFKH",
                          "cost":  {
                                       "c":  54
                                   },
                          "itemGuid":  "O_E6Y4gBQ8",
                          "itemName":  "Greeting Shaman Mask"
                      },
                      {
                          "guid":  "c-wq0Oxq3h",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "7MpXlundFS",
                          "itemName":  "Kung Fu"
                      },
                      {
                          "guid":  "Gb69eEddzM",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "aFozSzjdTL",
                          "itemName":  "Large Bell"
                      },
                      {
                          "guid":  "AGdnjNIAnM",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "5QWjZVAA-9",
                          "itemName":  "Kung Fu"
                      }
                  ],
        "nameJa":  "礼を尽くす祈祷師"
    },
    {
        "guid":  "XEv6O28-r7",
        "name":  "Lightmending Guide",
        "type":  "Guide",
        "season":  "Season of Lightmending",
        "seasonOrderIndex":  0,
        "area":  "Fractured Lantern Storage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2b/Lightmending-Guide-cutout.png",
        "treeGuid":  "9QWYwAUdDG",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  24,
        "nodes":  [
                      {
                          "guid":  "U65O1DVwDs",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "fas1vCSYhL",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "z3-VIUI_6l",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "f4HdPwg9Sd",
                          "itemName":  "Lightmending Warp"
                      },
                      {
                          "guid":  "2eANYDUQpF",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Oe5QyiRFtk",
                          "itemName":  "Lightmending Ultimate Pendant"
                      },
                      {
                          "guid":  "c1FH1Cn71T",
                          "tier":  0,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "S2CmbF6ZM2",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "Wr3ARpnOvj",
                          "tier":  0,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "RcY1hWSqz-",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "37oFviI-ys",
                          "tier":  0,
                          "row":  1,
                          "col":  2,
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "1ohT-Y7uUe",
                          "itemName":  "Lightmending Ultimate Mask"
                      },
                      {
                          "guid":  "ZvrM10f_vq",
                          "tier":  0,
                          "row":  2,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "ttbcIi-2zb",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "Vx9DUUt-3e",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Vy7ojXH_pW",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "vS2pHP4Ua3",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "rzTxvn-C-L",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ovE247wsyc",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "bR78DxxVAu",
                          "itemName":  "Lightmending Ultimate Hair"
                      },
                      {
                          "guid":  "QC-oaf4MXx",
                          "tier":  1,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "XGQV5cpTVc",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "11r56gZ035",
                          "tier":  1,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "SWbjGomlNC",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "yF8eEYsKeS",
                          "tier":  1,
                          "row":  2,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Q6B2R3Ths0",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "VIgYdV3vgW",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "VQ4KRlmObB",
                          "itemName":  "Quest 7"
                      },
                      {
                          "guid":  "_cofE3qPH8",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "7JfGJ7SciM",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "OC1a3zYwA-",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "16L7u4aZjO",
                          "itemName":  "Lightmending Ultimate Cape"
                      },
                      {
                          "guid":  "FysTz26WFj",
                          "tier":  2,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "XkOsm-SXq0",
                          "itemName":  "Quest 8"
                      },
                      {
                          "guid":  "to7beOrL1r",
                          "tier":  2,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "Z10jNHU46P",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "cC4mDHheXz",
                          "tier":  2,
                          "row":  2,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "iU4SddpHiA",
                          "itemName":  "Quest 9"
                      },
                      {
                          "guid":  "Hs58f9fnK6",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "x3qmX6Ozq8",
                          "itemName":  "Quest 10"
                      },
                      {
                          "guid":  "JwqkysH0p7",
                          "tier":  3,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "sKT8LvMLjD",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "RJbMDvqPFo",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BliLw-6mPb",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "1Tfqmm5UrO",
                          "tier":  3,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "hkAVzHgszc",
                          "itemName":  "Quest 11"
                      },
                      {
                          "guid":  "BO3BGL6OuK",
                          "tier":  3,
                          "row":  2,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "lkBzjfF9uj",
                          "itemName":  "Quest 12"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "la4vZslNOy",
        "name":  "Lightmending Light Scholar",
        "type":  "Season",
        "season":  "Season of Lightmending",
        "seasonOrderIndex":  1,
        "area":  "Fractured Lantern Storage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Lightmending-Light-Scholar-cutout.png",
        "treeGuid":  "rMUUnF9HAB",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "SxWBTQYaZA",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Uy8gfBccKe",
                          "itemName":  "Whispering"
                      },
                      {
                          "guid":  "Vjl-c7o7h6",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "tkrkeFVQUF",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "vcocEogpqJ",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "WMoF7T9QSV",
                          "itemName":  "Accompany Lightmending Light Scholar"
                      },
                      {
                          "guid":  "CxCWXH199r",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  25
                                   },
                          "itemGuid":  "6kEm2pWNBt",
                          "itemName":  "Lightmending Light Scholar Hairstyle"
                      },
                      {
                          "guid":  "VSYyKQ1JgS",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "JVyiutV_rJ",
                          "itemName":  "Whispering"
                      },
                      {
                          "guid":  "xhgKyOuSsa",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "tvP_BdKeGx",
                          "itemName":  "Whispering"
                      },
                      {
                          "guid":  "FEMmw6bRCU",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "9zaq8aRIES",
                          "itemName":  "Lightmending Light Scholar Cape"
                      },
                      {
                          "guid":  "Mqzp2uplfE",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "17lku63DsW",
                          "itemName":  "Lightmending Light Scholar Mask"
                      },
                      {
                          "guid":  "pDNhApH6kw",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "Ccu24qLkcN",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "c6RMMopRnW",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "hdBoIp8DSt",
                          "itemName":  "Whispering"
                      },
                      {
                          "guid":  "x5PPWU-Ptm",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "1FsEawa0kl",
                          "itemName":  "Lightmending Light Scholar Outfit"
                      },
                      {
                          "guid":  "jF-1nYFfnq",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "1-7EMYtTlW",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "光修繕する優勝者"
    },
    {
        "guid":  "haE7sC8lPX",
        "name":  "Lightmending Light Catcher",
        "type":  "Season",
        "season":  "Season of Lightmending",
        "seasonOrderIndex":  2,
        "area":  "Fractured Lantern Storage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/03/Lightmending-Light-Catcher-cutout.png",
        "treeGuid":  "ZSQVVHlhVX",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "CxaO3OjkhV",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "ioqUMksYlE",
                          "itemName":  "Secret Handshake"
                      },
                      {
                          "guid":  "n7ajf0aV_S",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  19
                                   },
                          "itemGuid":  "-Qs-NBvxNL",
                          "itemName":  "Lightmending Light Catcher Mask"
                      },
                      {
                          "guid":  "_XkkIGPI_n",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "wV8vOnvC_1",
                          "itemName":  "Accompany Lightmending Light Catcher"
                      },
                      {
                          "guid":  "Zw9odKbWoW",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "TNWOWM1mwM",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "De-CsBD7tU",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "ls4f2BZMa1",
                          "itemName":  "Secret Handshake"
                      },
                      {
                          "guid":  "U9VxMLet4v",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "aTjwu2WW5P",
                          "itemName":  "Secret Handshake"
                      },
                      {
                          "guid":  "aYbFbqvxUf",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  11
                                   },
                          "itemGuid":  "HH4YxuAsDU",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "aUTR1YtObd",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "i4svkDR_tC",
                          "itemName":  "Lightmending Light Catcher Hat"
                      },
                      {
                          "guid":  "_SnOSC80f-",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  38
                                   },
                          "itemGuid":  "zh7hpIVWaU",
                          "itemName":  "Lightmending Light Catcher Cape"
                      },
                      {
                          "guid":  "0EpjMB6B5v",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "1FdKshQoK5",
                          "itemName":  "Secret Handshake"
                      },
                      {
                          "guid":  "mdU1qA2K1q",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "lwpJUPEbaC",
                          "itemName":  "Lightmending Light Catcher Flute"
                      },
                      {
                          "guid":  "TxY1sZJlh1",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "97Ki9O26NJ",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "光修繕する光採取者"
    },
    {
        "guid":  "xbjjYxXUsV",
        "name":  "Lightmending Champion",
        "type":  "Season",
        "season":  "Season of Lightmending",
        "seasonOrderIndex":  3,
        "area":  "Fractured Lantern Storage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/eb/Lightmending-Champion-cutout.png",
        "treeGuid":  "lSXt9gZtGb",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "umtNWkzISP",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "7Vk8riRhAG",
                          "itemName":  "Revolving Dance"
                      },
                      {
                          "guid":  "unuoUv0VV3",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "KE9pnFJUvM",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "MTFbDRaoMZ",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "EAYD6hc9nz",
                          "itemName":  "Accompany Lightmending Champion"
                      },
                      {
                          "guid":  "IaDl81rBBx",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  25
                                   },
                          "itemGuid":  "_5pq4lv01o",
                          "itemName":  "Lightmending Champion Mask"
                      },
                      {
                          "guid":  "BuHQ-GU6kk",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "7NlSfQ2Kee",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "_xef3C6ePG",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "qo1qe-9isU",
                          "itemName":  "Revolving Dance"
                      },
                      {
                          "guid":  "V5BuZfqOgq",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "yTVzbInwXw",
                          "itemName":  "Revolving Dance"
                      },
                      {
                          "guid":  "cFoFHoAQKq",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  9
                                   },
                          "itemGuid":  "bDIRHtqkEs",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "-lxl5ajMvn",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "4sh2mjgwwA",
                          "itemName":  "Lightmending Champion Head Accessory"
                      },
                      {
                          "guid":  "CHDzkfCDKD",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  15
                                   },
                          "itemGuid":  "o2-Rc1G4qV",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "djHpd5YJyY",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "EFu-yq3gzB",
                          "itemName":  "Revolving Dance"
                      },
                      {
                          "guid":  "Fgi9qitlWA",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "1JSMUuGg_s",
                          "itemName":  "Lightmending Champion Outfit"
                      },
                      {
                          "guid":  "6ID-ExeP7-",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "1hESI5NwEc",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "光修繕する光学者"
    },
    {
        "guid":  "a4cDauac0X",
        "name":  "Lightmending Pioneer",
        "type":  "Season",
        "season":  "Season of Lightmending",
        "seasonOrderIndex":  4,
        "area":  "Fractured Lantern Storage",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/70/Lightmending-Pioneer-cutout.png",
        "treeGuid":  "QOhdakPpfv",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "Q6DtaMcNaz",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "rfAkXMwR1X",
                          "itemName":  "Cute Clap"
                      },
                      {
                          "guid":  "UJADhQXd7g",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "KCCTtBFD4U",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "0Z7QmSuUi6",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "vcQEfxS3Us",
                          "itemName":  "Accompany Lightmending Pioneer"
                      },
                      {
                          "guid":  "T17pBR0Skq",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "xb0esZuVtG",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "07-pst62Dj",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Z1H-F3x-BN",
                          "itemName":  "Cute Clap"
                      },
                      {
                          "guid":  "p52_wLIKYr",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "715sJByLub",
                          "itemName":  "Cute Clap"
                      },
                      {
                          "guid":  "YJ9gjrTo37",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "OkF8hPi0dS",
                          "itemName":  "Lightmending Pioneer Hair"
                      },
                      {
                          "guid":  "xc5I8s8ChU",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "4hyAA18D5F",
                          "itemName":  "Lightmending Pioneer Mask"
                      },
                      {
                          "guid":  "W3Qeflp8bq",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  15
                                   },
                          "itemGuid":  "ew9fZCbrde",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "gLAPuhFmHA",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "GZ7Uz2eOCO",
                          "itemName":  "Cute Clap"
                      },
                      {
                          "guid":  "Zm-WHQKxek",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "YUWfHisXjv",
                          "itemName":  "Lightmending Pioneer Outfit"
                      },
                      {
                          "guid":  "5Yz9Apj9fH",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "_yA0yWVjD3",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "光修繕する開拓者"
    },
    {
        "guid":  "UNKzFTE5mB",
        "name":  "Lightseekers Guide",
        "type":  "Guide",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  0,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d8/Lightseekers-Guide-Spirit.png",
        "treeGuid":  "RDhnSDRp_-",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  2,
        "nodes":  [
                      {
                          "guid":  "ow2YTE45OX",
                          "cost":  {

                                   },
                          "itemGuid":  "jYGGefMrlS",
                          "itemName":  "Lightseekers Ultimate Pendant"
                      },
                      {
                          "guid":  "j32mxvIF5N",
                          "cost":  {

                                   },
                          "itemGuid":  "2o3CEU9QhM",
                          "itemName":  "Lightseekers Ultimate Umbrella"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "U9RJMJseUK",
        "name":  "Piggyback Lightseeker",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  1,
        "area":  "Dawn Circle",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a7/Lightseeker-Spirit-Piggyback-Lightseeker.png",
        "treeGuid":  "tKkz-7Fmh_",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "iLwPqKU2ea",
                          "cost":  {

                                   },
                          "itemGuid":  "G9wVSFG6I_",
                          "itemName":  "Piggyback"
                      },
                      {
                          "guid":  "ODxxK4SEMI",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "lw79vLwEkP",
                          "itemName":  "Piggyback Lightseeker Mask"
                      },
                      {
                          "guid":  "H2KT4ezyaV",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "oEMhNzGfdl",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "GHGdC8qLGb",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "BGoYhVYvBZ",
                          "itemName":  "Piggyback Lightseeker Hair"
                      },
                      {
                          "guid":  "a-Rcd9zYIa",
                          "cost":  {

                                   },
                          "itemGuid":  "ILUnt_OrWQ",
                          "itemName":  "Piggyback Lightseeker Cape"
                      },
                      {
                          "guid":  "4nOaj4wXLo",
                          "cost":  {

                                   },
                          "itemGuid":  "HtVnkK980q",
                          "itemName":  "Piggyback"
                      },
                      {
                          "guid":  "3TCw5D287c",
                          "cost":  {

                                   },
                          "itemGuid":  "2jrLzRaf6h",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "おんぶする光探求者"
    },
    {
        "guid":  "jncJKA4IaM",
        "name":  "Doublefive Light Catcher",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  2,
        "area":  "Bird Nest",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/97/Lightseekers-Spirit-Doublefive-Light-Catcher.png",
        "treeGuid":  "DCA--qiCxD",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  7,
        "nodes":  [
                      {
                          "guid":  "wwxSGrYetC",
                          "cost":  {

                                   },
                          "itemGuid":  "9sYCtuZch3",
                          "itemName":  "Double-Five"
                      },
                      {
                          "guid":  "pdmmr3uAZM",
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "GbSWbAV_W1",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "HhBEMNXe1v",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "lz89xViG6m",
                          "itemName":  "Doublefive Light Catcher Mask"
                      },
                      {
                          "guid":  "jno7YwR3Sv",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "YgxtYX7GjD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "LevfRC1zCw",
                          "cost":  {

                                   },
                          "itemGuid":  "qR79V6fLUy",
                          "itemName":  "Flute"
                      },
                      {
                          "guid":  "i4oGY7F9EU",
                          "cost":  {

                                   },
                          "itemGuid":  "nfeBnolyEY",
                          "itemName":  "Double-Five"
                      },
                      {
                          "guid":  "t8utQHFcst",
                          "cost":  {

                                   },
                          "itemGuid":  "Ur7gRzB_VK",
                          "itemName":  "Doublefive Light Catcher Hair"
                      }
                  ],
        "nameJa":  "ダブルタッチの光採取者"
    },
    {
        "guid":  "8OYabqG_jZ",
        "name":  "Laidback Pioneer",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  3,
        "area":  "Forest Brook",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a6/Lightseekers-Spirit-Laidback-Pioneer.png",
        "treeGuid":  "ry-1r9mcwO",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "u7doiPY1Nv",
                          "cost":  {

                                   },
                          "itemGuid":  "_o__3iD1Rh",
                          "itemName":  "Laidback Stance"
                      },
                      {
                          "guid":  "qbwqKq15oV",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "rj8Dzz64e9",
                          "itemName":  "Laidback Pioneer Mask"
                      },
                      {
                          "guid":  "o8k897IQsj",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "fg5RXP9p-W",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "AU0hKry2ME",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "qPAqxHGUVI",
                          "itemName":  "Laidback Pioneer Hair"
                      },
                      {
                          "guid":  "r6QD5RumHE",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "Sf9uzy0A0A",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "zexdTt2N8r",
                          "cost":  {

                                   },
                          "itemGuid":  "Hi8NBjG271",
                          "itemName":  "Laidback Pioneer Umbrella"
                      },
                      {
                          "guid":  "i2QDdsrsI6",
                          "cost":  {

                                   },
                          "itemGuid":  "7CHTap5JN4",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "8dPZ0u7pXp",
                          "cost":  {

                                   },
                          "itemGuid":  "4sdZPgk41b",
                          "itemName":  "Finding the Horizon"
                      },
                      {
                          "guid":  "yRIX_sORv7",
                          "cost":  {

                                   },
                          "itemGuid":  "_HKt5SUf0w",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "くつろぐ開拓者"
    },
    {
        "guid":  "bHCSyFQ4u-",
        "name":  "Twirling Champion",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  4,
        "area":  "Frozen Lake",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/de/Lightseekers-Spirit-Twirling-Champion.png",
        "treeGuid":  "9lQ4T3H65f",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "-4dScFEOsV",
                          "cost":  {

                                   },
                          "itemGuid":  "tmhe-C2cN3",
                          "itemName":  "Triple Axel"
                      },
                      {
                          "guid":  "ncgdVwfIBO",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "10pNNxAeD8",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "lwVLl4fDUt",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "zhwG9yJ2mi",
                          "itemName":  "Triple Axel"
                      },
                      {
                          "guid":  "xuf6lUuTxt",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "EjjybJGcTN",
                          "itemName":  "Twirling Champion Hair"
                      },
                      {
                          "guid":  "npnC0-80iL",
                          "cost":  {

                                   },
                          "itemGuid":  "PIRW3pt_BE",
                          "itemName":  "Panflute"
                      },
                      {
                          "guid":  "PxCXBb4yoO",
                          "cost":  {

                                   },
                          "itemGuid":  "touhpuoYRG",
                          "itemName":  "Triple Axel"
                      },
                      {
                          "guid":  "l2sFHiW3q9",
                          "cost":  {

                                   },
                          "itemGuid":  "0L89TCDEtN",
                          "itemName":  "Twirling Champion Mask"
                      },
                      {
                          "guid":  "9s0p-kQWkH",
                          "cost":  {

                                   },
                          "itemGuid":  "zjAeiE3x_t",
                          "itemName":  "Triple Axel"
                      }
                  ],
        "nameJa":  "くるりと舞う優勝者"
    },
    {
        "guid":  "tZG5hNcINX",
        "name":  "Crab Whisperer",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  5,
        "area":  "Crab Fields",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/10/Lightseekers-Spirit-Crab-Whisperer.png",
        "treeGuid":  "Iej9LFKqlb",
        "treeSource":  "revisit",
        "revisitDate":  "2023-08-07",
        "revisitName":  "Special Visit #4",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "CQcGqx0roE",
                          "cost":  {

                                   },
                          "itemGuid":  "ySbxSrn-4l",
                          "itemName":  "Crab Call"
                      },
                      {
                          "guid":  "ZeVymI00bm",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Whp-r1yq-s",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "dHOrJZGcRM",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "t70cADZFZh",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "xvL9PAoS7-",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "FE2ZZ9OIVd",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "7S5FM7MHMo",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "wcb5UMzT9u",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "hRBe1Dmnid",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "A3jFFEXAKu",
                          "itemName":  "Crab Whisperer Hair"
                      },
                      {
                          "guid":  "emHZ95wPIY",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "dotE5ejKYP",
                          "itemName":  "Crab Whisperer Cape"
                      },
                      {
                          "guid":  "twMublSOWO",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "NqdFQpeUSh",
                          "itemName":  "Relaxed Steps"
                      },
                      {
                          "guid":  "ZK5ugPf4U-",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "wTgGX3U9yp",
                          "itemName":  "Crab Whisperer Mask"
                      },
                      {
                          "guid":  "cOvaodKirb",
                          "cost":  {
                                       "c":  20
                                   },
                          "itemGuid":  "ApWt6AdQ8O",
                          "itemName":  "Crab Whisperer Prop"
                      }
                  ],
        "nameJa":  "蟹の語り部"
    },
    {
        "guid":  "mZZ-MkZJ1x",
        "name":  "Shushing Light Scholar",
        "type":  "Season",
        "season":  "Season of Lightseekers",
        "seasonOrderIndex":  6,
        "area":  "Upper Vault",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a0/Lightseekers-Spirit-Shushing-Light-Scholar.png",
        "treeGuid":  "hHNCjL8SHU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "TzQj7y6KIj",
                          "cost":  {

                                   },
                          "itemGuid":  "Bnrptwn3vv",
                          "itemName":  "Shush"
                      },
                      {
                          "guid":  "GZAvBUR0HX",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "zHdPCsbdpI",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "aeZIMSf0jW",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "kYxJuHr1mX",
                          "itemName":  "Shush"
                      },
                      {
                          "guid":  "RLPg0L8Q_h",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "03HWIT9WGG",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "cq8b2YySb0",
                          "cost":  {

                                   },
                          "itemGuid":  "bj5HUEsP0R",
                          "itemName":  "Shushing Light Scholar Cape"
                      },
                      {
                          "guid":  "CDdxR-RssN",
                          "cost":  {

                                   },
                          "itemGuid":  "MtnosL0i54",
                          "itemName":  "Shush"
                      },
                      {
                          "guid":  "e33WYNczNB",
                          "cost":  {

                                   },
                          "itemGuid":  "rGAnOKoXlu",
                          "itemName":  "Shushing Light Scholar Mask"
                      },
                      {
                          "guid":  "_1FnPUPjlW",
                          "cost":  {

                                   },
                          "itemGuid":  "TqyXKGohBg",
                          "itemName":  "Shush"
                      }
                  ],
        "nameJa":  "静けさを望む光学者"
    },
    {
        "guid":  "rpBWF2PFJc",
        "name":  "Migration Guide",
        "type":  "Guide",
        "season":  "Season of Migration",
        "seasonOrderIndex":  0,
        "area":  "Dawn Circle",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/91/Migration-Ultimate-Guide.png",
        "treeGuid":  "IVb8WCKt8D",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  23,
        "nodes":  [
                      {
                          "guid":  "RTje2sQbDf",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Q5L4uyGTZh",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "BvZNonEg4z",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "yArVcGtuj9",
                          "itemName":  "Migration Warp"
                      },
                      {
                          "guid":  "iB3vN3wulM",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "TkfP81iPy9",
                          "itemName":  "Migration Ultimate Pendant"
                      },
                      {
                          "guid":  "DEjV0YzK4j",
                          "tier":  0,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "7TtaA7y6DH",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "dCtodX8-2C",
                          "tier":  0,
                          "row":  1,
                          "col":  2,
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "Aiozp3MLPb",
                          "itemName":  "Migration Ultimate Shoes"
                      },
                      {
                          "guid":  "eoqXwyNVfY",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "muha_qJwpZ",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "tzI9RG4290",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "0f_K0ZZDvt",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Fj6_fYi-LK",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "0hpLNK4u9L",
                          "itemName":  "Migration Ultimate Outfit"
                      },
                      {
                          "guid":  "zoNkAU2lUv",
                          "tier":  1,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "eO59rVUk-J",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "NQLhGo3wVU",
                          "tier":  1,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "QGqFI8P5eX",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "YzAC-ypl-5",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "PBQEP0GsKM",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "CVZOVQxIn7",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "ylO_HPX6oM",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "KIcUmxzswP",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "byDLLv3Ryz",
                          "itemName":  "Migration Ultimate Face Accessory"
                      },
                      {
                          "guid":  "iBoxpERjGF",
                          "tier":  2,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "GKZJHzSWqc",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "0hGiGPNCzb",
                          "tier":  2,
                          "row":  1,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "Q7fEICa0-8",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "oGvTrwgIck",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "-6HGDtS9Ax",
                          "itemName":  "Quest 7"
                      },
                      {
                          "guid":  "8kcD2KTQ_x",
                          "tier":  3,
                          "row":  0,
                          "col":  1,
                          "cost":  {

                                   },
                          "itemGuid":  "52qGpxeSzO",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "L1I8Uo47XP",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "HuPhXSOb0L",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "dKE6PlUw3l",
                          "tier":  3,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "cBfZD5uyzo",
                          "itemName":  "Quest 8"
                      },
                      {
                          "guid":  "hVb_kmCJlq",
                          "tier":  4,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "KLxRF7Uwxs",
                          "itemName":  "Quest 9"
                      },
                      {
                          "guid":  "PnhaGyOV4F",
                          "tier":  4,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "c":  32
                                   },
                          "itemGuid":  "zL1iKh03F8",
                          "itemName":  "Migration Bell"
                      },
                      {
                          "guid":  "aLhY8eo_Vs",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "hpYRRuKPrf",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Uppf-aDVeo",
                          "tier":  4,
                          "row":  1,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "wpZqxTG5l7",
                          "itemName":  "Quest 10"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "1mYa5Pnpdy",
        "name":  "Migrating Jelly Whisperer",
        "type":  "Season",
        "season":  "Season of Migration",
        "seasonOrderIndex":  2,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a1/Migrating-Jelly-Whisperer-Spirit-cutout.png",
        "treeGuid":  "zK7AFf0rvZ",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "oMjOf1Mc8_",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "RoTa6R2sVl",
                          "itemName":  "Jellyfish Dance"
                      },
                      {
                          "guid":  "3eKQmuhjHr",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  2
                                   },
                          "itemGuid":  "ePRlu9HXLu",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Yb629TpOI1",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "9B2QPPWn48",
                          "itemName":  "Accompany Migrating Jelly Whisperer"
                      },
                      {
                          "guid":  "UbRuTCQxA0",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "jbkFi27GCr",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YXJDbUUNK7",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "NfVB9t8E46",
                          "itemName":  "Jellyfish Dance"
                      },
                      {
                          "guid":  "D0-HhlXQVj",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "a76PofXOt-",
                          "itemName":  "Jellyfish Dance"
                      },
                      {
                          "guid":  "prk2gfD3pI",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  9
                                   },
                          "itemGuid":  "SXmAuOoegt",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "A2-sM_qlA1",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "PiNwpw_7HR",
                          "itemName":  "Migrating Jelly Whisperer Outfit"
                      },
                      {
                          "guid":  "hFX-kX0TQJ",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "60IqACljyB",
                          "itemName":  "Migrating Jelly Whisperer Hair Accessory"
                      },
                      {
                          "guid":  "QJJYnXGIoF",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Pmp5NUxjVg",
                          "itemName":  "Jellyfish Dance"
                      },
                      {
                          "guid":  "Ja4JZSomlz",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "c_A5qXHVeq",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "K_SYeCX3W-",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "ThmQjMdhvD",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "渡りの鳥の語り部"
    },
    {
        "guid":  "Mxs_zZGt7y",
        "name":  "Migrating Butterfly Charmer",
        "type":  "Season",
        "season":  "Season of Migration",
        "seasonOrderIndex":  3,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/29/Migrating-Butterfly-Charmer-cutout.png",
        "treeGuid":  "nCGzsegB0l",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "aziY0LC_2Q",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "uRExXzt5C4",
                          "itemName":  "Dizzy"
                      },
                      {
                          "guid":  "5OWU4sA_1n",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  2
                                   },
                          "itemGuid":  "wUA5uVkJ__",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4Pg-kqB_aH",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "x3xPMrKzBu",
                          "itemName":  "Accompany Migrating Butterfly Charmer"
                      },
                      {
                          "guid":  "lwPQ7gAAOU",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "KVEiZTYLnG",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "4qclbHTaTx",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "z-RNbMBDuu",
                          "itemName":  "Dizzy"
                      },
                      {
                          "guid":  "m3Ps6zvkmm",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "JIEw1b8ZZ1",
                          "itemName":  "Dizzy"
                      },
                      {
                          "guid":  "CxQ0X3_YSC",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "glsm_bea_c",
                          "itemName":  "Migrating Butterfly Charmer Cape"
                      },
                      {
                          "guid":  "-5DUIlEk9V",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "9VbLqLBC_X",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "QpdG3v9atC",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "_3sgRnI0i7",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "GcoPvsCPKq",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "ZqQODRo_er",
                          "itemName":  "Dizzy"
                      },
                      {
                          "guid":  "eof4oTtioe",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "kM_fSN03wq",
                          "itemName":  "Migrating Butterfly Charmer Hair Accessory"
                      },
                      {
                          "guid":  "p7mcxC2ejL",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "bW4uGzB7Uu",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "渡りのマンタの語り部"
    },
    {
        "guid":  "k9ZI3GoyPE",
        "name":  "Migrating Manta Whisperer",
        "type":  "Season",
        "season":  "Season of Migration",
        "seasonOrderIndex":  4,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/55/Migrating-Manta-Whisperer-Spirit-cutout.png",
        "treeGuid":  "iFANrbgSY4",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "lDZmu7TAjJ",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "lHZxCs2X3p",
                          "itemName":  "Flag Signal"
                      },
                      {
                          "guid":  "6zEZ4XnQla",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  2
                                   },
                          "itemGuid":  "yaUI82cpmr",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ksif42w-zP",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "bw4m8U2dTe",
                          "itemName":  "Accompany Migrating Manta Whisperer"
                      },
                      {
                          "guid":  "F5N6BfQ8Vt",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "fzEiiF2gx4",
                          "itemName":  "Migrating Manta Whisperer Hair"
                      },
                      {
                          "guid":  "yX7mOxGi79",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "1WuIRnVwi5",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "_RC1cOW_sU",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BPBv6QNmnK",
                          "itemName":  "Flag Signal"
                      },
                      {
                          "guid":  "eM6_zetEHz",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "WowA1m9_VQ",
                          "itemName":  "Flag Signal"
                      },
                      {
                          "guid":  "5zWplH6ONw",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "RkJHY2_PTs",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "9Es65fZy3X",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "qK5oNm8O4B",
                          "itemName":  "Migrating Manta Whisperer Cape"
                      },
                      {
                          "guid":  "pcCgTFjnAT",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "BkCQmHjg0e",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "FEPhYDZc2Y",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "Ho1oHraRP5",
                          "itemName":  "Flag Signal"
                      },
                      {
                          "guid":  "UhtERrRxFD",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "3saw4zMTWa",
                          "itemName":  "Migrating Manta Whisperer Outfit"
                      },
                      {
                          "guid":  "QmXPOnc7Bf",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "7X0_ILnnXB",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "渡りの蝶々使い"
    },
    {
        "guid":  "yfmzfJGyRp",
        "name":  "Migrating Bird Whisperer",
        "type":  "Season",
        "season":  "Season of Migration",
        "seasonOrderIndex":  5,
        "area":  "The Wind Paths",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8b/Migrating-Bird-Whisperer-cutout.png",
        "treeGuid":  "nrvSEyff0h",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "mBSlmouHPH",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "vUvY3oklr7",
                          "itemName":  "Flight Run"
                      },
                      {
                          "guid":  "QoePomtpXy",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  2
                                   },
                          "itemGuid":  "1dFl_GXOvt",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "SMkrefKfyG",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "FhKKhjC8HC",
                          "itemName":  "Accompany Migrating Bird Whisperer"
                      },
                      {
                          "guid":  "JoKgBF_y0P",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "Oi3cA1kDeD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "0ODv-zLBsW",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "zJrgWMrIw1",
                          "itemName":  "Flight Run"
                      },
                      {
                          "guid":  "-ybUb0rvGy",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "81VyR8LuBT",
                          "itemName":  "Flight Run"
                      },
                      {
                          "guid":  "vhNqS5iP-D",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "AGF8Zfp24F",
                          "itemName":  "Migrating Bird Whisperer Outfit"
                      },
                      {
                          "guid":  "xjH3yFtpMy",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "DZh78bh-h9",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6yWowFAeUk",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "on83KQWftP",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "82etLMJdIa",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "A1oFXgDvGm",
                          "itemName":  "Flight Run"
                      },
                      {
                          "guid":  "BgNWIscbRy",
                          "tier":  3,
                          "row":  1,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "rSTz8HCcAg",
                          "itemName":  "Migrating Bird Whisperer Cape"
                      },
                      {
                          "guid":  "N9bSJRLzCI",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "LjnBnAj39K",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "渡りの海月の語り部"
    },
    {
        "guid":  "gHhy04B7r9",
        "name":  "Migrating Bellmaker",
        "type":  "Season",
        "season":  "Season of Migration",
        "seasonOrderIndex":  1,
        "area":  "Dawn Circle",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/cf/Migrating-Bellmaker-cutout.png",
        "treeGuid":  "ko9lr8M4J5",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  true,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "W4Pvuf7L0p",
                          "tier":  0,
                          "row":  0,
                          "col":  0,
                          "cost":  {

                                   },
                          "itemGuid":  "Vn86dp1yII",
                          "itemName":  "Lighthorn Call"
                      },
                      {
                          "guid":  "01Z0VpJOzS",
                          "tier":  0,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  17
                                   },
                          "itemGuid":  "T-3x4Ot1p0",
                          "itemName":  "Ancient Echo"
                      },
                      {
                          "guid":  "4qSVqimiOp",
                          "tier":  0,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BmiVDm4IWr",
                          "itemName":  "Accompany Migrating Bellmaker"
                      },
                      {
                          "guid":  "Q_PjArDEcM",
                          "tier":  1,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "E2L4G603B5",
                          "itemName":  "Migrating Bellmaker Hair"
                      },
                      {
                          "guid":  "1YgehwgX_r",
                          "tier":  1,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  4
                                   },
                          "itemGuid":  "RrEof5cXS_",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "QY5GqLmHzN",
                          "tier":  1,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "AUskfqyWwa",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "pPlym1ldzM",
                          "tier":  2,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  9
                                   },
                          "itemGuid":  "EDpruD_p0p",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "VwEYFEcJWy",
                          "tier":  2,
                          "row":  0,
                          "col":  1,
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "eFbcD5p_-H",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ukKRiyF4-t",
                          "tier":  2,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "jopuqsQZnd",
                          "itemName":  "Migrating Bellmaker Face Accessory"
                      },
                      {
                          "guid":  "7DDXkamODs",
                          "tier":  3,
                          "row":  0,
                          "col":  0,
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "oB6F-vf0uz",
                          "itemName":  "Migrating Bellmaker Cape"
                      },
                      {
                          "guid":  "upWO572i_I",
                          "tier":  3,
                          "row":  0,
                          "col":  2,
                          "cost":  {

                                   },
                          "itemGuid":  "BninG33IyE",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "7pD-BSpE63",
                          "tier":  4,
                          "row":  0,
                          "col":  2,
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "MMmJxThIvC",
                          "itemName":  "Season Heart"
                      }
                  ],
        "nameJa":  "渡りの鐘職人"
    },
    {
        "guid":  "PN_V8C4WOq",
        "name":  "Moments Guide",
        "type":  "Guide",
        "season":  "Season of Moments",
        "seasonOrderIndex":  0,
        "area":  "Prairie Peaks",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/94/Moments-Ultimate-Guide.png",
        "treeGuid":  "DFxVkg9lpF",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  17,
        "nodes":  [
                      {
                          "guid":  "bWmPbtc36n",
                          "cost":  {

                                   },
                          "itemGuid":  "K_OhSP_gST",
                          "itemName":  "Camera"
                      },
                      {
                          "guid":  "9tzFO12e02",
                          "cost":  {

                                   },
                          "itemGuid":  "lbckL2aX2B",
                          "itemName":  "Moments Ultimate Pendant"
                      },
                      {
                          "guid":  "VQzAr7Sh76",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "DS5QeApzvs",
                          "itemName":  "Moments Ultimate Glasses"
                      },
                      {
                          "guid":  "b6cfikXL46",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "W-3Nh_yWGv",
                          "itemName":  "Moments Ultimate Camera"
                      },
                      {
                          "guid":  "vRNYKRs1OX",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "nBg1iBLlGM",
                          "itemName":  "Moments Ultimate Hat"
                      },
                      {
                          "guid":  "V0aNfjCk_Z",
                          "cost":  {

                                   },
                          "itemGuid":  "bZLp8uDLBH",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "j5OeUd5fvO",
                          "cost":  {

                                   },
                          "itemGuid":  "tPSfwv25tD",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "cJy75s3bXp",
                          "cost":  {

                                   },
                          "itemGuid":  "BUkqSHBWBP",
                          "itemName":  "High Five"
                      },
                      {
                          "guid":  "3fmFyGystn",
                          "cost":  {

                                   },
                          "itemGuid":  "Bt81wczcyz",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "39DDzF3H2S",
                          "cost":  {

                                   },
                          "itemGuid":  "QYqOsJH08k",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "wmFjqbBVqW",
                          "cost":  {

                                   },
                          "itemGuid":  "RGIkrdzAHQ",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "85-XTpSaCt",
                          "cost":  {

                                   },
                          "itemGuid":  "T_Y0iSIKrS",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "swC3NxwUr7",
                          "cost":  {

                                   },
                          "itemGuid":  "iMrPI958ew",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "-3e20E7A88",
                          "cost":  {

                                   },
                          "itemGuid":  "BIe6DgYn08",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "_hsm5oaadQ",
                          "cost":  {

                                   },
                          "itemGuid":  "XQXq0JUaSV",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "z7PRDaD43u",
                          "cost":  {

                                   },
                          "itemGuid":  "IncDUgOVKU",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "nla9RZusTP",
                          "cost":  {

                                   },
                          "itemGuid":  "PXOxK5ZTiw",
                          "itemName":  "Prairie Caves Warp"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "jh-fGKllmH",
        "name":  "Reassuring Ranger",
        "type":  "Season",
        "season":  "Season of Moments",
        "seasonOrderIndex":  1,
        "area":  "Prairie Peaks",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6b/Moments-Spirit-Reassuring-Ranger.png",
        "treeGuid":  "AfSb4eiW7H",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "9oV5mmsmWT",
                          "cost":  {

                                   },
                          "itemGuid":  "DLJd5rdOFB",
                          "itemName":  "Side Hug"
                      },
                      {
                          "guid":  "0PHcnV_j-G",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "YCHk6Fvi12",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "rWAmz2UQzG",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "3m-6xEWbtg",
                          "itemName":  "Reassuring Ranger Mask"
                      },
                      {
                          "guid":  "tw-Zz-a51Y",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "CvnVKxfWdq",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "LxOQhLgcBg",
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "ldRJqNu7QX",
                          "itemName":  "Reassuring Ranger Hat"
                      },
                      {
                          "guid":  "MIoG47BbGJ",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "GzNoAzbA_0",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "uwHawqWL9a",
                          "cost":  {

                                   },
                          "itemGuid":  "W42gdCa79_",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "O1M-Znedi9",
                          "cost":  {

                                   },
                          "itemGuid":  "JSnhIHtrE5",
                          "itemName":  "Reassuring Ranger Cape"
                      },
                      {
                          "guid":  "FyoWZtp9Nr",
                          "cost":  {

                                   },
                          "itemGuid":  "g_PxUjAXIJ",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "fS-dZ609qx",
                          "cost":  {

                                   },
                          "itemGuid":  "LFU_2aPHk8",
                          "itemName":  "Reassuring Ranger Wheat Stalk"
                      },
                      {
                          "guid":  "NXiZm5Jk6l",
                          "cost":  {

                                   },
                          "itemGuid":  "qwdvtBnaPL",
                          "itemName":  "Side Hug"
                      }
                  ],
        "nameJa":  "頼もしい自然保護官"
    },
    {
        "guid":  "6EywAKsW_z",
        "name":  "Jolly Geologist",
        "type":  "Season",
        "season":  "Season of Moments",
        "seasonOrderIndex":  2,
        "area":  "Prairie Peaks",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/55/Moments-Spirit-Jolly-Geologist.png",
        "treeGuid":  "C6mpLeVi_m",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "o4BiBgXh33",
                          "cost":  {

                                   },
                          "itemGuid":  "X8TxVCwAoY",
                          "itemName":  "Jolly Dance"
                      },
                      {
                          "guid":  "nPlBrW84qt",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "eesH4ixwlq",
                          "itemName":  "Jolly Geologist Face Accessory"
                      },
                      {
                          "guid":  "G3Uyqwg-41",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "5_eEcizGMw",
                          "itemName":  "Jolly Dance"
                      },
                      {
                          "guid":  "K_rVAvT6-U",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "t8vsyexQQz",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "NbOstIgvmK",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "1T0D06zFUX",
                          "itemName":  "Waltz of the Plains"
                      },
                      {
                          "guid":  "Bb-9MVW6Zt",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "VsraqNSiML",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "K36g_5MoE9",
                          "cost":  {

                                   },
                          "itemGuid":  "hE65fn-mBH",
                          "itemName":  "Jolly Geologist Prop"
                      },
                      {
                          "guid":  "2OoMEagNva",
                          "cost":  {

                                   },
                          "itemGuid":  "BmakKYb2wG",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "bZlgoUjzYr",
                          "cost":  {

                                   },
                          "itemGuid":  "xlEzjV6XFr",
                          "itemName":  "Jolly Dance"
                      },
                      {
                          "guid":  "H-YVKJwuMK",
                          "cost":  {

                                   },
                          "itemGuid":  "cXuwp1MnHZ",
                          "itemName":  "Jolly Geologist Hair"
                      },
                      {
                          "guid":  "FQ7qu-F-Ie",
                          "cost":  {

                                   },
                          "itemGuid":  "zPG9h4NM2q",
                          "itemName":  "Jolly Dance"
                      }
                  ],
        "nameJa":  "上機嫌な地質学者"
    },
    {
        "guid":  "EMMZ8KSCjP",
        "name":  "Ascetic Monk",
        "type":  "Season",
        "season":  "Season of Moments",
        "seasonOrderIndex":  3,
        "area":  "Prairie Peaks",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5c/Moments-Spirit-Ascetic-Monk.png",
        "treeGuid":  "QxacM-TYol",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "BiYQCvfbCi",
                          "cost":  {

                                   },
                          "itemGuid":  "VASzthgEAN",
                          "itemName":  "Blindfold Balance Pose"
                      },
                      {
                          "guid":  "yLL5TgdWma",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "SRiKVsKG8i",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Ct1bCNldM4",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "3Kwn4gx5Sw",
                          "itemName":  "Ascetic Monk Tattoo"
                      },
                      {
                          "guid":  "Frls00Mrx6",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "jC14SXIUVC",
                          "itemName":  "Blindfold Balance Pose"
                      },
                      {
                          "guid":  "n_z6MLECA6",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "6OKxFB9NFg",
                          "itemName":  "Ascetic Monk Outfit"
                      },
                      {
                          "guid":  "05LgfKpSLL",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "AylwqeZPDJ",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "KWMynKMNRn",
                          "cost":  {

                                   },
                          "itemGuid":  "VNMvBdmw24",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "8n_SNiqgTh",
                          "cost":  {

                                   },
                          "itemGuid":  "fy4bnUxzOX",
                          "itemName":  "Blindfold Balance Pose"
                      },
                      {
                          "guid":  "CkGWQjiM7G",
                          "cost":  {

                                   },
                          "itemGuid":  "bZBOWw8mZD",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Q2i3DDjrJ_",
                          "cost":  {

                                   },
                          "itemGuid":  "aU8YW34Cau",
                          "itemName":  "Ascetic Monk Mask"
                      },
                      {
                          "guid":  "XFdTm_SNX9",
                          "cost":  {

                                   },
                          "itemGuid":  "PkVcGrnkjj",
                          "itemName":  "Blindfold Balance Pose"
                      }
                  ],
        "nameJa":  "節制の修行者"
    },
    {
        "guid":  "vdv3KApSxB",
        "name":  "Nightbird Whisperer",
        "type":  "Season",
        "season":  "Season of Moments",
        "seasonOrderIndex":  4,
        "area":  "Prairie Peaks",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6f/Moments-Spirit-Nightbird-Whisperer.png",
        "treeGuid":  "jj9mjfGi30",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "m08hmEsLt4",
                          "cost":  {

                                   },
                          "itemGuid":  "7j3bbradN0",
                          "itemName":  "Nightbird Call"
                      },
                      {
                          "guid":  "x0EFx1BiqD",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "ygFxGKMla2",
                          "itemName":  "Nightbird Whisperer Hair"
                      },
                      {
                          "guid":  "uJG7U2FFYf",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "R3MB6a6ATI",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "a6U0IaxtXi",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "InwVEtmmcp",
                          "itemName":  "Nightbird Whisperer Outfit"
                      },
                      {
                          "guid":  "rbworvhgX6",
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "H3tjnno3A8",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "mJCTs19whf",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "4iahXDrqQd",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "i6F-hfKsyn",
                          "cost":  {

                                   },
                          "itemGuid":  "yFMhqJAJL5",
                          "itemName":  "Nightbird Whisperer Shoes"
                      },
                      {
                          "guid":  "Uxi7ugWClS",
                          "cost":  {

                                   },
                          "itemGuid":  "5J7MR1HC1a",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "0-Itmsp_gF",
                          "cost":  {

                                   },
                          "itemGuid":  "uh-hCG0TaB",
                          "itemName":  "Nightbird Whisperer Hat"
                      },
                      {
                          "guid":  "r2KQ9lLUaj",
                          "cost":  {

                                   },
                          "itemGuid":  "yT9McjxgAb",
                          "itemName":  "Special Blessing"
                      }
                  ],
        "nameJa":  "夜鳥の語り部"
    },
    {
        "guid":  "vW9xp55w6t",
        "name":  "The Moomin Storybook",
        "type":  "Guide",
        "season":  "Season of Moomin",
        "seasonOrderIndex":  0,
        "area":  "Moominvalley Glade",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c9/Moomin-Ultimate-guide.png",
        "treeGuid":  "WGIrheVuUd",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  19,
        "nodes":  [
                      {
                          "guid":  "8_QAGF_cuK",
                          "cost":  {

                                   },
                          "itemGuid":  "AOzrztb94H",
                          "itemName":  "Warp"
                      },
                      {
                          "guid":  "6fDptytQp4",
                          "cost":  {

                                   },
                          "itemGuid":  "M4jG56FhYY",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "YlEndiNM7o",
                          "cost":  {

                                   },
                          "itemGuid":  "1uyZfKjJg5",
                          "itemName":  "Moomin Ultimate Pendant"
                      },
                      {
                          "guid":  "K8tJUE8H_e",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "dkfdFCaemY",
                          "itemName":  "Moomin Ultimate Umbrella"
                      },
                      {
                          "guid":  "3d_lsspaRe",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "8JjPl9WZDJ",
                          "itemName":  "Moomin Ultimate Plush"
                      },
                      {
                          "guid":  "hkcc7q0eXn",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "Rb06PBDZi5",
                          "itemName":  "Moomin Ultimate Outfit"
                      },
                      {
                          "guid":  "Wd9z98lxbo",
                          "cost":  {

                                   },
                          "itemGuid":  "AwSkTYwlI6",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "G8SMsDJr_u",
                          "cost":  {

                                   },
                          "itemGuid":  "qQ76Owlmiz",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "ott3-sOpP6",
                          "cost":  {

                                   },
                          "itemGuid":  "0Bw9Rv8C-m",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "LqrsiCmIEj",
                          "cost":  {

                                   },
                          "itemGuid":  "IuYvhTYq50",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "PB8v25zTYk",
                          "cost":  {

                                   },
                          "itemGuid":  "otoI-tynmI",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "42iX16VW6p",
                          "cost":  {
                                       "c":  35
                                   },
                          "itemGuid":  "5_qdhtwFCV",
                          "itemName":  "Moomin Storybook Painting"
                      },
                      {
                          "guid":  "luXj-OBMiq",
                          "cost":  {
                                       "c":  190
                                   },
                          "itemGuid":  "Q5N32W3OFJ",
                          "itemName":  "Moomin Storybook Outfit"
                      },
                      {
                          "guid":  "gc3s1bCfQs",
                          "cost":  {

                                   },
                          "itemGuid":  "AGYsMcJMkZ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "_4xsyvYEkP",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "kd1Kr8dyLE",
                          "itemName":  "Read"
                      },
                      {
                          "guid":  "3TsBNz8Trr",
                          "cost":  {
                                       "h":  5
                                   },
                          "itemGuid":  "Oh0sB7s1ej",
                          "itemName":  "Read"
                      },
                      {
                          "guid":  "wionXk5YSK",
                          "cost":  {

                                   },
                          "itemGuid":  "7dSq6EPvZO",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "WSBJ992gbF",
                          "cost":  {

                                   },
                          "itemGuid":  "zM4WRnZZPv",
                          "itemName":  "Read"
                      },
                      {
                          "guid":  "21cqactLSD",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "CKSp0pSfZu",
                          "itemName":  "Read"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "9RTxyGCw9v",
        "name":  "Comfort of Kindness",
        "type":  "Season",
        "season":  "Season of Moomin",
        "seasonOrderIndex":  1,
        "area":  "Moominvalley Glade",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/18/Comfort-of-Kindness-Shop.png",
        "treeGuid":  "nghAfQdwc3",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "sqfs-Smy_z",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "GXyIn3ZMw2",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "xhUp9bP9wD",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "n5NfIqlzgz",
                          "itemName":  "Comfort of Kindness Hair"
                      },
                      {
                          "guid":  "WvbOZtqraV",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "S8fCTIosz2",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "KCYfZa7u7W",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "2ESHL6O158",
                          "itemName":  "Comfort of Kindness Tie"
                      },
                      {
                          "guid":  "apM0OeAdxD",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "18nPSGCFpj",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "rrf2ABWPaO",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "MFb2xuywCB",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "NRoZ-1wQoO",
                          "cost":  {

                                   },
                          "itemGuid":  "peTX1vqsmy",
                          "itemName":  "Comfort of Kindness Cape"
                      },
                      {
                          "guid":  "aPaMCwloyd",
                          "cost":  {

                                   },
                          "itemGuid":  "w-_ykThWoP",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "fmO7BnK1kx",
                          "cost":  {

                                   },
                          "itemGuid":  "EVnMuKcac-",
                          "itemName":  "Comfort of Kindness Chandelier"
                      },
                      {
                          "guid":  "IUv03484by",
                          "cost":  {

                                   },
                          "itemGuid":  "GXNGA_E0UO",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ntoAn7b8Aj",
                          "cost":  {

                                   },
                          "itemGuid":  "f3kWHEYu3f",
                          "itemName":  "Comfort of Kindness Painting"
                      }
                  ],
        "nameJa":  "慈愛の安らぎ"
    },
    {
        "guid":  "jt2df_0kso",
        "name":  "Sense of Self",
        "type":  "Season",
        "season":  "Season of Moomin",
        "seasonOrderIndex":  2,
        "area":  "Moominvalley Glade",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/92/Sense-of-Self-Shop.png",
        "treeGuid":  "FL8BDldZDZ",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "lhh6l-Y3CP",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "CQfjHlF9f7",
                          "itemName":  "Finding Happiness"
                      },
                      {
                          "guid":  "2KCKrJCNMl",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "pdXfxyu6cD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "at4VgiNrXI",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "9deSvOkpV9",
                          "itemName":  "Sense Of Self Necklace"
                      },
                      {
                          "guid":  "-7TA3PcRcK",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "vkaAeAeue1",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "AmeLSvA2dK",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "1bWaD687Vv",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "tbSHE1g9u3",
                          "cost":  {

                                   },
                          "itemGuid":  "jGK2Apyfpu",
                          "itemName":  "Sense Of Self Hair Accessory"
                      },
                      {
                          "guid":  "QhQ3yDuhhD",
                          "cost":  {

                                   },
                          "itemGuid":  "uuHMCNHYbB",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YnSspRnqbR",
                          "cost":  {

                                   },
                          "itemGuid":  "8TOJMxpoxR",
                          "itemName":  "Sense Of Self Shoes"
                      },
                      {
                          "guid":  "ZHiLYXuH3t",
                          "cost":  {

                                   },
                          "itemGuid":  "aAWZQ1xhT8",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "自己の確立"
    },
    {
        "guid":  "_ps0VJ53As",
        "name":  "Spirit of Adventure",
        "type":  "Season",
        "season":  "Season of Moomin",
        "seasonOrderIndex":  3,
        "area":  "Moominvalley Glade",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c6/Spirit-of-Adventure-Shop.png",
        "treeGuid":  "Q5VCf6ubac",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "f8FG5D-DwV",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "WaDDSPDCOw",
                          "itemName":  "Worlds Between"
                      },
                      {
                          "guid":  "xvTg24Iwar",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "iKNPyHiACK",
                          "itemName":  "Spirit Of Adventure Harmonica"
                      },
                      {
                          "guid":  "_vrQxjRIn0",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "5LXXsA2gCP",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YcYsJIri_I",
                          "cost":  {
                                       "sc":  38
                                   },
                          "itemGuid":  "pAKXJ90_bk",
                          "itemName":  "Spirit Of Adventure Cape"
                      },
                      {
                          "guid":  "pnStEriIBV",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "oa3Z-BSrJ8",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "o-8scQGkpu",
                          "cost":  {

                                   },
                          "itemGuid":  "G2GJzOL2oh",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "s8j4qiAnez",
                          "cost":  {

                                   },
                          "itemGuid":  "Ykrq48VQQU",
                          "itemName":  "Spirit Of Adventure Prop"
                      },
                      {
                          "guid":  "lDAHhqfMW7",
                          "cost":  {

                                   },
                          "itemGuid":  "VfvFuZmoLz",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4L2tKQl8eT",
                          "cost":  {

                                   },
                          "itemGuid":  "foQGge-GsM",
                          "itemName":  "Spirit Of Adventure Hair"
                      }
                  ],
        "nameJa":  "冒険の心"
    },
    {
        "guid":  "RRsQtrxvRq",
        "name":  "Inspiration of Inclusion",
        "type":  "Season",
        "season":  "Season of Moomin",
        "seasonOrderIndex":  4,
        "area":  "Moominvalley Glade",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/77/Inspiration-of-Inclusion-Shop.png",
        "treeGuid":  "zxKUgzoAnE",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "ylgBy-RCz9",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "GfB9sARlNC",
                          "itemName":  "Inspiration Of Inclusion Clock"
                      },
                      {
                          "guid":  "QQW0H-_PZN",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "p3i55rooED",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "eozbJysh9N",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "6bG5dv3UqV",
                          "itemName":  "Inspiration Of Inclusion Painting"
                      },
                      {
                          "guid":  "DRuuMPRTX-",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "5URe2xiBwM",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "iLvfr6_kiA",
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "UIIvyJ2_pe",
                          "itemName":  "Inspiration Of Inclusion Outfit"
                      },
                      {
                          "guid":  "qdXH2GhOS8",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "U4pzvXQBH-",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "q8pk29q4Oq",
                          "cost":  {

                                   },
                          "itemGuid":  "kXOalX_A7X",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Ihz-WXy9rC",
                          "cost":  {

                                   },
                          "itemGuid":  "-MNQs3xBoB",
                          "itemName":  "Inspiration Of Inclusion Scarf"
                      },
                      {
                          "guid":  "z7JOqOxaWq",
                          "cost":  {

                                   },
                          "itemGuid":  "gEf9ZPeUUE",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "6RaWYAPLiB",
                          "cost":  {

                                   },
                          "itemGuid":  "r6dIe6awpx",
                          "itemName":  "Inspiration Of Inclusion Hat"
                      },
                      {
                          "guid":  "y5cBorC481",
                          "cost":  {

                                   },
                          "itemGuid":  "DXeRDEGTEI",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "包容力の源"
    },
    {
        "guid":  "ksZ0eZfHEZ",
        "name":  "Nesting Guide",
        "type":  "Guide",
        "season":  "Season of Nesting",
        "seasonOrderIndex":  0,
        "area":  "Nesting Workshop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/61/Nesting-Ultimate-Guide.png",
        "treeGuid":  "D5NXQFGNZE",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  14,
        "nodes":  [
                      {
                          "guid":  "vrUGKRtjOO",
                          "cost":  {

                                   },
                          "itemGuid":  "apFm1Bs1M9",
                          "itemName":  "Nesting Workshop Warp"
                      },
                      {
                          "guid":  "vUoRGulA02",
                          "cost":  {

                                   },
                          "itemGuid":  "sTirXPanvw",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "CCcYWY3zwp",
                          "cost":  {

                                   },
                          "itemGuid":  "8Dny2xje80",
                          "itemName":  "Nesting Ultimate Pendant"
                      },
                      {
                          "guid":  "WMymtPk-KU",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "yN19ZpyYJH",
                          "itemName":  "Nesting Ultimate Outfit"
                      },
                      {
                          "guid":  "FEqH_JDtX2",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "j419c2Vg0Y",
                          "itemName":  "Nesting Ultimate Prop"
                      },
                      {
                          "guid":  "OP5PNWoCRE",
                          "cost":  {

                                   },
                          "itemGuid":  "FvV7XUot2a",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "F4YdNgT0fg",
                          "cost":  {

                                   },
                          "itemGuid":  "GEL35nYKir",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "po4IOQmOgp",
                          "cost":  {

                                   },
                          "itemGuid":  "sltsAOaTHb",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "G-xZcu3sj5",
                          "cost":  {

                                   },
                          "itemGuid":  "7Alei6q5H_",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "kpxZP8FnR0",
                          "cost":  {

                                   },
                          "itemGuid":  "zZECdGu82K",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Ver8cPlcgY",
                          "cost":  {

                                   },
                          "itemGuid":  "Fvw9PSl5Yc",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "HbQTtrY71v",
                          "cost":  {

                                   },
                          "itemGuid":  "T4YhxmDLDx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "LCKeQCjXhH",
                          "cost":  {

                                   },
                          "itemGuid":  "Bqk5icCyoa",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "wBzelEdUAQ",
                          "cost":  {

                                   },
                          "itemGuid":  "HpuikQ-KJz",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "L6Rqyh4Xi9",
        "name":  "Nesting Nook",
        "type":  "Season",
        "season":  "Season of Nesting",
        "seasonOrderIndex":  1,
        "area":  "Nesting Workshop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c9/Nesting-Nook-Shop.png",
        "treeGuid":  "Hj9s2djkbp",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "4MAeqqNXqF",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "0uKZsODFUj",
                          "itemName":  "Nesting Nook Shelf"
                      },
                      {
                          "guid":  "hhUS-TaknV",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "0Syt2k8lvV",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "5-FTNr_Clr",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "c_KpT59QmO",
                          "itemName":  "Nesting Nook Spice Rack"
                      },
                      {
                          "guid":  "tBc6wjJrDn",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "qg48GX_m4E",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "l3juvnMJBs",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "CweO-KiOA5",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "qnWJQseLZO",
                          "cost":  {

                                   },
                          "itemGuid":  "7i6ro485Ra",
                          "itemName":  "Nesting Nook Hat"
                      },
                      {
                          "guid":  "zkvh0hDgL7",
                          "cost":  {

                                   },
                          "itemGuid":  "wXfZcdQavO",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "82dNkqo9v1",
                          "cost":  {

                                   },
                          "itemGuid":  "7J76uhGuwa",
                          "itemName":  "Nesting Nook Couch"
                      },
                      {
                          "guid":  "vDLf8joLje",
                          "cost":  {

                                   },
                          "itemGuid":  "mFWiBU11XE",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "巣づくりのサンルーム"
    },
    {
        "guid":  "r5FVxLgLrp",
        "name":  "Nesting Solarium",
        "type":  "Season",
        "season":  "Season of Nesting",
        "seasonOrderIndex":  2,
        "area":  "Nesting Workshop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/69/Nesting-Solarium-Shop.png",
        "treeGuid":  "wLTOEjYiho",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "8U5lKBsEz0",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "Zg7JKohXxQ",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "luL_Mdfge5",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "H6gnLunz8t",
                          "itemName":  "Nesting Solarium Hanging Planter"
                      },
                      {
                          "guid":  "HOeCZLzjEh",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "fXxrmPnrsC",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "V6wI7CYDYw",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "t-ErYMeyCa",
                          "itemName":  "Nesting Solarium Table"
                      },
                      {
                          "guid":  "GCCqk0H9ml",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "J1Ct-CcFRt",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "am9uLSykDd",
                          "cost":  {

                                   },
                          "itemGuid":  "Rh_Do_sfzx",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "d7EKbWMP45",
                          "cost":  {

                                   },
                          "itemGuid":  "5P2jGjEbvq",
                          "itemName":  "Nesting Solarium Bathtub"
                      },
                      {
                          "guid":  "0BFopcD8oP",
                          "cost":  {

                                   },
                          "itemGuid":  "Wc7qrLTx-F",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "EgOdguTA6j",
                          "cost":  {

                                   },
                          "itemGuid":  "aQQ620Fs1D",
                          "itemName":  "Nesting Solarium Painting"
                      }
                  ],
        "nameJa":  "巣づくりのロフト"
    },
    {
        "guid":  "Ha10I4vIO7",
        "name":  "Nesting Atrium",
        "type":  "Season",
        "season":  "Season of Nesting",
        "seasonOrderIndex":  3,
        "area":  "Nesting Workshop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e4/Nesting-Atrium-Shop.png",
        "treeGuid":  "_7Cm8XUK5N",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "UQ4rS_3vBk",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "JiCbV61Jqi",
                          "itemName":  "Nesting Atrium Floor Light"
                      },
                      {
                          "guid":  "Lq5L5tMiHm",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "xe184s4TDj",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "98FGZIDPkW",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "l8H1fmaKQ4",
                          "itemName":  "Nesting Atrium Hair"
                      },
                      {
                          "guid":  "FqiPaLcyFZ",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "7zc4VPznSp",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "3ngE_xE9gd",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "SlLF8YUeLK",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "JJv3EMoM6G",
                          "cost":  {

                                   },
                          "itemGuid":  "mH_dMkE6uH",
                          "itemName":  "Nesting Atrium Branch"
                      },
                      {
                          "guid":  "sMVxibv23U",
                          "cost":  {

                                   },
                          "itemGuid":  "kwrIuEDiez",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "emNbOSh6aF",
                          "cost":  {

                                   },
                          "itemGuid":  "x1nOiZe3QX",
                          "itemName":  "Nesting Atrium Hanging Lamp"
                      },
                      {
                          "guid":  "xA19FAWJ0W",
                          "cost":  {

                                   },
                          "itemGuid":  "oGGuBaiWiw",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "巣づくりの吹き抜け"
    },
    {
        "guid":  "8p_1kKYu7_",
        "name":  "Nesting Loft",
        "type":  "Season",
        "season":  "Season of Nesting",
        "seasonOrderIndex":  4,
        "area":  "Nesting Workshop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a7/Nesting-Loft-Shop.png",
        "treeGuid":  "hmjRFtvfCa",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "79knrpLvHO",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "dmmD9AdzXa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ZjKEQiTdTT",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "YZhthn7r7q",
                          "itemName":  "Nesting Loft Chair"
                      },
                      {
                          "guid":  "9a5BpV4FCk",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "ocfWj7Oqxl",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "eNvtLE5mF-",
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "spiUj9Bv7C",
                          "itemName":  "Nesting Loft Paintings"
                      },
                      {
                          "guid":  "j78wRmsyJl",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "AF4hUvaLDh",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "HH-Hi2vfX6",
                          "cost":  {

                                   },
                          "itemGuid":  "eA9wh3zsNi",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "YPL6zY3bL5",
                          "cost":  {

                                   },
                          "itemGuid":  "zhugp6XAdZ",
                          "itemName":  "Nesting Loft Cape"
                      },
                      {
                          "guid":  "SkZ_OTsUJO",
                          "cost":  {

                                   },
                          "itemGuid":  "6SZlYl7AJ6",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "pydZapUW4c",
                          "cost":  {

                                   },
                          "itemGuid":  "VZiXFdfGH9",
                          "itemName":  "Nesting Loft Bed"
                      }
                  ],
        "nameJa":  "巣づくりの小部屋"
    },
    {
        "guid":  "v-bxcGqGaa",
        "name":  "Spirit of Mural",
        "type":  "Guide",
        "season":  "Season of the Nine-Colored Deer",
        "seasonOrderIndex":  0,
        "area":  "Crescent Oasis",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a4/Nine-Colored-Deer-Guide-Spirit.png",
        "treeGuid":  "Lvuz1tp6P9",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "BLKy0jnYaU",
                          "cost":  {

                                   },
                          "itemGuid":  "cVufRaQV8i",
                          "itemName":  "Crescent Oasis Warp"
                      },
                      {
                          "guid":  "ZDSSxR38hq",
                          "cost":  {

                                   },
                          "itemGuid":  "MNCU8eU8DD",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "F57WDV2jHE",
                          "cost":  {

                                   },
                          "itemGuid":  "9uVcch8mbe",
                          "itemName":  "Nine-Colored Deer Ultimate Pendant"
                      },
                      {
                          "guid":  "QMGvJNWoaa",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "qoqOCLQ-on",
                          "itemName":  "Nine-Colored Deer Ultimate Hair"
                      },
                      {
                          "guid":  "3Tm0igcl3q",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "F_U2ISvmGv",
                          "itemName":  "Nine-Colored Deer Ultimate Outfit"
                      },
                      {
                          "guid":  "VK13DJd426",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "gLB3Tnn8mb",
                          "itemName":  "Nine-Colored Deer Ultimate Cape"
                      },
                      {
                          "guid":  "bLnAtun9f2",
                          "cost":  {

                                   },
                          "itemGuid":  "34QZ7XGmqQ",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "RNeY7IIMyd",
                          "cost":  {

                                   },
                          "itemGuid":  "fQy562ANnr",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "PtWomo0hFW",
                          "cost":  {

                                   },
                          "itemGuid":  "6XaS3dbRqt",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "92BhkHqATw",
                          "cost":  {

                                   },
                          "itemGuid":  "dhfAgLzgAw",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "yZyQeX6F_O",
                          "cost":  {
                                       "c":  120
                                   },
                          "itemGuid":  "Gn1DSb6m5E",
                          "itemName":  "Spirit Of Mural Mask"
                      },
                      {
                          "guid":  "yxPPGH-woJ",
                          "cost":  {

                                   },
                          "itemGuid":  "vkEGa6fKaY",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "iCUj55f3b4",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "kD0sX_iI2I",
                          "itemName":  "Spirit of Mural Hair Accessory"
                      },
                      {
                          "guid":  "2TXRk9FRs-",
                          "cost":  {

                                   },
                          "itemGuid":  "r62F4kbMp4",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ljL8xVlKd5",
                          "cost":  {

                                   },
                          "itemGuid":  "otoaOaPh_P",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "gyEBXKOIwY",
        "name":  "Herb Gatherer",
        "type":  "Season",
        "season":  "Season of the Nine-Colored Deer",
        "seasonOrderIndex":  1,
        "area":  "Crescent Oasis",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/ae/Nine-Colored-Deer-Herb-Gatherer.png",
        "treeGuid":  "nDiOVsRGWO",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "EEz74j7uA3",
                          "cost":  {

                                   },
                          "itemGuid":  "JghaoDBzL-",
                          "itemName":  "Whistle"
                      },
                      {
                          "guid":  "5c4eEiWyPA",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "GOhva5yLDa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "aQx3iDWNf0",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "HbrxremuY-",
                          "itemName":  "Herb Gatherer Hair"
                      },
                      {
                          "guid":  "854R0K3fkh",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "brs2b0XtiY",
                          "itemName":  "Whistle"
                      },
                      {
                          "guid":  "Losgq6EGS7",
                          "cost":  {
                                       "sc":  36
                                   },
                          "itemGuid":  "W1GZqtaPaM",
                          "itemName":  "Herb Gatherer Prop"
                      },
                      {
                          "guid":  "oHFhwfAbmW",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "jG5Kuv-GTD",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "euJyOBiQl-",
                          "cost":  {

                                   },
                          "itemGuid":  "x7vrsngRCI",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "yAlhMb7QEp",
                          "cost":  {

                                   },
                          "itemGuid":  "fB-Akhop3K",
                          "itemName":  "Whistle"
                      },
                      {
                          "guid":  "cuJ-cN9cNI",
                          "cost":  {

                                   },
                          "itemGuid":  "A1fMJZO5K_",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "AbrrfEgFe1",
                          "cost":  {

                                   },
                          "itemGuid":  "iwngzO_Ye0",
                          "itemName":  "Herb Gatherer Outfit"
                      },
                      {
                          "guid":  "GqoF1aIatY",
                          "cost":  {

                                   },
                          "itemGuid":  "fRqeU-viVI",
                          "itemName":  "Whistle"
                      }
                  ],
        "nameJa":  "薬草採集人"
    },
    {
        "guid":  "4h9FByzo7y",
        "name":  "Hunter",
        "type":  "Season",
        "season":  "Season of the Nine-Colored Deer",
        "seasonOrderIndex":  2,
        "area":  "Crescent Oasis",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/72/Nine-Colored-Deer-Hunter.png",
        "treeGuid":  "rsxn04As9U",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "kU0nAenGkj",
                          "cost":  {

                                   },
                          "itemGuid":  "AR-MFu1bih",
                          "itemName":  "Flex"
                      },
                      {
                          "guid":  "vy42LcfVgL",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "X_2wqYzEu5",
                          "itemName":  "Hunter Outfit"
                      },
                      {
                          "guid":  "QTgfN7i74o",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "QJq0kW8j2S",
                          "itemName":  "Flex"
                      },
                      {
                          "guid":  "op_OClDINi",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "C3n9ZNcSYr",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "caBIg543Il",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "orB3idfSwo",
                          "itemName":  "Hunter Cape"
                      },
                      {
                          "guid":  "hAjYAWNFv0",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "h2zRh4oz4_",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "6YddprtswD",
                          "cost":  {

                                   },
                          "itemGuid":  "kfHRAuUJcv",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Jtt8zjusE8",
                          "cost":  {

                                   },
                          "itemGuid":  "5NmGXSaWaK",
                          "itemName":  "Hunter Hair"
                      },
                      {
                          "guid":  "cJVd-UG9Zp",
                          "cost":  {

                                   },
                          "itemGuid":  "zBw4EnSXM1",
                          "itemName":  "Flex"
                      },
                      {
                          "guid":  "O-9cB13pGo",
                          "cost":  {

                                   },
                          "itemGuid":  "IQY8K6P32K",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "oBDRhIc-U0",
                          "cost":  {

                                   },
                          "itemGuid":  "F_3lTFwBoE",
                          "itemName":  "Flex"
                      }
                  ],
        "nameJa":  "狩人"
    },
    {
        "guid":  "wyFKAWN45l",
        "name":  "Feudal Lord",
        "type":  "Season",
        "season":  "Season of the Nine-Colored Deer",
        "seasonOrderIndex":  3,
        "area":  "Crescent Oasis",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/cf/Nine-Colored-Deer-Feudal-Lord.png",
        "treeGuid":  "0wgQ9rDShR",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "c1ukj9PFVD",
                          "cost":  {

                                   },
                          "itemGuid":  "4bioxBnhrA",
                          "itemName":  "Cradle Carry"
                      },
                      {
                          "guid":  "3_B5F60qou",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "va-bCmN1T_",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "EpLzU7Tck4",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "xm183xQb6B",
                          "itemName":  "Feudal Lord Mask"
                      },
                      {
                          "guid":  "fimJTaBUjW",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "bPs2llkWyk",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "AYd2LYGwHd",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "H3IbNNMgeI",
                          "itemName":  "Deer Song"
                      },
                      {
                          "guid":  "oSY366YRwW",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "b8fsOpXbiN",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "fqJcKikf2K",
                          "cost":  {

                                   },
                          "itemGuid":  "Ob9-4JZoGH",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "uXkkTBo9E7",
                          "cost":  {

                                   },
                          "itemGuid":  "WkyRmWK_lE",
                          "itemName":  "Feudal Lord Cape"
                      },
                      {
                          "guid":  "47suLqrKU3",
                          "cost":  {

                                   },
                          "itemGuid":  "MDwDKmNPig",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "e1EHTQbh7O",
                          "cost":  {

                                   },
                          "itemGuid":  "VJu0fG2ndS",
                          "itemName":  "Feudal Lord Hat"
                      },
                      {
                          "guid":  "OdBgcJbtEK",
                          "cost":  {

                                   },
                          "itemGuid":  "SxBmlA58uo",
                          "itemName":  "Cradle Carry"
                      }
                  ],
        "nameJa":  "国王"
    },
    {
        "guid":  "mf7NyGfeDI",
        "name":  "Princess",
        "type":  "Season",
        "season":  "Season of the Nine-Colored Deer",
        "seasonOrderIndex":  4,
        "area":  "Crescent Oasis",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/da/Nine-Colored-Deer-Princess.png",
        "treeGuid":  "uLAuAvptPA",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "QLHntqZQ6m",
                          "cost":  {

                                   },
                          "itemGuid":  "UVSUO7K0pg",
                          "itemName":  "Float Spin"
                      },
                      {
                          "guid":  "nq-taG3wQg",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "5WpDgbgdqb",
                          "itemName":  "Princess Mask"
                      },
                      {
                          "guid":  "P5uOwY_l-A",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "UzRclD65vO",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "z0Lkyd1iNP",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "UcG0zDem_M",
                          "itemName":  "Float Spin"
                      },
                      {
                          "guid":  "eU1kzP8PY-",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "O0ktmTVR_z",
                          "itemName":  "Princess Outfit"
                      },
                      {
                          "guid":  "vN5lBp0S9x",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "6FYRAG6jIS",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "VXLRTIyOvf",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "IWXeOczUJv",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "8jxbLNGDUI",
                          "cost":  {

                                   },
                          "itemGuid":  "iSIZiicqA0",
                          "itemName":  "Princess Cape"
                      },
                      {
                          "guid":  "w1VCzjbtmd",
                          "cost":  {

                                   },
                          "itemGuid":  "3KnSMisbLM",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "09kVqTSZgq",
                          "cost":  {

                                   },
                          "itemGuid":  "8hRD36UT6n",
                          "itemName":  "Float Spin"
                      },
                      {
                          "guid":  "JGZV3U9Jvu",
                          "cost":  {

                                   },
                          "itemGuid":  "XBA8t0KAgo",
                          "itemName":  "Princess Hair"
                      },
                      {
                          "guid":  "AP1XKnfsxx",
                          "cost":  {

                                   },
                          "itemGuid":  "Ye-rhyzgWF",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "teffb5GxyX",
                          "cost":  {

                                   },
                          "itemGuid":  "c2ogGO4e6t",
                          "itemName":  "Float Spin"
                      }
                  ],
        "nameJa":  "王女"
    },
    {
        "guid":  "_ZYvHXY8HB",
        "name":  "Passage Guide",
        "type":  "Guide",
        "season":  "Season of Passage",
        "seasonOrderIndex":  0,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/04/Passage-Ultimate-guide.png",
        "treeGuid":  "LrH-L-oKn1",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  18,
        "nodes":  [
                      {
                          "guid":  "dSSO_hBPjf",
                          "cost":  {

                                   },
                          "itemGuid":  "s_2ZN-bnbP",
                          "itemName":  "Isle Warp"
                      },
                      {
                          "guid":  "lRjQukmKjd",
                          "cost":  {

                                   },
                          "itemGuid":  "SSNqKMOI2E",
                          "itemName":  "Passage Ultimate Pendant"
                      },
                      {
                          "guid":  "WcvmuMq3K-",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "8Kf_oq9FWL",
                          "itemName":  "Passage Ultimate Mask"
                      },
                      {
                          "guid":  "GIBxV4HFwm",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "HYdEzP1Gat",
                          "itemName":  "Passage Ultimate Cape"
                      },
                      {
                          "guid":  "dBj9hABf3E",
                          "cost":  {

                                   },
                          "itemGuid":  "wUo9ZKVEpq",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "BigUX_n0P2",
                          "cost":  {

                                   },
                          "itemGuid":  "WUiJnkBm0n",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "TVMrH02Bgx",
                          "cost":  {

                                   },
                          "itemGuid":  "gM93l96JzS",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "WLiLVNkrNV",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "oM9Xecb_kS",
                          "itemName":  "Passage Boar Mask"
                      },
                      {
                          "guid":  "u5QFXViCSA",
                          "cost":  {

                                   },
                          "itemGuid":  "YoluGOPKvu",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "Iawt_hSvo5",
                          "cost":  {
                                       "c":  46
                                   },
                          "itemGuid":  "zozW0cQQhx",
                          "itemName":  "Passage Monkey Mask"
                      },
                      {
                          "guid":  "xBoxl_xrLg",
                          "cost":  {

                                   },
                          "itemGuid":  "86bhs1nb7d",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "5kiDMWhiWz",
                          "cost":  {
                                       "h":  39
                                   },
                          "itemGuid":  "ZAwpq_6GeO",
                          "itemName":  "Hacky Sack Prop"
                      },
                      {
                          "guid":  "RAzgLPfsBN",
                          "cost":  {
                                       "c":  52
                                   },
                          "itemGuid":  "9mhT-2bV4K",
                          "itemName":  "Passage Raccoon Mask"
                      },
                      {
                          "guid":  "H9nzrYqUMY",
                          "cost":  {

                                   },
                          "itemGuid":  "Hs7ZfjulPo",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "ZicSG28qGO",
                          "cost":  {

                                   },
                          "itemGuid":  "9vAPFo1A8D",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "HCPPxPsnJT",
                          "cost":  {

                                   },
                          "itemGuid":  "0FSzrtLVBr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Cia1Bxeivk",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "kA-N6gBSIG",
                          "itemName":  "Passage Serow Mask"
                      },
                      {
                          "guid":  "flX8ILZRu5",
                          "cost":  {

                                   },
                          "itemGuid":  "c53WkGR334",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "udBbDIhZtD",
        "name":  "Oddball Outcast",
        "type":  "Season",
        "season":  "Season of Passage",
        "seasonOrderIndex":  1,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/11/Passage-Oddball-Outcast-Cutout.png",
        "treeGuid":  "VwW8uUBAdU",
        "treeSource":  "revisit",
        "revisitDate":  "2025-01-13",
        "revisitName":  "Special Visit #7",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "5DxSihnRm3",
                          "cost":  {

                                   },
                          "itemGuid":  "q1lSh8QVkN",
                          "itemName":  "Hacky sack"
                      },
                      {
                          "guid":  "QhHWbJMuZ4",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "vCidIP_ecS",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "rqVkXJjuJv",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "ebwmL5sVWc",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "mGS0mxavjm",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "jS3uQ-FDSQ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "35Id_HdmbV",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "kQ7Yvu-g4k",
                          "itemName":  "Hacky sack"
                      },
                      {
                          "guid":  "L4jUktxTta",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ZnoeUymwNI",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Sk_URqxCjF",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "Py6sIw6EvE",
                          "itemName":  "Oddball Outcast Outfit"
                      },
                      {
                          "guid":  "9NTLwp24fi",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "HbhTdZAnuN",
                          "itemName":  "Oddball Outcast Neckpiece"
                      },
                      {
                          "guid":  "AueAY2OYuh",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "piGSeoIPd_",
                          "itemName":  "Hacky sack"
                      },
                      {
                          "guid":  "XBaaCdKLb7",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "uE2-9qAMKP",
                          "itemName":  "Oddball Outcast Hair"
                      },
                      {
                          "guid":  "UKRqhdf_B3",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "WMCReW0LQD",
                          "itemName":  "Hacky sack"
                      }
                  ],
        "nameJa":  "風変わりなひとり好き"
    },
    {
        "guid":  "noQs_dBSQu",
        "name":  "Tumbling Troublemaker",
        "type":  "Season",
        "season":  "Season of Passage",
        "seasonOrderIndex":  2,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ee/Passage-Tumbling-Troublemaker-Cutout.png",
        "treeGuid":  "6QPtn4qXTG",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "R1hBDJIu16",
                          "cost":  {

                                   },
                          "itemGuid":  "FEzWv1XXku",
                          "itemName":  "Somersault"
                      },
                      {
                          "guid":  "u2psXUE0cn",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "jPw-NMJBwY",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "pJb1Nr3khE",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "IxNpykF933",
                          "itemName":  "Somersault"
                      },
                      {
                          "guid":  "3GbtED2nJe",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "_FpZ5LnbhK",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "E5buEn19Yl",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "0K5eWw2_Tq",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "48y1nj5IV1",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "23CqDqp6fd",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "_1tAp0B45P",
                          "cost":  {

                                   },
                          "itemGuid":  "Gz6U0Ahkg5",
                          "itemName":  "Tumbling Troublemaker Face Accessory"
                      },
                      {
                          "guid":  "J8lchvifPb",
                          "cost":  {

                                   },
                          "itemGuid":  "mfA3I1hs5x",
                          "itemName":  "Tumbling Troublemaker Cape"
                      },
                      {
                          "guid":  "9DFjBFM9e8",
                          "cost":  {

                                   },
                          "itemGuid":  "Gnl7Kf2xWO",
                          "itemName":  "Somersault"
                      },
                      {
                          "guid":  "RW0omjIQLq",
                          "cost":  {

                                   },
                          "itemGuid":  "rbV0FWIENC",
                          "itemName":  "Tumbling Troublemaker Hair"
                      },
                      {
                          "guid":  "cIfMgIqH9x",
                          "cost":  {

                                   },
                          "itemGuid":  "DjPVeBb0wn",
                          "itemName":  "Somersault"
                      }
                  ],
        "nameJa":  "ぐるぐる回るいたずらっ子"
    },
    {
        "guid":  "-BIU0YAs1Q",
        "name":  "Melancholy Mope",
        "type":  "Season",
        "season":  "Season of Passage",
        "seasonOrderIndex":  3,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/7a/Passage-Melancholy-Mope-Cutout.png",
        "treeGuid":  "bZU_1hDxB9",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "wjswIwiyKF",
                          "cost":  {

                                   },
                          "itemGuid":  "Z9YH4KCszX",
                          "itemName":  "Moping"
                      },
                      {
                          "guid":  "Wgvn-yvP06",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "LNt-MN76Pf",
                          "itemName":  "Melancholy Mope Face Accessory"
                      },
                      {
                          "guid":  "U-aVBVuvsq",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "gCyH_EJYEW",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "3k6hN7fMjl",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "AZb8ZxAeDb",
                          "itemName":  "Moping"
                      },
                      {
                          "guid":  "Dz6H0yRGVT",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "aaYJbWm6oV",
                          "itemName":  "Melancholy Mope Outfit"
                      },
                      {
                          "guid":  "DCprobzBUp",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "3JT5fm0Cy2",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "I-xyPPj7Iv",
                          "cost":  {

                                   },
                          "itemGuid":  "_gwNMhGG0C",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "F9gHUsr4LF",
                          "cost":  {

                                   },
                          "itemGuid":  "9v4_Si1oJn",
                          "itemName":  "Moping"
                      },
                      {
                          "guid":  "YALq6maM6b",
                          "cost":  {

                                   },
                          "itemGuid":  "Mz9HHVc0_f",
                          "itemName":  "Melancholy Mope Hair"
                      },
                      {
                          "guid":  "8yE_-XcvG7",
                          "cost":  {

                                   },
                          "itemGuid":  "leQJ72gAGH",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "qkncbPXeNv",
                          "cost":  {

                                   },
                          "itemGuid":  "ozw69gqvhQ",
                          "itemName":  "Moping"
                      }
                  ],
        "nameJa":  "物憂げなとぼとぼ歩き"
    },
    {
        "guid":  "IKkPcAF07c",
        "name":  "Overactive Overachiever",
        "type":  "Season",
        "season":  "Season of Passage",
        "seasonOrderIndex":  4,
        "area":  "Passage Rock",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a5/Passage-Overactive-Overachiever-Cutout.png",
        "treeGuid":  "qdWXiEhm46",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "caUGXMJb3Z",
                          "cost":  {

                                   },
                          "itemGuid":  "7aW4_cS3Ob",
                          "itemName":  "Pull-up"
                      },
                      {
                          "guid":  "jcEka4RBcR",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "34YUB3swNm",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "hX31WFiuHY",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "BwA9_RCi47",
                          "itemName":  "Pull-up"
                      },
                      {
                          "guid":  "pOjomtU0J4",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "GaLyg5WMaC",
                          "itemName":  "Overactive Overachiever Cape"
                      },
                      {
                          "guid":  "QY5reHbqLq",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "tJWzqr-uXs",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "KhXUu-c2Os",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "-Xg9VMYldT",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "eFZtP_Q2cR",
                          "cost":  {

                                   },
                          "itemGuid":  "k90TESSTBg",
                          "itemName":  "Overactive Overachiever Hair"
                      },
                      {
                          "guid":  "mRr8ny5mtY",
                          "cost":  {

                                   },
                          "itemGuid":  "wrDJpYzeKo",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "8pOQ5gvUub",
                          "cost":  {

                                   },
                          "itemGuid":  "bs7ZBPqzge",
                          "itemName":  "Pull-up"
                      },
                      {
                          "guid":  "g2OQrkHibV",
                          "cost":  {

                                   },
                          "itemGuid":  "kk4P3a0tb_",
                          "itemName":  "Manta Ocarina"
                      },
                      {
                          "guid":  "Czc9aNddzX",
                          "cost":  {

                                   },
                          "itemGuid":  "nRbYecsrpX",
                          "itemName":  "Pull-up"
                      }
                  ],
        "nameJa":  "活発すぎる頑張り屋"
    },
    {
        "guid":  "qSggZYj_x3",
        "name":  "Performance Guide",
        "type":  "Guide",
        "season":  "Season of Performance",
        "seasonOrderIndex":  0,
        "area":  "Village Theatre",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/43/SOP-Ultimate-guide.png",
        "treeGuid":  "QPaLIzQqeU",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  24,
        "nodes":  [
                      {
                          "guid":  "VIzdFH49NS",
                          "cost":  {

                                   },
                          "itemGuid":  "372sosqEJH",
                          "itemName":  "Performance Warp"
                      },
                      {
                          "guid":  "qoA5CP_vua",
                          "cost":  {

                                   },
                          "itemGuid":  "RjZyODIr_2",
                          "itemName":  "Performance Ultimate Pendant"
                      },
                      {
                          "guid":  "deY2PDU3Yf",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "DBRlaSaues",
                          "itemName":  "Performance Ultimate Mask"
                      },
                      {
                          "guid":  "X_Odiyggx5",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "sYYg6rFPj6",
                          "itemName":  "Performance Ultimate Cape"
                      },
                      {
                          "guid":  "_4vW_20oCx",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "Lw93RiDG46",
                          "itemName":  "Performance Ultimate Hair"
                      },
                      {
                          "guid":  "C2PneP8_R4",
                          "cost":  {

                                   },
                          "itemGuid":  "zEvxnuBJf1",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "vX009zQLab",
                          "cost":  {

                                   },
                          "itemGuid":  "c8_ZLp9iaS",
                          "itemName":  "High Five"
                      },
                      {
                          "guid":  "mgKaDKY7vn",
                          "cost":  {

                                   },
                          "itemGuid":  "so8M_6pkle",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "vS2RWMmgn6",
                          "cost":  {

                                   },
                          "itemGuid":  "WKPWSGukRo",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "lasDJZ0VaV",
                          "cost":  {

                                   },
                          "itemGuid":  "gCZ2rqRL6s",
                          "itemName":  "Double-Five"
                      },
                      {
                          "guid":  "saQdgFu4KQ",
                          "cost":  {

                                   },
                          "itemGuid":  "NERbBLZV7z",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "7eaPI4hIGO",
                          "cost":  {

                                   },
                          "itemGuid":  "-vYFjLWhNW",
                          "itemName":  "Hug"
                      },
                      {
                          "guid":  "XdNmZOR-bP",
                          "cost":  {

                                   },
                          "itemGuid":  "sldyWGHPcu",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "ksbUXfWKMA",
                          "cost":  {

                                   },
                          "itemGuid":  "A_Thh0cGjn",
                          "itemName":  "Duet Dance"
                      },
                      {
                          "guid":  "6UFiGvNdvZ",
                          "cost":  {
                                       "c":  52
                                   },
                          "itemGuid":  "P8hCjt0Cpn",
                          "itemName":  "Performance Flower Pot Prop"
                      },
                      {
                          "guid":  "YBGLFTjsSu",
                          "cost":  {

                                   },
                          "itemGuid":  "-naooktwJY",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "5XXb49wJ4O",
                          "cost":  {

                                   },
                          "itemGuid":  "ALc8DIOm6x",
                          "itemName":  "Shared Memory Spell"
                      },
                      {
                          "guid":  "D3UL40Opc2",
                          "cost":  {

                                   },
                          "itemGuid":  "1ADCbzCXoo",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "AjLZQdBy_l",
                          "cost":  {

                                   },
                          "itemGuid":  "LpgZ0dXuiR",
                          "itemName":  "Shared Memory Spell"
                      },
                      {
                          "guid":  "fPqfoV-tI0",
                          "cost":  {

                                   },
                          "itemGuid":  "i6OtHRDrbp",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rsI26WGsll",
                          "cost":  {

                                   },
                          "itemGuid":  "X0i3rZEDQ6",
                          "itemName":  "Shared Memory Spell"
                      },
                      {
                          "guid":  "vBhx-vCIVZ",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "HsIlEsnI4A",
                          "itemName":  "Performance Guide Mask"
                      },
                      {
                          "guid":  "U4PjPoPWuB",
                          "cost":  {

                                   },
                          "itemGuid":  "5g17gSJBUj",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rW5dNBiiAE",
                          "cost":  {

                                   },
                          "itemGuid":  "CLpPsg-2LT",
                          "itemName":  "Shared Memory Spell"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "4iotcmsn0K",
        "name":  "Frantic Stagehand",
        "type":  "Season",
        "season":  "Season of Performance",
        "seasonOrderIndex":  1,
        "area":  "Village Theatre",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c0/Performance-Spirit-Frantic-Stagehand.png",
        "treeGuid":  "Uew4A5VBxF",
        "treeSource":  "revisit",
        "revisitDate":  "2025-11-17",
        "revisitName":  "Special Visit #11",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "QNcTqD-4ie",
                          "cost":  {

                                   },
                          "itemGuid":  "FmTG9TSX2e",
                          "itemName":  "Handshake"
                      },
                      {
                          "guid":  "i0Zyu5uBAN",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GikEz6_ZnD",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "MUGp94TEvh",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "zpYo-bAkEr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "BC5IQsjQqD",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "2rVo805JY0",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "73hYBbf86j",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "AdZbRcEjbN",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Cz9JUl6RYL",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "xoEQI_2ykm",
                          "itemName":  "Frantic Stagehand Outfit"
                      },
                      {
                          "guid":  "Ae7N8PozQz",
                          "cost":  {
                                       "c":  34
                                   },
                          "itemGuid":  "kealNieHwv",
                          "itemName":  "Frantic Stagehand Mask"
                      },
                      {
                          "guid":  "husAQB-o3e",
                          "cost":  {
                                       "h":  8
                                   },
                          "itemGuid":  "LYyK5T92ij",
                          "itemName":  "Handshake"
                      },
                      {
                          "guid":  "4p_wPHpXCU",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "BtWvDojIDg",
                          "itemName":  "Frantic Stagehand Hair"
                      },
                      {
                          "guid":  "5d7EO_qruS",
                          "cost":  {
                                       "c":  22
                                   },
                          "itemGuid":  "LE-qwy-wie",
                          "itemName":  "Step by Step"
                      }
                  ],
        "nameJa":  "一生懸命な舞台美術家"
    },
    {
        "guid":  "fEcI6neh6f",
        "name":  "Forgetful Storyteller",
        "type":  "Season",
        "season":  "Season of Performance",
        "seasonOrderIndex":  2,
        "area":  "Village Theatre",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/1e/Performance-Spirit-Forgetful-Storyteller.png",
        "treeGuid":  "UEf6UQn_yl",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "DAX89eU3v8",
                          "cost":  {

                                   },
                          "itemGuid":  "atMtr23g93",
                          "itemName":  "Awww"
                      },
                      {
                          "guid":  "sBiNEw-JCf",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "cz2_Sc10Fk",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "MT_fXO3ByJ",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "Z53G2IN-L3",
                          "itemName":  "Forgetful Storyteller Hair"
                      },
                      {
                          "guid":  "M6HaVF38eh",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "yiWOuxxWgB",
                          "itemName":  "Awww"
                      },
                      {
                          "guid":  "s_VvBmaGz5",
                          "cost":  {
                                       "sc":  26
                                   },
                          "itemGuid":  "BN_dI_y6Fu",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Qp1cpJPns-",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "KoLgRv-HIL",
                          "itemName":  "Forgetful Storyteller Cape"
                      },
                      {
                          "guid":  "PCAADktFUl",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "Qs0ZC_7YTz",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "6jFrUAu8wi",
                          "cost":  {

                                   },
                          "itemGuid":  "PcFVY_0aGF",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "IZLiaTDPyp",
                          "cost":  {

                                   },
                          "itemGuid":  "no0xArAFGq",
                          "itemName":  "Forgetful Storyteller Outfit"
                      },
                      {
                          "guid":  "w5Fe5BI5sE",
                          "cost":  {

                                   },
                          "itemGuid":  "r6dNyY-aBP",
                          "itemName":  "Awww"
                      },
                      {
                          "guid":  "Qh2KrfM7g_",
                          "cost":  {

                                   },
                          "itemGuid":  "P736zjG-Qh",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "A-Ob1-En5j",
                          "cost":  {

                                   },
                          "itemGuid":  "wOewFkj_yn",
                          "itemName":  "Forgetful Storyteller Mask"
                      },
                      {
                          "guid":  "8HZFTN4bEz",
                          "cost":  {

                                   },
                          "itemGuid":  "7tsa9wtqVi",
                          "itemName":  "Awww"
                      }
                  ],
        "nameJa":  "忘れっぽい劇作家"
    },
    {
        "guid":  "KYhwsjTkp-",
        "name":  "Mellow Musician",
        "type":  "Season",
        "season":  "Season of Performance",
        "seasonOrderIndex":  3,
        "area":  "Village Theatre",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fb/Performance-Spirit-Mellow-Musician.png",
        "treeGuid":  "_TwWCLOFZ9",
        "treeSource":  "revisit",
        "revisitDate":  "2025-11-17",
        "revisitName":  "Special Visit #11",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "xgPlf1s2f6",
                          "cost":  {

                                   },
                          "itemGuid":  "FWWMzSnh0A",
                          "itemName":  "Headbob"
                      },
                      {
                          "guid":  "38uaFs2jEq",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "VVchsNQluM",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "FdhcXnmMjL",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "HCbPXaDU0D",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "VacQQar0Wg",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "5JnYn-gH_q",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "nKFXWCh4hH",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "NXnXPRAcrO",
                          "itemName":  "Headbob"
                      },
                      {
                          "guid":  "Ndkr6RwhpT",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "q0yCSOGypV",
                          "itemName":  "Mellow Musician Cape"
                      },
                      {
                          "guid":  "LbNwO6AMJj",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "-dPsxUlQFc",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "dcCvyhBW_s",
                          "cost":  {
                                       "c":  80
                                   },
                          "itemGuid":  "ARf5D2Bu4v",
                          "itemName":  "Electric Guitar"
                      },
                      {
                          "guid":  "XVCxWwLYlz",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "Z6kNG4kwEC",
                          "itemName":  "Mellow Musician Hair"
                      },
                      {
                          "guid":  "zbq1yEHgm3",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "3TnJKvu6Ga",
                          "itemName":  "Headbob"
                      },
                      {
                          "guid":  "iNHw9TTNoD",
                          "cost":  {
                                       "c":  32
                                   },
                          "itemGuid":  "Eof0QFAYZa",
                          "itemName":  "Mellow Musician Mask"
                      },
                      {
                          "guid":  "83D1pajBDw",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "EQQjcs9sT0",
                          "itemName":  "Headbob"
                      }
                  ],
        "nameJa":  "のんびり屋の音楽家"
    },
    {
        "guid":  "S6KVcMgi-3",
        "name":  "Modest Dancer",
        "type":  "Season",
        "season":  "Season of Performance",
        "seasonOrderIndex":  4,
        "area":  "Village Theatre",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/60/Performance-Spirit-Modest-Dancer.png",
        "treeGuid":  "YCIL81ldvN",
        "treeSource":  "revisit",
        "revisitDate":  "2025-01-13",
        "revisitName":  "Special Visit #7",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "XcU33tjR-q",
                          "cost":  {

                                   },
                          "itemGuid":  "kW5PsMdMVR",
                          "itemName":  "Duet Dance"
                      },
                      {
                          "guid":  "9ZY-N-geou",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "DdEoFUb-N7",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "H8U1JBqDo6",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "fRdNgSzBOI",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "RDe7Ya7Ea2",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "ChLvJgIXiL",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "5D5XH2ZGVb",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "4LGCjibLFr",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "6h3hvtiARt",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "zBs2Y94DY2",
                          "itemName":  "Modest Dancer Hair"
                      },
                      {
                          "guid":  "e1HCuGv2Hz",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "DFn3TnXyGw",
                          "itemName":  "Modest Dancer Outfit"
                      },
                      {
                          "guid":  "5miwe71PgS",
                          "cost":  {
                                       "h":  8
                                   },
                          "itemGuid":  "LTHqUonVhP",
                          "itemName":  "Duet Dance"
                      },
                      {
                          "guid":  "6Ofm-167OC",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "6OKB4wddwP",
                          "itemName":  "Modest Dancer Mask"
                      },
                      {
                          "guid":  "m-UX7Ku_O5",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "Gv945yQObD",
                          "itemName":  "Hidden Dance"
                      }
                  ],
        "nameJa":  "慎み深い踊り手"
    },
    {
        "guid":  "DKFofCESGJ",
        "name":  "Prophecy Guide",
        "type":  "Guide",
        "season":  "Season of Prophecy",
        "seasonOrderIndex":  0,
        "area":  "Cave of Prophecies",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/33/Prophecy-Guide-Spirit.png",
        "treeGuid":  "SQZ7rff2Ck",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "CRDwOv02Yn",
                          "cost":  {

                                   },
                          "itemGuid":  "C__QqZMFNy",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "4DClxjQT6N",
                          "cost":  {

                                   },
                          "itemGuid":  "DxQ_9zIh5h",
                          "itemName":  "Prophecy Ultimate Pendant"
                      },
                      {
                          "guid":  "hIoiw2gLzF",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "wGQSuhVWXD",
                          "itemName":  "Prophecy Ultimate Drum"
                      },
                      {
                          "guid":  "xM4sZDf0RW",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "GYWFafVVd_",
                          "itemName":  "Prophecy Ultimate Mask"
                      },
                      {
                          "guid":  "kLTHS0ihd6",
                          "cost":  {

                                   },
                          "itemGuid":  "4BLJ-WV8ex",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "MUEMM5G5ep",
                          "cost":  {

                                   },
                          "itemGuid":  "phnJrWRFNt",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "YZGcmEarLI",
                          "cost":  {

                                   },
                          "itemGuid":  "vW_bfSM4YI",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "-4VSg0qqpy",
                          "cost":  {

                                   },
                          "itemGuid":  "lwJTKNHAyz",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "TZCrfNy6FI",
                          "cost":  {

                                   },
                          "itemGuid":  "tb4ZD1ui0P",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "qNTd-UVwj-",
                          "cost":  {

                                   },
                          "itemGuid":  "Ns8AgO_pYM",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "eM7SUlgKHv",
                          "cost":  {

                                   },
                          "itemGuid":  "9jynWmsXgb",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "9Rgsos9xqE",
        "name":  "Prophet of Water",
        "type":  "Season",
        "season":  "Season of Prophecy",
        "seasonOrderIndex":  1,
        "area":  "Cave of Prophecies",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/cf/Prophecy-Spirit-Prophet-of-Water.png",
        "treeGuid":  "6vAMrTPmU-",
        "treeSource":  "revisit",
        "revisitDate":  "2023-05-15",
        "revisitName":  "Special Visit #2",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "9GhluZ7XjZ",
                          "cost":  {

                                   },
                          "itemGuid":  "GkHHcjKlV-",
                          "itemName":  "Deep Breath"
                      },
                      {
                          "guid":  "HhcP-Ie2-B",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "5HoXo6DF--",
                          "itemName":  "Prophet of Water Sticker"
                      },
                      {
                          "guid":  "dQ0U0EKmG0",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "mY3HmHBokS",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "0wqr5Qt9ks",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "03A3OtJzWu",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "mKb1daH7gX",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "bdJ0TZ1V3e",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "S7-BF8WQWx",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "3H28hhg2kF",
                          "itemName":  "Deep Breath"
                      },
                      {
                          "guid":  "uEjvyPdwr_",
                          "cost":  {
                                       "c":  54
                                   },
                          "itemGuid":  "Gu5Pw8cvcR",
                          "itemName":  "Prophet of Water Mask"
                      },
                      {
                          "guid":  "aExWaifHkZ",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "sQcUGrjRP2",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "HLD9K_xEa0",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "OMRQQpGTCh",
                          "itemName":  "Prophet of Water Cape"
                      },
                      {
                          "guid":  "OH9-Kyg9N8",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "DyDCYzuiZU",
                          "itemName":  "Deep Breath"
                      },
                      {
                          "guid":  "UqbwwqyleJ",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "JeLUbTDjy3",
                          "itemName":  "Prophet of Water Hair"
                      },
                      {
                          "guid":  "F8LNqevmqn",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "a1mWcW4Pll",
                          "itemName":  "Deep Breath"
                      }
                  ],
        "nameJa":  "水の預言者"
    },
    {
        "guid":  "oIeqSdqyWu",
        "name":  "Prophet of Earth",
        "type":  "Season",
        "season":  "Season of Prophecy",
        "seasonOrderIndex":  2,
        "area":  "Cave of Prophecies",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8a/Prophecy-Spirit-Prophet-of-Earth.png",
        "treeGuid":  "5IfMzJYMAs",
        "treeSource":  "revisit",
        "revisitDate":  "2023-05-15",
        "revisitName":  "Special Visit #2",
        "isTiered":  false,
        "nodeCount":  13,
        "nodes":  [
                      {
                          "guid":  "NkHq0TPo1n",
                          "cost":  {

                                   },
                          "itemGuid":  "N3W56zu42m",
                          "itemName":  "Dust Off"
                      },
                      {
                          "guid":  "OQstsD--3N",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "DecMXt7qEo",
                          "itemName":  "Prophet of Earth Sticker"
                      },
                      {
                          "guid":  "OrV0IGBr_7",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "LeCZYinpa1",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "cgWz1XzsMJ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "56kpMv8q44",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "AJxwkKN889",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "oPDDsasR3N",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "pZMIiBe6Mq",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "EIVC6EkYVC",
                          "itemName":  "Dust Off"
                      },
                      {
                          "guid":  "Cav6TOePkE",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "cCVggJ8g_b",
                          "itemName":  "Soft Blanket"
                      },
                      {
                          "guid":  "D_Jq-_wcAB",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "kCfooUCOgs",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "2q-1EeClg_",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "JTPr5NiPEz",
                          "itemName":  "Prophet of Earth Mask"
                      },
                      {
                          "guid":  "d0BZ5foKPF",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "K1EZHVX9Sb",
                          "itemName":  "Prophet of Earth Cape"
                      },
                      {
                          "guid":  "rdpkcpogco",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "WNpYia1GaL",
                          "itemName":  "Dust Off"
                      },
                      {
                          "guid":  "WN3vFmdFXn",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "kQMCuUAOtU",
                          "itemName":  "Prophet of Earth Hair"
                      },
                      {
                          "guid":  "3AmAUwNFj1",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "VWQdrhMcwH",
                          "itemName":  "Dust Off"
                      }
                  ],
        "nameJa":  "地の預言者"
    },
    {
        "guid":  "5DD07qmTqQ",
        "name":  "Prophet of Air",
        "type":  "Season",
        "season":  "Season of Prophecy",
        "seasonOrderIndex":  3,
        "area":  "Cave of Prophecies",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f5/Prophecy-Spirit-Prophet-of-Air.png",
        "treeGuid":  "_l09Yw8HoO",
        "treeSource":  "revisit",
        "revisitDate":  "2023-05-15",
        "revisitName":  "Special Visit #2",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "5q6cX7B5Dv",
                          "cost":  {

                                   },
                          "itemGuid":  "p07giC7q6F",
                          "itemName":  "Balance"
                      },
                      {
                          "guid":  "BE7DFyDfTR",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "GivrsXeHVe",
                          "itemName":  "Prophet of Air Sticker"
                      },
                      {
                          "guid":  "Pc7FIKanez",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "dAxR-om8Q8",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "t8KAXCj23i",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "IjJzTQyhJx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "6_ebl5Stk6",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "80vjlRu4nQ",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "kxKJSKTP1y",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "vmZnZiDaRp",
                          "itemName":  "Balance"
                      },
                      {
                          "guid":  "_ko0aVcyYG",
                          "cost":  {
                                       "c":  54
                                   },
                          "itemGuid":  "3j1vIMlhqg",
                          "itemName":  "Prophet of Air Mask"
                      },
                      {
                          "guid":  "QmCfR94Xgt",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "0uuQGhhylI",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "shHZhGcxtT",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "mfNUas_ov2",
                          "itemName":  "Prophet of Air Cape"
                      },
                      {
                          "guid":  "7EDv6MbaDK",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "sS5uFB29XN",
                          "itemName":  "Balance"
                      },
                      {
                          "guid":  "5TE_9i_tai",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "PN1kAtqtky",
                          "itemName":  "Prophet of Air Hair"
                      },
                      {
                          "guid":  "3n9Q3AO6Dd",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "1COJ0_lu9H",
                          "itemName":  "Balance"
                      }
                  ],
        "nameJa":  "風の預言者"
    },
    {
        "guid":  "kH5B_M20Fl",
        "name":  "Prophet of Fire",
        "type":  "Season",
        "season":  "Season of Prophecy",
        "seasonOrderIndex":  4,
        "area":  "Cave of Prophecies",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/b7/Prophecy-Spirit-Prophet-of-Fire.png",
        "treeGuid":  "u0qm82zESx",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "joPtiDGThJ",
                          "cost":  {

                                   },
                          "itemGuid":  "-9bN5PmMbs",
                          "itemName":  "Chest Pound"
                      },
                      {
                          "guid":  "OjVt26pVum",
                          "cost":  {
                                       "sc":  13
                                   },
                          "itemGuid":  "g179e4N2B0",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "2PoG81lNZs",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "oWEC_F0xLY",
                          "itemName":  "Chest Pound"
                      },
                      {
                          "guid":  "WRUldGwJY6",
                          "cost":  {
                                       "sc":  23
                                   },
                          "itemGuid":  "MPV7Sn8MqR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "15A-zFMuiQ",
                          "cost":  {
                                       "sc":  29
                                   },
                          "itemGuid":  "LMQrrhg9E8",
                          "itemName":  "Prophet of Fire Mask"
                      },
                      {
                          "guid":  "PcbojZPdeg",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "zVnzmsZF8k",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "YdHAvnBi5S",
                          "cost":  {

                                   },
                          "itemGuid":  "V9HhQcek_9",
                          "itemName":  "Prophet of Fire Outfit"
                      },
                      {
                          "guid":  "FjSfi8eZVY",
                          "cost":  {

                                   },
                          "itemGuid":  "lKskRU-rAW",
                          "itemName":  "Disappearing Ashes"
                      },
                      {
                          "guid":  "1JwVX0K6f-",
                          "cost":  {

                                   },
                          "itemGuid":  "ofbkhI0JKU",
                          "itemName":  "Chest Pound"
                      },
                      {
                          "guid":  "XQkNvt-otF",
                          "cost":  {

                                   },
                          "itemGuid":  "IRhRDSL-8R",
                          "itemName":  "Prophet of Fire Hair"
                      },
                      {
                          "guid":  "8mCPPfIryt",
                          "cost":  {

                                   },
                          "itemGuid":  "lv8aUui_2g",
                          "itemName":  "Chest Pound"
                      }
                  ],
        "nameJa":  "火の預言者"
    },
    {
        "guid":  "JWj113We5R",
        "name":  "Radiance Guide",
        "type":  "Guide",
        "season":  "Season of Radiance",
        "seasonOrderIndex":  0,
        "area":  "Aviary Shopping Area",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/b/bb/Radiance-Ultimate-Guide.png",
        "treeGuid":  "QveGTQI48L",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  22,
        "nodes":  [
                      {
                          "guid":  "30o85y24PC",
                          "cost":  {

                                   },
                          "itemGuid":  "QIps5uVewq",
                          "itemName":  "Warp"
                      },
                      {
                          "guid":  "gsLit7c3fv",
                          "cost":  {

                                   },
                          "itemGuid":  "KW23zNIOAB",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "azZO3hv0Ic",
                          "cost":  {

                                   },
                          "itemGuid":  "qZftgHp6gU",
                          "itemName":  "Radiance Ultimate Pendant"
                      },
                      {
                          "guid":  "HndDpIMu7D",
                          "cost":  {
                                       "sh":  1
                                   },
                          "itemGuid":  "-7DilSTRJc",
                          "itemName":  "Radiance Ultimate Cape"
                      },
                      {
                          "guid":  "x_zEnC5ju3",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "uSSYbcdA1j",
                          "itemName":  "Radiance Ultimate Mask"
                      },
                      {
                          "guid":  "mp-IH0OP49",
                          "cost":  {

                                   },
                          "itemGuid":  "oDcA32WC8W",
                          "itemName":  "Red dye"
                      },
                      {
                          "guid":  "7uOCDuprLh",
                          "cost":  {

                                   },
                          "itemGuid":  "PSYGfoPTf4",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "IkYMhB8lc3",
                          "cost":  {

                                   },
                          "itemGuid":  "qQp-VGymOg",
                          "itemName":  "Green dye"
                      },
                      {
                          "guid":  "II4X07t3rB",
                          "cost":  {

                                   },
                          "itemGuid":  "mkm_4wXBUW",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "NQ1hfzK0oO",
                          "cost":  {

                                   },
                          "itemGuid":  "cvOsMkY8GI",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "g87e0IWbiw",
                          "cost":  {

                                   },
                          "itemGuid":  "qrQ95DxuiF",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "qxII_XRsOw",
                          "cost":  {

                                   },
                          "itemGuid":  "BV0YXjyPMn",
                          "itemName":  "Black dye"
                      },
                      {
                          "guid":  "8lf-_-G52b",
                          "cost":  {

                                   },
                          "itemGuid":  "BUrJCAml11",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "C5gj7N9L8f",
                          "cost":  {
                                       "h":  12
                                   },
                          "itemGuid":  "EzIn2w-a7F",
                          "itemName":  "Radiance Star Cape"
                      },
                      {
                          "guid":  "Fd0D4EM66Q",
                          "cost":  {

                                   },
                          "itemGuid":  "sIl_d9jexO",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "CZutiq9Tef",
                          "cost":  {

                                   },
                          "itemGuid":  "MckZBl8YKZ",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "5k5FEbZTRr",
                          "cost":  {

                                   },
                          "itemGuid":  "X-ZEatDvCW",
                          "itemName":  "Purple dye"
                      },
                      {
                          "guid":  "TvCYJrRv_Y",
                          "cost":  {

                                   },
                          "itemGuid":  "GYEdlq522n",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "zyAHxzd9hY",
                          "cost":  {

                                   },
                          "itemGuid":  "VVYOh40dHB",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "O__j9AyTix",
                          "cost":  {

                                   },
                          "itemGuid":  "WVmBnD7MoH",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "C4TRm6jFjy",
                          "cost":  {

                                   },
                          "itemGuid":  "CZlugW79hr",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "e4zOJAc5up",
                          "cost":  {

                                   },
                          "itemGuid":  "A69vvaZvXD",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "SS7FZgJDLx",
        "name":  "Radiance Leaping Dancer",
        "type":  "Season",
        "season":  "Season of Radiance",
        "seasonOrderIndex":  1,
        "area":  "Aviary Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/5c/Radiance-Leaping-Dancer-spirit-cutout-undyed.png",
        "treeGuid":  "s8oDPElH2z",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "fwak5ju2DS",
                          "cost":  {

                                   },
                          "itemGuid":  "dQbt6Hhbt2",
                          "itemName":  "Cartwheel"
                      },
                      {
                          "guid":  "XAKy6Cw7EJ",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "ShjewpJf_F",
                          "itemName":  "Radiance Leaping Dancer Hair"
                      },
                      {
                          "guid":  "m6bOKWErAc",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "W8dMbUukJA",
                          "itemName":  "Red dye"
                      },
                      {
                          "guid":  "aUyfCqg-wQ",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "5F58AaIVnq",
                          "itemName":  "Cartwheel"
                      },
                      {
                          "guid":  "hm7gWreX8F",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "h7ohDTv_t9",
                          "itemName":  "Red dye"
                      },
                      {
                          "guid":  "s6N1bFmrB3",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "Li5WaWrfs8",
                          "itemName":  "Radiance Leaping Dancer Cape"
                      },
                      {
                          "guid":  "TCLi86-7QK",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "lh8XlTM4gO",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "9DyPG9w8tV",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "FH_-ZS7hRP",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "ggLaoAleCX",
                          "cost":  {

                                   },
                          "itemGuid":  "IhE0tBOPPO",
                          "itemName":  "Radiance Leaping Dancer Shoes"
                      },
                      {
                          "guid":  "mWEzpn3Lav",
                          "cost":  {

                                   },
                          "itemGuid":  "fhFekFrFCT",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "_uOVPw8VbR",
                          "cost":  {

                                   },
                          "itemGuid":  "sGfjk16HcV",
                          "itemName":  "Radiance Leaping Dancer Outfit"
                      },
                      {
                          "guid":  "rG_hsI7vYf",
                          "cost":  {

                                   },
                          "itemGuid":  "NMEOlrz_BB",
                          "itemName":  "Cartwheel"
                      },
                      {
                          "guid":  "EiwNbCGhWf",
                          "cost":  {

                                   },
                          "itemGuid":  "vtWiyuyUdz",
                          "itemName":  "Radiance Leaping Dancer Prop"
                      },
                      {
                          "guid":  "D6T-Bq3vyt",
                          "cost":  {

                                   },
                          "itemGuid":  "03bu0BAhWM",
                          "itemName":  "Red dye"
                      },
                      {
                          "guid":  "KQjOaBwZuZ",
                          "cost":  {

                                   },
                          "itemGuid":  "eJY1SIlP58",
                          "itemName":  "Cartwheel"
                      }
                  ],
        "nameJa":  "光に染まる飛び跳ねる舞踏家"
    },
    {
        "guid":  "xeu9NyCBVR",
        "name":  "Radiance Provoking Performer",
        "type":  "Season",
        "season":  "Season of Radiance",
        "seasonOrderIndex":  2,
        "area":  "Aviary Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fb/Radiance-Provoking-Performer-spirit-cutout-undyed.png",
        "treeGuid":  "wFupf-tJk-",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "sYaDAtoEsB",
                          "cost":  {

                                   },
                          "itemGuid":  "RGlZJsszfy",
                          "itemName":  "Hype Dance"
                      },
                      {
                          "guid":  "WhOCWtcvun",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "x_jAhpDuM6",
                          "itemName":  "Green dye"
                      },
                      {
                          "guid":  "tK2hI6yIiY",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "sDXFgUQdS_",
                          "itemName":  "Green dye"
                      },
                      {
                          "guid":  "dG09_cqJk5",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "qMmwAmx6t3",
                          "itemName":  "Hype Dance"
                      },
                      {
                          "guid":  "-IRJrAUsNa",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "St7IlVNQvN",
                          "itemName":  "Radiance Provoking Performer Outfit"
                      },
                      {
                          "guid":  "AZFvldephr",
                          "cost":  {
                                       "sc":  32
                                   },
                          "itemGuid":  "xtXnA0vykD",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "liUf7scffv",
                          "cost":  {
                                       "sc":  38
                                   },
                          "itemGuid":  "sQ83oxC51R",
                          "itemName":  "Radiance Provoking Performer Shoes"
                      },
                      {
                          "guid":  "y-OYj2OyT-",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "8KgF9b3nP1",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "BAg6F-d1e7",
                          "cost":  {

                                   },
                          "itemGuid":  "LDZBzIvyvc",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "z9ta4K8e1M",
                          "cost":  {

                                   },
                          "itemGuid":  "EpgewHD2PP",
                          "itemName":  "Radiance Provoking Performer Cape"
                      },
                      {
                          "guid":  "MhuJRG0V5i",
                          "cost":  {

                                   },
                          "itemGuid":  "PZ8bGWrhcT",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "sJWnGpODqr",
                          "cost":  {

                                   },
                          "itemGuid":  "NIlHg4K6Aj",
                          "itemName":  "Hype Dance"
                      },
                      {
                          "guid":  "VOu2EBzHut",
                          "cost":  {

                                   },
                          "itemGuid":  "sQ7RAL1GWd",
                          "itemName":  "Cymbals"
                      },
                      {
                          "guid":  "r4k_989hLR",
                          "cost":  {

                                   },
                          "itemGuid":  "InHKlMA2mI",
                          "itemName":  "Radiance Provoking Performer Head Accessory"
                      },
                      {
                          "guid":  "ZcoNWNZ0SD",
                          "cost":  {

                                   },
                          "itemGuid":  "RJYipqAex1",
                          "itemName":  "Hype Dance"
                      }
                  ],
        "nameJa":  "光に染まる挑戦的な表現者"
    },
    {
        "guid":  "JpMqGkF6E1",
        "name":  "Radiance Greeting Shaman",
        "type":  "Season",
        "season":  "Season of Radiance",
        "seasonOrderIndex":  3,
        "area":  "Aviary Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/6a/Radiance-Greeting-Shaman-spirit-cutout-original.png",
        "treeGuid":  "AUH6M6CbGC",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "IbnYlt3G_Q",
                          "cost":  {

                                   },
                          "itemGuid":  "qDB58HGvTy",
                          "itemName":  "Heart Gesture"
                      },
                      {
                          "guid":  "hpAaNeBYmt",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "g845DuQ_3R",
                          "itemName":  "Radiance Greeting Shaman Hair Accessory"
                      },
                      {
                          "guid":  "aqfgXOBWVj",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "7OjV1mBJZ_",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "2_wWUVxY2d",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "bRMaUHVgLV",
                          "itemName":  "Heart Gesture"
                      },
                      {
                          "guid":  "ok2O4fMX7k",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "tZbriGwH75",
                          "itemName":  "Purple dye"
                      },
                      {
                          "guid":  "9hsNYN-ss5",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "5fUF9wGrq6",
                          "itemName":  "Radiance Greeting Shaman Hair"
                      },
                      {
                          "guid":  "nJ56QHW1Y7",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "E4PUIiNNoR",
                          "itemName":  "Purple dye"
                      },
                      {
                          "guid":  "XpxyxbO9n6",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "eMCBop7FcK",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "5ZiGXAun5E",
                          "cost":  {

                                   },
                          "itemGuid":  "vXeFHcV4TF",
                          "itemName":  "Radiance Greeting Shaman Outfit"
                      },
                      {
                          "guid":  "7-QRbqNbRk",
                          "cost":  {

                                   },
                          "itemGuid":  "JEKAfkQIy5",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "n9NeKGN6FT",
                          "cost":  {

                                   },
                          "itemGuid":  "PEXg4JbIkv",
                          "itemName":  "Black dye"
                      },
                      {
                          "guid":  "xygRem3rjq",
                          "cost":  {

                                   },
                          "itemGuid":  "EgXEoQi_oL",
                          "itemName":  "Heart Gesture"
                      },
                      {
                          "guid":  "UkrtPPjkeU",
                          "cost":  {

                                   },
                          "itemGuid":  "f_zLnkPaIu",
                          "itemName":  "Cyan dye"
                      },
                      {
                          "guid":  "sF9QZyvuRy",
                          "cost":  {

                                   },
                          "itemGuid":  "T3gGkwzteP",
                          "itemName":  "Blue dye"
                      },
                      {
                          "guid":  "oiY0OM3py4",
                          "cost":  {

                                   },
                          "itemGuid":  "ACux91j53E",
                          "itemName":  "Heart Gesture"
                      }
                  ],
        "nameJa":  "光に染まる礼を尽くす祈祷師"
    },
    {
        "guid":  "ZGSnOxK9gb",
        "name":  "Remembrance Guide",
        "type":  "Guide",
        "season":  "Season of Remembrance",
        "seasonOrderIndex":  0,
        "area":  "Repository of Refuge",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f5/SoRemembrance-Ultimate-guide.png",
        "treeGuid":  "fchA5IwiRm",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  30,
        "nodes":  [
                      {
                          "guid":  "N8gfMfr2VV",
                          "cost":  {

                                   },
                          "itemGuid":  "c0KdEygWIK",
                          "itemName":  "Remembrance Warp"
                      },
                      {
                          "guid":  "P2qOpSJX96",
                          "cost":  {

                                   },
                          "itemGuid":  "YU30BrQAM1",
                          "itemName":  "Remembrance Ultimate Pendant"
                      },
                      {
                          "guid":  "PhQTB1_FIi",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "IKrJLeNVIL",
                          "itemName":  "Remembrance Ultimate Sash"
                      },
                      {
                          "guid":  "ePwOq1TrlQ",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "x-JyLNAyBY",
                          "itemName":  "Remembrance Ultimate Manta Projector"
                      },
                      {
                          "guid":  "XPsU7JBKX1",
                          "cost":  {

                                   },
                          "itemGuid":  "lia3qGhqvA",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "mtWzBJJ0lW",
                          "cost":  {

                                   },
                          "itemGuid":  "vOXpY0l3FA",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "RWSirQBakW",
                          "cost":  {

                                   },
                          "itemGuid":  "wckdW6fsjv",
                          "itemName":  "High Five"
                      },
                      {
                          "guid":  "SK596flYgj",
                          "cost":  {

                                   },
                          "itemGuid":  "uMOURZju5o",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "2Je2UFXX6e",
                          "cost":  {

                                   },
                          "itemGuid":  "LHvJcN3c1o",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "uiqYitgJ-o",
                          "cost":  {

                                   },
                          "itemGuid":  "fbbjgWF330",
                          "itemName":  "Double-Five"
                      },
                      {
                          "guid":  "b3FZ_Etl0g",
                          "cost":  {

                                   },
                          "itemGuid":  "TMVanCtb1T",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "vweBknGrU8",
                          "cost":  {

                                   },
                          "itemGuid":  "Pf7HGPSK2I",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "TGp1ycoE2F",
                          "cost":  {

                                   },
                          "itemGuid":  "2pixQYfTCD",
                          "itemName":  "Quest 7"
                      },
                      {
                          "guid":  "KiSGtMgw-T",
                          "cost":  {

                                   },
                          "itemGuid":  "xpntoR6DSl",
                          "itemName":  "Quest 8"
                      },
                      {
                          "guid":  "Z-hLvl-U_c",
                          "cost":  {
                                       "h":  17
                                   },
                          "itemGuid":  "TV24ErY4KC",
                          "itemName":  "Remembrance Manta Plush"
                      },
                      {
                          "guid":  "YDygyIriIZ",
                          "cost":  {

                                   },
                          "itemGuid":  "tJB9vtMmBJ",
                          "itemName":  "Hug"
                      },
                      {
                          "guid":  "yec71Z4yCr",
                          "cost":  {

                                   },
                          "itemGuid":  "bU0whqWAde",
                          "itemName":  "Quest 9"
                      },
                      {
                          "guid":  "zujB8mhxjY",
                          "cost":  {

                                   },
                          "itemGuid":  "4a7FBf31jp",
                          "itemName":  "Quest 10"
                      },
                      {
                          "guid":  "UYsfk-k1iM",
                          "cost":  {

                                   },
                          "itemGuid":  "tCEMb-VdXV",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "U11yzNJK8O",
                          "cost":  {

                                   },
                          "itemGuid":  "4B5cAwYmjl",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "jZajkyoRrR",
                          "cost":  {
                                       "h":  19
                                   },
                          "itemGuid":  "6jVOMj3-8W",
                          "itemName":  "Remembrance Crab Plush"
                      },
                      {
                          "guid":  "KbrXnz9HFX",
                          "cost":  {

                                   },
                          "itemGuid":  "8RhUhFkRd5",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "2RY_WCti4R",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "h81gLcnMDK",
                          "itemName":  "Remembrance Potted Plant"
                      },
                      {
                          "guid":  "1JWBlZuNl3",
                          "cost":  {

                                   },
                          "itemGuid":  "IRDLs3NTMx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "no5jU88Ajm",
                          "cost":  {

                                   },
                          "itemGuid":  "Hgv4K5wpAl",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "5_uZFtIrJ6",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "Fj9LJn7tW7",
                          "itemName":  "Remembrance Kettle"
                      },
                      {
                          "guid":  "p-kVey7GM4",
                          "cost":  {

                                   },
                          "itemGuid":  "YY8sLMjHTu",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "vacnfOut5S",
                          "cost":  {

                                   },
                          "itemGuid":  "p3BbbHjDD9",
                          "itemName":  "Shared Space Spell"
                      },
                      {
                          "guid":  "9a89Ps76ae",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "Nu-xXrnsmW",
                          "itemName":  "Remembrance Chimes Prop"
                      },
                      {
                          "guid":  "DPspPCXE1w",
                          "cost":  {

                                   },
                          "itemGuid":  "7l65NNSJgu",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "O1olUBrkJ5",
        "name":  "Bereft Veteran",
        "type":  "Season",
        "season":  "Season of Remembrance",
        "seasonOrderIndex":  1,
        "area":  "Repository of Refuge",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/86/Remembrance-Spirit-Bereft-Veteran.png",
        "treeGuid":  "zWD_AxgIGC",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "9bB4SRcAvm",
                          "cost":  {

                                   },
                          "itemGuid":  "8PJqQ9WsHo",
                          "itemName":  "Grieving"
                      },
                      {
                          "guid":  "D9E3jEaX2r",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "woyw0Ddh2s",
                          "itemName":  "Bereft Veteran Mask"
                      },
                      {
                          "guid":  "MpyjR7J9Ve",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "ElEP5sqzhv",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "UhtmiqYiVU",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "FIaYs2Unva",
                          "itemName":  "Grieving"
                      },
                      {
                          "guid":  "JliH0Y6KM2",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "aVXNBBz0Qs",
                          "itemName":  "Bereft Veteran Cape"
                      },
                      {
                          "guid":  "9MbT9T5RFB",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "ALJDKgSPvx",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "yXExfyJtn3",
                          "cost":  {

                                   },
                          "itemGuid":  "UfkQ77aqyH",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "3d0Cv6Gktc",
                          "cost":  {

                                   },
                          "itemGuid":  "Wu1J2yazsw",
                          "itemName":  "Grieving"
                      },
                      {
                          "guid":  "cHfZ6rUTzC",
                          "cost":  {

                                   },
                          "itemGuid":  "3Ja8-MaUke",
                          "itemName":  "Bereft Veteran Hair"
                      },
                      {
                          "guid":  "3LYsu9qlvV",
                          "cost":  {

                                   },
                          "itemGuid":  "P4dn6-tr_h",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "5KZRvL0rW8",
                          "cost":  {

                                   },
                          "itemGuid":  "ms8gAS7UHk",
                          "itemName":  "Grieving"
                      }
                  ],
        "nameJa":  "喪失の初老"
    },
    {
        "guid":  "V43JRVL_QD",
        "name":  "Pleading Child",
        "type":  "Season",
        "season":  "Season of Remembrance",
        "seasonOrderIndex":  2,
        "area":  "Repository of Refuge",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/3c/Remembrance-Spirit-Pleading-Child.png",
        "treeGuid":  "2TNahX09bx",
        "treeSource":  "revisit",
        "revisitDate":  "2025-01-13",
        "revisitName":  "Special Visit #7",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "3PI4Zls_LB",
                          "cost":  {

                                   },
                          "itemGuid":  "6H4WC7Aipv",
                          "itemName":  "Pleading"
                      },
                      {
                          "guid":  "21n-WE2bfP",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "VFAQfNQAa1",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "TZswE9GUGQ",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "FEq7qn8AsB",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "caLGQCUnGW",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "XuA72vTV73",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "bp8KvfPOM_",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "LWXpz1a8d_",
                          "itemName":  "Pleading"
                      },
                      {
                          "guid":  "Sbkdgjit2A",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "YhUljaXiBq",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "BTHhZzbCSl",
                          "cost":  {
                                       "c":  30
                                   },
                          "itemGuid":  "2LXsbFTewq",
                          "itemName":  "Pleading Child Shoes"
                      },
                      {
                          "guid":  "0rkkWAe1ev",
                          "cost":  {
                                       "c":  60
                                   },
                          "itemGuid":  "CfVWayXiTh",
                          "itemName":  "Pleading Child Hair"
                      },
                      {
                          "guid":  "UsbnCUXzwf",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "eP_tdKr4R7",
                          "itemName":  "Pleading Child Outfit"
                      },
                      {
                          "guid":  "mQn6R7YJeO",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "xiAEktyuKT",
                          "itemName":  "Pleading"
                      },
                      {
                          "guid":  "Mk0-EzDuNp",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "-uVJsYJF-Z",
                          "itemName":  "Pleading Child Scarf"
                      },
                      {
                          "guid":  "JWAk201wpb",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "oxlHVEQ-KD",
                          "itemName":  "Pleading"
                      }
                  ],
        "nameJa":  "懇願する幼子"
    },
    {
        "guid":  "DAG_zfwis5",
        "name":  "Tiptoeing Tea-Brewer",
        "type":  "Season",
        "season":  "Season of Remembrance",
        "seasonOrderIndex":  3,
        "area":  "Repository of Refuge",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/ea/Remembrance-Spirit-Tiptoeing-Tea-Brewer.png",
        "treeGuid":  "IC3TtVJ-YG",
        "treeSource":  "revisit",
        "revisitDate":  "2025-08-18",
        "revisitName":  "Special Visit #10",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "-ZhSv-b7rD",
                          "cost":  {

                                   },
                          "itemGuid":  "8Pr0VtDhsh",
                          "itemName":  "Tiptoeing"
                      },
                      {
                          "guid":  "RYMPhdf4SM",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "CU0LE7Z846",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "cR2ECzhE62",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "oCHrIFKBfA",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "6H_V9i-YrC",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "xJTcpGbUys",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "G49Uq_6zwv",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "ilnoN5oAS7",
                          "itemName":  "Tiptoeing"
                      },
                      {
                          "guid":  "p_dz8HU1ha",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "CXAYBQeni9",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "DURwAPcTTv",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "XimZaRVH06",
                          "itemName":  "Tiptoeing Tea-Brewer Cape"
                      },
                      {
                          "guid":  "hH4rrFTQX5",
                          "cost":  {
                                       "c":  55
                                   },
                          "itemGuid":  "4tYFGTPkMo",
                          "itemName":  "Tiptoeing Tea-Brewer Outfit"
                      },
                      {
                          "guid":  "Lel-amlaW2",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "S3meQvWoGC",
                          "itemName":  "Tiptoeing"
                      },
                      {
                          "guid":  "uq7sopygBv",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "XOnAJpU3ZZ",
                          "itemName":  "Tiptoeing Tea-Brewer Hair"
                      },
                      {
                          "guid":  "8I-xHlZ4z_",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "-XSUgHYCU-",
                          "itemName":  "Tiptoeing"
                      }
                  ],
        "nameJa":  "ぬき足の茶人"
    },
    {
        "guid":  "zq6qjCsQ_f",
        "name":  "Wounded Warrior",
        "type":  "Season",
        "season":  "Season of Remembrance",
        "seasonOrderIndex":  4,
        "area":  "Repository of Refuge",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d8/Remembrance-Spirit-Wounded-Warrior.png",
        "treeGuid":  "t8rUtsegue",
        "treeSource":  "revisit",
        "revisitDate":  "2025-08-18",
        "revisitName":  "Special Visit #10",
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "zMb4Br_Xjk",
                          "cost":  {

                                   },
                          "itemGuid":  "6dT44er9LL",
                          "itemName":  "Injured Stance"
                      },
                      {
                          "guid":  "B83m2saxxD",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "y16WNw3qVP",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "MK4y3A1eRY",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "aw5NtaaXCU",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "vpwDiUEAsN",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "WLoAdVsvIW",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "d-iZKr2f0A",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Q5VIpSkhzr",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "mAgyNCTyuE",
                          "cost":  {
                                       "c":  80
                                   },
                          "itemGuid":  "IA0nV9vsgZ",
                          "itemName":  "Wounded Warrior Cape"
                      },
                      {
                          "guid":  "Dk4pdrsZ8A",
                          "cost":  {
                                       "c":  60
                                   },
                          "itemGuid":  "XPEhyUKiiy",
                          "itemName":  "Wounded Warrior Outfit"
                      },
                      {
                          "guid":  "t8cq5NAmf_",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "3k0FrWDlWs",
                          "itemName":  "Wounded Warrior Mask"
                      }
                  ],
        "nameJa":  "傷ついた戦士"
    },
    {
        "guid":  "0Ab0zVwBa0",
        "name":  "Hopeful Steward",
        "type":  "Guide",
        "season":  "Season of Revival",
        "seasonOrderIndex":  0,
        "area":  "Aviary Village",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c1/Hopeful-Steward-Revival-Guide.png",
        "treeGuid":  "tzCvlmC_Oc",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  22,
        "nodes":  [
                      {
                          "guid":  "SqgpIRZYPo",
                          "cost":  {

                                   },
                          "itemGuid":  "ueFGjjCL-f",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "TBbnCj-1EG",
                          "cost":  {

                                   },
                          "itemGuid":  "9giKaCTtFV",
                          "itemName":  "Revival Ultimate Pendant"
                      },
                      {
                          "guid":  "_JCjS6YPaL",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "MhNSP7HiqL",
                          "itemName":  "Revival Ultimate Hair"
                      },
                      {
                          "guid":  "lTjGn2SRZi",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "Du0Ciu8WX7",
                          "itemName":  "Revival Ultimate Cape"
                      },
                      {
                          "guid":  "5P-YD46er8",
                          "cost":  {

                                   },
                          "itemGuid":  "5pM1uL5euH",
                          "itemName":  "Quest 2 (removed 0.25.0)"
                      },
                      {
                          "guid":  "yPDj9Nzra2",
                          "cost":  {

                                   },
                          "itemGuid":  "UtjY-O5GfN",
                          "itemName":  "Quest 2 (removed 0.33.5)"
                      },
                      {
                          "guid":  "qppPvGxysH",
                          "cost":  {

                                   },
                          "itemGuid":  "RrWXNJ8_8U",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "zsHiXFV6-J",
                          "cost":  {

                                   },
                          "itemGuid":  "LPhMFiY1Gn",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "cc8L8m_CuD",
                          "cost":  {

                                   },
                          "itemGuid":  "BkvIh_1cID",
                          "itemName":  "Hug"
                      },
                      {
                          "guid":  "awAVjwpnLV",
                          "cost":  {

                                   },
                          "itemGuid":  "2htYztTTLh",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "U0uXmgAWHz",
                          "cost":  {

                                   },
                          "itemGuid":  "7NBQOMY8Os",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "kazCCn5l81",
                          "cost":  {

                                   },
                          "itemGuid":  "LKCSYIoEKs",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "GvQYmrm3I4",
                          "cost":  {

                                   },
                          "itemGuid":  "6J0eF-rleF",
                          "itemName":  "Quest 8"
                      },
                      {
                          "guid":  "axm6cIGH9g",
                          "cost":  {
                                       "c":  46
                                   },
                          "itemGuid":  "xB3Auq2DFR",
                          "itemName":  "Hopeful Steward Hair"
                      },
                      {
                          "guid":  "NuB6nNH_xB",
                          "cost":  {

                                   },
                          "itemGuid":  "C2QyP140Rm",
                          "itemName":  "Quest 7"
                      },
                      {
                          "guid":  "PtNSaTv8T6",
                          "cost":  {

                                   },
                          "itemGuid":  "N2BbtfMv-4",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "f098XoIlTv",
                          "cost":  {

                                   },
                          "itemGuid":  "_5Z1Ee33iH",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "uqUmwjtZHr",
                          "cost":  {

                                   },
                          "itemGuid":  "9ZSG_CwRwt",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "7som6eEg9Q",
                          "cost":  {

                                   },
                          "itemGuid":  "-O5kRr08TU",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "02jLOEWgL4",
                          "cost":  {

                                   },
                          "itemGuid":  "x9W_UOZ61W",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "xw8QS2IQ3i",
                          "cost":  {

                                   },
                          "itemGuid":  "BXWuIYsB6a",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "eJ8DUOwjmI",
                          "cost":  {

                                   },
                          "itemGuid":  "iPKhdXjEDN",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "53sRWu-bTI",
        "name":  "Vestige of a Deserted Oasis",
        "type":  "Season",
        "season":  "Season of Revival",
        "seasonOrderIndex":  1,
        "area":  "Revival Season Shop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/1c/Vestige-of-a-Deserted-Oasis-Shop.png",
        "treeGuid":  "2nOP2DL8MC",
        "treeSource":  "revisit",
        "revisitDate":  "2026-06-19",
        "revisitName":  "Special Visit #13",
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "f_-qHiCoCL",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "MaAIvE7uun",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "SX2AGNLa67",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "Xo0IQZsjLZ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "09R8NNXzRJ",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "dhASp5daBL",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "RWAJnraj0I",
                          "cost":  {
                                       "c":  61
                                   },
                          "itemGuid":  "oVI6Qp4U_2",
                          "itemName":  "Vestige of a Deserted Oasis Cape"
                      },
                      {
                          "guid":  "rPtUyxqjkR",
                          "cost":  {
                                       "c":  22
                                   },
                          "itemGuid":  "c8bmChuIm9",
                          "itemName":  "Vestige of a Deserted Oasis Shoes"
                      },
                      {
                          "guid":  "QMhKSdzRTj",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "SuYJ2QcMi9",
                          "itemName":  "Vestige of a Deserted Oasis Hair"
                      }
                  ],
        "nameJa":  "見捨てられた隠れ家の残響"
    },
    {
        "guid":  "yRKMk_Xw4G",
        "name":  "Memory of a Lost Village",
        "type":  "Season",
        "season":  "Season of Revival",
        "seasonOrderIndex":  2,
        "area":  "Revival Season Shop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2f/Memory-of-a-Lost-Village-Shop.png",
        "treeGuid":  "6c1vZR7GTd",
        "treeSource":  "revisit",
        "revisitDate":  "2026-06-19",
        "revisitName":  "Special Visit #13",
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "El_GluDy7d",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "IrDGlTPHpf",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "ZGwbzXnhY6",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SjonIxqnQx",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Z3HOdxPT_U",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "t4W5lvV4gS",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "hyD5LWN9cG",
                          "cost":  {
                                       "c":  77
                                   },
                          "itemGuid":  "0RcW7pTxDH",
                          "itemName":  "Memory of a Lost Village Cape"
                      },
                      {
                          "guid":  "lOfV5hfh7z",
                          "cost":  {
                                       "c":  63
                                   },
                          "itemGuid":  "EI1hvJB4Pu",
                          "itemName":  "Memory of a Lost Village Outfit"
                      },
                      {
                          "guid":  "WGCAvqnFoQ",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "Ym_ptDkaZQ",
                          "itemName":  "Memory of a Lost Village Hair"
                      }
                  ],
        "nameJa":  "忘れ去られた楽園のなごり"
    },
    {
        "guid":  "118ghc8_me",
        "name":  "Echo of an Abandoned Refuge",
        "type":  "Season",
        "season":  "Season of Revival",
        "seasonOrderIndex":  3,
        "area":  "Revival Season Shop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c0/Echo-of-an-Abandoned-Refuge-Shop.png",
        "treeGuid":  "mQMdpeGPo_",
        "treeSource":  "revisit",
        "revisitDate":  "2026-06-19",
        "revisitName":  "Special Visit #13",
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "RUZ9WJaoyF",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Dv15Vv7JmA",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "brAjeMdkFN",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "Q484PDQ8g5",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "qhw-MRJfbL",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "MAO2jectGH",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "D1zxtRL-Za",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "r7n2STEeMu",
                          "itemName":  "A Quiet Walk"
                      },
                      {
                          "guid":  "6U22Qbbb4U",
                          "cost":  {
                                       "c":  43
                                   },
                          "itemGuid":  "KPTK5xLHw5",
                          "itemName":  "Echo of an Abandoned Refuge Hat"
                      },
                      {
                          "guid":  "zX5tWK_Rmu",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "fBi8GUvjF_",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "MJuKpNVV7Y",
                          "cost":  {
                                       "c":  68
                                   },
                          "itemGuid":  "bXIUFu8eZ3",
                          "itemName":  "Echo of an Abandoned Refuge Cape"
                      },
                      {
                          "guid":  "FcH_PprXno",
                          "cost":  {
                                       "c":  31
                                   },
                          "itemGuid":  "Yf9KTdBF0m",
                          "itemName":  "Echo of an Abandoned Refuge Shoes"
                      }
                  ],
        "nameJa":  "寂れたオアシスの面影"
    },
    {
        "guid":  "iz40tYocEn",
        "name":  "Remnant of a Forgotten Haven",
        "type":  "Season",
        "season":  "Season of Revival",
        "seasonOrderIndex":  4,
        "area":  "Revival Season Shop",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/86/Remnant-of-a-Forgotten-Haven-Shop.png",
        "treeGuid":  "5Qj3ImwlMr",
        "treeSource":  "revisit",
        "revisitDate":  "2026-06-19",
        "revisitName":  "Special Visit #13",
        "isTiered":  false,
        "nodeCount":  6,
        "nodes":  [
                      {
                          "guid":  "GeXq9uapdT",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "xpTy8a61UM",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "gnxsW2gO8y",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "ZqH6h7-Ce7",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "yOLjMexvA0",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "HN6bDy-5Vk",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "mk5mOKzeoX",
                          "cost":  {
                                       "c":  47
                                   },
                          "itemGuid":  "O3iQEnpoV5",
                          "itemName":  "Remnant of a Forgotten Haven Hair Ribbon"
                      },
                      {
                          "guid":  "UU1jeKr_87",
                          "cost":  {
                                       "c":  63
                                   },
                          "itemGuid":  "BudEUoZ6ZC",
                          "itemName":  "Remnant of a Forgotten Haven Cape"
                      },
                      {
                          "guid":  "9PiMk3fjwQ",
                          "cost":  {
                                       "c":  29
                                   },
                          "itemGuid":  "94Mo00bQ8p",
                          "itemName":  "Remnant of a Forgotten Haven Shoes"
                      }
                  ],
        "nameJa":  "失われし村の記憶"
    },
    {
        "guid":  "zldsm5S962",
        "name":  "Rhythm Guide",
        "type":  "Guide",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  0,
        "area":  null,
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/6/68/Rhythm-Guide-Spirit.png",
        "treeGuid":  "Qg7qDyBGmz",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  3,
        "nodes":  [
                      {
                          "guid":  "gahXCMXhRk",
                          "cost":  {

                                   },
                          "itemGuid":  "Xbz7dLYzOi",
                          "itemName":  "Rhythm Ultimate Pendant"
                      },
                      {
                          "guid":  "f_s2BUACQM",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "l948FBq_MN",
                          "itemName":  "Rhythm Ultimate Mask"
                      },
                      {
                          "guid":  "0Nch2ACn4Y",
                          "cost":  {
                                       "sh":  4
                                   },
                          "itemGuid":  "wXiFi4y6YU",
                          "itemName":  "Rhythm Ultimate Hair"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "Q5pn7wxwUD",
        "name":  "Troupe Greeter",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  1,
        "area":  "Temple of the Isle Entrance",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/56/Rhythm-Spirit-Troupe-Greeter.png",
        "treeGuid":  "SWBKW2vcEc",
        "treeSource":  "revisit",
        "revisitDate":  "2023-08-07",
        "revisitName":  "Special Visit #4",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "qoew2jYQLu",
                          "cost":  {

                                   },
                          "itemGuid":  "T9ZZMbXM0p",
                          "itemName":  "Welcome"
                      },
                      {
                          "guid":  "eVSZTd5UOi",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GbIQpDNVKS",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "His0m6iC_j",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "gOrgKYIV3P",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "rgm9CE6XFB",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "Pe1Hflmudo",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "AXD7HzlV2z",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "8p1dB9WsP1",
                          "itemName":  "Welcome"
                      },
                      {
                          "guid":  "JzSPrUMpet",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7gjw9rjbK9",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "jTQHWinNTp",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "SekRzXgjfv",
                          "itemName":  "Troupe Greeter Mask"
                      },
                      {
                          "guid":  "rzuSTdqEfX",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "T4suf1MdTj",
                          "itemName":  "Troupe Greeter Outfit"
                      },
                      {
                          "guid":  "dpF3nW6NWc",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "T835b5bBNS",
                          "itemName":  "Welcome"
                      },
                      {
                          "guid":  "zlZ8PUytxL",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "ixu-bQFMqR",
                          "itemName":  "Floating Bubbles"
                      },
                      {
                          "guid":  "e1U_Uhhyf7",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "Lpi2B9yp7E",
                          "itemName":  "Welcome"
                      }
                  ],
        "nameJa":  "一座の進行役"
    },
    {
        "guid":  "PYsLThJYPx",
        "name":  "Festival Spin Dancer",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  2,
        "area":  "Bird Nest",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/3/35/Rhythm-Spirit-Festival-Spin-Dancer.png",
        "treeGuid":  "61W5eVdFni",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "QsIyX1p15K",
                          "cost":  {

                                   },
                          "itemGuid":  "72q94N8VCj",
                          "itemName":  "Spin Dance"
                      },
                      {
                          "guid":  "8WTjr99H6h",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "Uo7t1apko6",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "P4YBo28dO3",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "ZaNb7p2iqw",
                          "itemName":  "Spin Dance"
                      },
                      {
                          "guid":  "TJyaFQj6PM",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "stQCebAgsm",
                          "itemName":  "Festival Spin Dancer Hair"
                      },
                      {
                          "guid":  "p4WbwV5nhp",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "sM8bW--Gst",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "nXYfAxDneR",
                          "cost":  {

                                   },
                          "itemGuid":  "kmgKsVBs4o",
                          "itemName":  "Festival Spin Dancer Outfit"
                      },
                      {
                          "guid":  "_XObomPXb7",
                          "cost":  {

                                   },
                          "itemGuid":  "9v5mmfY2I4",
                          "itemName":  "Spin Dance"
                      },
                      {
                          "guid":  "g3QNfhMSJd",
                          "cost":  {

                                   },
                          "itemGuid":  "4XuHymnqlr",
                          "itemName":  "Spinning Thoughts"
                      },
                      {
                          "guid":  "vm-4ZZVAEE",
                          "cost":  {

                                   },
                          "itemGuid":  "Uszoh-ONkR",
                          "itemName":  "Spin Dance"
                      }
                  ],
        "nameJa":  "祝祭の旋舞家"
    },
    {
        "guid":  "RUGuLBBPcg",
        "name":  "Admiring Actor",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  3,
        "area":  "Boneyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/2f/Rhythm-Spirit-Admiring-Actor.png",
        "treeGuid":  "4biI_rOvS2",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "mnR3OjpKYr",
                          "cost":  {

                                   },
                          "itemGuid":  "mYHK8KGcDb",
                          "itemName":  "Blow Kiss"
                      },
                      {
                          "guid":  "mG92N4wk5I",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "023wYIm0DT",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "wIdOs-ivaM",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "R62rXvPti6",
                          "itemName":  "Blow Kiss"
                      },
                      {
                          "guid":  "98ykBCV2y_",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "uMURxUHDKr",
                          "itemName":  "Admiring Actor Outfit"
                      },
                      {
                          "guid":  "Xk9ZOQxEfH",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "aiHkWPkE3L",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "OzoAoNeawh",
                          "cost":  {

                                   },
                          "itemGuid":  "xOj2WwukD8",
                          "itemName":  "Admiring Actor Mask"
                      },
                      {
                          "guid":  "DYhQ2O7K9s",
                          "cost":  {

                                   },
                          "itemGuid":  "X1oM2uVzop",
                          "itemName":  "Blow Kiss"
                      },
                      {
                          "guid":  "Im5frU4TAr",
                          "cost":  {

                                   },
                          "itemGuid":  "GEC1VNDUG2",
                          "itemName":  "Lighting the Way"
                      },
                      {
                          "guid":  "4WjBL4OKZ0",
                          "cost":  {

                                   },
                          "itemGuid":  "DQhS5AkEKu",
                          "itemName":  "Blow Kiss"
                      }
                  ],
        "nameJa":  "うっとりするような旅役者"
    },
    {
        "guid":  "9y_5scrYa9",
        "name":  "Troupe Juggler",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  4,
        "area":  "Frozen Lake",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/56/Rhythm-Spirit-Troupe-Juggler.png",
        "treeGuid":  "9MRZQVLIT2",
        "treeSource":  "revisit",
        "revisitDate":  "2025-01-13",
        "revisitName":  "Special Visit #7",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "gXYiRrAJFc",
                          "cost":  {

                                   },
                          "itemGuid":  "bcJTF4AAEe",
                          "itemName":  "Juggle"
                      },
                      {
                          "guid":  "HKCFeunpJa",
                          "cost":  {
                                       "h":  14
                                   },
                          "itemGuid":  "J4SWAguEQD",
                          "itemName":  "Troupe Juggler Prop"
                      },
                      {
                          "guid":  "XMd3U9mVv3",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "QC2E3iIpQB",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "683pZXLGsm",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "AzgiEH8D4t",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "XtJR96GLr0",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "F9m8tlM-EH",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "xSXdDkcLBI",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "S9zHdixzVO",
                          "itemName":  "Juggle"
                      },
                      {
                          "guid":  "V8hIRpTbIN",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "l4AT0gf-aR",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "tsh0OsZRcm",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "52NbrdHrAf",
                          "itemName":  "Troupe Juggler Outfit"
                      },
                      {
                          "guid":  "3XylFWD7g2",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "MIKr5rkFuk",
                          "itemName":  "Troupe Juggler Cape"
                      },
                      {
                          "guid":  "4J37m5zY1Z",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "HlohlGb5MA",
                          "itemName":  "Juggle"
                      },
                      {
                          "guid":  "jaxbzjR2Qx",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "hsTWje5YU_",
                          "itemName":  "Troupe Juggler Hair"
                      },
                      {
                          "guid":  "RRA3njYT2c",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "rt7_sCQiHh",
                          "itemName":  "Juggle"
                      }
                  ],
        "nameJa":  "一座の曲芸師"
    },
    {
        "guid":  "OJECJaFI5p",
        "name":  "Respectful Pianist",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  5,
        "area":  "The Graveyard",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/8a/Rhythm-Spirit-Respectful-Pianist.png",
        "treeGuid":  "Z_9kLMM40B",
        "treeSource":  "revisit",
        "revisitDate":  "2023-07-03",
        "revisitName":  "Special Visit #3",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "LcfK6L-cii",
                          "cost":  {

                                   },
                          "itemGuid":  "g3peZ7bo5z",
                          "itemName":  "Respect"
                      },
                      {
                          "guid":  "JdneZVaMk4",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "yzAU4AmksH",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "J_cdOWolr4",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "kKmbn6_yY5",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "8ymMOQauF0",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "TbSbFkTkre",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "ce7cpPBxcW",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "DYLsc2p_1T",
                          "itemName":  "Respect"
                      },
                      {
                          "guid":  "lK1Lkbn25c",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "PlN5rXjRFt",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "4arGPbML1O",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "Wr27LIf-FU",
                          "itemName":  "Respectful Pianist Mask"
                      },
                      {
                          "guid":  "QKwcBtLjVA",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "M1MCfh7sVo",
                          "itemName":  "Winter Piano"
                      },
                      {
                          "guid":  "Y3TVH8uZQ1",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "khMbyOBwco",
                          "itemName":  "Respect"
                      },
                      {
                          "guid":  "joq2zmumHE",
                          "cost":  {
                                       "c":  26
                                   },
                          "itemGuid":  "mK47aJa3Uy",
                          "itemName":  "Respectful Pianist Hair"
                      },
                      {
                          "guid":  "Z5Ux8L2VWb",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "4hiIWJy7qv",
                          "itemName":  "Respect"
                      }
                  ],
        "nameJa":  "敬意を表す楽師"
    },
    {
        "guid":  "CH6e-TQz6n",
        "name":  "Thoughtful Director",
        "type":  "Season",
        "season":  "Season of Rhythm",
        "seasonOrderIndex":  6,
        "area":  "Vault Rest",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/27/Rhythm-Spirit-Thoughtful-Director.png",
        "treeGuid":  "GLaxu7pDA1",
        "treeSource":  "revisit",
        "revisitDate":  "2023-07-03",
        "revisitName":  "Special Visit #3",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "2BnbI8iGU9",
                          "cost":  {

                                   },
                          "itemGuid":  "qwrbhllE1N",
                          "itemName":  "Thinking"
                      },
                      {
                          "guid":  "DnISBxmDe7",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "_QvFsX4gGf",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "3MYTn10E3S",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "jRziaKdlTE",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "_hzcAtdonR",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "TmI0zjdYQb",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "rYMbLZm8KQ",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "cSzED5jEt_",
                          "itemName":  "Thinking"
                      },
                      {
                          "guid":  "iBRvOP-wRU",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "qyOm1SIyJp",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "VjdeQ0OFgu",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "Bm0aFDGHk2",
                          "itemName":  "Thoughtful Director Cape"
                      },
                      {
                          "guid":  "4rbPmDDo4b",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "DVcrj6XSgH",
                          "itemName":  "Xylophone"
                      },
                      {
                          "guid":  "SUMhxkauzE",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "SLjFXYFsjW",
                          "itemName":  "Thinking"
                      },
                      {
                          "guid":  "fUKkqgT_5y",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "qlaJxxLwAM",
                          "itemName":  "Thoughtful Director Mask"
                      },
                      {
                          "guid":  "qCVp6GCF5I",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "zPUl7UL87P",
                          "itemName":  "Thinking"
                      }
                  ],
        "nameJa":  "思慮深き座長"
    },
    {
        "guid":  "0IoADuWn1P",
        "name":  "Sanctuary Guide",
        "type":  "Guide",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  0,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/db/Sanctuary-Guide-Spirit.png",
        "treeGuid":  "yZlWqKpS7C",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "Fv3eD2B046",
                          "cost":  {

                                   },
                          "itemGuid":  "agaCWhY93E",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "QjNWkVWexy",
                          "cost":  {

                                   },
                          "itemGuid":  "Lqnd-vg9Lk",
                          "itemName":  "Sanctuary Ultimate Pendant"
                      },
                      {
                          "guid":  "sc-l5plcYF",
                          "cost":  {
                                       "sh":  3
                                   },
                          "itemGuid":  "Hvq52gCeih",
                          "itemName":  "Sanctuary Ultimate Handpan"
                      },
                      {
                          "guid":  "z9iDVc4j9_",
                          "cost":  {
                                       "sh":  3
                                   },
                          "itemGuid":  "OPjLSqWOhA",
                          "itemName":  "Sanctuary Ultimate Cape"
                      },
                      {
                          "guid":  "Zk9eCLRTna",
                          "cost":  {

                                   },
                          "itemGuid":  "nB-bu8Dml0",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "r1SuFXOTKI",
                          "cost":  {

                                   },
                          "itemGuid":  "MxHThCBuGJ",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "C-ERILXx0M",
                          "cost":  {

                                   },
                          "itemGuid":  "5lW7La3717",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "KXhv-vvKw1",
                          "cost":  {

                                   },
                          "itemGuid":  "-_zTpwlBr-",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "qvLXXhiD0D",
                          "cost":  {

                                   },
                          "itemGuid":  "t9AbIPO4jo",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "0rd7RA7Dfj",
                          "cost":  {

                                   },
                          "itemGuid":  "0neQ_KmCQE",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "T7MWczn8QH",
                          "cost":  {

                                   },
                          "itemGuid":  "cDVCedX6lo",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "eg-xsVt-IN",
                          "cost":  {

                                   },
                          "itemGuid":  "WbyWZ1nIWr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "kwY2yK1Rgg",
                          "cost":  {

                                   },
                          "itemGuid":  "yTRhbDwIwd",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "8UiiG4hYWb",
                          "cost":  {

                                   },
                          "itemGuid":  "_o94DS24O-",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "_xTJlnDVzG",
                          "cost":  {

                                   },
                          "itemGuid":  "u41vT7BJmi",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "jx7koL5guD",
        "name":  "Jelly Whisperer",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  1,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/4/43/Sanctuary-Spirit-Jelly-Whisperer.png",
        "treeGuid":  "GVghUxleba",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "Rl_priwPb9",
                          "cost":  {

                                   },
                          "itemGuid":  "U7lPqW1fa0",
                          "itemName":  "Jellyfish Call"
                      },
                      {
                          "guid":  "r6j4jVZSS1",
                          "cost":  {
                                       "sc":  6
                                   },
                          "itemGuid":  "jx_1R13Z_n",
                          "itemName":  "Uneven Rhythms"
                      },
                      {
                          "guid":  "VaBe3lclCx",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "hC1gh9FWhv",
                          "itemName":  "Jelly Whisperer Hair"
                      },
                      {
                          "guid":  "BBDM7k1IXK",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "uCJ1f-PYRD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ew2wtKzmQf",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "Bje_pivCRi",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "y5UDMLiaT8",
                          "cost":  {

                                   },
                          "itemGuid":  "6PJ8TATvNk",
                          "itemName":  "Jelly Whisperer Outfit"
                      },
                      {
                          "guid":  "28YxnIxGA6",
                          "cost":  {

                                   },
                          "itemGuid":  "RO94m-cztD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Y_a-4vRhCl",
                          "cost":  {

                                   },
                          "itemGuid":  "D4-m11eQ83",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "海月の語り部"
    },
    {
        "guid":  "MEw6did3kI",
        "name":  "Timid Bookworm",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  2,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/51/Sanctuary-Spirit-Timid-Bookworm.png",
        "treeGuid":  "rMbkkmBZQM",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "B4rizR4xxx",
                          "cost":  {

                                   },
                          "itemGuid":  "QnA3xwSNod",
                          "itemName":  "Timid Stance"
                      },
                      {
                          "guid":  "-kNd0tZZEb",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "YIR2Pbzuc0",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ea4PQV0AZy",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "e6JjMLgK2V",
                          "itemName":  "Timid Bookworm Hair"
                      },
                      {
                          "guid":  "zNHmTcxb7W",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "stOcCU864q",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "9BJR9ASbYZ",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "SiVbCUdTSq",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "caCds0hXqF",
                          "cost":  {

                                   },
                          "itemGuid":  "NrFOa0B40l",
                          "itemName":  "Timid Bookworm Cape"
                      },
                      {
                          "guid":  "9YQ3ExPKXJ",
                          "cost":  {

                                   },
                          "itemGuid":  "7CJwk5hiQ8",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "V2lwIVUh2K",
                          "cost":  {

                                   },
                          "itemGuid":  "tCq4FrOkVn",
                          "itemName":  "Back and Forth"
                      }
                  ],
        "nameJa":  "引っ込み思案な読書家"
    },
    {
        "guid":  "IDEim-HNOZ",
        "name":  "Rallying Thrillseeker",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  3,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/c/c0/Sanctuary-Spirit-Rallying-Thrillseeker.png",
        "treeGuid":  "MLnvMI_SQf",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "VoHSiNLHP4",
                          "cost":  {

                                   },
                          "itemGuid":  "fgYKKXiPMf",
                          "itemName":  "Rally Cheer"
                      },
                      {
                          "guid":  "0d3IGPTtMp",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "DH-qXh6CMZ",
                          "itemName":  "Rallying Thrillseeker Hair"
                      },
                      {
                          "guid":  "ymMjSROJlw",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "buDIh3u4OX",
                          "itemName":  "Rally Cheer"
                      },
                      {
                          "guid":  "c_2VyPXxl3",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "5-gKx3HDnl",
                          "itemName":  "Rallying Thrillseeker Outfit"
                      },
                      {
                          "guid":  "k56HdDzQmI",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "XtmoI3itkH",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "8K_KvvxtLa",
                          "cost":  {

                                   },
                          "itemGuid":  "54b2G8bBMD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "F2pCHs-8EX",
                          "cost":  {

                                   },
                          "itemGuid":  "bPWMijGpDI",
                          "itemName":  "Rally Cheer"
                      },
                      {
                          "guid":  "I3Txbbp1fr",
                          "cost":  {

                                   },
                          "itemGuid":  "NjfPHc_tyD",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "iE01sLQJxw",
                          "cost":  {

                                   },
                          "itemGuid":  "Q3SUBd3Vbl",
                          "itemName":  "Rally Cheer"
                      }
                  ],
        "nameJa":  "奮い立つ怖いもの知らず"
    },
    {
        "guid":  "z4xqXUkx_6",
        "name":  "Hiking Grouch",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  4,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/2/26/Sanctuary-Spirit-Hiking-Grouch.png",
        "treeGuid":  "9em8s0MS9A",
        "treeSource":  "revisit",
        "revisitDate":  "2023-08-07",
        "revisitName":  "Special Visit #4",
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "2kNPgPfrtO",
                          "cost":  {

                                   },
                          "itemGuid":  "_-Am5v5QWs",
                          "itemName":  "Grumpy"
                      },
                      {
                          "guid":  "QXfBXn8Br4",
                          "cost":  {
                                       "h":  16
                                   },
                          "itemGuid":  "bBQVuucGUm",
                          "itemName":  "Double Deck Chairs"
                      },
                      {
                          "guid":  "dl52WiuX1P",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "7C6gIvwkZa",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "10kWRocvyC",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "EPaUByqgl2",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "B03j6HALPB",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "_HEZdAIAU1",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "bysR562FBH",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "AjOxFBIEsi",
                          "itemName":  "Grumpy"
                      },
                      {
                          "guid":  "blZ-1PxIRQ",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "hGLEh1ula3",
                          "itemName":  "Hiking Grouch Hair"
                      },
                      {
                          "guid":  "iHlsffUVPM",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "WbAIZr5KdV",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "owv454TomN",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "_5IHtakDvf",
                          "itemName":  "Hiking Grouch Bowtie"
                      },
                      {
                          "guid":  "XavyKLyQ3f",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "F9ZODZ6Qs8",
                          "itemName":  "Grumpy"
                      },
                      {
                          "guid":  "Yn5_fEhdVo",
                          "cost":  {
                                       "c":  34
                                   },
                          "itemGuid":  "GgNJdLqzxy",
                          "itemName":  "Hiking Grouch Mask"
                      },
                      {
                          "guid":  "MoC-4dQ-DU",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "91x-6KiNlb",
                          "itemName":  "Grumpy"
                      }
                  ],
        "nameJa":  "ハイキングする気むずかし屋"
    },
    {
        "guid":  "uxtR1vVL8c",
        "name":  "Grateful Shell Collector",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  5,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fa/Sanctuary-Spirit-Grateful-Shell-Collector.png",
        "treeGuid":  "a0T7_evTz6",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "1fmBVbUjab",
                          "cost":  {

                                   },
                          "itemGuid":  "dpF382RUvu",
                          "itemName":  "Grateful"
                      },
                      {
                          "guid":  "3vh-auI7g-",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "Tjzcojypzb",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Y9yWtvkiS3",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "xl7jZqLFwD",
                          "itemName":  "Grateful"
                      },
                      {
                          "guid":  "kEwqDUb1Vd",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "ygwSSn-NvK",
                          "itemName":  "Grateful Shell Collector Cape"
                      },
                      {
                          "guid":  "FeSkgNKRCn",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "zoNL9CUK9Y",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "CybUnlGU8O",
                          "cost":  {

                                   },
                          "itemGuid":  "Hvo9QMJcsx",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "gKoDC3AvPQ",
                          "cost":  {

                                   },
                          "itemGuid":  "B66Wbe_vYk",
                          "itemName":  "Grateful"
                      },
                      {
                          "guid":  "D9nryq-CZg",
                          "cost":  {

                                   },
                          "itemGuid":  "yiZSilInIg",
                          "itemName":  "Grateful Shell Collector Hair"
                      },
                      {
                          "guid":  "XXcgBGqhz0",
                          "cost":  {

                                   },
                          "itemGuid":  "IDDSw982ER",
                          "itemName":  "Grateful"
                      }
                  ],
        "nameJa":  "感謝する貝殻収集家"
    },
    {
        "guid":  "8N9cC4SvzM",
        "name":  "Chill Sunbather",
        "type":  "Season",
        "season":  "Season of Sanctuary",
        "seasonOrderIndex":  6,
        "area":  "Sanctuary Islands",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/d5/Sanctuary-Spirit-Chill-Sunbather.png",
        "treeGuid":  "MwCPwxfL0B",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "-_0EoMUmXu",
                          "cost":  {

                                   },
                          "itemGuid":  "QNd_KFZo7Y",
                          "itemName":  "Belly Scratch"
                      },
                      {
                          "guid":  "qLg7hG9y5k",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "xalu7x_Hr5",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "muL22Ypc75",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "phajnn85-p",
                          "itemName":  "Belly Scratch"
                      },
                      {
                          "guid":  "hrZ9iranN2",
                          "cost":  {
                                       "sc":  20
                                   },
                          "itemGuid":  "V7FLu_Hn4y",
                          "itemName":  "Chill Sunbather Hat"
                      },
                      {
                          "guid":  "QmdMYpgMje",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "QdmHwCR2Wk",
                          "itemName":  "Chill Sunbather Cape"
                      },
                      {
                          "guid":  "E1InVOtyzJ",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "a2ESJzEojM",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "gp6PZw3L6n",
                          "cost":  {

                                   },
                          "itemGuid":  "3Jxn5gYmSk",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "3O-DpGHjxF",
                          "cost":  {

                                   },
                          "itemGuid":  "xgjzgnv6Zt",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "Ns6OdVzpQc",
                          "cost":  {

                                   },
                          "itemGuid":  "2LKc2kVIga",
                          "itemName":  "Belly Scratch"
                      },
                      {
                          "guid":  "FMEN0Xsvlj",
                          "cost":  {

                                   },
                          "itemGuid":  "yHf5YnLXUu",
                          "itemName":  "Chill Sunbather Sunglasses"
                      },
                      {
                          "guid":  "0olNGbgemb",
                          "cost":  {

                                   },
                          "itemGuid":  "LZqy5g4Xpa",
                          "itemName":  "Belly Scratch"
                      }
                  ],
        "nameJa":  "くつろぐ日光浴者"
    },
    {
        "guid":  "q8g57aJV8r",
        "name":  "The Void of Shattering",
        "type":  "Guide",
        "season":  "Season of Shattering",
        "seasonOrderIndex":  0,
        "area":  "Void of Shattering",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/7/71/Shattering-Guide-The-Void-of-Shattering.png",
        "treeGuid":  "BK8jQyPH_n",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  16,
        "nodes":  [
                      {
                          "guid":  "jodai-lqNE",
                          "cost":  {

                                   },
                          "itemGuid":  "vfm49a5KVd",
                          "itemName":  "Void Warp"
                      },
                      {
                          "guid":  "kuxWvLYTxO",
                          "cost":  {

                                   },
                          "itemGuid":  "bpUKMY2cpm",
                          "itemName":  "Shattering Ultimate Pendant"
                      },
                      {
                          "guid":  "6_DftEd25-",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "FjxHIvszIu",
                          "itemName":  "Shattering Ultimate Manta Cape"
                      },
                      {
                          "guid":  "jBcre0EABI",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "1IhlCcq61j",
                          "itemName":  "Shattering Ultimate Krill Cape"
                      },
                      {
                          "guid":  "jNqy_nUaIN",
                          "cost":  {

                                   },
                          "itemGuid":  "AGUEuqLXVv",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "5Gr9y71xnR",
                          "cost":  {

                                   },
                          "itemGuid":  "WaDZqenOgo",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "ccUOKSILLX",
                          "cost":  {

                                   },
                          "itemGuid":  "B2K9a5WdCy",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "-f2JJLLSh5",
                          "cost":  {

                                   },
                          "itemGuid":  "YVHc6de8iq",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "c4n17S3ulT",
                          "cost":  {

                                   },
                          "itemGuid":  "TU0elaQAVo",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "a9xMoZ8LeO",
                          "cost":  {

                                   },
                          "itemGuid":  "DWsvdTqFbu",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "7E8GrY4mae",
                          "cost":  {

                                   },
                          "itemGuid":  "PdjVIHk-se",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "PwJKX3OX6G",
                          "cost":  {

                                   },
                          "itemGuid":  "Cj2mrFPX05",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "BiEyfuBifp",
                          "cost":  {

                                   },
                          "itemGuid":  "BMDADUXao1",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "wRR3oHW0O0",
                          "cost":  {

                                   },
                          "itemGuid":  "dCBKJ_449f",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "FOPEiTlvGB",
                          "cost":  {

                                   },
                          "itemGuid":  "_jM3X_wWt9",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "8PSdBNbNS7",
                          "cost":  {

                                   },
                          "itemGuid":  "4h1Cqzgtsd",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "KqGJfPvqrM",
        "name":  "Ancient Light (Jellyfish)",
        "type":  "Season",
        "season":  "Season of Shattering",
        "seasonOrderIndex":  1,
        "area":  "Void of Shattering",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Shattering-Ancient_Light.png",
        "treeGuid":  "--xrBaOxPD",
        "treeSource":  "revisit",
        "revisitDate":  "2024-09-16",
        "revisitName":  "Special Visit #6",
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "fgj2zBqhX3",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "M0Y-0b8NQT",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "cuS3mniuiT",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "D4Bynoi3nA",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "3z58ttgTDT",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "iDK7eG_9q0",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "pbNBzlyMzS",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "ybtNFQOO7T",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "o-vsRXFCXw",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "WFZROEmMhb",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "TZfoKoRTkG",
                          "cost":  {
                                       "c":  80
                                   },
                          "itemGuid":  "9i_q3w0Ar0",
                          "itemName":  "Jellyfish Cape"
                      },
                      {
                          "guid":  "ygrTEPiRQo",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "yz2xNFAX1w",
                          "itemName":  "Jellyfish Hat"
                      },
                      {
                          "guid":  "OU3A1U_pK9",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "JmM2DNyEcO",
                          "itemName":  "Jellyfish Hair"
                      }
                  ],
        "nameJa":  "万古の光（海月）"
    },
    {
        "guid":  "di5Qar2yOI",
        "name":  "Ancient Light (Manta)",
        "type":  "Season",
        "season":  "Season of Shattering",
        "seasonOrderIndex":  2,
        "area":  "Void of Shattering",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/e/e3/Shattering-Ancient_Light.png",
        "treeGuid":  "792yhbZPqp",
        "treeSource":  "revisit",
        "revisitDate":  "2024-09-16",
        "revisitName":  "Special Visit #6",
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "DEZVlZ550T",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "J-bIxrJr0p",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "g1_L5w2-gp",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "tkNZu5rF8c",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "8fjZBEmCoK",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Gc--rP-8DN",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "NmiZLLUzip",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "y6h9HNiRKO",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "0FHMjktRfx",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ghtp-3LOnd",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "aX6siP37qj",
                          "cost":  {
                                       "c":  80
                                   },
                          "itemGuid":  "SH89J0uzGJ",
                          "itemName":  "Manta Cape"
                      },
                      {
                          "guid":  "9m4-9EZzAw",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "AIQsgTditY",
                          "itemName":  "Manta Outfit"
                      },
                      {
                          "guid":  "G8G2RostCx",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "nhgIi8TLn0",
                          "itemName":  "Manta Hair"
                      },
                      {
                          "guid":  "Vzn43X8E11",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "SL_uFHTqjm",
                          "itemName":  "Searching for Questions"
                      }
                  ],
        "nameJa":  "万古の光（マンタ）"
    },
    {
        "guid":  "3rebltHxWX",
        "name":  "Ancient Darkness (Dragon)",
        "type":  "Season",
        "season":  "Season of Shattering",
        "seasonOrderIndex":  3,
        "area":  "Void of Shattering",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f0/Shattering-Ancient_Darkness.png",
        "treeGuid":  "m1t7wOqVUk",
        "treeSource":  "revisit",
        "revisitDate":  "2024-09-16",
        "revisitName":  "Special Visit #6",
        "isTiered":  false,
        "nodeCount":  8,
        "nodes":  [
                      {
                          "guid":  "HNqkfj3e4S",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "Q0WsJq5xHA",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "Xmh6biu5G_",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "BmNuMVZJhN",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "4X4uM2JEkS",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "_iaKoASnNG",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "1AbVGzXfyz",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "sAcS7GB8UW",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "s7R9eCnP_K",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "mecgn4HFLj",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "IZbz41wYSg",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "yonX7TEJZQ",
                          "itemName":  "Dark Horn"
                      },
                      {
                          "guid":  "FIGh_Zu_Wx",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "TsL-GHL_RI",
                          "itemName":  "Dragon Hair"
                      },
                      {
                          "guid":  "UESz19bsxr",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "w2bnlVRUvy",
                          "itemName":  "Dragon Neck Accessory (Crab)"
                      }
                  ],
        "nameJa":  "万古の闇（暗黒竜）"
    },
    {
        "guid":  "V7PbSxO67Q",
        "name":  "Ancient Darkness (Plants)",
        "type":  "Season",
        "season":  "Season of Shattering",
        "seasonOrderIndex":  4,
        "area":  "Void of Shattering",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/f0/Shattering-Ancient_Darkness.png",
        "treeGuid":  "1om3NjZGR8",
        "treeSource":  "revisit",
        "revisitDate":  "2024-09-16",
        "revisitName":  "Special Visit #6",
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "NGIqIDi28X",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "CDhsAxgt-H",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "WsQ8EtGEsc",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "BrgEqiRuYr",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "0WiLY1WiLE",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "jH3G2RBNLL",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "wGQAMEFfoN",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "g_wBZyqsfa",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "btu9e02c4N",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "ZZIZoAueSW",
                          "itemName":  "Special Blessing"
                      },
                      {
                          "guid":  "QKJ2UH_6V_",
                          "cost":  {
                                       "c":  80
                                   },
                          "itemGuid":  "lNfpmsYUYk",
                          "itemName":  "Darkness Plant Cape"
                      },
                      {
                          "guid":  "bgNVUVL8RT",
                          "cost":  {
                                       "c":  50
                                   },
                          "itemGuid":  "Vt42pGqgXc",
                          "itemName":  "Darkness Plant Mask"
                      },
                      {
                          "guid":  "db2Hz8J0M4",
                          "cost":  {
                                       "c":  45
                                   },
                          "itemGuid":  "gn5YaEC0t8",
                          "itemName":  "Darkness Plant Hat"
                      },
                      {
                          "guid":  "22CelRcUbU",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "ORKBuwdSG2",
                          "itemName":  "Earnest Looks"
                      }
                  ],
        "nameJa":  "万古の闇（蝕む闇）"
    },
    {
        "guid":  "HfafU7Pfui",
        "name":  "The Rose",
        "type":  "Guide",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  0,
        "area":  "Starlight Desert",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/0/05/Little-Prince-Guide-Spirit.png",
        "treeGuid":  "oL3CS56h9y",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  19,
        "nodes":  [
                      {
                          "guid":  "2D-adfJXBK",
                          "cost":  {

                                   },
                          "itemGuid":  "wR4TWPuEyR",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "pWEvjLMAaN",
                          "cost":  {

                                   },
                          "itemGuid":  "TQUcvFL8k7",
                          "itemName":  "The Little Prince Ultimate Pendant"
                      },
                      {
                          "guid":  "Cpnr3X3E4D",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "dTnb7tLoOB",
                          "itemName":  "Little Prince Ultimate Hair"
                      },
                      {
                          "guid":  "wRsM_2F1fZ",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "BD7KBFgGf0",
                          "itemName":  "Little Prince Ultimate Outfit"
                      },
                      {
                          "guid":  "D1tl2QKs9P",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "mABAiqym_P",
                          "itemName":  "Little Prince Ultimate Rose"
                      },
                      {
                          "guid":  "o4aGEZcBdG",
                          "cost":  {

                                   },
                          "itemGuid":  "JfTzg2wE_D",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "syktJ8DnYQ",
                          "cost":  {

                                   },
                          "itemGuid":  "xPgHPO9vgx",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "xvpGznEp1n",
                          "cost":  {

                                   },
                          "itemGuid":  "9TVb-6wg42",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "Sjc9lsTJGy",
                          "cost":  {

                                   },
                          "itemGuid":  "ew2cXMYp1M",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "Fe-l8H5jZh",
                          "cost":  {

                                   },
                          "itemGuid":  "cam2MsfMpk",
                          "itemName":  "Quest 6"
                      },
                      {
                          "guid":  "4BZd4yUPpW",
                          "cost":  {

                                   },
                          "itemGuid":  "YMx3PU8Czn",
                          "itemName":  "Quest 7"
                      },
                      {
                          "guid":  "Y9SrBn6mV5",
                          "cost":  {
                                       "c":  200
                                   },
                          "itemGuid":  "l_C7GM60an",
                          "itemName":  "Sword Outfit"
                      },
                      {
                          "guid":  "_m05Qv859t",
                          "cost":  {

                                   },
                          "itemGuid":  "_CEnvJtQzT",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Zp1bs0fcwE",
                          "cost":  {

                                   },
                          "itemGuid":  "8_bPz_N5kV",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "L3q4L11yXJ",
                          "cost":  {

                                   },
                          "itemGuid":  "iBG67eXsB9",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "R_I3tLJTyK",
                          "cost":  {

                                   },
                          "itemGuid":  "NdZ0GDulKh",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "Do-75q1qwM",
                          "cost":  {

                                   },
                          "itemGuid":  "i2T9NGVRNZ",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "5fvfeLSVDi",
                          "cost":  {

                                   },
                          "itemGuid":  "RI2z16tiOG",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "BSElG1_Z9t",
                          "cost":  {

                                   },
                          "itemGuid":  "G-7YZ7TpPi",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "JOCCkr0TlW",
        "name":  "Beckoning Ruler",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  1,
        "area":  "Starlight Desert",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/5/58/Little-Prince-Spirit-Beckoning-Ruler.png",
        "treeGuid":  "EPZCRK3sdj",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "uLp-gR9OFE",
                          "cost":  {

                                   },
                          "itemGuid":  "1YJ13EOwIQ",
                          "itemName":  "Beckon"
                      },
                      {
                          "guid":  "T7MsXooygn",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "SmhmMgfVv_",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "45x2_Is3-A",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "FlYFVac0J9",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "04tapbXmZN",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "we8k8-ow6p",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "qcjtvTMQGB",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "W4i9e6Vt6d",
                          "itemName":  "Beckon"
                      },
                      {
                          "guid":  "MdAIW6woGp",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "kVPk2WIqVT",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "ANpDhW1XJi",
                          "cost":  {
                                       "c":  48
                                   },
                          "itemGuid":  "k0po-n3Zem",
                          "itemName":  "Beckoning Ruler Hair"
                      },
                      {
                          "guid":  "4tHzKtNaN8",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "-4aZ5Mq9aw",
                          "itemName":  "Beckon"
                      },
                      {
                          "guid":  "bzyt1YiJGH",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "_as4dWfvGY",
                          "itemName":  "Beckoning Ruler Mask"
                      },
                      {
                          "guid":  "QNq7_fuqJ-",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "_ws5QlV4Tp",
                          "itemName":  "Beckon"
                      }
                  ],
        "nameJa":  "手招く支配者"
    },
    {
        "guid":  "V7gj-cBqK1",
        "name":  "Gloating Narcissist",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  2,
        "area":  "Starlight Desert",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/f/fe/Little-Prince-Spirit-Gloating-Narcissist.png",
        "treeGuid":  "XsCuRcSlFc",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "YPcZayndoS",
                          "cost":  {

                                   },
                          "itemGuid":  "qcsiXdqfGT",
                          "itemName":  "Gloat"
                      },
                      {
                          "guid":  "SkEBYSIES0",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "7Gw70uLjM6",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "3i6n9NJXD8",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "NWaw3Mjl-W",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "C1S6BYculW",
                          "cost":  {
                                       "c":  46
                                   },
                          "itemGuid":  "8PpkvJHDLx",
                          "itemName":  "Gloating Narcissist Hair"
                      },
                      {
                          "guid":  "hUzczUYWy0",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "4VUhcjR1wd",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "7cxyCB-57o",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "XhRW44vwiq",
                          "itemName":  "Gloat"
                      },
                      {
                          "guid":  "Rjoo4AOdEr",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "VLGb7wljbi",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "esi_f2ChA7",
                          "cost":  {
                                       "c":  65
                                   },
                          "itemGuid":  "O6DreyTJS7",
                          "itemName":  "Gloating Narcissist Outfit"
                      },
                      {
                          "guid":  "I6sDKHMbwH",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "g-tnZqaKbi",
                          "itemName":  "Gloat"
                      },
                      {
                          "guid":  "LazV5TWqlW",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "IlbDThInaP",
                          "itemName":  "Looking Up to the Stars"
                      },
                      {
                          "guid":  "5V_66z805e",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "SNhn8BVb7a",
                          "itemName":  "Gloat"
                      }
                  ],
        "nameJa":  "ご満悦のうぬぼれ屋"
    },
    {
        "guid":  "z5dtSO-gis",
        "name":  "Stretching Lamplighter",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  3,
        "area":  "Starlight Desert",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/a/a2/Little-Prince-Spirit-Stretching-Lamplighter.png",
        "treeGuid":  "f-Ue1uKwCl",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "iFdxIcnTB1",
                          "cost":  {

                                   },
                          "itemGuid":  "UhtkKIM3ol",
                          "itemName":  "Stretch"
                      },
                      {
                          "guid":  "cZBzpveyXv",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "hT99QC2c5y",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "I-lU_52BbS",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "-qrTFboAdP",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "BNAMO1DOkb",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "lRVAad1pdf",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "1NLGCPuuci",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "0f_f0iJMqN",
                          "itemName":  "Stretch"
                      },
                      {
                          "guid":  "3o48oH9215",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "GwDxjRK6RF",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "lo5fIMsGZV",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "eCR2_3ev_B",
                          "itemName":  "Stretching Lamplighter Cape"
                      },
                      {
                          "guid":  "zWbPtg2DV1",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "e-yLNwofBb",
                          "itemName":  "Stretch"
                      },
                      {
                          "guid":  "3ejYrqz78t",
                          "cost":  {
                                       "c":  44
                                   },
                          "itemGuid":  "SkVA_XphTc",
                          "itemName":  "Stretching Lamplighter Hair"
                      },
                      {
                          "guid":  "W6ocOqXQ3a",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "NwYn4D2Gag",
                          "itemName":  "Stretch"
                      }
                  ],
        "nameJa":  "体をほぐす点燈夫"
    },
    {
        "guid":  "iweb5Sk2Xk",
        "name":  "Slouching Soldier",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  4,
        "area":  "Starlight Desert Jar",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/9/9f/Little-Prince-Spirit-Slouching-Soldier.png",
        "treeGuid":  "DfR5p-yKK7",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "IoZSL8GJdT",
                          "cost":  {

                                   },
                          "itemGuid":  "5J5FDssiU9",
                          "itemName":  "Slouch"
                      },
                      {
                          "guid":  "UDZIogB4pU",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "_fp_Ppz4Ks",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "qIWkntZPla",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "sDDyK9Mvz7",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "_akD0ZtgEq",
                          "cost":  {
                                       "c":  42
                                   },
                          "itemGuid":  "2BhjMSGnvW",
                          "itemName":  "Slouching Soldier Hair"
                      },
                      {
                          "guid":  "Pjxd80XiuY",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "gsoIYnO0ON",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "z0ILmiHFrd",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "ZZ21lI_L9o",
                          "itemName":  "Slouch"
                      },
                      {
                          "guid":  "33-8QjJtBq",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "JaMg67fVTx",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "PIqaF8Qmgb",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "CeSrlEJgtF",
                          "itemName":  "Slouching Soldier Cape"
                      },
                      {
                          "guid":  "S42IpWOCwC",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "OpLAmdRCNM",
                          "itemName":  "Slouch"
                      },
                      {
                          "guid":  "aoObD42UFX",
                          "cost":  {
                                       "c":  15
                                   },
                          "itemGuid":  "JygPyVo177",
                          "itemName":  "A Glimpse Within"
                      },
                      {
                          "guid":  "Ttq3vbTVwn",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "Gx5YAc7jLr",
                          "itemName":  "Slouch"
                      }
                  ],
        "nameJa":  "うなだれる戦士"
    },
    {
        "guid":  "l7zP8zUFHX",
        "name":  "Sneezing Geographer",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  5,
        "area":  "Starlight Desert",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/84/Little-Prince-Spirit-Sneezing-Geographer.png",
        "treeGuid":  "MzvfLK3_Cz",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "WRgu2DAh5w",
                          "cost":  {

                                   },
                          "itemGuid":  "zgI2lfTGvf",
                          "itemName":  "Sneeze"
                      },
                      {
                          "guid":  "plvJ4YbpRw",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "0SEXPk-k62",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "mUIpWHqCXu",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "WWW05wPhax",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "vz5bk-hHEt",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "96EMnX8wn_",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "2Q9v-RvrNM",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "cYQ6gsue9A",
                          "itemName":  "Sneeze"
                      },
                      {
                          "guid":  "e3GxJsBmfh",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "bWbr8CFnQy",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "pdU0KefLrE",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "asWC0_56LS",
                          "itemName":  "Sneezing Geographer Cape"
                      },
                      {
                          "guid":  "fjnUfDxI6q",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "kGaI-255J9",
                          "itemName":  "Sneeze"
                      },
                      {
                          "guid":  "YXQmNwf1Fa",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "A_Mhqh3fL1",
                          "itemName":  "Sneezing Geographer Hair"
                      },
                      {
                          "guid":  "HYq4Xo_QzI",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "muRzuaFzwA",
                          "itemName":  "Sneeze"
                      }
                  ],
        "nameJa":  "くしゃみする地理学者"
    },
    {
        "guid":  "dEQ1GVQOx7",
        "name":  "Star Collector",
        "type":  "Season",
        "season":  "Season of The Little Prince",
        "seasonOrderIndex":  6,
        "area":  "Jellyfish Beach",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/1/19/Little-Prince-Spirit-Star-Collector.png",
        "treeGuid":  "49jQ4S13XR",
        "treeSource":  "revisit",
        "revisitDate":  "2025-04-07",
        "revisitName":  "Special Visit #8",
        "isTiered":  false,
        "nodeCount":  11,
        "nodes":  [
                      {
                          "guid":  "QcAl6Ibw1T",
                          "cost":  {

                                   },
                          "itemGuid":  "drH3NXwa4B",
                          "itemName":  "Hand-Rub"
                      },
                      {
                          "guid":  "VSVKC8YeQi",
                          "cost":  {
                                       "c":  3
                                   },
                          "itemGuid":  "nn7KvR3hzq",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "2zc3y5jjfs",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "zTfcCNFzZ4",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "L67CJZi6bM",
                          "cost":  {
                                       "ac":  2
                                   },
                          "itemGuid":  "Yyd-f73kdt",
                          "itemName":  "Wing Buff"
                      },
                      {
                          "guid":  "HHB4CDKZTM",
                          "cost":  {
                                       "h":  3
                                   },
                          "itemGuid":  "kUOyMedcLK",
                          "itemName":  "Hand-Rub"
                      },
                      {
                          "guid":  "k1PQDVocw9",
                          "cost":  {
                                       "c":  5
                                   },
                          "itemGuid":  "BUc00xon-T",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "iPE6KWlGDv",
                          "cost":  {
                                       "c":  70
                                   },
                          "itemGuid":  "ER8iz-GQjz",
                          "itemName":  "Star Collector Prop"
                      },
                      {
                          "guid":  "bK9U2yOXJq",
                          "cost":  {
                                       "c":  75
                                   },
                          "itemGuid":  "Yv8nA1qNwO",
                          "itemName":  "Star Collector Cape"
                      },
                      {
                          "guid":  "atCIKrXc9r",
                          "cost":  {
                                       "h":  6
                                   },
                          "itemGuid":  "f2efm6-cUw",
                          "itemName":  "Hand-Rub"
                      },
                      {
                          "guid":  "5XoSH679Oo",
                          "cost":  {
                                       "c":  40
                                   },
                          "itemGuid":  "67-Dpp1kUH",
                          "itemName":  "Star Collector Neckpiece"
                      },
                      {
                          "guid":  "KS1zaz5AS1",
                          "cost":  {
                                       "h":  4
                                   },
                          "itemGuid":  "kNbIj8-u0w",
                          "itemName":  "Hand-Rub"
                      }
                  ],
        "nameJa":  "星の収集家"
    },
    {
        "guid":  "gy_EzmMKxF",
        "name":  "Vault Elder\u0027s Lantern",
        "type":  "Guide",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  0,
        "area":  "Sky Cinema",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/d/df/Vault-Elder-Lantern-Ultimate-Guide-cutout.png",
        "treeGuid":  "lHlnmVDICn",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  15,
        "nodes":  [
                      {
                          "guid":  "7NYZEkjI3A",
                          "cost":  {

                                   },
                          "itemGuid":  "WYN8NCNM3x",
                          "itemName":  "Warp"
                      },
                      {
                          "guid":  "L5e_qiRgOD",
                          "cost":  {

                                   },
                          "itemGuid":  "KRB8s8fxSC",
                          "itemName":  "Quest 1"
                      },
                      {
                          "guid":  "tW8tBytlnX",
                          "cost":  {

                                   },
                          "itemGuid":  "vh_pk3wU0A",
                          "itemName":  "The Two Embers - Part 1 Ultimate Pendant"
                      },
                      {
                          "guid":  "Gd4gn3SMX-",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "8z8SeKQRk8",
                          "itemName":  "Two Embers - Part 1 Ultimate Hair Accessory"
                      },
                      {
                          "guid":  "llRyyb4IzA",
                          "cost":  {
                                       "sh":  2
                                   },
                          "itemGuid":  "5om2HL6eRw",
                          "itemName":  "Two Embers - Part 1 Ultimate Cape"
                      },
                      {
                          "guid":  "F76niRD4U2",
                          "cost":  {

                                   },
                          "itemGuid":  "HAmMhK2wEA",
                          "itemName":  "Quest 2"
                      },
                      {
                          "guid":  "0fLRunRaat",
                          "cost":  {

                                   },
                          "itemGuid":  "1xt66A1og9",
                          "itemName":  "Quest 3"
                      },
                      {
                          "guid":  "d_AW59_th_",
                          "cost":  {

                                   },
                          "itemGuid":  "rCjkMHHCz3",
                          "itemName":  "Quest 4"
                      },
                      {
                          "guid":  "Ms-iz0Fl5d",
                          "cost":  {

                                   },
                          "itemGuid":  "mzR2yfcMzf",
                          "itemName":  "Quest 5"
                      },
                      {
                          "guid":  "p_2hRho4Up",
                          "cost":  {
                                       "c":  27
                                   },
                          "itemGuid":  "8F6QxN0IsD",
                          "itemName":  "Two Embers - Part 1 Movie Poster"
                      },
                      {
                          "guid":  "CooOSXEL7X",
                          "cost":  {

                                   },
                          "itemGuid":  "Pnwp-K4w06",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "By1cVF2PA6",
                          "cost":  {

                                   },
                          "itemGuid":  "YH8MCFzTcf",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "-7mzd9H_W6",
                          "cost":  {

                                   },
                          "itemGuid":  "ZqbtSzrvGp",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "aN6Uh91VMM",
                          "cost":  {

                                   },
                          "itemGuid":  "d1rx4S5IP3",
                          "itemName":  "Heart"
                      },
                      {
                          "guid":  "wpRxW2OZO2",
                          "cost":  {

                                   },
                          "itemGuid":  "3wr_nQ1GpD",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  null
    },
    {
        "guid":  "aO0n7dAWvc",
        "name":  "Tender Toymaker",
        "type":  "Season",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  1,
        "area":  "The Last City",
        "imageUrl":  null,
        "treeGuid":  "SI9Q8J2Fm-",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "opxcbxYIfJ",
                          "cost":  {
                                       "sc":  8
                                   },
                          "itemGuid":  "rOUvYv7h5G",
                          "itemName":  "Blessing"
                      },
                      {
                          "guid":  "q5eaTPVYo1",
                          "cost":  {
                                       "sc":  14
                                   },
                          "itemGuid":  "KYolrTZPtJ",
                          "itemName":  "Manatee Toy"
                      },
                      {
                          "guid":  "2jAYnaQ61M",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "Wi5TCHaGEG",
                          "itemName":  "Green Dye"
                      },
                      {
                          "guid":  "LufwETnS2o",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "vizYM6Cgw5",
                          "itemName":  "Tender Toymaker Hair"
                      },
                      {
                          "guid":  "J5AsLDs1K0",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "OBcnWjY8qU",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "hLjozLH7KR",
                          "cost":  {

                                   },
                          "itemGuid":  "BXJj5nC9Qt",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "Mcsz5wBhc6",
                          "cost":  {

                                   },
                          "itemGuid":  "JTsBgF0HCR",
                          "itemName":  "Tender Toymaker Outfit"
                      },
                      {
                          "guid":  "JVpoCSJcOL",
                          "cost":  {

                                   },
                          "itemGuid":  "HbWmev9tfe",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "K0JZdpYMuO",
                          "cost":  {

                                   },
                          "itemGuid":  "NqiCFWskMV",
                          "itemName":  "Crab Figurine"
                      }
                  ],
        "nameJa":  "心優しき玩具職人"
    },
    {
        "guid":  "2FQrdh4aCQ",
        "name":  "Stern Shepherd",
        "type":  "Season",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  4,
        "area":  "The Last City",
        "imageUrl":  null,
        "treeGuid":  "RDergQu3Vd",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  10,
        "nodes":  [
                      {
                          "guid":  "BxVl336GE7",
                          "cost":  {

                                   },
                          "itemGuid":  "0fIErjYx4B",
                          "itemName":  "Manatee Call"
                      },
                      {
                          "guid":  "jz_WmmSf3r",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "sLyKSpc0hb",
                          "itemName":  "Life and Sanctuary"
                      },
                      {
                          "guid":  "Kv01p-HRaU",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "ttkFqSp8B4",
                          "itemName":  "Stern Shepherd Outfit"
                      },
                      {
                          "guid":  "MHGgZXUsF4",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "tC5pDKTQcm",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "RvrS6wJeAz",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "gbPWc1mCq1",
                          "itemName":  "Stern Shepherd Mask"
                      },
                      {
                          "guid":  "6HblThtJcY",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "tyvEKGbfhk",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "YZ3cdXyCLq",
                          "cost":  {

                                   },
                          "itemGuid":  "3l7UF_vGJU",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "Ks9bQWpf3V",
                          "cost":  {

                                   },
                          "itemGuid":  "Ll1veXMDa9",
                          "itemName":  "Stern Shepherd Cane"
                      },
                      {
                          "guid":  "jCew8MjPtR",
                          "cost":  {

                                   },
                          "itemGuid":  "O7BixXoV0B",
                          "itemName":  "Yellow dye"
                      },
                      {
                          "guid":  "_60p0r0FEj",
                          "cost":  {

                                   },
                          "itemGuid":  "uv_rlb5LLl",
                          "itemName":  "Stern Shepherd Hair"
                      }
                  ],
        "nameJa":  "手負いの巡回兵"
    },
    {
        "guid":  "Jq1bIftHV5",
        "name":  "Resourceful Recluse",
        "type":  "Season",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  2,
        "area":  "The Last City",
        "imageUrl":  null,
        "treeGuid":  "fdQpzNAjCw",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  9,
        "nodes":  [
                      {
                          "guid":  "gSpR4Ktq8n",
                          "cost":  {
                                       "sc":  12
                                   },
                          "itemGuid":  "GOaW9aUsUb",
                          "itemName":  "Resourceful Recluse Mask"
                      },
                      {
                          "guid":  "iV88LSFOHl",
                          "cost":  {
                                       "sc":  18
                                   },
                          "itemGuid":  "kduC6Paqjx",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "1GAKLjAsRs",
                          "cost":  {
                                       "sc":  24
                                   },
                          "itemGuid":  "F44lamMQJN",
                          "itemName":  "Resourceful Recluse Tea Table"
                      },
                      {
                          "guid":  "HGQQh3bpz1",
                          "cost":  {
                                       "sc":  30
                                   },
                          "itemGuid":  "B5wktCej7j",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "nCG0qdx7z-",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "JmclivNj1y",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "djdq3ircU2",
                          "cost":  {

                                   },
                          "itemGuid":  "87cF1DR1mN",
                          "itemName":  "Resourceful Recluse Tree Prop"
                      },
                      {
                          "guid":  "vsCBxAmReg",
                          "cost":  {

                                   },
                          "itemGuid":  "MP475bE92Q",
                          "itemName":  "Black dye"
                      },
                      {
                          "guid":  "l0atw4r4pd",
                          "cost":  {

                                   },
                          "itemGuid":  "LD7JbSG0JZ",
                          "itemName":  "Resourceful Recluse Outfit"
                      },
                      {
                          "guid":  "iKrKWo5oIj",
                          "cost":  {

                                   },
                          "itemGuid":  "qFymCo4dGC",
                          "itemName":  "Blessing"
                      }
                  ],
        "nameJa":  "機知に富む隠とん者"
    },
    {
        "guid":  "zdstJkDMg5",
        "name":  "Scarred Sentry",
        "type":  "Season",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  3,
        "area":  "The Last City",
        "imageUrl":  null,
        "treeGuid":  "r-emIwzMih",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  12,
        "nodes":  [
                      {
                          "guid":  "oZL55_0hI5",
                          "cost":  {

                                   },
                          "itemGuid":  "2KB9ImL1SW",
                          "itemName":  "Scarred Stance"
                      },
                      {
                          "guid":  "ojYsXvuaZV",
                          "cost":  {
                                       "sc":  10
                                   },
                          "itemGuid":  "afxsZPgxN7",
                          "itemName":  "Scarred Sentry Cracked Helmet"
                      },
                      {
                          "guid":  "gMTFXM1neA",
                          "cost":  {
                                       "sc":  16
                                   },
                          "itemGuid":  "Q5feZU_9Hq",
                          "itemName":  "Purple dye"
                      },
                      {
                          "guid":  "4Mbfr1xgUY",
                          "cost":  {
                                       "sc":  22
                                   },
                          "itemGuid":  "Ll_e9Bsdl_",
                          "itemName":  "Scarred Sentry Outfit"
                      },
                      {
                          "guid":  "8v9tn-OWUB",
                          "cost":  {
                                       "sc":  28
                                   },
                          "itemGuid":  "3kxBYG-yVK",
                          "itemName":  "Scarred Sentry Shield"
                      },
                      {
                          "guid":  "_Dvi4zvM6x",
                          "cost":  {
                                       "sc":  34
                                   },
                          "itemGuid":  "cd6D-FQdL1",
                          "itemName":  "White dye"
                      },
                      {
                          "guid":  "R-uQhaZIyK",
                          "cost":  {
                                       "sc":  3
                                   },
                          "itemGuid":  "UhOnUa1IoR",
                          "itemName":  "Season Heart"
                      },
                      {
                          "guid":  "vRH_johmJX",
                          "cost":  {

                                   },
                          "itemGuid":  "NQsPOB-fqz",
                          "itemName":  "Scarred Sentry Spear"
                      },
                      {
                          "guid":  "3iBGJh3CwS",
                          "cost":  {

                                   },
                          "itemGuid":  "5vyOk8z6c9",
                          "itemName":  "Dye spell"
                      },
                      {
                          "guid":  "TjA-N9ZX74",
                          "cost":  {

                                   },
                          "itemGuid":  "IeUYoF48N_",
                          "itemName":  "Scarred Sentry Shoes"
                      },
                      {
                          "guid":  "SbK-m2Zvo8",
                          "cost":  {

                                   },
                          "itemGuid":  "eAQGcnjlP_",
                          "itemName":  "Scarred Sentry Cape"
                      },
                      {
                          "guid":  "ZjrF-HEgom",
                          "cost":  {

                                   },
                          "itemGuid":  "UvRqz7iRMq",
                          "itemName":  "Scarred Sentry Helmet"
                      }
                  ],
        "nameJa":  "厳格なマナティ飼い"
    },
    {
        "guid":  "TDQC4wg3G9",
        "name":  "Caring Companion",
        "type":  "Season",
        "season":  "Season of The Two Embers - Part 1",
        "seasonOrderIndex":  5,
        "area":  "The Last City",
        "imageUrl":  "https://static.wikia.nocookie.net/sky-children-of-the-light/images/8/86/Caring-Companion-cutout.png",
        "treeGuid":  "PzoY-Wkk8O",
        "treeSource":  "original",
        "revisitDate":  null,
        "revisitName":  null,
        "isTiered":  false,
        "nodeCount":  3,
        "nodes":  [
                      {
                          "guid":  "ataTovLcTn",
                          "cost":  {

                                   },
                          "itemGuid":  "kJewPz6EAk",
                          "itemName":  "Cutscene"
                      },
                      {
                          "guid":  "fdnBPHQAJq",
                          "cost":  {
                                       "h":  12
                                   },
                          "itemGuid":  "5XxQVkXFxk",
                          "itemName":  "Butterfly Toy"
                      },
                      {
                          "guid":  "CI48zASaY2",
                          "cost":  {

                                   },
                          "itemGuid":  "IALdTjpJLH",
                          "itemName":  "Heart"
                      }
                  ],
        "nameJa":  "寄り添うお友だち"
    }
]
;

if (typeof window !== 'undefined') window.SPIRIT_TREE_DATA = SPIRIT_TREE_DATA;

