<template>

    <div class="minterPimraryContainer">
        <div class="minterSecondaryContainer">
            <v-row justify="center" class="mintButtonContainer">
                <v-col justify="center" align="center">
                    <v-btn color="red" class="white--text minterButton" justify="center">Begin Minting</v-btn>
                </v-col>
            </v-row>
        </div>
    </div>

</template>

<script>
export default {
    name: 'Minter',
}

</script>

<style>
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

@media screen and (max-width: 1600px) {
    .mintButtonContainer {
        padding-top: 250px;
        padding-left: 35%;
    }

    .minterPimraryContainer {
        height: 500px;
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
}

</style>