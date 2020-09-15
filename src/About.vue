<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-avatar size="30vh" class="ma-3 img">
            <v-img src="../public/headshot.jpg" />
          </v-avatar>
          <h1> About Me </h1>
          <p>NamFromNam is a collection of loose wires and duct tape masquerading as a website, built by an even looser collection of wires and coffee known as Nam Tran.</p>
          <p>In my spare time, I enjoy picking up new hobbies which include cooking, baking, brewing, programming, gardening, woodworking, and crocheting.</p>

          <h1> Contact Info </h1>
          <p> My email is highly classified, and is in no way, shape, or form <v-btn text href="mailto:nam@namfromnam.com">nam@namfromnam.com</v-btn></P>
          <p> I also have a GitHub <v-btn text href="https://github.com/nhtranngoc"><v-icon class="ma-1" >mdi-github</v-icon> @nhtranngoc</v-btn> where I put all my silly projects.</p>
        </v-col>
      </v-row>
    </v-container>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.v-image__image {
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 50%;
}

.v-btn {
  text-transform:none !important;
}
</style>