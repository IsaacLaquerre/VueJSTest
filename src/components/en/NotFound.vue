<template>
    <div class="center errorDiv">
        <h1>Whoops! Looks like this page doesn't exist...</h1><br>
        <h2>Click <a href="javascript:window.history.back()">here</a> to go back</h2>
    </div>
</template>

<script>
export default {
  name: 'NotFound',
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