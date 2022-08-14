<template>

    <div class="minterPimraryContainer">
        <div class="minterSecondaryContainer">
            <v-row justify="center" class="mintButtonContainer">
                <v-col justify="center" align="center">
                    <v-btn color="red" class="white--text minterButton" id="beginMintingButton" justify="center"
                        @click="displayMinting()">Begin Minting</v-btn>
                    <div id="actualMintingContainer">
                        <v-combobox dense filled hide-selected outlined solo class="comboBox" :items="items"
                            placeholder="1 NFT">
                        </v-combobox>
                        <v-row justify="center" align="center">
                            <v-btn id="actualMintingButton">Mint</v-btn>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>

</template>

<script>

export default {
    name: 'Minter',
    data() {
        return {
            items: [
                '1 NFT',
                '2 NFTs',
                '3 NFTs',
                '4 NFTs',
                '5 NFTs',
            ],
        }
    },

    methods: {
        displayMinting() {
            document.getElementById('beginMintingButton').style.display = "none";
            document.getElementById('actualMintingContainer').style.display = "block";
            document.getElementById('actualMintingButton').style.display = "block";

        }
    },
    mounted() {
        document.getElementById('actualMintingContainer').style.display = "none";
        document.getElementById('actualMintingButton').style.display = "none";
    }
}

</script>

<style>
.comboBox {
    width: 100px;
}

.minterPimraryContainer {
    padding-top: 100px;
    background-color: #FEF1BE;
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
    background-color: #FEF1BE;
}

.mintButtonContainer {
    padding-top: 400px;
    padding-left: 40%;
}


.actualMintingContainer {
    padding-top: 400px;
    padding-left: 40%;
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