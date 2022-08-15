<template>
  <div class="minterPimraryContainer">
    <Alert class="alert" v-if="alert" :type="type"></Alert>
    <div class="minterSecondaryContainer">
      <v-row justify="center" class="mintButtonContainer">
        <v-col justify="center" align="center">
          <v-btn
            color="red"
            class="white--text minterButton"
            id="beginMintingButton"
            justify="center"
            @click="connectWallet"
            v-if="!alert"
            >Connect Wallet</v-btn
          >
          <div id="actualMintingContainer">
            <v-combobox
              dense
              filled
              hide-selected
              outlined
              solo
              class="comboBox"
              id="comboBox"
              :items="items"
              placeholder="1 NFT"
              item-value="value"
              item-text="text"
              @change="storeValue"
            >
            </v-combobox>
            <v-row justify="center" align="center">
              <v-btn id="actualMintingButton" @click="checkValue">Mint</v-btn>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
//import SmartContract from "../../contracts/SmartContract.sol";

import Alert from "./Alert.vue";

export default {
  name: "Minter",
  data() {
    return {
      items: [
        { text: "1 NFT", value: "1" },
        { text: "2 NFTs", value: "2" },
        { text: "3 NFTs", value: "3" },
        { text: "4 NFTs", value: "4" },
        { text: "5 NFTs", value: "5" },
      ],
      selectedValue: 0,
      alert: false,
      type: "",
      displayMinting: false,
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        let web3 = new Web3(window.ethereum);
        try {
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          const networkId = await window.ethereum.request({
            method: "net_version",
          });
          if (networkId == process.env.REACT_APP_NETWORKID) {
            const SmartContractObj = new web3.eth.Contract(
              //SmartContract.abi,
              process.env.REACT_APP_CONTRACT_ADDRESS
            );
            this.addWallet({
              thisaccount: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            });

            window.ethereum.on("accountsChanged", (accounts) => {
              this.addWallet(accounts[0]);
            });
            window.ethereum.on("chainChanged", () => {
              window.location.reload();
            });
          } else {
            this.showAlert("Change network to ETH mainnet.", 'warning');
          }
        } catch (err) {
          this.showAlert("Something went wrong.", 'error');
        }
      } else {
        this.showAlert("Install Metamask.", 'info');
      }

      // document.getElementById('beginMintingButton').style.display = "none";
      // document.getElementById('actualMintingContainer').style.display = "block";
      // document.getElementById('actualMintingButton').style.display = "block";
    },
    storeValue(e) {
      this.selectedValue = e.value;
    },
    checkValue() {
      this.selectedValue >= 1 && this.selectedValue <= 5
        ? console.log("time to mint")
        : console.log("invalid mint amount");
    },
    showAlert(message, type) {
      this.$store.commit("changeAlertMessage", message);
      this.type = type;
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
        return;
      }, 3000);
    },
    addWallet(object) {
      this.$store.commit("addWallet", object);
    },
  },
  mounted() {
    document.getElementById("actualMintingContainer").style.display = "none";
    document.getElementById("actualMintingButton").style.display = "none";
  },
  components: {
    Alert,
  },
};
</script>

<style>
.comboBox {
  width: 100px;
}

.minterPimraryContainer {
  padding-top: 100px;
  background-color: #fef1be;
  background-image: url("../assets/imgs/MINT.png");
  background-repeat: no-repeat;
  background-position: center;
  background-position-y: 100%;
  background-size: 100%;
  height: 700px;
  max-width: 60%;
  margin: 0 auto;
  aspect-ratio: auto;
}

.v-application--wrap {
  background-color: #fef1be;
}

.mintButtonContainer {
  padding-top: 400px;
  padding-left: 40%;
}

.actualMintingContainer {
  padding-top: 400px;
  padding-left: 40%;
}

.alert {
  width: 60%;
  margin: auto;
  padding-left: 30%;
  padding-top: 20%;
}

@media only screen and (max-width: 2500px) {
  .mintButtonContainer {
    padding-top: 800px;
    padding-left: 40%;
  }

  .minterPimraryContainer {
    height: 1200px;
  }

  .actualMintingContainer {
    padding-top: 800px;
    padding-left: 40%;
  }
}

@media only screen and (max-width: 2300px) {
  .mintButtonContainer {
    padding-top: 500px;
    padding-left: 30%;
  }

  .minterPimraryContainer {
    height: 800px;
  }

  .actualMintingContainer {
    padding-top: 500px;
    padding-left: 30%;
  }
}

@media screen and (max-width: 1600px) {
  .mintButtonContainer {
    padding-top: 250px;
    padding-left: 35%;
  }

  .minterPimraryContainer {
    height: 500px;
  }

  .actualMintingContainer {
    padding-top: 250px;
    padding-left: 35%;
  }
}

@media screen and (max-width: 1020px) {
  .mintButtonContainer {
    padding-top: 200px;
    padding-left: 35%;
  }

  .minterPimraryContainer {
    height: 400px;
  }

  .actualMintingContainer {
    padding-top: 200px;
    padding-left: 35%;
  }
}

@media screen and (max-width: 768px) {
  .mintButtonContainer {
    padding-top: 0px;
    padding-left: 0%;
  }

  .minterPimraryContainer {
    height: 300px;
    background-image: none;
  }

  .actualMintingContainer {
    padding-top: 0px;
    padding-left: 0%;
  }
}
</style>
