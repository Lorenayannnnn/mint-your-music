<template>
  <div id="afterMint">
    <h1>Congratulations! You just mint you new song!</h1>
    <div id="main">
      <subtitle class="subTitle">🤔 Something to know</subtitle>
      <p>Since this is only a school project for USC GE A World Music class,
        all the files are minted on the <b><u>rinkeby</u></b> chain, which is a chain for testing and thus will not require any transaction fee from you,
        but this also means that your song will not actually be publicized and be on sell on the blockchain.</p>
      <subtitle class="subTitle">🎶 What to do next?</subtitle>
      <p>
        As mentioned previously, all files are minted on a testing chain. A corresponding NFT market for testing is the testing net of <u><b>OpenSea</b></u>, which is one of the largest NFT markets.
        After you upload your cover image and song, you should be able to see your masterpiece on this open net! Follow the steps below to check out your work!
      </p>
      <b>1. Go to test net of OpenSea</b>: <my-nav-link to="https://testnets.opensea.io/"/><br/>
      <b>2. Try to go to your collection: Move your mouse to the profile icon and click on <b>My Collections</b></b><br/>
      <div class="myImage">
        <img src="../assets/images/opensea_1.png" alt=""/>
      </div>
      <b>3. Login to your wallet if needed: Make sure you have installed the Metamask plugin to your Chrome. If you haven't login, a window should pop up and ask you to login to your wallet.</b><br/>
      <div class="myImage">
        <img src="../assets/images/wallet_login.png" alt=""/>
      </div>
      <b>4. Click on the collection you uses / just created</b><br/>
      <div class="myImage">
        <img src="../assets/images/collection.png" alt=""/>
      </div>
      <b>5. Find the song you just minted (following is a testing song I uploaded & minted)</b><br/>
      <div class="myImage">
        <img src="../assets/images/find_song.png" alt=""/>
      </div>
      <b>6. Click on the song and checkout detailed information</b><br/>
      <div class="myImage">
        <img src="../assets/images/song_info_1.png" alt=""/>
      </div>
      <p>You can see the cover image and click on the play button to play your song</p>
      <div class="myImage">
        <img src="../assets/images/song_detail_2.png" alt=""/>
      </div>
      <p>Scroll down a little bit. You can also see the genre and instrument attributes of the song if you add the information when you are minting the song.</p>
    </div>
    <h1>Hope you enjoy <span id="mintMyMusicText">Mint My Music</span> 🥳</h1>
  </div>
</template>

<script>
import Subtitle from "../components/subtitle";
import MyNavLink from "../components/my-nav-link";
export default {
  name: "after-mint",
  components: {MyNavLink, Subtitle}
}
</script>

<style scoped>
#afterMint {
  margin: 0 5.7rem;
  min-width: 43rem;
  padding-bottom: 3rem;
}
#main {
  text-align: left;
}
.subTitle {
  font-size: 1.5rem;
}
b {
  font-family: fantasy;
}
img {
  width: auto;
  height: 100%;
  border-radius: 1rem;
}
.myImage {
  height: 25rem;
  width: auto;
  text-align: center;
  margin: 1rem 0 2rem;
}
#mintMyMusicText {
  font-family: "Square Peg", cursive;
  font-size: 2.5rem;
  color: #6C63FF;
}
</style>
