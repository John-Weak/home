<template>
  <div class="h-screen text-white bg-black font-mono text-xs md:text-base">
    <pre class="term text-lg md:text-2xl flex" v-if="!hide">
      <div class="text-red-500">{{ machineName }}</div>
      <div class="text-yellow-400">:</div>
      <div class="text-blue-500">~</div>
      <div>$</div>
      <div>{{ firstText }}</div>
    </pre>
    <div class="pt-60 text-center term text-lg md:text-2xl" v-if="hide">Hello Friend</div>
    <div v-if="!hide" class="text-white bg-black overflow-y-auto overflow-x-hidden" v-for="(item, index) in spam"
      :key="index">
      <span v-html="item"></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Terminaloutput as output } from '👽/terminalLog';

let hide = ref(false);
let machineName = "johnweak@dev";
let firstText = ref("");
let text = "sh portfolio.sh";
let speed = 10;
let i = 0;
let spam = ref([""]);

function initWrite() {
  firstText.value += text.charAt(i);
  i++;
  setTimeout(() => {
    if (i < text.length) initWrite();
    else {
      i = 0;
      setTimeout(() => {
        spamMaster();
      }, 1000);
    }
  }, Math.floor(Math.random() * 220) + speed);
}

let count = 0;
let time = 1;
function spamMaster() {
  if (time % 2 == 0) {
    i++;
    spam.value.push(`[" + ${count / 1000} + "] " + ${output[i]} + "<br>`);
  }

  if (time == 3)
    for (let j = 0; j < 3; j++, i++)
      spam.value.push(`[" + ${count / 1000} + "] " + ${output[i]} + "<br>`);

  spam.value.push(`[" + ${count / 1000} + "] " + ${output[i]} + "<br>`);
  window.scrollTo(0, document.body.scrollHeight);
  i++;
  time = Math.floor(Math.random() * 4) + 1;
  count += time;

  setTimeout(() => {
    if (i < output.length - 2) spamMaster();
    else {
      spam.value.push(`<br>Hello friend`);
      spam.value.push(`<br>`);
      setTimeout(() => {
        hide.value = true;
        window.scrollTo(0, 0);
        spam.value = [];
      }, 700);
    }
  }, time);
}

onMounted(initWrite);
</script>

<style scoped>
.term:after {
  content: "_";
  opacity: 1;
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 0;
  }

  40% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
