"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleInterestTermsContract = {
    "contractName": "SimpleInterestTermsContract",
    "abi": [
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                }
            ],
            "name": "getValueRepaidToDate",
            "outputs": [
                {
                    "name": "_valueRepaid",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "DAY_LENGTH_IN_SECONDS",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "parameters",
                    "type": "bytes32"
                }
            ],
            "name": "unpackParameters",
            "outputs": [
                {
                    "name": "_principalPlusInterest",
                    "type": "uint128"
                },
                {
                    "name": "_amortizationUnitType",
                    "type": "uint8"
                },
                {
                    "name": "_termLengthInAmortizationUnits",
                    "type": "uint120"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "MONTH_LENGTH_IN_SECONDS",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "WEEK_LENGTH_IN_SECONDS",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "name": "payer",
                    "type": "address"
                },
                {
                    "name": "beneficiary",
                    "type": "address"
                },
                {
                    "name": "unitsOfRepayment",
                    "type": "uint256"
                },
                {
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "registerRepayment",
            "outputs": [
                {
                    "name": "_success",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "amortizationUnitType",
                    "type": "uint8"
                }
            ],
            "name": "getAmortizationUnitLengthInSeconds",
            "outputs": [
                {
                    "name": "_amortizationUnitLengthInBlocks",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "pure",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "HOUR_LENGTH_IN_SECONDS",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "agreementId",
                    "type": "bytes32"
                },
                {
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "getExpectedRepaymentValue",
            "outputs": [
                {
                    "name": "_expectedRepaymentValue",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "YEAR_LENGTH_IN_SECONDS",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "name": "_debtRegistry",
                    "type": "address"
                },
                {
                    "name": "_repaymentToken",
                    "type": "address"
                },
                {
                    "name": "_repaymentRouter",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        }
    ],
    "bytecode": "0x6060604052341561000f57600080fd5b604051606080610a5d8339810160405280805190602001909190805190602001909190805190602001909190505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505061094b806101126000396000f3006060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100a957806307762982146100e4578063113d81c01461010d57806320863894146101a257806340018a0d146101cb5780635f0280ba146101f45780636b3a12b7146102995780636f69c96f146102d357806399114d84146102fc578063fd127a4114610340575b600080fd5b34156100b457600080fd5b6100ce600480803560001916906020019091905050610369565b6040518082815260200191505060405180910390f35b34156100ef57600080fd5b6100f761038d565b6040518082815260200191505060405180910390f35b341561011857600080fd5b610132600480803560001916906020019091905050610396565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34156101ad57600080fd5b6101b5610457565b6040518082815260200191505060405180910390f35b34156101d657600080fd5b6101de610463565b6040518082815260200191505060405180910390f35b34156101ff57600080fd5b61027f60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061046f565b604051808215151515815260200191505060405180910390f35b34156102a457600080fd5b6102bd600480803560ff16906020019091905050610589565b6040518082815260200191505060405180910390f35b34156102de57600080fd5b6102e6610659565b6040518082815260200191505060405180910390f35b341561030757600080fd5b61032a60048080356000191690602001909190803590602001909190505061065f565b6040518082815260200191505060405180910390f35b341561034b57600080fd5b610353610885565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b6000806000806000806000807fffffffffffffffffffffffffffffffff00000000000000000000000000000000600102891694506fff00000000000000000000000000000060010289169350700100000000000000000000000000000000856001900481151561040257fe5b0492506f01000000000000000000000000000000846001900481151561042457fe5b0491506effffffffffffffffffffffffffffff600102891690508282826001900497509750975050505050509193909250565b601e6018610e10020281565b60076018610e10020281565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104d15760009050610580565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561057b576105548360008089600019166000191681526020019081526020016000205461089290919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610580565b600090505b95945050505050565b600080600481111561059757fe5b60ff168260ff1614156105ae57610e109050610654565b600160048111156105bb57fe5b60ff168260ff1614156105d5576018610e10029050610654565b600260048111156105e257fe5b60ff168260ff1614156105ff5760076018610e1002029050610654565b6003600481111561060c57fe5b60ff168260ff16141561062957601e6018610e1002029050610654565b60048081111561063557fe5b60ff168260ff1614156106535761016d6018610e1002029050610654565b5b919050565b610e1081565b600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561070c57600080fd5b6102c65a03f1151561071d57600080fd5b505050604051805190509650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156107ca57600080fd5b6102c65a03f115156107db57600080fd5b5050506040518051905095506107f087610396565b80955081965082975050505061080584610589565b915061082c8261081e888c6108b090919063ffffffff16565b6108c990919063ffffffff16565b9050610876836effffffffffffffffffffffffffffff16610868876fffffffffffffffffffffffffffffffff16846108e490919063ffffffff16565b6108c990919063ffffffff16565b97505050505050505092915050565b61016d6018610e10020281565b60008082840190508381101515156108a657fe5b8091505092915050565b60008282111515156108be57fe5b818303905092915050565b60008082848115156108d757fe5b0490508091505092915050565b60008060008414156108f95760009150610918565b828402905082848281151561090a57fe5b0414151561091457fe5b8091505b50929150505600a165627a7a72305820b7c4e4d081438954bc8bcd3b8286060c5d091213bb587ab0699a4ac6f55747240029",
    "deployedBytecode": "0x6060604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100a957806307762982146100e4578063113d81c01461010d57806320863894146101a257806340018a0d146101cb5780635f0280ba146101f45780636b3a12b7146102995780636f69c96f146102d357806399114d84146102fc578063fd127a4114610340575b600080fd5b34156100b457600080fd5b6100ce600480803560001916906020019091905050610369565b6040518082815260200191505060405180910390f35b34156100ef57600080fd5b6100f761038d565b6040518082815260200191505060405180910390f35b341561011857600080fd5b610132600480803560001916906020019091905050610396565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34156101ad57600080fd5b6101b5610457565b6040518082815260200191505060405180910390f35b34156101d657600080fd5b6101de610463565b6040518082815260200191505060405180910390f35b34156101ff57600080fd5b61027f60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061046f565b604051808215151515815260200191505060405180910390f35b34156102a457600080fd5b6102bd600480803560ff16906020019091905050610589565b6040518082815260200191505060405180910390f35b34156102de57600080fd5b6102e6610659565b6040518082815260200191505060405180910390f35b341561030757600080fd5b61032a60048080356000191690602001909190803590602001909190505061065f565b6040518082815260200191505060405180910390f35b341561034b57600080fd5b610353610885565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b6000806000806000806000807fffffffffffffffffffffffffffffffff00000000000000000000000000000000600102891694506fff00000000000000000000000000000060010289169350700100000000000000000000000000000000856001900481151561040257fe5b0492506f01000000000000000000000000000000846001900481151561042457fe5b0491506effffffffffffffffffffffffffffff600102891690508282826001900497509750975050505050509193909250565b601e6018610e10020281565b60076018610e10020281565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104d15760009050610580565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561057b576105548360008089600019166000191681526020019081526020016000205461089290919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610580565b600090505b95945050505050565b600080600481111561059757fe5b60ff168260ff1614156105ae57610e109050610654565b600160048111156105bb57fe5b60ff168260ff1614156105d5576018610e10029050610654565b600260048111156105e257fe5b60ff168260ff1614156105ff5760076018610e1002029050610654565b6003600481111561060c57fe5b60ff168260ff16141561062957601e6018610e1002029050610654565b60048081111561063557fe5b60ff168260ff1614156106535761016d6018610e1002029050610654565b5b919050565b610e1081565b600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561070c57600080fd5b6102c65a03f1151561071d57600080fd5b505050604051805190509650600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638b6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156107ca57600080fd5b6102c65a03f115156107db57600080fd5b5050506040518051905095506107f087610396565b80955081965082975050505061080584610589565b915061082c8261081e888c6108b090919063ffffffff16565b6108c990919063ffffffff16565b9050610876836effffffffffffffffffffffffffffff16610868876fffffffffffffffffffffffffffffffff16846108e490919063ffffffff16565b6108c990919063ffffffff16565b97505050505050505092915050565b61016d6018610e10020281565b60008082840190508381101515156108a657fe5b8091505092915050565b60008282111515156108be57fe5b818303905092915050565b60008082848115156108d757fe5b0490508091505092915050565b60008060008414156108f95760009150610918565b828402905082848281151561090a57fe5b0414151561091457fe5b8091505b50929150505600a165627a7a72305820b7c4e4d081438954bc8bcd3b8286060c5d091213bb587ab0699a4ac6f55747240029",
    "sourceMap": "728:6637:8:-;;;1394:306;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1592:13;1564:12;;:42;;;;;;;;;;;;;;;;;;1634:15;1617:14;;:32;;;;;;;;;;;;;;;;;;1677:16;1659:15;;:34;;;;;;;;;;;;;;;;;;1394:306;;;728:6637;;;;;;",
    "deployedSourceMap": "728:6637:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4718:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;946:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4891:1682;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1101:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1024:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2411:509;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6579:784;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;887:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3529:908;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1180:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4718:167;4814:17;4854:11;:24;4866:11;4854:24;;;;;;;;;;;;;;;;;;4847:31;;4718:167;;;:::o;946:72::-;1016:2;933:7;991:27;946:72;:::o;4891:1682::-;4995:30;5039:27;5080:38;5232:36;5446:35;5825:26;5909:25;6270:37;5296:66;5283:79;;:10;:79;5232:130;;5509:66;5496:79;;:10;:79;5446:129;;5891:8;5859:28;5854:34;;;:45;;;;;;;;5825:74;;5973:8;5942:27;5937:33;;;:44;;;;;;;;5909:72;;6335:66;6322:79;;:10;:79;6270:131;;6441:21;6483:20;6526:29;6518:38;;;6412:154;;;;;;4891:1682;;;;;;;;;;:::o;1101:73::-;1172:2;1016;933:7;991:27;1148:26;1101:73;:::o;1024:71::-;1094:1;1016:2;933:7;991:27;1070:25;1024:71;:::o;2411:509::-;2621:13;2668:15;;;;;;;;;;;2654:29;;:10;:29;;;;2650:72;;;2706:5;2699:12;;;;2650:72;2752:14;;;;;;;;;;;2736:30;;:12;:30;;;2732:159;;;2809:46;2838:16;2809:11;:24;2821:11;2809:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;2782:11;:24;2794:11;2782:24;;;;;;;;;;;;;;;;;:73;;;;2876:4;2869:11;;;;2732:159;2908:5;2901:12;;2411:509;;;;;;;;:::o;6579:784::-;6696:36;6782:26;6776:33;;;;;;;;6752:57;;:20;:57;;;6748:609;;;933:7;6825:29;;;;6748:609;6905:25;6899:32;;;;;;;;6875:56;;:20;:56;;;6871:486;;;1016:2;933:7;991:27;6947:28;;;;6871:486;7026:26;7020:33;;;;;;;;6996:57;;:20;:57;;;6992:365;;;1094:1;1016:2;933:7;991:27;1070:25;7069:29;;;;6992:365;7149:27;7143:34;;;;;;;;7119:58;;:20;:58;;;7115:242;;;1172:2;1016;933:7;991:27;1148:26;7193:30;;;;7115:242;7274:26;7268:33;;;;;;;;7244:57;;:20;:57;;;7240:117;;;1250:3;1016:2;933:7;991:27;1226;7317:29;;;;7240:117;6579:784;;;;:::o;887:53::-;933:7;887:53;:::o;3529:908::-;3671:28;3715:18;3798:27;3890:29;3929:26;3965:37;4143:27;4239:24;3736:12;;;;;;;;;;;:39;;;3776:11;3736:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3715:73;;3828:12;;;;;;;;;;;:38;;;3867:11;3828:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3798:81;;4104:28;4121:10;4104:16;:28::i;:::-;4013:119;;;;;;;;;;;;4173:56;4208:20;4173:34;:56::i;:::-;4143:86;;4266:65;4308:22;4266:37;4280:22;4266:9;:13;;:37;;;;:::i;:::-;:41;;:65;;;;:::i;:::-;4239:92;;4349:81;4400:29;4349:81;;:46;4373:21;4349:46;;:19;:23;;:46;;;;:::i;:::-;:50;;:81;;;;:::i;:::-;4342:88;;3529:908;;;;;;;;;;;:::o;1180:73::-;1250:3;1016:2;933:7;991:27;1226;1180:73;:::o;1008:129:25:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;836:110::-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;203:173::-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o",
    "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\n\n\ncontract SimpleInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) valueRepaid;\n\n    DebtRegistry debtRegistry;\n\n    address repaymentToken;\n    address repaymentRouter;\n\n    function SimpleInterestTermsContract(\n        address _debtRegistry,\n        address _repaymentToken,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n\n        repaymentToken = _repaymentToken;\n        repaymentRouter = _repaymentRouter;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        if (msg.sender != repaymentRouter) {\n            return false;\n        }\n\n        if (tokenAddress == repaymentToken) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n        uint issuanceBlockTimestamp = debtRegistry.getIssuanceBlockTimestamp(agreementId);\n\n        uint128 principalPlusInterest;\n        uint8 amortizationUnitType;\n        uint120 termLengthInAmortizationUnits;\n\n        (principalPlusInterest, amortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParameters(parameters);\n\n        uint amortizationUnitLength = getAmortizationUnitLengthInSeconds(amortizationUnitType);\n        uint numRepaymentPeriods = timestamp.sub(issuanceBlockTimestamp).div(amortizationUnitLength);\n\n        return numRepaymentPeriods.mul(principalPlusInterest).div(termLengthInAmortizationUnits);\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParameters(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint128 _principalPlusInterest,\n            uint8 _amortizationUnitType,\n            uint120 _termLengthInAmortizationUnits\n        )\n    {\n        // The first 16 bytes of the parameters represent the total principal + interest\n        bytes32 principalPlusInterestShifted =\n            parameters & 0xffffffffffffffffffffffffffffffff00000000000000000000000000000000;\n        // The subsequent byte represents the amortization unit type code\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x00000000000000000000000000000000ff000000000000000000000000000000;\n\n        // We bit-shift these values, respectively, 16 bytes and 15 bytes right using\n        // mathematical operations, so that their 32 byte integer counterparts\n        // correspond to the intended values packed in the 32 byte string\n        uint principalPlusInterest = uint(principalPlusInterestShifted) / 2 ** 128;\n        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 120;\n\n        // The last 15 bytes of the parameters represents the term length of the loan,\n        // as defined in terms of the specified amortization units.\n        // Since this value takes the rightmost place in the parameters string,\n        // we do not need to bit-shift it.\n        bytes32 termLengthInAmortizationUnits =\n            parameters & 0x0000000000000000000000000000000000ffffffffffffffffffffffffffffff;\n\n        return (\n            uint128(principalPlusInterest),\n            uint8(amortizationUnitType),\n            uint120(termLengthInAmortizationUnits)\n        );\n    }\n\n    function getAmortizationUnitLengthInSeconds(uint8 amortizationUnitType)\n        public\n        pure\n        returns (uint _amortizationUnitLengthInBlocks)\n    {\n        if (amortizationUnitType == uint8(AmortizationUnitType.HOURS)) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.DAYS)) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.WEEKS)) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.MONTHS)) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == uint8(AmortizationUnitType.YEARS)) {\n            return YEAR_LENGTH_IN_SECONDS;\n        }\n    }\n}\n",
    "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/SimpleInterestTermsContract.sol",
    "ast": {
        "attributes": {
            "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/examples/SimpleInterestTermsContract.sol",
            "exportedSymbols": {
                "SimpleInterestTermsContract": [
                    2547
                ]
            }
        },
        "children": [
            {
                "attributes": {
                    "literals": [
                        "solidity",
                        "0.4",
                        ".18"
                    ]
                },
                "id": 2232,
                "name": "PragmaDirective",
                "src": "584:23:8"
            },
            {
                "attributes": {
                    "SourceUnit": 5359,
                    "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
                    "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
                    "scope": 2548,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 2233,
                "name": "ImportDirective",
                "src": "609:55:8"
            },
            {
                "attributes": {
                    "SourceUnit": 1611,
                    "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/DebtRegistry.sol",
                    "file": "../DebtRegistry.sol",
                    "scope": 2548,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 2234,
                "name": "ImportDirective",
                "src": "665:29:8"
            },
            {
                "attributes": {
                    "SourceUnit": 2106,
                    "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/dharma.js/node_modules/charta/contracts/TermsContract.sol",
                    "file": "../TermsContract.sol",
                    "scope": 2548,
                    "symbolAliases": [
                        null
                    ],
                    "unitAlias": ""
                },
                "id": 2235,
                "name": "ImportDirective",
                "src": "695:30:8"
            },
            {
                "attributes": {
                    "contractDependencies": [
                        2105
                    ],
                    "contractKind": "contract",
                    "documentation": null,
                    "fullyImplemented": true,
                    "linearizedBaseContracts": [
                        2547,
                        2105
                    ],
                    "name": "SimpleInterestTermsContract",
                    "scope": 2548
                },
                "children": [
                    {
                        "attributes": {
                            "arguments": [
                                null
                            ]
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "TermsContract",
                                    "referencedDeclaration": 2105,
                                    "type": "contract TermsContract"
                                },
                                "id": 2236,
                                "name": "UserDefinedTypeName",
                                "src": "768:13:8"
                            }
                        ],
                        "id": 2237,
                        "name": "InheritanceSpecifier",
                        "src": "768:13:8"
                    },
                    {
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "SafeMath",
                                    "referencedDeclaration": 5358,
                                    "type": "library SafeMath"
                                },
                                "id": 2238,
                                "name": "UserDefinedTypeName",
                                "src": "794:8:8"
                            },
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2239,
                                "name": "ElementaryTypeName",
                                "src": "807:4:8"
                            }
                        ],
                        "id": 2240,
                        "name": "UsingForDirective",
                        "src": "788:24:8"
                    },
                    {
                        "attributes": {
                            "canonicalName": "SimpleInterestTermsContract.AmortizationUnitType",
                            "name": "AmortizationUnitType"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "HOURS"
                                },
                                "id": 2241,
                                "name": "EnumValue",
                                "src": "846:5:8"
                            },
                            {
                                "attributes": {
                                    "name": "DAYS"
                                },
                                "id": 2242,
                                "name": "EnumValue",
                                "src": "853:4:8"
                            },
                            {
                                "attributes": {
                                    "name": "WEEKS"
                                },
                                "id": 2243,
                                "name": "EnumValue",
                                "src": "859:5:8"
                            },
                            {
                                "attributes": {
                                    "name": "MONTHS"
                                },
                                "id": 2244,
                                "name": "EnumValue",
                                "src": "866:6:8"
                            },
                            {
                                "attributes": {
                                    "name": "YEARS"
                                },
                                "id": 2245,
                                "name": "EnumValue",
                                "src": "874:5:8"
                            }
                        ],
                        "id": 2246,
                        "name": "EnumDefinition",
                        "src": "818:63:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "HOUR_LENGTH_IN_SECONDS",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2247,
                                "name": "ElementaryTypeName",
                                "src": "887:4:8"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                        "typeIdentifier": "t_rational_3600_by_1",
                                        "typeString": "int_const 3600"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "int_const 3600"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "3630",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 60",
                                            "value": "60"
                                        },
                                        "id": 2248,
                                        "name": "Literal",
                                        "src": "933:2:8"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "3630",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 60",
                                            "value": "60"
                                        },
                                        "id": 2249,
                                        "name": "Literal",
                                        "src": "938:2:8"
                                    }
                                ],
                                "id": 2250,
                                "name": "BinaryOperation",
                                "src": "933:7:8"
                            }
                        ],
                        "id": 2251,
                        "name": "VariableDeclaration",
                        "src": "887:53:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "DAY_LENGTH_IN_SECONDS",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2252,
                                "name": "ElementaryTypeName",
                                "src": "946:4:8"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "uint256"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2251,
                                            "type": "uint256",
                                            "value": "HOUR_LENGTH_IN_SECONDS"
                                        },
                                        "id": 2253,
                                        "name": "Identifier",
                                        "src": "991:22:8"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "3234",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 24",
                                            "value": "24"
                                        },
                                        "id": 2254,
                                        "name": "Literal",
                                        "src": "1016:2:8"
                                    }
                                ],
                                "id": 2255,
                                "name": "BinaryOperation",
                                "src": "991:27:8"
                            }
                        ],
                        "id": 2256,
                        "name": "VariableDeclaration",
                        "src": "946:72:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "WEEK_LENGTH_IN_SECONDS",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2257,
                                "name": "ElementaryTypeName",
                                "src": "1024:4:8"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "uint256"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2256,
                                            "type": "uint256",
                                            "value": "DAY_LENGTH_IN_SECONDS"
                                        },
                                        "id": 2258,
                                        "name": "Identifier",
                                        "src": "1070:21:8"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "37",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 7",
                                            "value": "7"
                                        },
                                        "id": 2259,
                                        "name": "Literal",
                                        "src": "1094:1:8"
                                    }
                                ],
                                "id": 2260,
                                "name": "BinaryOperation",
                                "src": "1070:25:8"
                            }
                        ],
                        "id": 2261,
                        "name": "VariableDeclaration",
                        "src": "1024:71:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "MONTH_LENGTH_IN_SECONDS",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2262,
                                "name": "ElementaryTypeName",
                                "src": "1101:4:8"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "uint256"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2256,
                                            "type": "uint256",
                                            "value": "DAY_LENGTH_IN_SECONDS"
                                        },
                                        "id": 2263,
                                        "name": "Identifier",
                                        "src": "1148:21:8"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "3330",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 30",
                                            "value": "30"
                                        },
                                        "id": 2264,
                                        "name": "Literal",
                                        "src": "1172:2:8"
                                    }
                                ],
                                "id": 2265,
                                "name": "BinaryOperation",
                                "src": "1148:26:8"
                            }
                        ],
                        "id": 2266,
                        "name": "VariableDeclaration",
                        "src": "1101:73:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "name": "YEAR_LENGTH_IN_SECONDS",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "uint256",
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "uint",
                                    "type": "uint256"
                                },
                                "id": 2267,
                                "name": "ElementaryTypeName",
                                "src": "1180:4:8"
                            },
                            {
                                "attributes": {
                                    "argumentTypes": null,
                                    "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "operator": "*",
                                    "type": "uint256"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "overloadedDeclarations": [
                                                null
                                            ],
                                            "referencedDeclaration": 2256,
                                            "type": "uint256",
                                            "value": "DAY_LENGTH_IN_SECONDS"
                                        },
                                        "id": 2268,
                                        "name": "Identifier",
                                        "src": "1226:21:8"
                                    },
                                    {
                                        "attributes": {
                                            "argumentTypes": null,
                                            "hexvalue": "333635",
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "lValueRequested": false,
                                            "subdenomination": null,
                                            "token": "number",
                                            "type": "int_const 365",
                                            "value": "365"
                                        },
                                        "id": 2269,
                                        "name": "Literal",
                                        "src": "1250:3:8"
                                    }
                                ],
                                "id": 2270,
                                "name": "BinaryOperation",
                                "src": "1226:27:8"
                            }
                        ],
                        "id": 2271,
                        "name": "VariableDeclaration",
                        "src": "1180:73:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "valueRepaid",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "mapping(bytes32 => uint256)",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "type": "mapping(bytes32 => uint256)"
                                },
                                "children": [
                                    {
                                        "attributes": {
                                            "name": "bytes32",
                                            "type": "bytes32"
                                        },
                                        "id": 2272,
                                        "name": "ElementaryTypeName",
                                        "src": "1269:7:8"
                                    },
                                    {
                                        "attributes": {
                                            "name": "uint",
                                            "type": "uint256"
                                        },
                                        "id": 2273,
                                        "name": "ElementaryTypeName",
                                        "src": "1280:4:8"
                                    }
                                ],
                                "id": 2274,
                                "name": "Mapping",
                                "src": "1260:25:8"
                            }
                        ],
                        "id": 2275,
                        "name": "VariableDeclaration",
                        "src": "1260:37:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "debtRegistry",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "contract DebtRegistry",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "contractScope": null,
                                    "name": "DebtRegistry",
                                    "referencedDeclaration": 1610,
                                    "type": "contract DebtRegistry"
                                },
                                "id": 2276,
                                "name": "UserDefinedTypeName",
                                "src": "1304:12:8"
                            }
                        ],
                        "id": 2277,
                        "name": "VariableDeclaration",
                        "src": "1304:25:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "repaymentToken",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "address",
                                    "type": "address"
                                },
                                "id": 2278,
                                "name": "ElementaryTypeName",
                                "src": "1336:7:8"
                            }
                        ],
                        "id": 2279,
                        "name": "VariableDeclaration",
                        "src": "1336:22:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "name": "repaymentRouter",
                            "scope": 2547,
                            "stateVariable": true,
                            "storageLocation": "default",
                            "type": "address",
                            "value": null,
                            "visibility": "internal"
                        },
                        "children": [
                            {
                                "attributes": {
                                    "name": "address",
                                    "type": "address"
                                },
                                "id": 2280,
                                "name": "ElementaryTypeName",
                                "src": "1364:7:8"
                            }
                        ],
                        "id": 2281,
                        "name": "VariableDeclaration",
                        "src": "1364:23:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": true,
                            "modifiers": [
                                null
                            ],
                            "name": "SimpleInterestTermsContract",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "nonpayable",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_debtRegistry",
                                            "scope": 2305,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2282,
                                                "name": "ElementaryTypeName",
                                                "src": "1440:7:8"
                                            }
                                        ],
                                        "id": 2283,
                                        "name": "VariableDeclaration",
                                        "src": "1440:21:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_repaymentToken",
                                            "scope": 2305,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2284,
                                                "name": "ElementaryTypeName",
                                                "src": "1471:7:8"
                                            }
                                        ],
                                        "id": 2285,
                                        "name": "VariableDeclaration",
                                        "src": "1471:23:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_repaymentRouter",
                                            "scope": 2305,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2286,
                                                "name": "ElementaryTypeName",
                                                "src": "1504:7:8"
                                            }
                                        ],
                                        "id": 2287,
                                        "name": "VariableDeclaration",
                                        "src": "1504:24:8"
                                    }
                                ],
                                "id": 2288,
                                "name": "ParameterList",
                                "src": "1430:104:8"
                            },
                            {
                                "attributes": {
                                    "parameters": [
                                        null
                                    ]
                                },
                                "children": [],
                                "id": 2289,
                                "name": "ParameterList",
                                "src": "1554:0:8"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "contract DebtRegistry"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2277,
                                                            "type": "contract DebtRegistry",
                                                            "value": "debtRegistry"
                                                        },
                                                        "id": 2290,
                                                        "name": "Identifier",
                                                        "src": "1564:12:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "contract DebtRegistry",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_address",
                                                                            "typeString": "address"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 1610,
                                                                    "type": "type(contract DebtRegistry)",
                                                                    "value": "DebtRegistry"
                                                                },
                                                                "id": 2291,
                                                                "name": "Identifier",
                                                                "src": "1579:12:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2283,
                                                                    "type": "address",
                                                                    "value": "_debtRegistry"
                                                                },
                                                                "id": 2292,
                                                                "name": "Identifier",
                                                                "src": "1592:13:8"
                                                            }
                                                        ],
                                                        "id": 2293,
                                                        "name": "FunctionCall",
                                                        "src": "1579:27:8"
                                                    }
                                                ],
                                                "id": 2294,
                                                "name": "Assignment",
                                                "src": "1564:42:8"
                                            }
                                        ],
                                        "id": 2295,
                                        "name": "ExpressionStatement",
                                        "src": "1564:42:8"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2279,
                                                            "type": "address",
                                                            "value": "repaymentToken"
                                                        },
                                                        "id": 2296,
                                                        "name": "Identifier",
                                                        "src": "1617:14:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2285,
                                                            "type": "address",
                                                            "value": "_repaymentToken"
                                                        },
                                                        "id": 2297,
                                                        "name": "Identifier",
                                                        "src": "1634:15:8"
                                                    }
                                                ],
                                                "id": 2298,
                                                "name": "Assignment",
                                                "src": "1617:32:8"
                                            }
                                        ],
                                        "id": 2299,
                                        "name": "ExpressionStatement",
                                        "src": "1617:32:8"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "address"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2281,
                                                            "type": "address",
                                                            "value": "repaymentRouter"
                                                        },
                                                        "id": 2300,
                                                        "name": "Identifier",
                                                        "src": "1659:15:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2287,
                                                            "type": "address",
                                                            "value": "_repaymentRouter"
                                                        },
                                                        "id": 2301,
                                                        "name": "Identifier",
                                                        "src": "1677:16:8"
                                                    }
                                                ],
                                                "id": 2302,
                                                "name": "Assignment",
                                                "src": "1659:34:8"
                                            }
                                        ],
                                        "id": 2303,
                                        "name": "ExpressionStatement",
                                        "src": "1659:34:8"
                                    }
                                ],
                                "id": 2304,
                                "name": "Block",
                                "src": "1554:146:8"
                            }
                        ],
                        "id": 2305,
                        "name": "FunctionDefinition",
                        "src": "1394:306:8"
                    },
                    {
                        "attributes": {
                            "constant": false,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "registerRepayment",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "nonpayable",
                            "superFunction": 2088,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2306,
                                                "name": "ElementaryTypeName",
                                                "src": "2447:7:8"
                                            }
                                        ],
                                        "id": 2307,
                                        "name": "VariableDeclaration",
                                        "src": "2447:19:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "payer",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2308,
                                                "name": "ElementaryTypeName",
                                                "src": "2476:7:8"
                                            }
                                        ],
                                        "id": 2309,
                                        "name": "VariableDeclaration",
                                        "src": "2476:13:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "beneficiary",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2310,
                                                "name": "ElementaryTypeName",
                                                "src": "2499:7:8"
                                            }
                                        ],
                                        "id": 2311,
                                        "name": "VariableDeclaration",
                                        "src": "2499:19:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "unitsOfRepayment",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 2312,
                                                "name": "ElementaryTypeName",
                                                "src": "2528:7:8"
                                            }
                                        ],
                                        "id": 2313,
                                        "name": "VariableDeclaration",
                                        "src": "2528:24:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "tokenAddress",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "address",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "address",
                                                    "type": "address"
                                                },
                                                "id": 2314,
                                                "name": "ElementaryTypeName",
                                                "src": "2562:7:8"
                                            }
                                        ],
                                        "id": 2315,
                                        "name": "VariableDeclaration",
                                        "src": "2562:20:8"
                                    }
                                ],
                                "id": 2316,
                                "name": "ParameterList",
                                "src": "2437:151:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_success",
                                            "scope": 2349,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bool",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bool",
                                                    "type": "bool"
                                                },
                                                "id": 2317,
                                                "name": "ElementaryTypeName",
                                                "src": "2621:4:8"
                                            }
                                        ],
                                        "id": 2318,
                                        "name": "VariableDeclaration",
                                        "src": "2621:13:8"
                                    }
                                ],
                                "id": 2319,
                                "name": "ParameterList",
                                "src": "2620:15:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "falseBody": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "!=",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "sender",
                                                            "referencedDeclaration": null,
                                                            "type": "address"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 5938,
                                                                    "type": "msg",
                                                                    "value": "msg"
                                                                },
                                                                "id": 2320,
                                                                "name": "Identifier",
                                                                "src": "2654:3:8"
                                                            }
                                                        ],
                                                        "id": 2321,
                                                        "name": "MemberAccess",
                                                        "src": "2654:10:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2281,
                                                            "type": "address",
                                                            "value": "repaymentRouter"
                                                        },
                                                        "id": 2322,
                                                        "name": "Identifier",
                                                        "src": "2668:15:8"
                                                    }
                                                ],
                                                "id": 2323,
                                                "name": "BinaryOperation",
                                                "src": "2654:29:8"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 2319
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "66616c7365",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "bool",
                                                                    "type": "bool",
                                                                    "value": "false"
                                                                },
                                                                "id": 2324,
                                                                "name": "Literal",
                                                                "src": "2706:5:8"
                                                            }
                                                        ],
                                                        "id": 2325,
                                                        "name": "Return",
                                                        "src": "2699:12:8"
                                                    }
                                                ],
                                                "id": 2326,
                                                "name": "Block",
                                                "src": "2685:37:8"
                                            }
                                        ],
                                        "id": 2327,
                                        "name": "IfStatement",
                                        "src": "2650:72:8"
                                    },
                                    {
                                        "attributes": {
                                            "falseBody": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2315,
                                                            "type": "address",
                                                            "value": "tokenAddress"
                                                        },
                                                        "id": 2328,
                                                        "name": "Identifier",
                                                        "src": "2736:12:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2279,
                                                            "type": "address",
                                                            "value": "repaymentToken"
                                                        },
                                                        "id": 2329,
                                                        "name": "Identifier",
                                                        "src": "2752:14:8"
                                                    }
                                                ],
                                                "id": 2330,
                                                "name": "BinaryOperation",
                                                "src": "2736:30:8"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": "=",
                                                                    "type": "uint256"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": true,
                                                                            "isPure": false,
                                                                            "lValueRequested": true,
                                                                            "type": "uint256"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2275,
                                                                                    "type": "mapping(bytes32 => uint256)",
                                                                                    "value": "valueRepaid"
                                                                                },
                                                                                "id": 2331,
                                                                                "name": "Identifier",
                                                                                "src": "2782:11:8"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2307,
                                                                                    "type": "bytes32",
                                                                                    "value": "agreementId"
                                                                                },
                                                                                "id": 2332,
                                                                                "name": "Identifier",
                                                                                "src": "2794:11:8"
                                                                            }
                                                                        ],
                                                                        "id": 2333,
                                                                        "name": "IndexAccess",
                                                                        "src": "2782:24:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "isStructConstructorCall": false,
                                                                            "lValueRequested": false,
                                                                            "names": [
                                                                                null
                                                                            ],
                                                                            "type": "uint256",
                                                                            "type_conversion": false
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_uint256",
                                                                                            "typeString": "uint256"
                                                                                        }
                                                                                    ],
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "add",
                                                                                    "referencedDeclaration": 5357,
                                                                                    "type": "function (uint256,uint256) pure returns (uint256)"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": true,
                                                                                            "isPure": false,
                                                                                            "lValueRequested": false,
                                                                                            "type": "uint256"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 2275,
                                                                                                    "type": "mapping(bytes32 => uint256)",
                                                                                                    "value": "valueRepaid"
                                                                                                },
                                                                                                "id": 2334,
                                                                                                "name": "Identifier",
                                                                                                "src": "2809:11:8"
                                                                                            },
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 2307,
                                                                                                    "type": "bytes32",
                                                                                                    "value": "agreementId"
                                                                                                },
                                                                                                "id": 2335,
                                                                                                "name": "Identifier",
                                                                                                "src": "2821:11:8"
                                                                                            }
                                                                                        ],
                                                                                        "id": 2336,
                                                                                        "name": "IndexAccess",
                                                                                        "src": "2809:24:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2337,
                                                                                "name": "MemberAccess",
                                                                                "src": "2809:28:8"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2313,
                                                                                    "type": "uint256",
                                                                                    "value": "unitsOfRepayment"
                                                                                },
                                                                                "id": 2338,
                                                                                "name": "Identifier",
                                                                                "src": "2838:16:8"
                                                                            }
                                                                        ],
                                                                        "id": 2339,
                                                                        "name": "FunctionCall",
                                                                        "src": "2809:46:8"
                                                                    }
                                                                ],
                                                                "id": 2340,
                                                                "name": "Assignment",
                                                                "src": "2782:73:8"
                                                            }
                                                        ],
                                                        "id": 2341,
                                                        "name": "ExpressionStatement",
                                                        "src": "2782:73:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 2319
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "74727565",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "bool",
                                                                    "type": "bool",
                                                                    "value": "true"
                                                                },
                                                                "id": 2342,
                                                                "name": "Literal",
                                                                "src": "2876:4:8"
                                                            }
                                                        ],
                                                        "id": 2343,
                                                        "name": "Return",
                                                        "src": "2869:11:8"
                                                    }
                                                ],
                                                "id": 2344,
                                                "name": "Block",
                                                "src": "2768:123:8"
                                            }
                                        ],
                                        "id": 2345,
                                        "name": "IfStatement",
                                        "src": "2732:159:8"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2319
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "hexvalue": "66616c7365",
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "subdenomination": null,
                                                    "token": "bool",
                                                    "type": "bool",
                                                    "value": "false"
                                                },
                                                "id": 2346,
                                                "name": "Literal",
                                                "src": "2908:5:8"
                                            }
                                        ],
                                        "id": 2347,
                                        "name": "Return",
                                        "src": "2901:12:8"
                                    }
                                ],
                                "id": 2348,
                                "name": "Block",
                                "src": "2640:280:8"
                            }
                        ],
                        "id": 2349,
                        "name": "FunctionDefinition",
                        "src": "2411:509:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getExpectedRepaymentValue",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "view",
                            "superFunction": 2097,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2415,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2350,
                                                "name": "ElementaryTypeName",
                                                "src": "3573:7:8"
                                            }
                                        ],
                                        "id": 2351,
                                        "name": "VariableDeclaration",
                                        "src": "3573:19:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "timestamp",
                                            "scope": 2415,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint256",
                                                    "type": "uint256"
                                                },
                                                "id": 2352,
                                                "name": "ElementaryTypeName",
                                                "src": "3602:7:8"
                                            }
                                        ],
                                        "id": 2353,
                                        "name": "VariableDeclaration",
                                        "src": "3602:17:8"
                                    }
                                ],
                                "id": 2354,
                                "name": "ParameterList",
                                "src": "3563:62:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_expectedRepaymentValue",
                                            "scope": 2415,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2355,
                                                "name": "ElementaryTypeName",
                                                "src": "3671:4:8"
                                            }
                                        ],
                                        "id": 2356,
                                        "name": "VariableDeclaration",
                                        "src": "3671:28:8"
                                    }
                                ],
                                "id": 2357,
                                "name": "ParameterList",
                                "src": "3670:30:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2359
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "parameters",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "bytes32",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2358,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3715:7:8"
                                                    }
                                                ],
                                                "id": 2359,
                                                "name": "VariableDeclaration",
                                                "src": "3715:18:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "bytes32",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "getTermsContractParameters",
                                                            "referencedDeclaration": 1527,
                                                            "type": "function (bytes32) view external returns (bytes32)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2277,
                                                                    "type": "contract DebtRegistry",
                                                                    "value": "debtRegistry"
                                                                },
                                                                "id": 2360,
                                                                "name": "Identifier",
                                                                "src": "3736:12:8"
                                                            }
                                                        ],
                                                        "id": 2361,
                                                        "name": "MemberAccess",
                                                        "src": "3736:39:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2351,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2362,
                                                        "name": "Identifier",
                                                        "src": "3776:11:8"
                                                    }
                                                ],
                                                "id": 2363,
                                                "name": "FunctionCall",
                                                "src": "3736:52:8"
                                            }
                                        ],
                                        "id": 2364,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3715:73:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2366
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "issuanceBlockTimestamp",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 2365,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3798:4:8"
                                                    }
                                                ],
                                                "id": 2366,
                                                "name": "VariableDeclaration",
                                                "src": "3798:27:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "uint256",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes32",
                                                                    "typeString": "bytes32"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "getIssuanceBlockTimestamp",
                                                            "referencedDeclaration": 1560,
                                                            "type": "function (bytes32) view external returns (uint256)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2277,
                                                                    "type": "contract DebtRegistry",
                                                                    "value": "debtRegistry"
                                                                },
                                                                "id": 2367,
                                                                "name": "Identifier",
                                                                "src": "3828:12:8"
                                                            }
                                                        ],
                                                        "id": 2368,
                                                        "name": "MemberAccess",
                                                        "src": "3828:38:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2351,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2369,
                                                        "name": "Identifier",
                                                        "src": "3867:11:8"
                                                    }
                                                ],
                                                "id": 2370,
                                                "name": "FunctionCall",
                                                "src": "3828:51:8"
                                            }
                                        ],
                                        "id": 2371,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3798:81:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                null
                                            ],
                                            "initialValue": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "principalPlusInterest",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint128",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint128",
                                                            "type": "uint128"
                                                        },
                                                        "id": 2372,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3890:7:8"
                                                    }
                                                ],
                                                "id": 2373,
                                                "name": "VariableDeclaration",
                                                "src": "3890:29:8"
                                            }
                                        ],
                                        "id": 2374,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3890:29:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                null
                                            ],
                                            "initialValue": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "amortizationUnitType",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint8",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint8",
                                                            "type": "uint8"
                                                        },
                                                        "id": 2375,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3929:5:8"
                                                    }
                                                ],
                                                "id": 2376,
                                                "name": "VariableDeclaration",
                                                "src": "3929:26:8"
                                            }
                                        ],
                                        "id": 2377,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3929:26:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                null
                                            ],
                                            "initialValue": null
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "termLengthInAmortizationUnits",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint120",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint120",
                                                            "type": "uint120"
                                                        },
                                                        "id": 2378,
                                                        "name": "ElementaryTypeName",
                                                        "src": "3965:7:8"
                                                    }
                                                ],
                                                "id": 2379,
                                                "name": "VariableDeclaration",
                                                "src": "3965:37:8"
                                            }
                                        ],
                                        "id": 2380,
                                        "name": "VariableDeclarationStatement",
                                        "src": "3965:37:8"
                                    },
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "=",
                                                    "type": "tuple()"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isInlineArray": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": true,
                                                            "type": "tuple(uint128,uint8,uint120)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2373,
                                                                    "type": "uint128",
                                                                    "value": "principalPlusInterest"
                                                                },
                                                                "id": 2381,
                                                                "name": "Identifier",
                                                                "src": "4014:21:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2376,
                                                                    "type": "uint8",
                                                                    "value": "amortizationUnitType"
                                                                },
                                                                "id": 2382,
                                                                "name": "Identifier",
                                                                "src": "4037:20:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2379,
                                                                    "type": "uint120",
                                                                    "value": "termLengthInAmortizationUnits"
                                                                },
                                                                "id": 2383,
                                                                "name": "Identifier",
                                                                "src": "4059:29:8"
                                                            }
                                                        ],
                                                        "id": 2384,
                                                        "name": "TupleExpression",
                                                        "src": "4013:76:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "tuple(uint128,uint8,uint120)",
                                                            "type_conversion": false
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2488,
                                                                    "type": "function (bytes32) pure returns (uint128,uint8,uint120)",
                                                                    "value": "unpackParameters"
                                                                },
                                                                "id": 2385,
                                                                "name": "Identifier",
                                                                "src": "4104:16:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2359,
                                                                    "type": "bytes32",
                                                                    "value": "parameters"
                                                                },
                                                                "id": 2386,
                                                                "name": "Identifier",
                                                                "src": "4121:10:8"
                                                            }
                                                        ],
                                                        "id": 2387,
                                                        "name": "FunctionCall",
                                                        "src": "4104:28:8"
                                                    }
                                                ],
                                                "id": 2388,
                                                "name": "Assignment",
                                                "src": "4013:119:8"
                                            }
                                        ],
                                        "id": 2389,
                                        "name": "ExpressionStatement",
                                        "src": "4013:119:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2391
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "amortizationUnitLength",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 2390,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4143:4:8"
                                                    }
                                                ],
                                                "id": 2391,
                                                "name": "VariableDeclaration",
                                                "src": "4143:27:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "uint256",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint8",
                                                                    "typeString": "uint8"
                                                                }
                                                            ],
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2546,
                                                            "type": "function (uint8) pure returns (uint256)",
                                                            "value": "getAmortizationUnitLengthInSeconds"
                                                        },
                                                        "id": 2392,
                                                        "name": "Identifier",
                                                        "src": "4173:34:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2376,
                                                            "type": "uint8",
                                                            "value": "amortizationUnitType"
                                                        },
                                                        "id": 2393,
                                                        "name": "Identifier",
                                                        "src": "4208:20:8"
                                                    }
                                                ],
                                                "id": 2394,
                                                "name": "FunctionCall",
                                                "src": "4173:56:8"
                                            }
                                        ],
                                        "id": 2395,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4143:86:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2397
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "numRepaymentPeriods",
                                                    "scope": 2415,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 2396,
                                                        "name": "ElementaryTypeName",
                                                        "src": "4239:4:8"
                                                    }
                                                ],
                                                "id": 2397,
                                                "name": "VariableDeclaration",
                                                "src": "4239:24:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "uint256",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint256",
                                                                    "typeString": "uint256"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "div",
                                                            "referencedDeclaration": 5313,
                                                            "type": "function (uint256,uint256) pure returns (uint256)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "uint256",
                                                                    "type_conversion": false
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_uint256",
                                                                                    "typeString": "uint256"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "sub",
                                                                            "referencedDeclaration": 5333,
                                                                            "type": "function (uint256,uint256) pure returns (uint256)"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2353,
                                                                                    "type": "uint256",
                                                                                    "value": "timestamp"
                                                                                },
                                                                                "id": 2398,
                                                                                "name": "Identifier",
                                                                                "src": "4266:9:8"
                                                                            }
                                                                        ],
                                                                        "id": 2399,
                                                                        "name": "MemberAccess",
                                                                        "src": "4266:13:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2366,
                                                                            "type": "uint256",
                                                                            "value": "issuanceBlockTimestamp"
                                                                        },
                                                                        "id": 2400,
                                                                        "name": "Identifier",
                                                                        "src": "4280:22:8"
                                                                    }
                                                                ],
                                                                "id": 2401,
                                                                "name": "FunctionCall",
                                                                "src": "4266:37:8"
                                                            }
                                                        ],
                                                        "id": 2402,
                                                        "name": "MemberAccess",
                                                        "src": "4266:41:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2391,
                                                            "type": "uint256",
                                                            "value": "amortizationUnitLength"
                                                        },
                                                        "id": 2403,
                                                        "name": "Identifier",
                                                        "src": "4308:22:8"
                                                    }
                                                ],
                                                "id": 2404,
                                                "name": "FunctionCall",
                                                "src": "4266:65:8"
                                            }
                                        ],
                                        "id": 2405,
                                        "name": "VariableDeclarationStatement",
                                        "src": "4239:92:8"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2357
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "isStructConstructorCall": false,
                                                    "lValueRequested": false,
                                                    "names": [
                                                        null
                                                    ],
                                                    "type": "uint256",
                                                    "type_conversion": false
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_uint120",
                                                                    "typeString": "uint120"
                                                                }
                                                            ],
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "member_name": "div",
                                                            "referencedDeclaration": 5313,
                                                            "type": "function (uint256,uint256) pure returns (uint256)"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "uint256",
                                                                    "type_conversion": false
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_uint128",
                                                                                    "typeString": "uint128"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "member_name": "mul",
                                                                            "referencedDeclaration": 5295,
                                                                            "type": "function (uint256,uint256) pure returns (uint256)"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2397,
                                                                                    "type": "uint256",
                                                                                    "value": "numRepaymentPeriods"
                                                                                },
                                                                                "id": 2406,
                                                                                "name": "Identifier",
                                                                                "src": "4349:19:8"
                                                                            }
                                                                        ],
                                                                        "id": 2407,
                                                                        "name": "MemberAccess",
                                                                        "src": "4349:23:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2373,
                                                                            "type": "uint128",
                                                                            "value": "principalPlusInterest"
                                                                        },
                                                                        "id": 2408,
                                                                        "name": "Identifier",
                                                                        "src": "4373:21:8"
                                                                    }
                                                                ],
                                                                "id": 2409,
                                                                "name": "FunctionCall",
                                                                "src": "4349:46:8"
                                                            }
                                                        ],
                                                        "id": 2410,
                                                        "name": "MemberAccess",
                                                        "src": "4349:50:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2379,
                                                            "type": "uint120",
                                                            "value": "termLengthInAmortizationUnits"
                                                        },
                                                        "id": 2411,
                                                        "name": "Identifier",
                                                        "src": "4400:29:8"
                                                    }
                                                ],
                                                "id": 2412,
                                                "name": "FunctionCall",
                                                "src": "4349:81:8"
                                            }
                                        ],
                                        "id": 2413,
                                        "name": "Return",
                                        "src": "4342:88:8"
                                    }
                                ],
                                "id": 2414,
                                "name": "Block",
                                "src": "3705:732:8"
                            }
                        ],
                        "id": 2415,
                        "name": "FunctionDefinition",
                        "src": "3529:908:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getValueRepaidToDate",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "view",
                            "superFunction": 2104,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "agreementId",
                                            "scope": 2427,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2416,
                                                "name": "ElementaryTypeName",
                                                "src": "4748:7:8"
                                            }
                                        ],
                                        "id": 2417,
                                        "name": "VariableDeclaration",
                                        "src": "4748:19:8"
                                    }
                                ],
                                "id": 2418,
                                "name": "ParameterList",
                                "src": "4747:21:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_valueRepaid",
                                            "scope": 2427,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2419,
                                                "name": "ElementaryTypeName",
                                                "src": "4814:4:8"
                                            }
                                        ],
                                        "id": 2420,
                                        "name": "VariableDeclaration",
                                        "src": "4814:17:8"
                                    }
                                ],
                                "id": 2421,
                                "name": "ParameterList",
                                "src": "4813:19:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2421
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2275,
                                                            "type": "mapping(bytes32 => uint256)",
                                                            "value": "valueRepaid"
                                                        },
                                                        "id": 2422,
                                                        "name": "Identifier",
                                                        "src": "4854:11:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2417,
                                                            "type": "bytes32",
                                                            "value": "agreementId"
                                                        },
                                                        "id": 2423,
                                                        "name": "Identifier",
                                                        "src": "4866:11:8"
                                                    }
                                                ],
                                                "id": 2424,
                                                "name": "IndexAccess",
                                                "src": "4854:24:8"
                                            }
                                        ],
                                        "id": 2425,
                                        "name": "Return",
                                        "src": "4847:31:8"
                                    }
                                ],
                                "id": 2426,
                                "name": "Block",
                                "src": "4837:48:8"
                            }
                        ],
                        "id": 2427,
                        "name": "FunctionDefinition",
                        "src": "4718:167:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "unpackParameters",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "pure",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "parameters",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "bytes32",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "bytes32",
                                                    "type": "bytes32"
                                                },
                                                "id": 2428,
                                                "name": "ElementaryTypeName",
                                                "src": "4917:7:8"
                                            }
                                        ],
                                        "id": 2429,
                                        "name": "VariableDeclaration",
                                        "src": "4917:18:8"
                                    }
                                ],
                                "id": 2430,
                                "name": "ParameterList",
                                "src": "4916:20:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_principalPlusInterest",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint128",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint128",
                                                    "type": "uint128"
                                                },
                                                "id": 2431,
                                                "name": "ElementaryTypeName",
                                                "src": "4995:7:8"
                                            }
                                        ],
                                        "id": 2432,
                                        "name": "VariableDeclaration",
                                        "src": "4995:30:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amortizationUnitType",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint8",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint8",
                                                    "type": "uint8"
                                                },
                                                "id": 2433,
                                                "name": "ElementaryTypeName",
                                                "src": "5039:5:8"
                                            }
                                        ],
                                        "id": 2434,
                                        "name": "VariableDeclaration",
                                        "src": "5039:27:8"
                                    },
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_termLengthInAmortizationUnits",
                                            "scope": 2488,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint120",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint120",
                                                    "type": "uint120"
                                                },
                                                "id": 2435,
                                                "name": "ElementaryTypeName",
                                                "src": "5080:7:8"
                                            }
                                        ],
                                        "id": 2436,
                                        "name": "VariableDeclaration",
                                        "src": "5080:38:8"
                                    }
                                ],
                                "id": 2437,
                                "name": "ParameterList",
                                "src": "4981:147:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2439
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "principalPlusInterestShifted",
                                                    "scope": 2488,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "bytes32",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2438,
                                                        "name": "ElementaryTypeName",
                                                        "src": "5232:7:8"
                                                    }
                                                ],
                                                "id": 2439,
                                                "name": "VariableDeclaration",
                                                "src": "5232:36:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "&",
                                                    "type": "bytes32"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2429,
                                                            "type": "bytes32",
                                                            "value": "parameters"
                                                        },
                                                        "id": 2440,
                                                        "name": "Identifier",
                                                        "src": "5283:10:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "307866666666666666666666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 115792089237316195423570985008687907852929702298719625575994209400481361428480",
                                                            "value": "0xffffffffffffffffffffffffffffffff00000000000000000000000000000000"
                                                        },
                                                        "id": 2441,
                                                        "name": "Literal",
                                                        "src": "5296:66:8"
                                                    }
                                                ],
                                                "id": 2442,
                                                "name": "BinaryOperation",
                                                "src": "5283:79:8"
                                            }
                                        ],
                                        "id": 2443,
                                        "name": "VariableDeclarationStatement",
                                        "src": "5232:130:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2445
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "amortizationUnitTypeShifted",
                                                    "scope": 2488,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "bytes32",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2444,
                                                        "name": "ElementaryTypeName",
                                                        "src": "5446:7:8"
                                                    }
                                                ],
                                                "id": 2445,
                                                "name": "VariableDeclaration",
                                                "src": "5446:35:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "&",
                                                    "type": "bytes32"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2429,
                                                            "type": "bytes32",
                                                            "value": "parameters"
                                                        },
                                                        "id": 2446,
                                                        "name": "Identifier",
                                                        "src": "5496:10:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030306666303030303030303030303030303030303030303030303030303030303030",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 338953138925153547590470800371487866880",
                                                            "value": "0x00000000000000000000000000000000ff000000000000000000000000000000"
                                                        },
                                                        "id": 2447,
                                                        "name": "Literal",
                                                        "src": "5509:66:8"
                                                    }
                                                ],
                                                "id": 2448,
                                                "name": "BinaryOperation",
                                                "src": "5496:79:8"
                                            }
                                        ],
                                        "id": 2449,
                                        "name": "VariableDeclarationStatement",
                                        "src": "5446:129:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2451
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "principalPlusInterest",
                                                    "scope": 2488,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 2450,
                                                        "name": "ElementaryTypeName",
                                                        "src": "5825:4:8"
                                                    }
                                                ],
                                                "id": 2451,
                                                "name": "VariableDeclaration",
                                                "src": "5825:26:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "/",
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint256",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint256)",
                                                                    "value": "uint"
                                                                },
                                                                "id": 2452,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "5854:4:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2439,
                                                                    "type": "bytes32",
                                                                    "value": "principalPlusInterestShifted"
                                                                },
                                                                "id": 2453,
                                                                "name": "Identifier",
                                                                "src": "5859:28:8"
                                                            }
                                                        ],
                                                        "id": 2454,
                                                        "name": "FunctionCall",
                                                        "src": "5854:34:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                                                "typeString": "int_const 340282366920938463463374607431768211456"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "operator": "**",
                                                            "type": "int_const 340282366920938463463374607431768211456"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "32",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 2",
                                                                    "value": "2"
                                                                },
                                                                "id": 2455,
                                                                "name": "Literal",
                                                                "src": "5891:1:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "313238",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 128",
                                                                    "value": "128"
                                                                },
                                                                "id": 2456,
                                                                "name": "Literal",
                                                                "src": "5896:3:8"
                                                            }
                                                        ],
                                                        "id": 2457,
                                                        "name": "BinaryOperation",
                                                        "src": "5891:8:8"
                                                    }
                                                ],
                                                "id": 2458,
                                                "name": "BinaryOperation",
                                                "src": "5854:45:8"
                                            }
                                        ],
                                        "id": 2459,
                                        "name": "VariableDeclarationStatement",
                                        "src": "5825:74:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2461
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "amortizationUnitType",
                                                    "scope": 2488,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "uint256",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "uint",
                                                            "type": "uint256"
                                                        },
                                                        "id": 2460,
                                                        "name": "ElementaryTypeName",
                                                        "src": "5909:4:8"
                                                    }
                                                ],
                                                "id": 2461,
                                                "name": "VariableDeclaration",
                                                "src": "5909:25:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "/",
                                                    "type": "uint256"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint256",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint256)",
                                                                    "value": "uint"
                                                                },
                                                                "id": 2462,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "5937:4:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2445,
                                                                    "type": "bytes32",
                                                                    "value": "amortizationUnitTypeShifted"
                                                                },
                                                                "id": 2463,
                                                                "name": "Identifier",
                                                                "src": "5942:27:8"
                                                            }
                                                        ],
                                                        "id": 2464,
                                                        "name": "FunctionCall",
                                                        "src": "5937:33:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_rational_1329227995784915872903807060280344576_by_1",
                                                                "typeString": "int_const 1329227995784915872903807060280344576"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "operator": "**",
                                                            "type": "int_const 1329227995784915872903807060280344576"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "32",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 2",
                                                                    "value": "2"
                                                                },
                                                                "id": 2465,
                                                                "name": "Literal",
                                                                "src": "5973:1:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "hexvalue": "313230",
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "subdenomination": null,
                                                                    "token": "number",
                                                                    "type": "int_const 120",
                                                                    "value": "120"
                                                                },
                                                                "id": 2466,
                                                                "name": "Literal",
                                                                "src": "5978:3:8"
                                                            }
                                                        ],
                                                        "id": 2467,
                                                        "name": "BinaryOperation",
                                                        "src": "5973:8:8"
                                                    }
                                                ],
                                                "id": 2468,
                                                "name": "BinaryOperation",
                                                "src": "5937:44:8"
                                            }
                                        ],
                                        "id": 2469,
                                        "name": "VariableDeclarationStatement",
                                        "src": "5909:72:8"
                                    },
                                    {
                                        "attributes": {
                                            "assignments": [
                                                2471
                                            ]
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "constant": false,
                                                    "name": "termLengthInAmortizationUnits",
                                                    "scope": 2488,
                                                    "stateVariable": false,
                                                    "storageLocation": "default",
                                                    "type": "bytes32",
                                                    "value": null,
                                                    "visibility": "internal"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "name": "bytes32",
                                                            "type": "bytes32"
                                                        },
                                                        "id": 2470,
                                                        "name": "ElementaryTypeName",
                                                        "src": "6270:7:8"
                                                    }
                                                ],
                                                "id": 2471,
                                                "name": "VariableDeclaration",
                                                "src": "6270:37:8"
                                            },
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "&",
                                                    "type": "bytes32"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2429,
                                                            "type": "bytes32",
                                                            "value": "parameters"
                                                        },
                                                        "id": 2472,
                                                        "name": "Identifier",
                                                        "src": "6322:10:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030666666666666666666666666666666666666666666666666666666666666",
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "lValueRequested": false,
                                                            "subdenomination": null,
                                                            "token": "number",
                                                            "type": "int_const 1329227995784915872903807060280344575",
                                                            "value": "0x0000000000000000000000000000000000ffffffffffffffffffffffffffffff"
                                                        },
                                                        "id": 2473,
                                                        "name": "Literal",
                                                        "src": "6335:66:8"
                                                    }
                                                ],
                                                "id": 2474,
                                                "name": "BinaryOperation",
                                                "src": "6322:79:8"
                                            }
                                        ],
                                        "id": 2475,
                                        "name": "VariableDeclarationStatement",
                                        "src": "6270:131:8"
                                    },
                                    {
                                        "attributes": {
                                            "functionReturnParameters": 2437
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "isConstant": false,
                                                    "isInlineArray": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "type": "tuple(uint128,uint8,uint120)"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint128",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint128)",
                                                                    "value": "uint128"
                                                                },
                                                                "id": 2476,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "6433:7:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2451,
                                                                    "type": "uint256",
                                                                    "value": "principalPlusInterest"
                                                                },
                                                                "id": 2477,
                                                                "name": "Identifier",
                                                                "src": "6441:21:8"
                                                            }
                                                        ],
                                                        "id": 2478,
                                                        "name": "FunctionCall",
                                                        "src": "6433:30:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint8",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_uint256",
                                                                            "typeString": "uint256"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint8)",
                                                                    "value": "uint8"
                                                                },
                                                                "id": 2479,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "6477:5:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2461,
                                                                    "type": "uint256",
                                                                    "value": "amortizationUnitType"
                                                                },
                                                                "id": 2480,
                                                                "name": "Identifier",
                                                                "src": "6483:20:8"
                                                            }
                                                        ],
                                                        "id": 2481,
                                                        "name": "FunctionCall",
                                                        "src": "6477:27:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint120",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_bytes32",
                                                                            "typeString": "bytes32"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint120)",
                                                                    "value": "uint120"
                                                                },
                                                                "id": 2482,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "6518:7:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2471,
                                                                    "type": "bytes32",
                                                                    "value": "termLengthInAmortizationUnits"
                                                                },
                                                                "id": 2483,
                                                                "name": "Identifier",
                                                                "src": "6526:29:8"
                                                            }
                                                        ],
                                                        "id": 2484,
                                                        "name": "FunctionCall",
                                                        "src": "6518:38:8"
                                                    }
                                                ],
                                                "id": 2485,
                                                "name": "TupleExpression",
                                                "src": "6419:147:8"
                                            }
                                        ],
                                        "id": 2486,
                                        "name": "Return",
                                        "src": "6412:154:8"
                                    }
                                ],
                                "id": 2487,
                                "name": "Block",
                                "src": "5133:1440:8"
                            }
                        ],
                        "id": 2488,
                        "name": "FunctionDefinition",
                        "src": "4891:1682:8"
                    },
                    {
                        "attributes": {
                            "constant": true,
                            "implemented": true,
                            "isConstructor": false,
                            "modifiers": [
                                null
                            ],
                            "name": "getAmortizationUnitLengthInSeconds",
                            "payable": false,
                            "scope": 2547,
                            "stateMutability": "pure",
                            "superFunction": null,
                            "visibility": "public"
                        },
                        "children": [
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "amortizationUnitType",
                                            "scope": 2546,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint8",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint8",
                                                    "type": "uint8"
                                                },
                                                "id": 2489,
                                                "name": "ElementaryTypeName",
                                                "src": "6623:5:8"
                                            }
                                        ],
                                        "id": 2490,
                                        "name": "VariableDeclaration",
                                        "src": "6623:26:8"
                                    }
                                ],
                                "id": 2491,
                                "name": "ParameterList",
                                "src": "6622:28:8"
                            },
                            {
                                "children": [
                                    {
                                        "attributes": {
                                            "constant": false,
                                            "name": "_amortizationUnitLengthInBlocks",
                                            "scope": 2546,
                                            "stateVariable": false,
                                            "storageLocation": "default",
                                            "type": "uint256",
                                            "value": null,
                                            "visibility": "internal"
                                        },
                                        "children": [
                                            {
                                                "attributes": {
                                                    "name": "uint",
                                                    "type": "uint256"
                                                },
                                                "id": 2492,
                                                "name": "ElementaryTypeName",
                                                "src": "6696:4:8"
                                            }
                                        ],
                                        "id": 2493,
                                        "name": "VariableDeclaration",
                                        "src": "6696:36:8"
                                    }
                                ],
                                "id": 2494,
                                "name": "ParameterList",
                                "src": "6695:38:8"
                            },
                            {
                                "children": [
                                    {
                                        "children": [
                                            {
                                                "attributes": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint8",
                                                        "typeString": "uint8"
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "operator": "==",
                                                    "type": "bool"
                                                },
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "overloadedDeclarations": [
                                                                null
                                                            ],
                                                            "referencedDeclaration": 2490,
                                                            "type": "uint8",
                                                            "value": "amortizationUnitType"
                                                        },
                                                        "id": 2495,
                                                        "name": "Identifier",
                                                        "src": "6752:20:8"
                                                    },
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": true,
                                                            "isStructConstructorCall": false,
                                                            "lValueRequested": false,
                                                            "names": [
                                                                null
                                                            ],
                                                            "type": "uint8",
                                                            "type_conversion": true
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2246",
                                                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                        }
                                                                    ],
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "type": "type(uint8)",
                                                                    "value": "uint8"
                                                                },
                                                                "id": 2496,
                                                                "name": "ElementaryTypeNameExpression",
                                                                "src": "6776:5:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "member_name": "HOURS",
                                                                    "referencedDeclaration": null,
                                                                    "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2246,
                                                                            "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                            "value": "AmortizationUnitType"
                                                                        },
                                                                        "id": 2497,
                                                                        "name": "Identifier",
                                                                        "src": "6782:20:8"
                                                                    }
                                                                ],
                                                                "id": 2498,
                                                                "name": "MemberAccess",
                                                                "src": "6782:26:8"
                                                            }
                                                        ],
                                                        "id": 2499,
                                                        "name": "FunctionCall",
                                                        "src": "6776:33:8"
                                                    }
                                                ],
                                                "id": 2500,
                                                "name": "BinaryOperation",
                                                "src": "6752:57:8"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "functionReturnParameters": 2494
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2251,
                                                                    "type": "uint256",
                                                                    "value": "HOUR_LENGTH_IN_SECONDS"
                                                                },
                                                                "id": 2501,
                                                                "name": "Identifier",
                                                                "src": "6832:22:8"
                                                            }
                                                        ],
                                                        "id": 2502,
                                                        "name": "Return",
                                                        "src": "6825:29:8"
                                                    }
                                                ],
                                                "id": 2503,
                                                "name": "Block",
                                                "src": "6811:54:8"
                                            },
                                            {
                                                "children": [
                                                    {
                                                        "attributes": {
                                                            "argumentTypes": null,
                                                            "commonType": {
                                                                "typeIdentifier": "t_uint8",
                                                                "typeString": "uint8"
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "operator": "==",
                                                            "type": "bool"
                                                        },
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "overloadedDeclarations": [
                                                                        null
                                                                    ],
                                                                    "referencedDeclaration": 2490,
                                                                    "type": "uint8",
                                                                    "value": "amortizationUnitType"
                                                                },
                                                                "id": 2504,
                                                                "name": "Identifier",
                                                                "src": "6875:20:8"
                                                            },
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "isStructConstructorCall": false,
                                                                    "lValueRequested": false,
                                                                    "names": [
                                                                        null
                                                                    ],
                                                                    "type": "uint8",
                                                                    "type_conversion": true
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": [
                                                                                {
                                                                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$2246",
                                                                                    "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                }
                                                                            ],
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "type": "type(uint8)",
                                                                            "value": "uint8"
                                                                        },
                                                                        "id": 2505,
                                                                        "name": "ElementaryTypeNameExpression",
                                                                        "src": "6899:5:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "lValueRequested": false,
                                                                            "member_name": "DAYS",
                                                                            "referencedDeclaration": null,
                                                                            "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2246,
                                                                                    "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                    "value": "AmortizationUnitType"
                                                                                },
                                                                                "id": 2506,
                                                                                "name": "Identifier",
                                                                                "src": "6905:20:8"
                                                                            }
                                                                        ],
                                                                        "id": 2507,
                                                                        "name": "MemberAccess",
                                                                        "src": "6905:25:8"
                                                                    }
                                                                ],
                                                                "id": 2508,
                                                                "name": "FunctionCall",
                                                                "src": "6899:32:8"
                                                            }
                                                        ],
                                                        "id": 2509,
                                                        "name": "BinaryOperation",
                                                        "src": "6875:56:8"
                                                    },
                                                    {
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "functionReturnParameters": 2494
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2256,
                                                                            "type": "uint256",
                                                                            "value": "DAY_LENGTH_IN_SECONDS"
                                                                        },
                                                                        "id": 2510,
                                                                        "name": "Identifier",
                                                                        "src": "6954:21:8"
                                                                    }
                                                                ],
                                                                "id": 2511,
                                                                "name": "Return",
                                                                "src": "6947:28:8"
                                                            }
                                                        ],
                                                        "id": 2512,
                                                        "name": "Block",
                                                        "src": "6933:53:8"
                                                    },
                                                    {
                                                        "children": [
                                                            {
                                                                "attributes": {
                                                                    "argumentTypes": null,
                                                                    "commonType": {
                                                                        "typeIdentifier": "t_uint8",
                                                                        "typeString": "uint8"
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "operator": "==",
                                                                    "type": "bool"
                                                                },
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "overloadedDeclarations": [
                                                                                null
                                                                            ],
                                                                            "referencedDeclaration": 2490,
                                                                            "type": "uint8",
                                                                            "value": "amortizationUnitType"
                                                                        },
                                                                        "id": 2513,
                                                                        "name": "Identifier",
                                                                        "src": "6996:20:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": true,
                                                                            "isStructConstructorCall": false,
                                                                            "lValueRequested": false,
                                                                            "names": [
                                                                                null
                                                                            ],
                                                                            "type": "uint8",
                                                                            "type_conversion": true
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": [
                                                                                        {
                                                                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2246",
                                                                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                        }
                                                                                    ],
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "type": "type(uint8)",
                                                                                    "value": "uint8"
                                                                                },
                                                                                "id": 2514,
                                                                                "name": "ElementaryTypeNameExpression",
                                                                                "src": "7020:5:8"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "lValueRequested": false,
                                                                                    "member_name": "WEEKS",
                                                                                    "referencedDeclaration": null,
                                                                                    "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 2246,
                                                                                            "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                            "value": "AmortizationUnitType"
                                                                                        },
                                                                                        "id": 2515,
                                                                                        "name": "Identifier",
                                                                                        "src": "7026:20:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2516,
                                                                                "name": "MemberAccess",
                                                                                "src": "7026:26:8"
                                                                            }
                                                                        ],
                                                                        "id": 2517,
                                                                        "name": "FunctionCall",
                                                                        "src": "7020:33:8"
                                                                    }
                                                                ],
                                                                "id": 2518,
                                                                "name": "BinaryOperation",
                                                                "src": "6996:57:8"
                                                            },
                                                            {
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "functionReturnParameters": 2494
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2261,
                                                                                    "type": "uint256",
                                                                                    "value": "WEEK_LENGTH_IN_SECONDS"
                                                                                },
                                                                                "id": 2519,
                                                                                "name": "Identifier",
                                                                                "src": "7076:22:8"
                                                                            }
                                                                        ],
                                                                        "id": 2520,
                                                                        "name": "Return",
                                                                        "src": "7069:29:8"
                                                                    }
                                                                ],
                                                                "id": 2521,
                                                                "name": "Block",
                                                                "src": "7055:54:8"
                                                            },
                                                            {
                                                                "children": [
                                                                    {
                                                                        "attributes": {
                                                                            "argumentTypes": null,
                                                                            "commonType": {
                                                                                "typeIdentifier": "t_uint8",
                                                                                "typeString": "uint8"
                                                                            },
                                                                            "isConstant": false,
                                                                            "isLValue": false,
                                                                            "isPure": false,
                                                                            "lValueRequested": false,
                                                                            "operator": "==",
                                                                            "type": "bool"
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "overloadedDeclarations": [
                                                                                        null
                                                                                    ],
                                                                                    "referencedDeclaration": 2490,
                                                                                    "type": "uint8",
                                                                                    "value": "amortizationUnitType"
                                                                                },
                                                                                "id": 2522,
                                                                                "name": "Identifier",
                                                                                "src": "7119:20:8"
                                                                            },
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": true,
                                                                                    "isStructConstructorCall": false,
                                                                                    "lValueRequested": false,
                                                                                    "names": [
                                                                                        null
                                                                                    ],
                                                                                    "type": "uint8",
                                                                                    "type_conversion": true
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": [
                                                                                                {
                                                                                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$2246",
                                                                                                    "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                                }
                                                                                            ],
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "type": "type(uint8)",
                                                                                            "value": "uint8"
                                                                                        },
                                                                                        "id": 2523,
                                                                                        "name": "ElementaryTypeNameExpression",
                                                                                        "src": "7143:5:8"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "lValueRequested": false,
                                                                                            "member_name": "MONTHS",
                                                                                            "referencedDeclaration": null,
                                                                                            "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 2246,
                                                                                                    "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                                    "value": "AmortizationUnitType"
                                                                                                },
                                                                                                "id": 2524,
                                                                                                "name": "Identifier",
                                                                                                "src": "7149:20:8"
                                                                                            }
                                                                                        ],
                                                                                        "id": 2525,
                                                                                        "name": "MemberAccess",
                                                                                        "src": "7149:27:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2526,
                                                                                "name": "FunctionCall",
                                                                                "src": "7143:34:8"
                                                                            }
                                                                        ],
                                                                        "id": 2527,
                                                                        "name": "BinaryOperation",
                                                                        "src": "7119:58:8"
                                                                    },
                                                                    {
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "functionReturnParameters": 2494
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 2266,
                                                                                            "type": "uint256",
                                                                                            "value": "MONTH_LENGTH_IN_SECONDS"
                                                                                        },
                                                                                        "id": 2528,
                                                                                        "name": "Identifier",
                                                                                        "src": "7200:23:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2529,
                                                                                "name": "Return",
                                                                                "src": "7193:30:8"
                                                                            }
                                                                        ],
                                                                        "id": 2530,
                                                                        "name": "Block",
                                                                        "src": "7179:55:8"
                                                                    },
                                                                    {
                                                                        "attributes": {
                                                                            "falseBody": null
                                                                        },
                                                                        "children": [
                                                                            {
                                                                                "attributes": {
                                                                                    "argumentTypes": null,
                                                                                    "commonType": {
                                                                                        "typeIdentifier": "t_uint8",
                                                                                        "typeString": "uint8"
                                                                                    },
                                                                                    "isConstant": false,
                                                                                    "isLValue": false,
                                                                                    "isPure": false,
                                                                                    "lValueRequested": false,
                                                                                    "operator": "==",
                                                                                    "type": "bool"
                                                                                },
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "overloadedDeclarations": [
                                                                                                null
                                                                                            ],
                                                                                            "referencedDeclaration": 2490,
                                                                                            "type": "uint8",
                                                                                            "value": "amortizationUnitType"
                                                                                        },
                                                                                        "id": 2531,
                                                                                        "name": "Identifier",
                                                                                        "src": "7244:20:8"
                                                                                    },
                                                                                    {
                                                                                        "attributes": {
                                                                                            "argumentTypes": null,
                                                                                            "isConstant": false,
                                                                                            "isLValue": false,
                                                                                            "isPure": true,
                                                                                            "isStructConstructorCall": false,
                                                                                            "lValueRequested": false,
                                                                                            "names": [
                                                                                                null
                                                                                            ],
                                                                                            "type": "uint8",
                                                                                            "type_conversion": true
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": [
                                                                                                        {
                                                                                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2246",
                                                                                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                                        }
                                                                                                    ],
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "lValueRequested": false,
                                                                                                    "type": "type(uint8)",
                                                                                                    "value": "uint8"
                                                                                                },
                                                                                                "id": 2532,
                                                                                                "name": "ElementaryTypeNameExpression",
                                                                                                "src": "7268:5:8"
                                                                                            },
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "isConstant": false,
                                                                                                    "isLValue": false,
                                                                                                    "isPure": true,
                                                                                                    "lValueRequested": false,
                                                                                                    "member_name": "YEARS",
                                                                                                    "referencedDeclaration": null,
                                                                                                    "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                                                                                },
                                                                                                "children": [
                                                                                                    {
                                                                                                        "attributes": {
                                                                                                            "argumentTypes": null,
                                                                                                            "overloadedDeclarations": [
                                                                                                                null
                                                                                                            ],
                                                                                                            "referencedDeclaration": 2246,
                                                                                                            "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                                                                            "value": "AmortizationUnitType"
                                                                                                        },
                                                                                                        "id": 2533,
                                                                                                        "name": "Identifier",
                                                                                                        "src": "7274:20:8"
                                                                                                    }
                                                                                                ],
                                                                                                "id": 2534,
                                                                                                "name": "MemberAccess",
                                                                                                "src": "7274:26:8"
                                                                                            }
                                                                                        ],
                                                                                        "id": 2535,
                                                                                        "name": "FunctionCall",
                                                                                        "src": "7268:33:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2536,
                                                                                "name": "BinaryOperation",
                                                                                "src": "7244:57:8"
                                                                            },
                                                                            {
                                                                                "children": [
                                                                                    {
                                                                                        "attributes": {
                                                                                            "functionReturnParameters": 2494
                                                                                        },
                                                                                        "children": [
                                                                                            {
                                                                                                "attributes": {
                                                                                                    "argumentTypes": null,
                                                                                                    "overloadedDeclarations": [
                                                                                                        null
                                                                                                    ],
                                                                                                    "referencedDeclaration": 2271,
                                                                                                    "type": "uint256",
                                                                                                    "value": "YEAR_LENGTH_IN_SECONDS"
                                                                                                },
                                                                                                "id": 2537,
                                                                                                "name": "Identifier",
                                                                                                "src": "7324:22:8"
                                                                                            }
                                                                                        ],
                                                                                        "id": 2538,
                                                                                        "name": "Return",
                                                                                        "src": "7317:29:8"
                                                                                    }
                                                                                ],
                                                                                "id": 2539,
                                                                                "name": "Block",
                                                                                "src": "7303:54:8"
                                                                            }
                                                                        ],
                                                                        "id": 2540,
                                                                        "name": "IfStatement",
                                                                        "src": "7240:117:8"
                                                                    }
                                                                ],
                                                                "id": 2541,
                                                                "name": "IfStatement",
                                                                "src": "7115:242:8"
                                                            }
                                                        ],
                                                        "id": 2542,
                                                        "name": "IfStatement",
                                                        "src": "6992:365:8"
                                                    }
                                                ],
                                                "id": 2543,
                                                "name": "IfStatement",
                                                "src": "6871:486:8"
                                            }
                                        ],
                                        "id": 2544,
                                        "name": "IfStatement",
                                        "src": "6748:609:8"
                                    }
                                ],
                                "id": 2545,
                                "name": "Block",
                                "src": "6738:625:8"
                            }
                        ],
                        "id": 2546,
                        "name": "FunctionDefinition",
                        "src": "6579:784:8"
                    }
                ],
                "id": 2547,
                "name": "ContractDefinition",
                "src": "728:6637:8"
            }
        ],
        "id": 2548,
        "name": "SourceUnit",
        "src": "584:6782:8"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "1.0.1",
    "updatedAt": "2018-02-16T01:40:39.050Z"
};
//# sourceMappingURL=SimpleInterestTermsContract.js.map