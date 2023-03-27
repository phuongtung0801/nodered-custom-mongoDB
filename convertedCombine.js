let rawData =
[
    {
        "Code": 10001,
        "Error_name": "GROUND_FAULT",
        "SMA_110": 1,
        "SMA_100": 1,
        "SMA_75": "NULL",
        "SGX_110": 106
    },
    {
        "Code": 10002,
        "Error_name": "DC_OVER_VOLT",
        "SMA_110": 2,
        "SMA_100": 2,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10003,
        "Error_name": "AC_DISCONNECT",
        "SMA_110": 4,
        "SMA_100": 4,
        "SMA_75": "NULL",
        "SGX_110": 10
    },
    {
        "Code": 10004,
        "Error_name": "DC_DISCONNECT",
        "SMA_110": 8,
        "SMA_100": 8,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10005,
        "Error_name": "GRID_DISCONNECT",
        "SMA_110": 16,
        "SMA_100": 16,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10006,
        "Error_name": "CABINET_OPEN",
        "SMA_110": 32,
        "SMA_100": 32,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10007,
        "Error_name": "MANUAL_SHUTDOWN",
        "SMA_110": 64,
        "SMA_100": 64,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10008,
        "Error_name": "OVER_TEMP",
        "SMA_110": 128,
        "SMA_100": 128,
        "SMA_75": "NULL",
        "SGX_110": 36
    },
    {
        "Code": 10009,
        "Error_name": "OVER_FREQUENCY",
        "SMA_110": 256,
        "SMA_100": 256,
        "SMA_75": "NULL",
        "SGX_110": 8
    },
    {
        "Code": 10010,
        "Error_name": "UNDER_FREQUENCY",
        "SMA_110": 512,
        "SMA_100": 512,
        "SMA_75": "NULL",
        "SGX_110": 9
    },
    {
        "Code": 10011,
        "Error_name": "AC_OVER_VOLT",
        "SMA_110": 1024,
        "SMA_100": 1024,
        "SMA_75": "NULL",
        "SGX_110": 2
    },
    {
        "Code": 10012,
        "Error_name": "AC_UNDER_VOLT",
        "SMA_110": 2048,
        "SMA_100": 2048,
        "SMA_75": "NULL",
        "SGX_110": 4
    },
    {
        "Code": 10013,
        "Error_name": "BLOWN_GRID_FUSE",
        "SMA_110": 4096,
        "SMA_100": 4096,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10014,
        "Error_name": "UNDER_TEMP",
        "SMA_110": 8192,
        "SMA_100": 8192,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10015,
        "Error_name": "MEMORY_LOSS",
        "SMA_110": 16384,
        "SMA_100": 16384,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10016,
        "Error_name": "HW_TEST_FAILURE",
        "SMA_110": 32768,
        "SMA_100": 32768,
        "SMA_75": "NULL",
        "SGX_110": "NULL"
    },
    {
        "Code": 10017,
        "Error_name": "GRID TRANSIENT OVERVOLTAGE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 3
    },
    {
        "Code": 10018,
        "Error_name": "GRID LOW VOLTAGE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 5
    },
    {
        "Code": 10019,
        "Error_name": "AC INSTANTANEOUS OVERCURRENT",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 7
    },
    {
        "Code": 10020,
        "Error_name": "EXCESSIVE LEAKAGE CURRENT",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 12
    },
    {
        "Code": 10021,
        "Error_name": "10-MINUTE GRID OVERVOLTAGE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 14
    },
    {
        "Code": 10022,
        "Error_name": "GRID HIGH VOLTAGE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 15
    },
    {
        "Code": 10023,
        "Error_name": "OUTPUT OVERLOAD",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 16
    },
    {
        "Code": 10024,
        "Error_name": "GRID VOLTAGE UNBALANCE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 17
    },
    {
        "Code": 10025,
        "Error_name": "PV CONNECTION FAULT",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 23
    },
    {
        "Code": 10026,
        "Error_name": "LOW SYSTEM INSULATION RESISTANCE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 39
    },
    {
        "Code": 10027,
        "Error_name": "LOW AMBIENT TEMPERATURE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 43
    },
    {
        "Code": 10028,
        "Error_name": "PV INPUT CONFIGURATION ABNORMAL",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 47
    },
    {
        "Code": 10029,
        "Error_name": "FAN ALARM",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 70
    },
    {
        "Code": 10030,
        "Error_name": "AC-SIDE SPD ALARM",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 71
    },
    {
        "Code": 10031,
        "Error_name": "DC-SIDE SPD ALAR",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 72
    },
    {
        "Code": 10032,
        "Error_name": "COMMUNICATION ALARM",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 74
    },
    {
        "Code": 10033,
        "Error_name": "ELECTRIC ARC DETECTION MODULE ABNORMAL",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 87
    },
    {
        "Code": 10034,
        "Error_name": "ELECTRIC ARC FAULT",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 88
    },
    {
        "Code": 10035,
        "Error_name": "ELECTRIC ARC DETECTION DISABLED",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 89
    },
    {
        "Code": 10036,
        "Error_name": "GRID-SIDE PROTECTION SELF-CHECK FAILURE",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 105
    },
    {
        "Code": 10037,
        "Error_name": "METER COMMUNICATION ABNORMAL ALARM",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 514
    },
    {
        "Code": 10038,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10039,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10040,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10041,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10042,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10043,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10044,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10045,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10046,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10047,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10048,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10049,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10050,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10051,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10052,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10053,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10054,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10055,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10056,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10057,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10058,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10059,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10060,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10061,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10062,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10063,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10064,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10065,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10066,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10067,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10068,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10069,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10070,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10071,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10072,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10073,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10074,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10075,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10076,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10077,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10078,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10079,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10080,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10081,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10082,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10083,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10084,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10085,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10086,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10087,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10088,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10089,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10090,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10091,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10092,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10093,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10094,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10095,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10096,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10097,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10098,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10099,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 10100,
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL"
    },
    {
        "Code": 20078,
        "Error_name": "PV1 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 78
    },
    {
        "Code": 20079,
        "Error_name": "PV2 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 79
    },
    {
        "Code": 20080,
        "Error_name": "PV3 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 80
    },
    {
        "Code": 20081,
        "Error_name": "PV4 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 81
    },
    {
        "Code": 20220,
        "Error_name": "PV5 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 220
    },
    {
        "Code": 20221,
        "Error_name": "PV6 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 221
    },
    {
        "Code": 20222,
        "Error_name": "PV7 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 222
    },
    {
        "Code": 20223,
        "Error_name": "PV8 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 223
    },
    {
        "Code": 20224,
        "Error_name": "PV9 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 224
    },
    {
        "Code": 20225,
        "Error_name": "PV10 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 225
    },
    {
        "Code": 20226,
        "Error_name": "PV11 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 226
    },
    {
        "Code": 20227,
        "Error_name": "PV12 abnormal",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 227
    },
    {
        "Code": 30532,
        "Error_name": "Reverse connection alarm at string 01 ",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 532
    },
    {
        "Code": 30533,
        "Error_name": "Reverse connection alarm at string 02",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 533
    },
    {
        "Code": 30534,
        "Error_name": "Reverse connection alarm at string 03",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 534
    },
    {
        "Code": 30535,
        "Error_name": "Reverse connection alarm at string 04",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 535
    },
    {
        "Code": 30536,
        "Error_name": "Reverse connection alarm at string 05",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 536
    },
    {
        "Code": 30537,
        "Error_name": "Reverse connection alarm at string 06",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 537
    },
    {
        "Code": 30538,
        "Error_name": "Reverse connection alarm at string 07",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 538
    },
    {
        "Code": 30539,
        "Error_name": "Reverse connection alarm at string 08",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 539
    },
    {
        "Code": 30540,
        "Error_name": "Reverse connection alarm at string 09",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 540
    },
    {
        "Code": 30541,
        "Error_name": "Reverse connection alarm at string 10",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 541
    },
    {
        "Code": 30542,
        "Error_name": "Reverse connection alarm at string 11",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 542
    },
    {
        "Code": 30543,
        "Error_name": "Reverse connection alarm at string 12",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 543
    },
    {
        "Code": 30544,
        "Error_name": "Reverse connection alarm at string 13",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 544
    },
    {
        "Code": 30545,
        "Error_name": "Reverse connection alarm at string 14",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 545
    },
    {
        "Code": 30546,
        "Error_name": "Reverse connection alarm at string 15",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 546
    },
    {
        "Code": 30547,
        "Error_name": "Reverse connection alarm at string 16",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 547
    },
    {
        "Code": 30564,
        "Error_name": "Reverse connection alarm at string 17",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 564
    },
    {
        "Code": 30565,
        "Error_name": "Reverse connection alarm at string 18",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 565
    },
    {
        "Code": 30566,
        "Error_name": "Reverse connection alarm at string 19",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 566
    },
    {
        "Code": 30567,
        "Error_name": "Reverse connection alarm at string 20",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 567
    },
    {
        "Code": 30568,
        "Error_name": "Reverse connection alarm at string 21",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 568
    },
    {
        "Code": 30569,
        "Error_name": "Reverse connection alarm at string 22",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 569
    },
    {
        "Code": 30570,
        "Error_name": "Reverse connection alarm at string 23",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 570
    },
    {
        "Code": 30571,
        "Error_name": "Reverse connection alarm at string 24",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 571
    },
    {
        "Code": 40548,
        "Error_name": "Abnormal alarm at string 01",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 548
    },
    {
        "Code": 40549,
        "Error_name": "Abnormal alarm at string 02",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 549
    },
    {
        "Code": 40550,
        "Error_name": "Abnormal alarm at string 03",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 550
    },
    {
        "Code": 40551,
        "Error_name": "Abnormal alarm at string 04",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 551
    },
    {
        "Code": 40552,
        "Error_name": "Abnormal alarm at string 05",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 552
    },
    {
        "Code": 40553,
        "Error_name": "Abnormal alarm at string 06",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 553
    },
    {
        "Code": 40554,
        "Error_name": "Abnormal alarm at string 07",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 554
    },
    {
        "Code": 40555,
        "Error_name": "Abnormal alarm at string 08",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 555
    },
    {
        "Code": 40556,
        "Error_name": "Abnormal alarm at string 09",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 556
    },
    {
        "Code": 40557,
        "Error_name": "Abnormal alarm at string 10",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 557
    },
    {
        "Code": 40558,
        "Error_name": "Abnormal alarm at string 11",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 558
    },
    {
        "Code": 40559,
        "Error_name": "Abnormal alarm at string 12",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 559
    },
    {
        "Code": 40560,
        "Error_name": "Abnormal alarm at string 13",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 560
    },
    {
        "Code": 40561,
        "Error_name": "Abnormal alarm at string 14",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 561
    },
    {
        "Code": 40562,
        "Error_name": "Abnormal alarm at string 15",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 562
    },
    {
        "Code": 40563,
        "Error_name": "Abnormal alarm at string 16",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 563
    },
    {
        "Code": 40580,
        "Error_name": "Abnormal alarm at string 17",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 580
    },
    {
        "Code": 40581,
        "Error_name": "Abnormal alarm at string 18",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 581
    },
    {
        "Code": 40582,
        "Error_name": "Abnormal alarm at string 19",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 582
    },
    {
        "Code": 40583,
        "Error_name": "Abnormal alarm at string 20",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 583
    },
    {
        "Code": 40584,
        "Error_name": "Abnormal alarm at string 21",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 584
    },
    {
        "Code": 40585,
        "Error_name": "Abnormal alarm at string 22",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 585
    },
    {
        "Code": 40586,
        "Error_name": "Abnormal alarm at string 23",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 586
    },
    {
        "Code": 40587,
        "Error_name": "Abnormal alarm at string 24",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 587
    },
    {
        "Code": 50448,
        "Error_name": "Reverse connection fault at string 01",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 448
    },
    {
        "Code": 50449,
        "Error_name": "Reverse connection fault at string 02",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 449
    },
    {
        "Code": 50450,
        "Error_name": "Reverse connection fault at string 03",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 450
    },
    {
        "Code": 50451,
        "Error_name": "Reverse connection fault at string 04",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 451
    },
    {
        "Code": 50452,
        "Error_name": "Reverse connection fault at string 05",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 452
    },
    {
        "Code": 50453,
        "Error_name": "Reverse connection fault at string 06",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 453
    },
    {
        "Code": 50454,
        "Error_name": "Reverse connection fault at string 07",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 454
    },
    {
        "Code": 50455,
        "Error_name": "Reverse connection fault at string 08",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 455
    },
    {
        "Code": 50456,
        "Error_name": "Reverse connection fault at string 09",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 456
    },
    {
        "Code": 50457,
        "Error_name": "Reverse connection fault at string 10",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 457
    },
    {
        "Code": 50458,
        "Error_name": "Reverse connection fault at string 11",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 458
    },
    {
        "Code": 50459,
        "Error_name": "Reverse connection fault at string 12",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 459
    },
    {
        "Code": 50460,
        "Error_name": "Reverse connection fault at string 13",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 460
    },
    {
        "Code": 50461,
        "Error_name": "Reverse connection fault at string 14",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 461
    },
    {
        "Code": 50462,
        "Error_name": "Reverse connection fault at string 15",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 462
    },
    {
        "Code": 50463,
        "Error_name": "Reverse connection fault at string 16",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 463
    },
    {
        "Code": 50464,
        "Error_name": "Reverse connection fault at string 17",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 464
    },
    {
        "Code": 50465,
        "Error_name": "Reverse connection fault at string 18",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 465
    },
    {
        "Code": 50466,
        "Error_name": "Reverse connection fault at string 19",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 466
    },
    {
        "Code": 50467,
        "Error_name": "Reverse connection fault at string 20",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 467
    },
    {
        "Code": 50468,
        "Error_name": "Reverse connection fault at string 21",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 468
    },
    {
        "Code": 50469,
        "Error_name": "Reverse connection fault at string 22",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 469
    },
    {
        "Code": 50470,
        "Error_name": "Reverse connection fault at string 23",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 470
    },
    {
        "Code": 50471,
        "Error_name": "Reverse connection fault at string 24",
        "SMA_110": "NULL",
        "SMA_100": "NULL",
        "SMA_75": "NULL",
        "SGX_110": 471
    }
]

console.log(rawData.length)