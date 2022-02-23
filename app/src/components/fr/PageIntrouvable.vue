<template>
    <div class="center errorDiv">
        <h1>Oups! Cette page n'existe pas...</h1><br>
        <h2>Cliquez <a href="javascript:window.history.back()">ici</a> pour revenir en arrière</h2>
    </div>
</template>

<script>
export default {
  name: 'PageIntrouvable',
  props: {
    title: String
  }
}
</script>

<style scoped>
  .center {
      text-align: center;
      margin: auto;
  }

  .errorDiv {
      padding: 20px;
  }

  a {
    color: white;
    text-decoration: underline;
  }
</style>