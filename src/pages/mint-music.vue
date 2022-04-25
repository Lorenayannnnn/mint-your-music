<template>
  <div id="mint_music">
    <el-steps :active="active" simple id="stepBar">
      <el-step title="Song Info" :icon="active === 0 ? 'el-icon-edit' : 'el-icon-circle-check'"/>
      <el-step title="Upload Files" :icon="active <= 1 ? 'el-icon-upload' : 'el-icon-circle-check'"/>
      <el-step title="Preview" icon="el-icon-view"/>
    </el-steps>
    <div id="body">

<!--      Song Information----------->
      <div id="songInfo" style="height: 100%" v-show="active === 0">
        <div id="songInfoInputs">
          <vs-input
            color="#6C63FF"
            label="Artist Name *"
            v-model="songInfo.artistName"
            placeholder="Lorena Yan"
          />
          <vs-input
            color="#6C63FF"
            label="Song Title *"
            v-model="songInfo.songTitle"
            placeholder="Hello World"
          />
          <vs-input
            color="#6C63FF"
            label="Description"
            v-model="songInfo.songDescription"
            placeholder="Relevant description of the song (e.g.:)"
          />
          <vs-input
            color="#6C63FF"
            label="Genre"
            v-model="songInfo.genre"
            placeholder="e.g.: Classical Music"
          />
          <vs-input
            color="#6C63FF"
            label="Instrument"
            v-model="songInfo.instrument"
            placeholder="e.g.: vocal, keyboard, flute..."
          />
        </div>
        <vs-button color="#6C63FF" class="prevBtn" @click="prev">
          <i class="el-icon-caret-left"/>
          Back
        </vs-button>
        <vs-button color="#6C63FF" class="nextBtn" @click="next">
          Upload Your Song
          <i class="el-icon-caret-right"/>
        </vs-button>
      </div>


<!--      Upload File-->

      <div id="uploadFile" v-show="active === 1">
        1. Upload Cover image<br/>
        2. Upload mp3 file
        <vs-button color="#6C63FF" class="prevBtn" @click="prev">
          <i class="el-icon-caret-left"/>
          Back
        </vs-button>
        <vs-button color="#6C63FF" class="nextBtn" @click="next">
          Preview
          <i class="el-icon-caret-right"/>
        </vs-button>
      </div>

<!--      preview-->

      <div id="preview" v-show="active === 2">
        <div>
          <el-radio v-model="useExistingContract" :label="true">Upload to an existing collection</el-radio>
          <el-radio v-model="useExistingContract" :label="false">Create new collection</el-radio>
        </div>
        <vs-button color="#6C63FF" class="prevBtn" @click="prev">
          <i class="el-icon-caret-left"/>
          Back
        </vs-button>
        <vs-button color="#6C63FF" class="nextBtn" @click="mint">
          Mint Your Song
          <i class="el-icon-star-on"/>
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mintMusic",
  data () {
    return {
      active: 0,
      songInfo: {
        artistName: "",
        songTitle: "",
        songDescription: "",
        genre: "",
        instrument: "",
        contractAddress: ""
      },
      file: {
        song: "",
        coverImage: ""
      },
      useExistingContract: true
    }
  },
  methods: {
    prev() {
      if (this.active === 0) {
        this.$router.push("/home");
      } else {
        this.active = this.active - 1;
      }
    },
    next() {
      if (this.active === 0) {
        if (this.songInfo.artistName.trim() === "") {
          this.$message.error("Please enter name of the artist");
        } else if (this.songInfo.songTitle.trim() === "") {
          this.$message.error("Please enter name/title of the song.");
        } else {
          this.active = this.active + 1;
        }
      } else {
        this.active = this.active + 1;
      }
    },
    mint() {

    }
  }
}
</script>

<style scoped>
#mint_music {
  margin: 1rem 7rem;
}
#body {
  background: #f4f7fa;
  height: 29rem;
  margin-top: 10px;
  border-radius: 5px;
  padding: 2rem 8rem;
  position: relative;
}
.prevBtn {
  position: absolute;
  left: 2rem;
  font-size: 1.2rem;
  bottom: 1rem;
  padding: 0 0.5rem;
}
.nextBtn {
  position: absolute;
  right: 2rem;
  font-size: 1.2rem;
  bottom: 1rem;
  padding: 0 0.5rem;
}
#songInfo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#songInfoInputs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 70%;
  width: 100%;
}
/deep/ .vs-input {
  background: #6c63ff1c;
  font-size: 1.3rem;
  width: 100%;
}
/deep/ .vs-input__label--label {
  font-size: 1.3rem;
}
/deep/ .vs-input__label {
  font-size: 1rem;
}
/deep/ .vs-input-parent {
  margin: 1.2rem 0;
  width: 100%;
}
</style>
