<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <Countdown :isDisabled="true"/>
          <h1 class="update">July 27th, 2020 Update</h1>
          <p>Fortunately, I have found an (unpaid) internship, which rendered this dramatic countdown clock quite redundant. But since it's unpaid, I am still very much in need of unemployment. Feel free to check out my resume and projects!</p>
          <v-divider class="ma-2"></v-divider>
          <h1>Hire Me</h1>
          <p>Hi! You might be wondering what this weirdly ominous clock is counting down to. </p>
          <p>As a matter of fact, it is counting down to September 1st, 2020 - and the only way to stop it is for me to get hired.</p>
          <h1>Why?</h1>
          <p>I recently graduated from Worcester Polytechnic Institute, on an F-1 Visa. I am on a post-grad work authorization program called Optional Practical Training (OPT), which grants me 90 days of unemployment. This countdown reflects that.</p>
          <p>Unfortunately, with COVID-19 and the current state of the job market, I have not had any luck finding a job. When the timer hits zero, I will have to be forced to leave the US, a country I spent the last 7 years living in.</p>
          <p>So I built this website. Partly because I like building things, and making nice looking simulation toys that I can spend hours looking at - but mostly because I want to get my name out there. In this highly competitive job market, a little bit of self-marketing can go a long way.</p>
          <h1>What I am capable of</h1>
          <p>I have a B.S. in Robotics Engineering and Electrical & Computer Engineering, and a minor in Computer Science. </p>
          <p>I have experience in software engineering, ranging from embedded systems to web development. I am proficient in C/C++, and have worked on a multitude of microcontrollers such as ARM, AVR, ESP8266/32, and MSP. I can program autonomous robots in Python, using Robotics Operating Systems (ROS). I can work on full-stack website - as a matter of fact, NamFromNam.com was built from scratch, using VueJS.</p>
          <p>I have experience in electrical engineering. I can design PCBs in EAGLE and KiCAD. I can program FPGAs in Verilog. I know my way around oscilloscopes and logic analyzers, and I am handy with a soldering iron.</p>
          <h1>What I am looking for</h1>
          <p>I am most interested in an entry-level position in the embedded systems industry. However, I would be delighted to work on any job that is relevant to my experience. I'm open to, and I love to learn new things.</p>
          <p>I am open for any full-time, part-time, internship, and contract positions coming my way. My work authorization requires a minimum of 20 hours of work per week, and it has to be relevant to my field of study.</p>
          <p>I am open to relocation, though I am quite partial to work in the Greater Boston Area.</p>
          <h1>Let's chat</h1>
          <p>If you are interested, feel free to drop me a line at <v-btn class="pa-0" text href="mailto:nam@namfromnam.com">nam@namfromnam.com</v-btn>. I'd be delighted.</p>
          <p>If you want to learn more about me, check out my <v-btn class="pa-0" text to="/about"> About</v-btn> page, or see my <v-btn class="pa-0" text to="/projects">Projects</v-btn>. </p>
          <p>I also have a <v-btn class="pa-0" text href="https://medium.com/@namtran_77878/">Medium</v-btn> page that I occasionally (read: once) post. </p>
          <p>If you want to see my skills and background in a neat looking one-page document, here is a copy of my <v-btn class="pa-0" text href="https://www.dropbox.com/s/9dgllxi4trqdd29/NamTran_Resume.pdf?dl=1">Resume</v-btn>.</p>
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Countdown from './components/Countdown.vue';

export default {
    components: {
        Countdown,
    }
}
</script>

<style scoped>
.v-btn {
  text-transform:none !important;
}

.update {
  color: var(--v-accent-base);
}

</style>